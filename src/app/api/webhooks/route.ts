import { NextResponse } from "next/server";

import { createHmac } from "crypto";
import { revalidatePath } from "next/cache";
export async function POST(req: Request) {
  console.log("-------Webhook received-------");

  const jsonified = await req.json();

  const secret = process.env.HYGRAPH_WEBHOOK_SECRET as string;
  const signature = req.headers.get("gcms-signature") as string;

  const [rawSign, rawEnv, rawTimestamp] = signature.split(", ");

  const sign = rawSign.replace("sign=", "");
  const EnvironmentName = rawEnv.replace("env=", "");
  const Timestamp = parseInt(rawTimestamp.replace("t=", ""));

  let payload = JSON.stringify({
    Body: JSON.stringify(jsonified),
    EnvironmentName,
    TimeStamp: Timestamp,
  });

  const hash = createHmac("sha256", secret).update(payload).digest("base64");

  const typeName = jsonified.data.__typename;
  console.log(typeName);
  if (hash !== sign) {
    console.log("-------Webhook invalid-------");
    return new NextResponse("Unauthorized", { status: 401 });
  }
  console.log("-------Webhook verified-------");
  switch (typeName) {
    case "Project":
      console.log("-------Project webhook-------");
      revalidatePath("/projekte");
      revalidatePath("/");
      break;
    case "Document":
      console.log("-------Document webhook-------");

      break;
    case "Gallery":
      console.log("-------Gallery webhook-------");
      revalidatePath("/");
      break;
    case "BoardMember":
      console.log("-------BoardMember webhook-------");
      revalidatePath("/vorstand");
      break;
    case "Newsletter":
      console.log("-------Newsletter webhook-------");
      revalidatePath("/archiv");
      break;
    default:
      console.log("-------Unknown webhook-------");
      break;
  }
  console.log("-------Webhook revalidated-------");
  return NextResponse.json({ message: "Webhook received" });
}
