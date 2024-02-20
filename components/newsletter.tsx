import React from "react";
import { Separator } from "./ui/separator";

function Newsletter() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-hih-primary">
        Newsletter
      </h2>
      <p className="leading-loose text-center py-8">
        Wir verschicken monatlich einen Newsletter in dem wir über den aktuellen
        Stand unserer Projekte, Aktionen und Sitzungen bzw.
        Mitgliederversammlungen informieren. Du kannst dich jederzeit wieder
        abmelden.
      </p>
      <iframe
        src="https://te7f3b1bc.emailsys1a.net/248/462/7aab254095/subscribe/form.html?_g=1708449894"
        width="100%"
        height="550"
      ></iframe>
    </div>
  );
}

export default Newsletter;
