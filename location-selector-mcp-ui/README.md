# Farmer.chat Alert Summary Generator UI

A Next.js web application for generating comprehensive agricultural alerts for Bihar locations. Users select a district and village from cascading dropdowns, and the system automatically queries all MCP servers (Weather, Soil, Water, Elevation, Pests) to generate detailed alert summaries.

## Features

- 🗺️ **Cascading Location Selection**: Choose from 38 districts and 150+ villages in Bihar
- ⚡ **Automatic Alert Generation**: Alerts generated automatically upon location selection
- 🌤️ **Comprehensive Data**: Integrates Weather, Soil, Water, Elevation, and Pest information
- 📋 **Copy to Clipboard**: Easy sharing of alert summaries
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⏱️ **Real-time Updates**: Shows loading states and timestamps

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Backend**: FastAPI (Farmer.chat MCP Pipeline)

## Prerequisites

- Node.js 18+ and npm/yarn
- Access to Farmer.chat backend API

## Local Development Setup

1. **Clone and install dependencies**:
```bash
cd alert-ui
npm install
```

2. **Configure environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set your backend URL:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
# or your HuggingFace Space URL:
# NEXT_PUBLIC_BACKEND_URL=https://aakashdg-alert-summary-fc-backend.hf.space
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - `NEXT_PUBLIC_BACKEND_URL`: Your HuggingFace Space backend URL
5. Deploy!

### Option 2: Deploy to HuggingFace Spaces

1. Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV PORT=7860
ENV HOSTNAME="0.0.0.0"

EXPOSE 7860

CMD ["npm", "start"]
```

2. Create `README.md` in HF Space format:
```yaml
---
title: Farmer Chat Alert UI
emoji: 🌾
colorFrom: green
colorTo: blue
sdk: docker
app_port: 7860
---
```

3. Push to HuggingFace:
```bash
git push https://huggingface.co/spaces/YOUR_USERNAME/farmer-chat-alert-ui
```

### Option 3: Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variable: `NEXT_PUBLIC_BACKEND_URL`

## Project Structure

```
alert-ui/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page with location selector
├── public/                   # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── next.config.js            # Next.js config
└── README.md                 # This file
```

## Usage

1. **Select District**: Choose from 38 Bihar districts
2. **Select Village**: Choose from villages in selected district
3. **View Alert**: Alert automatically generates and displays
4. **Copy**: Use the copy button to share the alert summary

## API Integration

The UI communicates with the Farmer.chat backend via these endpoints:

- `GET /locations` - Fetches all districts and villages
- `POST /generate-alert` - Generates alert for selected location
  ```json
  {
    "location_name": "Patna",
    "district": "Patna"
  }
  ```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BACKEND_URL` | Farmer.chat backend API URL | `https://your-backend.hf.space` |

## Key Features Explained

### Cascading Dropdowns
- District selection populates village dropdown
- Villages filtered by selected district
- Reset on district change

### Automatic Alert Generation
- Triggers on village selection
- No manual "Generate" button needed
- Shows loading state during processing

### Comprehensive Alert Display
- Formatted text display
- Timestamp with timezone
- Coordinate information
- MCP server status indicators

### Error Handling
- Connection errors
- Location not found
- Backend processing errors
- User-friendly error messages

## Troubleshooting

**Backend connection failed**:
- Verify `NEXT_PUBLIC_BACKEND_URL` is correct
- Check backend is running and accessible
- Ensure CORS is enabled on backend

**Dropdowns not populating**:
- Check browser console for errors
- Verify `/locations` endpoint returns data
- Check network tab in browser DevTools

**Alert not generating**:
- Verify location exists in backend database
- Check `/generate-alert` endpoint logs
- Ensure all MCP servers are operational

## Development Notes

- Built with Next.js 14 App Router
- Uses TypeScript for type safety
- Tailwind CSS for responsive design
- Axios for API requests
- Real-time loading states
- Client-side rendering for interactivity

## Backend Requirements

The backend must provide:
1. `/locations` endpoint returning districts and villages
2. `/generate-alert` endpoint accepting location requests
3. CORS enabled for frontend origin
4. Proper error responses with detail messages

## Contributing

When making changes:
1. Test both desktop and mobile layouts
2. Verify error handling edge cases
3. Check loading states work correctly
4. Ensure accessibility standards
5. Update documentation as needed

## License

Part of the Farmer.chat project by Aakash.

## Support

For issues or questions:
- Check backend logs for API errors
- Verify environment variables are set
- Review browser console for frontend errors
- Ensure all dependencies are installed

---

Built with ❤️ for farmers in Bihar
