locals {
  hihf_contributors = [
    "phlipp1902",
  ]
}

resource "github_repository" "this" {
  name        = "hihf-ghana"
  description = "Website for Help is Here for Ghana e.V."
  visibility  = "private"
}



# Protect the main branch of the foo repository. Additionally, require that
# the "ci/travis" context to be passing and only allow the engineers team merge
# to the branch.

resource "github_branch_protection" "main" {
  repository_id = github_repository.this.node_id
  # also accepts repository name
  # repository_id  = github_repository.example.name
  pattern = "main"

  required_pull_request_reviews {
    required_approving_review_count = 1
    dismiss_stale_reviews           = true
  }


}

# Add a team to the organization
resource "github_team" "contributors" {
  name        = "hihf-contributors"
  description = "Contributors to the Help is Here for Ghana project"
  privacy     = "closed"
}

resource "github_team_membership" "hihf_contributors" {
  for_each = toset(local.hihf_contributors)
  team_id  = github_team.contributors.id
  username = each.key
  role     = "member"
}
