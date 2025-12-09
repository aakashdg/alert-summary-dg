# 🌾 Farmer.Chat Frontend

Minimal Next.js frontend for Farmer.Chat agricultural intelligence system.

---

## 📦 **File Structure**

```
farmer-chat-ui/
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.local
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
└── README.md
```

---

## 🚀 **Quick Start**

### **1. Install Dependencies**

```bash
npm install
```

### **2. Configure Backend URL**

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://aakashdg-alert-summary-fc-backend.hf.space
```

### **3. Run Development Server**

```bash
npm run dev
```

Open http://localhost:3000

---

## 🎯 **Features**

✅ Simple chat interface  
✅ Query input with example prompts  
✅ Real-time MCP server status  
✅ Farmer-friendly advice display  
✅ PDF export button  
✅ Raw data viewer (collapsible)  
✅ Responsive design  

---

## 🌐 **Deployment Options**

### **Option 1: Vercel (Recommended)**

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Add environment variable:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://aakashdg-alert-summary-fc-backend.hf.space`
6. Deploy!

**Your frontend will be live at:** `https://your-project.vercel.app`

---

### **Option 2: Hugging Face Spaces (Static)**

1. Create new Space with SDK = "static"
2. Run: `npm run build`
3. Upload contents of `out/` folder
4. Configure environment variables in Space settings

---

### **Option 3: Local Development**

Just run:
```bash
npm run dev
```

Access at: http://localhost:3000

---

## 🧪 **Testing**

### **Test Backend Connection:**

Open browser console after loading the app and check:
```javascript
fetch('https://aakashdg-alert-summary-fc-backend.hf.space/api/health')
  .then(r => r.json())
  .then(console.log)
```

Should return:
```json
{
  "status": "healthy",
  "openai_configured": true
}
```

---

## 🎨 **UI Overview**

### **Header**
- Title: "🌾 Farmer.Chat"
- Subtitle: "AI-Powered Agricultural Intelligence"

### **Query Section**
- Text input for questions
- Submit button
- Example query chips

### **Response Section**
- Farmer advice (main output)
- MCP pipeline details
- Server status indicators
- PDF export button
- Raw data viewer

---

## 🔧 **Customization**

### **Change Backend URL**

Edit `.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### **Change Location**

Edit `src/app/page.tsx` (lines 37-41):
```typescript
location: {
  name: 'Your Region Name',
  lat: 12.8716,  // Your latitude
  lon: 77.4946   // Your longitude
}
```

### **Modify Colors**

Edit `tailwind.config.js`:
```javascript
colors: {
  'farmer-green': '#2E7D32',  // Primary color
  'farmer-light': '#E8F5E9',  // Light background
}
```

---

## 📊 **How It Works**

```
User types query
    ↓
Frontend sends POST to /api/query
    ↓
Backend processes through MCP pipeline
    ↓
Returns JSON response
    ↓
Frontend displays advice + details
```

---

## 🐛 **Troubleshooting**

### **Error: "Failed to connect to backend"**

**Check:**
1. Backend URL is correct in `.env.local`
2. Backend is running (visit backend URL in browser)
3. CORS is enabled on backend (already configured)

### **Error: "API Error: 405"**

This means endpoint exists but method is wrong. /api/query requires POST, not GET.

### **Slow responses**

First query after cold start takes 8-10 seconds. Subsequent queries: 3-5 seconds.

---

## 📱 **Mobile Responsive**

The UI is fully responsive:
- Desktop: Full layout with side-by-side elements
- Tablet: Stacked layout
- Mobile: Single column, optimized for touch

---

## 🎉 **You're Done!**

Your frontend is ready to deploy. Share with your team!

**Demo flow:**
1. User types: "Should I plant rice today?"
2. Frontend calls backend
3. Backend runs MCP pipeline (5 servers)
4. Returns farmer advice
5. User can export as PDF

---

**Questions? Check the backend logs or frontend console for errors.**
