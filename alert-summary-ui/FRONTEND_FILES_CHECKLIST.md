# ✅ Frontend Files Checklist

## 📦 **Files to Download**

Download these files from the artifacts/outputs:

### **Root Files** (8 files)
- [ ] `package.json`
- [ ] `next.config.js`
- [ ] `tsconfig.json`
- [ ] `tailwind.config.js`
- [ ] `postcss.config.js`
- [ ] `.env.local.example` (rename to `.env.local`)
- [ ] `.gitignore` (create manually)
- [ ] `README.md` (FRONTEND_README.md)

### **src/app/ Files** (3 files)
- [ ] `src/app/layout.tsx` (from app-layout.tsx)
- [ ] `src/app/page.tsx` (from app-page.tsx)
- [ ] `src/app/globals.css` (from app-globals.css)

---

## 📁 **Folder Structure to Create**

```
farmer-chat-ui/
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.local
├── .gitignore
├── README.md
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx
        └── globals.css
```

---

## 🔧 **.env.local Content**

Create this file with:
```
NEXT_PUBLIC_API_URL=https://aakashdg-alert-summary-fc-backend.hf.space
```

---

## 📝 **.gitignore Content**

Create this file with:
```
node_modules
.next
out
.env*.local
*.log
.DS_Store
.vercel
```

---

## ⚡ **Quick Commands**

After organizing files:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## ✅ **Verification**

After running `npm run dev`:

1. Open http://localhost:3000
2. Should see Farmer.Chat interface
3. Type a query and submit
4. Should get response from backend

---

## 📥 **Download Links**

All files are available in outputs folder:
- package.json
- next.config.js
- tsconfig.json
- tailwind.config.js
- postcss.config.js
- env.local.example
- app-layout.tsx → rename to src/app/layout.tsx
- app-page.tsx → rename to src/app/page.tsx
- app-globals.css → rename to src/app/globals.css

---

**Total files: 11**  
**Estimated setup time: 10 minutes**
