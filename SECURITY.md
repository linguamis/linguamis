# Security Policy

## 🛡️ Supported Versions

As Linguamis is a live web application, we prioritize security for the current deployment.

| Version | Status | Description |
| :--- | :--- | :--- |
| **Live Site** | :white_check_mark: **Supported** | The current version deployed to [linguamis.com](https://linguamis.com) |
| **Main Branch** | :white_check_mark: **Supported** | The latest code in the `main` branch on GitHub |
| Older Deployments | :x: Unsupported | Previous commits or cached versions |

---

## 🐛 Reporting a Vulnerability

We take security seriously. If you discover a vulnerability in Linguamis, please follow these steps to report it responsibly.

### How to Report
Please **do not** open a public GitHub issue for sensitive security vulnerabilities (e.g., API key leaks, XSS flaws). Publicly disclosing a vulnerability can put our users at risk before we have a chance to fix it.

Instead, please send a detailed report to:  
📧 **[Insert Your Email Here]** *Subject: Security Vulnerability - Linguamis*

**Please include:**
1.  **Description:** A clear summary of the vulnerability.
2.  **Steps to Reproduce:** How can we trigger the issue? (Screenshots or code snippets are helpful).
3.  **Impact:** What could an attacker do with this vulnerability?

### Response Timeline
I am a student developer, but I aim to be responsive:
* **Acknowledgment:** Within 48 hours.
* **Assessment:** Within 5 days.
* **Fix:** Timeline depends on severity, but critical issues (like API exposure) are prioritized immediately.

---

## 🔒 Security Scope

### In Scope (What we want to know about)
* **API Key Exposure:** Any method that reveals the Google Gemini API key or other secrets to the client-side browser.
* **Proxy Bypass:** Methods to use the Netlify proxy (`gemini-proxy.js`) for purposes other than the intended chatbot interactions.
* **XSS (Cross-Site Scripting):** Vulnerabilities allowing injection of malicious scripts into the chat or learning inputs.

### Out of Scope (What we generally accept as risk)
* **AI Hallucinations:** Incorrect or nonsensical answers provided by the Google Gemini AI model.
* **Prompt Injection:** "Tricking" the chatbot into saying silly things (unless it reveals the System Prompt or Secrets).
* **DDoS Attacks:** Denial of service attacks against the hosting provider (GitHub Pages/Netlify).

---

## 📝 Policy

* **No Retaliation:** We will not take legal action against security researchers who report vulnerabilities ethically and responsibly.
* **Privacy:** We will respect your privacy and, if you wish, credit you for your discovery in our release notes once the fix is live.

Thank you for helping keep Linguamis safe for language learners worldwide! 🌍
