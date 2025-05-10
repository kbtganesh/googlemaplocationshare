# 🔐 Git Auth Setup (Personal GitHub on Office Laptop)

## ✅ What I Did

- Used **HTTPS + Personal Access Token (PAT)** to push code to personal GitHub.
- Did not affect or modify my **office GitHub setup** (no SSH, no Keychain change).

---

## 🔑 First-Time Setup with Personal Access Token (PAT)

1. Generate a PAT token from:
   - GitHub → **Settings** → **Developer Settings** → **Personal Access Tokens** → **Tokens (Classic)** → **Generate new token**
   - Select scope: ✅ `repo`

2. Use the token in this command to set your remote URL:

```bash
git remote set-url origin https://<username>:<token>@github.com/<username>/<repo-name>.git
```

**Example**:
```bash
git remote set-url origin https://kbtganesh:ghp_abcdef1234567890@github.com/kbtganesh/googlemaplocationshare.git
```

3. Push your code:
```bash
git push --set-upstream origin main
```

---

## 🧼 Clean Up (Optional)

After the first successful push, you can remove the token from remote for safety:

```bash
git remote set-url origin https://github.com/kbtganesh/googlemaplocationshare.git
```

Git will still use the saved token locally for future pushes.

---

## 🔁 If Token Is Lost or Expired

1. Go to: https://github.com/settings/tokens
2. Generate a new token (classic)
3. Use the new token in the same `set-url` command as above

---

## 🧠 Tip

This method is called **"Basic Authentication using a Personal Access Token over HTTPS."**  
It's safe, isolated to your current repo, and doesn't interfere with your office GitHub login.

