window.BENCHMARK_DATA = {
  "lastUpdate": 1773503851795,
  "repoUrl": "https://github.com/chrisdnz/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "248f859c4927beb3d670d1c4f9e611bc588deeb8",
          "message": "chore: update n8n to 2.11.4 (#634)\n\n* chore: update n8n to 2.11.4 and bump version to 2.36.2\n\n- Updated n8n from 2.10.3 to 2.11.4\n- Updated n8n-core from 2.10.1 to 2.11.1\n- Updated n8n-workflow from 2.10.1 to 2.11.1\n- Updated @n8n/n8n-nodes-langchain from 2.10.1 to 2.11.2\n- Updated @modelcontextprotocol/sdk from 1.20.1 to 1.27.1 (critical security fix)\n- Rebuilt node database with 1,239 nodes (809 core + 430 community preserved)\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix(ci): update MCP SDK version check from 1.20.1 to 1.27.1\n\nThe dependency-check workflow was hardcoded to expect MCP SDK 1.20.1,\ncausing CI failure after the intentional upgrade to 1.27.1.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix(tests): close existing connection before reconnecting in MCP protocol tests\n\nMCP SDK 1.27+ enforces single-connection per Server instance, throwing\n\"Already connected to a transport\" when connect() is called twice.\nUpdated test helper to close existing connections before reconnecting.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-14T14:04:43+01:00",
          "tree_id": "59010dff5cc8a57952b5e69a0cf8f9169d8bb44a",
          "url": "https://github.com/chrisdnz/n8n-mcp/commit/248f859c4927beb3d670d1c4f9e611bc588deeb8"
        },
        "date": 1773503851133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}