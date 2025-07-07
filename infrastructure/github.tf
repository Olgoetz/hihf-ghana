provider "github" {
  owner = "Olgoetz"
}

locals {
  hihf_contributors = [
    "phlipp1902",
  ]
}

resource "github_repository" "this" {
  name        = "hihf-ghana"
  description = "Website for Help is Here for Ghana e.V."
  visibility  = "public"
}



# Protect the main branch of the foo repository. Additionally, require that
# the "ci/travis" context to be passing and only allow the engineers team merge
# to the branch.

resource "github_branch_protection" "main" {
  repository_id = github_repository.this.node_id
  # also accepts repository name
  # repository_id  = github_repository.example.name
  pattern        = "main"
  enforce_admins = true

  required_pull_request_reviews {
    required_approving_review_count = 1
    dismiss_stale_reviews           = true
  }


}

# Add a collaborator to a repository
resource "github_repository_collaborator" "collaborator" {
  for_each   = toset(local.hihf_contributors)
  repository = github_repository.this.name
  username   = each.key
}
