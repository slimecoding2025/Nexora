import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

/* ── CONSTANTS ─────────────────────────────────────────────── */
const WA_NUMBER  = "21627870862";
const WA_LINK    = `https://wa.me/${WA_NUMBER}`;
const ADMIN_CRED = { u: "admin", p: "18062006@sy" };
const SECRET_SEQ = "nexora";
const DEVELOPER  = { name: "Med Salime Bousmina", role: "Full-Stack & AI Developer", avatar: "MSB" };

const STATUS_CFG = {
  completed:     { label:"Completed",   color:"#00ffc8", bg:"rgba(0,255,200,0.09)",   dot:"#00ffc8" },
  "in-progress": { label:"In Progress", color:"#ffd166", bg:"rgba(255,209,102,0.09)", dot:"#ffd166" },
  "not-started": { label:"Not Started", color:"#94a3b8", bg:"rgba(148,163,184,0.09)", dot:"#94a3b8" },
};

/* ── PROJECT PREVIEWS ──────────────────────────────────────── */
function PreviewFinTrackr() {
  const bars = [65,80,45,90,60,75,55,85,70,95,50,88];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (
    <div style={{width:"100%",height:"100%",background:"#0a0f1e",padding:"18px",fontFamily:"'DM Sans',sans-serif",overflow:"hidden"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <div style={{color:"#00ffc8",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1rem"}}>💹 FinTrackr</div>
        <div style={{display:"flex",gap:6}}>
          {["Dashboard","Analytics","Goals","Advisor"].map(t=>(
            <div key={t} style={{fontSize:"0.6rem",padding:"3px 8px",borderRadius:6,background:"rgba(255,255,255,0.05)",color:"#475569"}}>{t}</div>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:14}}>
        {[{l:"Balance",v:"$24,830",c:"#00ffc8"},{l:"Income",v:"$6,200",c:"#a78bfa"},{l:"Expenses",v:"$3,940",c:"#f87171"},{l:"Saved",v:"$2,260",c:"#fbbf24"}].map(c=>(
          <div key={c.l} style={{background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"10px 12px",border:"1px solid rgba(255,255,255,0.06)"}}>
            <div style={{fontSize:"0.55rem",color:"#334155",marginBottom:4}}>{c.l}</div>
            <div style={{fontSize:"0.9rem",fontWeight:800,color:c.c,fontFamily:"'Syne',sans-serif"}}>{c.v}</div>
          </div>
        ))}
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",borderRadius:10,padding:"12px",marginBottom:10,border:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{fontSize:"0.6rem",color:"#475569",marginBottom:10,fontFamily:"'Syne',sans-serif",fontWeight:700}}>SPENDING TREND — 2024</div>
        <div style={{display:"flex",alignItems:"flex-end",gap:4,height:60}}>
          {bars.map((h,i)=>(
            <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
              <div style={{width:"100%",height:`${h}%`,background:`linear-gradient(to top,#00ffc8,#a78bfa)`,borderRadius:"3px 3px 0 0",opacity:0.8}} />
              <div style={{fontSize:"0.4rem",color:"#1e293b"}}>{months[i]}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <div style={{background:"rgba(0,255,200,0.05)",borderRadius:10,padding:"10px",border:"1px solid rgba(0,255,200,0.1)"}}>
          <div style={{fontSize:"0.55rem",color:"#00ffc8",marginBottom:6,fontFamily:"'Syne',sans-serif",fontWeight:700}}>🤖 AI ADVISOR</div>
          <div style={{fontSize:"0.58rem",color:"#475569",lineHeight:1.6}}>Based on your habits, you could save an extra <span style={{color:"#00ffc8"}}>$380/mo</span> by cutting dining & subscriptions.</div>
        </div>
        <div style={{background:"rgba(255,255,255,0.03)",borderRadius:10,padding:"10px",border:"1px solid rgba(255,255,255,0.05)"}}>
          <div style={{fontSize:"0.55rem",color:"#a78bfa",marginBottom:6,fontFamily:"'Syne',sans-serif",fontWeight:700}}>TOP CATEGORIES</div>
          {[["Food & Dining","34%","#f87171"],["Transport","18%","#fbbf24"],["Subscriptions","14%","#a78bfa"]].map(([l,v,c])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
              <div style={{fontSize:"0.55rem",color:"#334155"}}>{l}</div>
              <div style={{fontSize:"0.55rem",color:c,fontWeight:700}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewMediChat() {
  const msgs = [
    {from:"user",text:"I need to book an appointment with a cardiologist"},
    {from:"bot",text:"I found 3 available cardiologists tomorrow. Dr. Mansour at 10:00 AM has the highest rating (4.9⭐). Shall I confirm this slot for you?"},
    {from:"user",text:"Yes, please confirm Dr. Mansour"},
    {from:"bot",text:"✅ Appointment confirmed! Dr. Mansour, Tuesday 10:00 AM — Room 204. I've sent a reminder to your phone and prepared your pre-visit checklist."},
  ];
  return (
    <div style={{width:"100%",height:"100%",background:"#040d18",display:"flex",flexDirection:"column",fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{padding:"14px 16px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"}}>🏥</div>
        <div>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.85rem",color:"#e2e8f0"}}>MediChat AI</div>
          <div style={{fontSize:"0.6rem",color:"#00ffc8"}}>● Online · 24/7 Support</div>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:6}}>
          {["AR","FR","EN"].map(l=><div key={l} style={{fontSize:"0.55rem",padding:"2px 7px",borderRadius:5,background:"rgba(255,255,255,0.05)",color:"#475569"}}>{l}</div>)}
        </div>
      </div>
      <div style={{flex:1,padding:"14px",display:"flex",flexDirection:"column",gap:10,overflowY:"auto"}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.from==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"80%",padding:"9px 12px",borderRadius:m.from==="user"?"14px 14px 3px 14px":"14px 14px 14px 3px",
              background:m.from==="user"?"linear-gradient(135deg,#00ffc8,#a78bfa)":"rgba(255,255,255,0.05)",
              color:m.from==="user"?"#03050e":"#94a3b8",fontSize:"0.65rem",lineHeight:1.6,
              border:m.from==="bot"?"1px solid rgba(255,255,255,0.07)":"none"}}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{padding:"10px 14px",borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",gap:8}}>
        <div style={{flex:1,background:"rgba(255,255,255,0.04)",borderRadius:20,padding:"8px 14px",fontSize:"0.65rem",color:"#1e293b",border:"1px solid rgba(255,255,255,0.07)"}}>Type a message…</div>
        <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.8rem"}}>↑</div>
      </div>
    </div>
  );
}

function PreviewDelivr() {
  const stops = [{x:30,y:65,done:true,label:"Picked up"},{x:50,y:45,done:true,label:"In transit"},{x:72,y:30,done:false,label:"Delivering"}];
  return (
    <div style={{width:"100%",height:"100%",background:"#0a0800",fontFamily:"'DM Sans',sans-serif",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#fbbf24",fontSize:"1rem"}}>🚚 DelivR</div>
        <div style={{fontSize:"0.6rem",padding:"4px 10px",borderRadius:20,background:"rgba(251,191,36,0.1)",border:"1px solid rgba(251,191,36,0.3)",color:"#fbbf24"}}>● LIVE</div>
      </div>
      <div style={{flex:1,position:"relative",background:"#0d0c00",margin:"0 14px",borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.05)"}}>
        {/* Map grid */}
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(251,191,36,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.04) 1px,transparent 1px)",backgroundSize:"20px 20px"}} />
        {/* Route line SVG */}
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
          <polyline points="30%,65% 50%,45% 72%,30%" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,3" fill="none" opacity="0.6" />
        </svg>
        {/* Stops */}
        {stops.map((s,i)=>(
          <div key={i} style={{position:"absolute",left:`${s.x}%`,top:`${s.y}%`,transform:"translate(-50%,-50%)"}}>
            <div style={{width:i===2?20:12,height:i===2?20:12,borderRadius:"50%",background:s.done?"#fbbf24":"rgba(251,191,36,0.2)",border:`2px solid #fbbf24`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:s.done?"0 0 12px #fbbf24":"none",fontSize:"0.5rem"}}>
              {i===2?"🚚":""}
            </div>
            <div style={{position:"absolute",top:"110%",left:"50%",transform:"translateX(-50%)",fontSize:"0.45rem",color:"#fbbf24",whiteSpace:"nowrap",background:"rgba(0,0,0,0.7)",padding:"1px 5px",borderRadius:4}}>{s.label}</div>
          </div>
        ))}
        <div style={{position:"absolute",bottom:10,right:10,fontSize:"0.5rem",color:"#fbbf24",opacity:0.5}}>Sfax • Tunis • Sousse</div>
      </div>
      <div style={{padding:"12px 16px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:4}}>
        {[{l:"ETA",v:"12 min",c:"#fbbf24"},{l:"Distance",v:"3.2 km",c:"#94a3b8"},{l:"Driver",v:"Amine R.",c:"#00ffc8"}].map(c=>(
          <div key={c.l} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:"8px",textAlign:"center",border:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{fontSize:"0.5rem",color:"#334155",marginBottom:3}}>{c.l}</div>
            <div style={{fontSize:"0.75rem",fontWeight:700,color:c.c,fontFamily:"'Syne',sans-serif"}}>{c.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewEduFlow() {
  const courses = [
    {title:"Advanced React Patterns",students:1240,progress:78,color:"#a78bfa"},
    {title:"Python for AI & ML",students:3100,progress:45,color:"#00ffc8"},
    {title:"UI/UX Design Systems",students:890,progress:90,color:"#f87171"},
  ];
  return (
    <div style={{width:"100%",height:"100%",background:"#08041a",fontFamily:"'DM Sans',sans-serif",padding:"14px",overflow:"hidden"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#a78bfa",fontSize:"1rem"}}>🎓 EduFlow</div>
        <div style={{display:"flex",gap:6}}>
          <div style={{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#a78bfa,#00ffc8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:800,color:"#03050e",fontFamily:"'Syne',sans-serif"}}>M</div>
        </div>
      </div>
      <div style={{fontSize:"0.6rem",color:"#334155",marginBottom:10,fontFamily:"'Syne',sans-serif",fontWeight:700,letterSpacing:"0.1em"}}>YOUR COURSES</div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:12}}>
        {courses.map((c,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:10,padding:"10px 12px",border:"1px solid rgba(255,255,255,0.05)"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
              <div style={{fontSize:"0.65rem",color:"#94a3b8",fontWeight:600}}>{c.title}</div>
              <div style={{fontSize:"0.55rem",color:c.color}}>{c.progress}%</div>
            </div>
            <div style={{height:3,background:"rgba(255,255,255,0.06)",borderRadius:2}}>
              <div style={{width:`${c.progress}%`,height:"100%",background:c.color,borderRadius:2,boxShadow:`0 0 6px ${c.color}`}} />
            </div>
            <div style={{fontSize:"0.5rem",color:"#1e293b",marginTop:4}}>{c.students.toLocaleString()} students enrolled</div>
          </div>
        ))}
      </div>
      <div style={{background:"rgba(167,139,250,0.06)",borderRadius:10,padding:"10px 12px",border:"1px solid rgba(167,139,250,0.15)"}}>
        <div style={{fontSize:"0.58rem",color:"#a78bfa",fontFamily:"'Syne',sans-serif",fontWeight:700,marginBottom:5}}>🤖 AI TUTOR — Live Q&A</div>
        <div style={{fontSize:"0.6rem",color:"#475569",lineHeight:1.6}}>
          <span style={{color:"#94a3b8"}}>Student:</span> "What's the difference between useCallback and useMemo?"<br/>
          <span style={{color:"#a78bfa"}}>AI:</span> "useCallback memoizes a function reference, useMemo memoizes a computed value…"
        </div>
      </div>
    </div>
  );
}

function PreviewStoreGenius() {
  const products = [
    {name:"Premium Sneakers",price:"$129",ai:"🔥 Trending",color:"#00ffc8"},
    {name:"Wireless Earbuds",price:"$89",ai:"💡 Bundle +case",color:"#a78bfa"},
    {name:"Smart Watch",price:"$299",ai:"⚡ Last 3 left",color:"#f87171"},
    {name:"Running Bag",price:"$59",ai:"✨ AI Pick",color:"#fbbf24"},
  ];
  return (
    <div style={{width:"100%",height:"100%",background:"#0a001a",fontFamily:"'DM Sans',sans-serif",overflow:"hidden"}}>
      <div style={{padding:"12px 14px",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#a78bfa",fontSize:"0.9rem"}}>🛒 StoreGenius</div>
        <div style={{fontSize:"0.55rem",padding:"3px 9px",borderRadius:20,background:"rgba(167,139,250,0.1)",border:"1px solid rgba(167,139,250,0.25)",color:"#a78bfa"}}>AI-Powered Store</div>
      </div>
      <div style={{padding:"10px 14px"}}>
        <div style={{fontSize:"0.58rem",color:"#334155",marginBottom:8,fontFamily:"'Syne',sans-serif",fontWeight:700,letterSpacing:"0.1em"}}>AI RECOMMENDATIONS FOR YOU</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
          {products.map((p,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:10,padding:"10px",border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{width:"100%",height:44,background:`linear-gradient(135deg,${p.color}15,rgba(255,255,255,0.02))`,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:7,fontSize:"1.2rem"}}>
                {["👟","🎧","⌚","🎒"][i]}
              </div>
              <div style={{fontSize:"0.6rem",color:"#94a3b8",marginBottom:2}}>{p.name}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:"0.68rem",fontWeight:800,color:"#e2e8f0",fontFamily:"'Syne',sans-serif"}}>{p.price}</div>
                <div style={{fontSize:"0.5rem",color:p.color}}>{p.ai}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"rgba(167,139,250,0.05)",borderRadius:9,padding:"9px 12px",border:"1px solid rgba(167,139,250,0.12)"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{fontSize:"0.58rem",color:"#a78bfa",fontFamily:"'Syne',sans-serif",fontWeight:700}}>📊 Competitor Monitor</div>
            <div style={{fontSize:"0.55rem",color:"#334155"}}>Updated 2m ago</div>
          </div>
          <div style={{fontSize:"0.58rem",color:"#475569",marginTop:5}}>Nike lowered Sneaker prices by <span style={{color:"#f87171"}}>-8%</span> · Your AI adjusted pricing automatically ✅</div>
        </div>
      </div>
    </div>
  );
}

function PreviewLegacyRescue() {
  const [phase, setPhase] = useState(0);
  useEffect(() => { const t = setInterval(() => setPhase(p => (p+1)%3), 2000); return () => clearInterval(t); }, []);
  const lines = [
    {c:"#f87171", t:"❌ BEFORE  —  spaghetti PHP monolith"},
    {c:"#334155", t:"<?php include('functions.php'); // 4000 lines"},
    {c:"#334155", t:"$q = mysql_query('SELECT * FROM users'); // SQL injection"},
    {c:"#334155", t:"echo $_GET['name']; // XSS vulnerability"},
    {c:"#1e293b", t:"// ... 80,000 more lines of this ..."},
    {c:"#475569", t:""},
    {c:"#00ffc8", t:"✅ AFTER  —  Clean Laravel + React API"},
    {c:"#a78bfa", t:"// UserController.php"},
    {c:"#94a3b8", t:"public function index(Request $req) {"},
    {c:"#94a3b8", t:"  return UserResource::collection("},
    {c:"#94a3b8", t:"    User::filter($req)->paginate(20)"},
    {c:"#94a3b8", t:"  );"},
    {c:"#94a3b8", t:"}"},
  ];
  const metrics = [["Load Time","11.2s → 0.8s","#00ffc8"],["Security","F → A+","#00ffc8"],["Coverage","0% → 94%","#a78bfa"],["Uptime","94% → 99.9%","#fbbf24"]];
  return (
    <div style={{width:"100%",height:"100%",background:"#060a06",fontFamily:"'DM Sans',sans-serif",overflow:"hidden",display:"flex",flexDirection:"column"}}>
      <div style={{padding:"10px 14px",borderBottom:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:8}}>
        <div style={{display:"flex",gap:5}}>{["#f87171","#fbbf24","#00ffc8"].map((c,i)=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:c}} />)}</div>
        <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:"#334155",fontSize:"0.68rem"}}>🛠️ LegacyRescue — Code Terminal</div>
      </div>
      <div style={{flex:1,padding:"10px 14px",overflow:"hidden"}}>
        {lines.map((l,i)=>(
          <div key={i} style={{fontSize:"0.58rem",color:l.c,lineHeight:1.8,fontFamily:"monospace",transition:"all 0.3s"}}>{l.t}</div>
        ))}
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"10px 14px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6}}>
        {metrics.map(([l,v,c])=>(
          <div key={l} style={{background:"rgba(255,255,255,0.025)",borderRadius:8,padding:"7px 8px",textAlign:"center"}}>
            <div style={{fontSize:"0.48rem",color:"#334155",marginBottom:3}}>{l}</div>
            <div style={{fontSize:"0.6rem",fontWeight:800,color:c,fontFamily:"'Syne',sans-serif"}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── PROJECTS DATA ──────────────────────────────────────────── */
const DEFAULT_PROJECTS = [
  {
    id:"p1", title:"FinTrackr", subtitle:"Smart Finance Dashboard", category:"AI / Web App", year:"2024", status:"completed",
    previewType:"browser", PreviewComponent: PreviewFinTrackr,
    desc:"A fully AI-powered personal finance SaaS platform. Users connect their bank accounts and the system automatically categorizes expenses, forecasts monthly budgets, and generates natural-language financial reports.",
    longDesc:"Built from scratch in 6 weeks. Features real-time chart dashboard, smart savings goals, GPT-4 financial advisor chatbot, Plaid bank integration, Stripe subscriptions, and multi-user accounts. The AI detects unusual spending and sends smart alerts before the user overspends.",
    tech:["Next.js","GPT-4","Plaid API","PostgreSQL","Chart.js","Stripe"],
    bg:"linear-gradient(135deg,#0a0a1a,#0d2137,#0a3d2e)", emoji:"💹",
    result:"Reduced users' unnecessary spending by 23% within first month.", client:"FinTech Startup — Remote",
  },
  {
    id:"p2", title:"MediChat", subtitle:"Hospital AI Assistant", category:"AI Chatbot", year:"2024", status:"completed",
    previewType:"browser", PreviewComponent: PreviewMediChat,
    desc:"An intelligent AI chatbot deployed for a private hospital network. Handles appointment booking, symptom pre-screening, doctor availability, prescription reminders, and patient follow-ups in Arabic, French, and English.",
    longDesc:"Fully integrated with the hospital's existing EHR system via REST API. Uses RAG (Retrieval-Augmented Generation) to answer medical FAQs from hospital documents. Multilingual support via i18n + OpenAI. Deployed on AWS with 99.9% uptime. HIPAA-compliant architecture.",
    tech:["OpenAI","LangChain","RAG","Node.js","MongoDB","Twilio","AWS"],
    bg:"linear-gradient(135deg,#04111f,#062a3a,#0a1f30)", emoji:"🏥",
    result:"68% reduction in front-desk calls. 12,000+ patient interactions/month.", client:"Private Hospital Network — Tunisia",
  },
  {
    id:"p3", title:"DelivR", subtitle:"Real-Time Delivery App", category:"Mobile App", year:"2024", status:"completed",
    previewType:"phone", PreviewComponent: PreviewDelivr,
    desc:"A cross-platform delivery management app for a regional logistics company. Real-time GPS tracking, automated route optimization, digital proof-of-delivery, and a merchant dashboard for order management.",
    longDesc:"Built with React Native for iOS and Android. Backend uses Node.js + Socket.io for real-time WebSocket connections. Google Maps API for live routing. Firebase for push notifications. Handles 3,000+ deliveries per day across 5 Tunisian cities with a 99.4% on-time rate.",
    tech:["React Native","Firebase","Google Maps","Node.js","Socket.io","Redux"],
    bg:"linear-gradient(135deg,#1a0a00,#3d1a00,#1a0d00)", emoji:"🚚",
    result:"Delivery time cut by 31%. Driver satisfaction rated 4.8/5.", client:"Logistics Company — Sfax, Tunisia",
  },
  {
    id:"p4", title:"EduFlow", subtitle:"AI E-Learning Platform", category:"Web App", year:"2023", status:"completed",
    previewType:"browser", PreviewComponent: PreviewEduFlow,
    desc:"A full-featured online learning platform built for a Tunisian EdTech startup. Includes video course hosting, AI-generated quizzes, progress tracking, certificate generation, instructor analytics, and a live AI Q&A tutor.",
    longDesc:"The AI tutor uses RAG over course transcripts to answer student questions in context. Instructors get real-time engagement analytics. Video processing with FFmpeg + AWS S3. Stripe for payments. Built in 10 weeks and launched with 4,200 active students on day one.",
    tech:["React","Next.js","FFmpeg","OpenAI","PostgreSQL","AWS S3","Stripe"],
    bg:"linear-gradient(135deg,#0f0029,#1a0050,#2d0070)", emoji:"🎓",
    result:"4,200 active students at launch. 91% course completion rate.", client:"EdTech Startup — Tunis, Tunisia",
  },
  {
    id:"p5", title:"StoreGenius", subtitle:"AI E-Commerce Suite", category:"AI / Web App", year:"2023", status:"completed",
    previewType:"browser", PreviewComponent: PreviewStoreGenius,
    desc:"An AI-powered plugin and dashboard for Shopify stores. Auto-generates SEO-optimized product descriptions, suggests upsell bundles, runs A/B tests, deploys a smart customer support chatbot, and monitors competitor prices.",
    longDesc:"Built as a Shopify App with Next.js frontend and Node.js backend. The competitor price monitor uses Puppeteer to scrape product pages and Redis for caching results. OpenAI for content generation and chatbot. The A/B test engine automatically picks winning variants after statistical significance is reached.",
    tech:["Next.js","OpenAI","Shopify API","Puppeteer","Redis","PostgreSQL"],
    bg:"linear-gradient(135deg,#1a0a1a,#2d0a3d,#1a0030)", emoji:"🛒",
    result:"Average 40% increase in conversion rate within 60 days.", client:"E-Commerce Agency — Remote",
  },
  {
    id:"p6", title:"LegacyRescue", subtitle:"Codebase Overhaul", category:"Code Fixing", year:"2023", status:"completed",
    previewType:"browser", PreviewComponent: PreviewLegacyRescue,
    desc:"Complete rescue and modernization of a 7-year-old PHP monolith for a real estate company. Refactored 80,000+ lines into a clean Laravel API + React frontend, fixed 200+ security vulnerabilities, zero data loss migration.",
    longDesc:"Zero-downtime migration strategy using a parallel-run approach over 3 months. Set up Docker containerization, Nginx, CI/CD pipelines, and 94% automated test coverage. PostgreSQL migration from MySQL with data validation at every step. Security audit resolved 214 critical issues.",
    tech:["Laravel","React","PostgreSQL","Docker","Redis","Nginx","PHPUnit"],
    bg:"linear-gradient(135deg,#1a0000,#3a0000,#1a0a00)", emoji:"🛠️",
    result:"Load time 11s → 0.8s. Security score F → A+. Zero downtime.", client:"Real Estate Company — Tunisia",
  },
];

const SERVICES = [
  { icon:"⬡", title:"Web Development",     desc:"Blazing-fast web apps, landing pages to complex platforms — engineered to convert.", tags:["React","Next.js","Node.js"], color:"#00ffc8" },
  { icon:"◈", title:"AI Chatbot Creation", desc:"Intelligent LLM-powered agents that automate, engage, and delight customers 24/7.",    tags:["GPT-4","LangChain","RAG"],    color:"#a78bfa" },
  { icon:"◎", title:"App Development",     desc:"Native and cross-platform mobile apps crafted for performance — iOS and Android.",     tags:["React Native","Flutter"],    color:"#f87171" },
  { icon:"⟁", title:"Code Fixing & Audit", desc:"Bug hunting, refactoring, and turning messy codebases into clean architecture.",       tags:["Debug","Refactor","Audit"],   color:"#fbbf24" },
];

const STATS = [
  { val:"120+", label:"Projects" }, { val:"98%", label:"Satisfaction" },
  { val:"4yr",  label:"Experience" }, { val:"30+", label:"Clients" },
];
const NAV_LINKS = ["Home","About","Services","Portfolio","Contact"];

/* ── CSS ───────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:#03050e;color:#e2e8f0;font-family:'DM Sans',sans-serif;overflow-x:hidden;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:#03050e;}::-webkit-scrollbar-thumb{background:linear-gradient(#00ffc8,#a78bfa);border-radius:2px;}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
@keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes spinSlowR{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
@keyframes pulseGlow{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.85)}}
@keyframes shimmer{0%{background-position:-300% 0}100%{background-position:300% 0}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes orbit{from{transform:rotate(0deg) translateX(90px) rotate(0deg)}to{transform:rotate(360deg) translateX(90px) rotate(-360deg)}}
@keyframes orbit2{from{transform:rotate(120deg) translateX(70px) rotate(-120deg)}to{transform:rotate(480deg) translateX(70px) rotate(-480deg)}}
@keyframes orbit3{from{transform:rotate(240deg) translateX(110px) rotate(-240deg)}to{transform:rotate(600deg) translateX(110px) rotate(-600deg)}}
@keyframes borderPulse{0%,100%{border-color:rgba(0,255,200,0.25)}50%{border-color:rgba(0,255,200,0.7)}}
@keyframes morphBg{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
@keyframes particleDrift{0%{transform:translateY(0);opacity:0.8}100%{transform:translateY(-110px) translateX(30px);opacity:0}}
@keyframes scanline{0%{top:-3%}100%{top:104%}}
@keyframes modalIn{from{opacity:0;transform:scale(0.93) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}
@keyframes slideInRight{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}

.glow-cyan{background:linear-gradient(135deg,#fff 0%,#00ffc8 45%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.glow-text{background:linear-gradient(90deg,#00ffc8,#a78bfa,#f87171,#00ffc8);background-size:300%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 5s linear infinite;}
.btn-neon{background:transparent;border:1px solid #00ffc8;color:#00ffc8;font-family:'Syne',sans-serif;font-weight:700;cursor:pointer;letter-spacing:0.06em;position:relative;overflow:hidden;transition:all 0.3s;}
.btn-neon::before{content:'';position:absolute;inset:0;background:#00ffc8;transform:translateX(-101%);transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);z-index:-1;}
.btn-neon:hover{color:#03050e;box-shadow:0 0 30px rgba(0,255,200,0.45);}
.btn-neon:hover::before{transform:translateX(0);}
.btn-solid{background:linear-gradient(135deg,#00ffc8,#a78bfa);border:none;color:#03050e;font-family:'Syne',sans-serif;font-weight:800;cursor:pointer;letter-spacing:0.04em;transition:all 0.3s;position:relative;overflow:hidden;}
.btn-solid:hover{transform:translateY(-2px);box-shadow:0 0 40px rgba(0,255,200,0.4);}
.nav-link{cursor:pointer;font-family:'Syne',sans-serif;font-weight:600;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;transition:color 0.3s;position:relative;padding:4px 0;}
.nav-link::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:#00ffc8;box-shadow:0 0 8px #00ffc8;transition:width 0.35s;}
.nav-link:hover,.nav-link.active{color:#e2e8f0;}
.nav-link:hover::after,.nav-link.active::after{width:100%;}
input,textarea,select{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);color:#e2e8f0;font-family:'DM Sans',sans-serif;font-size:0.9rem;border-radius:8px;width:100%;padding:12px 16px;transition:border-color 0.3s,box-shadow 0.3s;outline:none;}
input::placeholder,textarea::placeholder{color:#334155;}
input:focus,textarea:focus,select:focus{border-color:rgba(0,255,200,0.4);box-shadow:0 0 0 3px rgba(0,255,200,0.06);}
select option{background:#0a0f1e;}
.sbl{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:10px;cursor:pointer;font-family:'Syne',sans-serif;font-size:0.8rem;font-weight:600;letter-spacing:0.04em;transition:all 0.2s;color:#334155;border:none;background:none;width:100%;text-align:left;}
.sbl:hover{background:rgba(255,255,255,0.04);color:#94a3b8;}
.sbl.on{background:rgba(0,255,200,0.07);color:#00ffc8;border:1px solid rgba(0,255,200,0.15);}
.proj-card-wrap{cursor:pointer;transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.35s;}
.proj-card-wrap:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 24px 70px rgba(0,0,0,0.6),0 0 0 1px rgba(0,255,200,0.12);}
.badge-status{display:inline-flex;align-items:center;gap:5px;border-radius:20px;padding:3px 11px;font-size:0.68rem;font-family:'Syne',sans-serif;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;white-space:nowrap;}
.wa-float{position:fixed;bottom:28px;right:28px;z-index:9000;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(37,211,102,0.5);transition:transform 0.3s;animation:pulseGlow 2.5s infinite;}
.wa-float:hover{transform:scale(1.12);}
.dev-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#00ffc8,#a78bfa);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;color:#03050e;flex-shrink:0;box-shadow:0 0 20px rgba(0,255,200,0.3);}
@media(max-width:768px){.d-nav{display:none!important}.m-btn{display:flex!important}}
@media(max-width:900px){.ab-grid{grid-template-columns:1fr!important}}
@media(max-width:680px){.pj-grid{grid-template-columns:1fr!important}.pj-img{min-height:130px!important}.modal-body{flex-direction:column!important}.modal-preview{height:280px!important;min-height:280px!important}}
@media(max-width:600px){.adm-wrap{flex-direction:column!important}.adm-side{width:100%!important;flex-direction:row!important;overflow-x:auto;padding:8px!important;border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)!important}.sbl{white-space:nowrap;padding:8px 12px!important}}
`;

const LBL  = { display:"block", fontSize:"0.68rem", fontFamily:"'Syne',sans-serif", letterSpacing:"0.1em", color:"#334155", marginBottom:8, textTransform:"uppercase" };
const SBTN = { padding:"6px 14px", background:"transparent", border:"1px solid rgba(255,255,255,0.08)", borderRadius:8, color:"#475569", cursor:"pointer", fontSize:"0.73rem", fontFamily:"'Syne',sans-serif", transition:"all 0.2s" };

/* ── Helpers ───────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return [ref, v];
}
function Reveal({ children, delay=0, style={} }) {
  const [ref, v] = useReveal();
  return <div ref={ref} style={{ opacity:v?1:0, transform:v?"translateY(0)":"translateY(36px)", transition:`opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...style }}>{children}</div>;
}
function SBadge({ status }) {
  const c = STATUS_CFG[status] || STATUS_CFG["not-started"];
  return <span className="badge-status" style={{ background:c.bg, color:c.color, border:`1px solid ${c.color}33` }}><span style={{ width:5, height:5, borderRadius:"50%", background:c.dot, display:"block", boxShadow:`0 0 5px ${c.dot}` }} />{c.label}</span>;
}
function TiltCard({ children, style={}, className="" }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx=(e.clientX-r.left-r.width/2)/(r.width/2), dy=(e.clientY-r.top-r.height/2)/(r.height/2);
    el.style.transform=`perspective(800px) rotateY(${dx*10}deg) rotateX(${-dy*8}deg) translateZ(6px)`;
  }, []);
  const onLeave = useCallback(() => { const el=ref.current; if(!el) return; el.style.transform="perspective(800px) rotateY(0) rotateX(0) translateZ(0)"; }, []);
  return <div ref={ref} className={className} style={{ transition:"transform 0.08s ease", ...style }} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

/* ── THREE.JS Canvas ───────────────────────────────────────── */
function ThreeCanvas() {
  const mountRef = useRef(null);
  useEffect(() => {
    const mount = mountRef.current; if (!mount) return;
    const W=mount.clientWidth, H=mount.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    renderer.setSize(W, H); renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.setClearColor(0x000000, 0); mount.appendChild(renderer.domElement);
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(60, W/H, 0.1, 1000);
    camera.position.z = 50;
    const cnt=1800, pos=new Float32Array(cnt*3), col=new Float32Array(cnt*3);
    for (let i=0;i<cnt;i++) {
      pos[i*3]=(Math.random()-0.5)*200; pos[i*3+1]=(Math.random()-0.5)*200; pos[i*3+2]=(Math.random()-0.5)*100;
      const c=Math.random()>0.5?new THREE.Color("#00ffc8"):new THREE.Color("#a78bfa");
      col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
    }
    const geo=new THREE.BufferGeometry();
    geo.setAttribute("position",new THREE.BufferAttribute(pos,3));
    geo.setAttribute("color",new THREE.BufferAttribute(col,3));
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:0.4,vertexColors:true,transparent:true,opacity:0.7}));
    scene.add(pts);
    const ico=new THREE.Mesh(new THREE.IcosahedronGeometry(14,1),new THREE.MeshBasicMaterial({color:0x00ffc8,wireframe:true,transparent:true,opacity:0.07}));
    ico.position.set(28,0,-10); scene.add(ico);
    const tor=new THREE.Mesh(new THREE.TorusGeometry(10,3,16,60),new THREE.MeshBasicMaterial({color:0xa78bfa,wireframe:true,transparent:true,opacity:0.06}));
    tor.position.set(-30,10,-20); scene.add(tor);
    let mx=0,my=0;
    const onM=(e)=>{mx=(e.clientX/window.innerWidth-0.5)*2;my=(e.clientY/window.innerHeight-0.5)*2;};
    window.addEventListener("mousemove",onM);
    let frame;
    const animate=()=>{
      frame=requestAnimationFrame(animate);
      const t=Date.now()*0.001;
      pts.rotation.y=t*0.018; pts.rotation.x=t*0.008;
      ico.rotation.x=t*0.25; ico.rotation.y=t*0.18;
      tor.rotation.x=t*0.15; tor.rotation.y=t*0.22;
      camera.position.x+=(mx*8-camera.position.x)*0.04;
      camera.position.y+=(-my*6-camera.position.y)*0.04;
      camera.lookAt(scene.position); renderer.render(scene,camera);
    };
    animate();
    const onR=()=>{const W2=mount.clientWidth,H2=mount.clientHeight;camera.aspect=W2/H2;camera.updateProjectionMatrix();renderer.setSize(W2,H2);};
    window.addEventListener("resize",onR);
    return ()=>{ cancelAnimationFrame(frame); window.removeEventListener("mousemove",onM); window.removeEventListener("resize",onR); if(mount.contains(renderer.domElement))mount.removeChild(renderer.domElement); renderer.dispose(); };
  }, []);
  return <div ref={mountRef} style={{ position:"absolute", inset:0, zIndex:0 }} />;
}
function CSSParticles() {
  const ps = Array.from({length:14},(_,i)=>({id:i,size:Math.random()*4+2,x:Math.random()*100,delay:Math.random()*8,dur:Math.random()*6+5,color:i%3===0?"#00ffc8":i%3===1?"#a78bfa":"#f87171"}));
  return <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1}}>{ps.map(p=><div key={p.id} style={{position:"absolute",bottom:0,left:`${p.x}%`,width:p.size,height:p.size,borderRadius:"50%",background:p.color,boxShadow:`0 0 ${p.size*3}px ${p.color}`,opacity:0.6,animation:`particleDrift ${p.dur}s ${p.delay}s linear infinite`}} />)}</div>;
}

/* ── PROJECT MODAL ─────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const [tab, setTab] = useState("preview");
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);
  if (!project) return null;
  const PreviewComp = project.PreviewComponent;
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(3,5,14,0.92)", backdropFilter:"blur(16px)", display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <div onClick={e=>e.stopPropagation()} style={{ width:"100%", maxWidth:920, maxHeight:"92vh", background:"#080d1c", border:"1px solid rgba(255,255,255,0.08)", borderRadius:22, overflow:"hidden", display:"flex", flexDirection:"column", animation:"modalIn 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
        {/* Modal header */}
        <div style={{ padding:"18px 24px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexShrink:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:"1.8rem", filter:"drop-shadow(0 0 10px rgba(255,255,255,0.3))" }}>{project.emoji}</span>
            <div>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.2rem" }}>{project.title}</h2>
              <div style={{ fontSize:"0.72rem", color:"#334155", marginTop:2 }}>{project.category} · {project.year}</div>
            </div>
            <SBadge status={project.status} />
          </div>
          <button onClick={onClose} style={{ width:34, height:34, borderRadius:"50%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", color:"#475569", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(248,113,113,0.1)";e.currentTarget.style.color="#f87171";}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.color="#475569";}}>✕</button>
        </div>

        {/* Tab bar */}
        <div style={{ display:"flex", gap:4, padding:"10px 24px 0", borderBottom:"1px solid rgba(255,255,255,0.05)", flexShrink:0 }}>
          {[["preview","🖥 Live Preview"],["details","📋 Details"]].map(([v,l])=>(
            <button key={v} onClick={()=>setTab(v)} style={{ padding:"8px 18px", borderRadius:"8px 8px 0 0", border:"none", cursor:"pointer", fontFamily:"'Syne',sans-serif", fontSize:"0.78rem", fontWeight:600, transition:"all 0.2s",
              background:tab===v?"rgba(0,255,200,0.08)":"transparent", color:tab===v?"#00ffc8":"#334155",
              borderBottom:tab===v?"2px solid #00ffc8":"2px solid transparent" }}>{l}</button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex:1, overflow:"auto", minHeight:0 }}>
          {tab === "preview" && (
            <div style={{ padding:20, display:"flex", flexDirection:"column", gap:16, height:"100%" }}>
              {/* Browser / Phone Frame */}
              {project.previewType === "browser" ? (
                <div style={{ borderRadius:12, overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", flex:1, minHeight:320, display:"flex", flexDirection:"column" }}>
                  {/* Browser chrome */}
                  <div style={{ background:"#0d1120", padding:"8px 14px", display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
                    <div style={{ display:"flex", gap:5 }}>{["#f87171","#fbbf24","#00ffc8"].map((c,i)=><div key={i} style={{width:9,height:9,borderRadius:"50%",background:c}} />)}</div>
                    <div style={{ flex:1, background:"rgba(255,255,255,0.04)", borderRadius:6, padding:"4px 12px", fontSize:"0.62rem", color:"#1e293b", fontFamily:"monospace" }}>
                      https://nexora.dev/{project.title.toLowerCase().replace(/\s/g,"-")}
                    </div>
                    <div style={{ fontSize:"0.7rem", color:"#1e293b" }}>⟳</div>
                  </div>
                  <div style={{ flex:1, overflow:"hidden" }}>
                    {PreviewComp && <PreviewComp />}
                  </div>
                </div>
              ) : (
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flex:1 }}>
                  <div style={{ width:260, background:"#080c16", borderRadius:36, border:"6px solid rgba(255,255,255,0.08)", overflow:"hidden", boxShadow:"0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,200,0.08)", height:480 }}>
                    {/* Phone notch */}
                    <div style={{ height:28, background:"#06090f", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:50, height:6, background:"rgba(255,255,255,0.08)", borderRadius:10 }} />
                    </div>
                    <div style={{ height:416, overflow:"hidden" }}>
                      {PreviewComp && <PreviewComp />}
                    </div>
                    <div style={{ height:36, background:"#06090f", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:32, height:4, background:"rgba(255,255,255,0.1)", borderRadius:10 }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick stats bar */}
              <div style={{ background:"rgba(0,255,200,0.04)", border:"1px solid rgba(0,255,200,0.12)", borderRadius:12, padding:"12px 18px", display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ fontSize:"1rem" }}>📈</span>
                <span style={{ fontSize:"0.82rem", color:"#00ffc8", fontFamily:"'Syne',sans-serif", fontWeight:600 }}>{project.result}</span>
              </div>
            </div>
          )}

          {tab === "details" && (
            <div style={{ padding:24, animation:"fadeIn 0.3s ease", display:"flex", flexDirection:"column", gap:20 }}>
              {/* Client */}
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem" }}>🏢</div>
                <div>
                  <div style={{ fontSize:"0.65rem", color:"#334155", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Client</div>
                  <div style={{ fontSize:"0.88rem", color:"#94a3b8" }}>{project.client}</div>
                </div>
              </div>

              {/* Developer */}
              <div style={{ background:"rgba(0,255,200,0.04)", border:"1px solid rgba(0,255,200,0.12)", borderRadius:14, padding:"16px 18px", display:"flex", alignItems:"center", gap:14 }}>
                <div className="dev-avatar">{DEVELOPER.avatar}</div>
                <div>
                  <div style={{ fontSize:"0.65rem", color:"#00ffc8", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:3 }}>Lead Developer</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"#e2e8f0" }}>{DEVELOPER.name}</div>
                  <div style={{ fontSize:"0.78rem", color:"#475569", marginTop:2 }}>{DEVELOPER.role}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <div style={{ fontSize:"0.65rem", color:"#334155", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>Project Overview</div>
                <p style={{ color:"#475569", lineHeight:1.9, fontSize:"0.9rem" }}>{project.longDesc}</p>
              </div>

              {/* Tech stack */}
              <div>
                <div style={{ fontSize:"0.65rem", color:"#334155", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>Tech Stack</div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {(project.tech||[]).map(t=>(
                    <span key={t} style={{ padding:"6px 14px", borderRadius:20, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", color:"#94a3b8", fontSize:"0.8rem", fontFamily:"'Syne',sans-serif", fontWeight:600 }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div style={{ background:"rgba(0,255,200,0.04)", border:"1px solid rgba(0,255,200,0.15)", borderRadius:12, padding:"16px 18px" }}>
                <div style={{ fontSize:"0.65rem", color:"#00ffc8", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>📈 Results & Impact</div>
                <p style={{ color:"#00ffc8", fontSize:"0.9rem", fontWeight:500 }}>{project.result}</p>
              </div>

              {/* CTA */}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:9, padding:"13px 24px", borderRadius:12, background:"rgba(37,211,102,0.08)", border:"1px solid rgba(37,211,102,0.3)", color:"#25d366", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.88rem", textDecoration:"none", transition:"all 0.3s", alignSelf:"flex-start" }}
                onMouseEnter={e=>e.currentTarget.style.background="rgba(37,211,102,0.16)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(37,211,102,0.08)"}>
                💬 Request a similar project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ ROOT ══════════════════════════════════════════════════════════════ */
export default function App() {
  const [view, setView]           = useState("site");
  const [adminTab, setAdminTab]   = useState("dash");
  const [projects, setProjects]   = useState(DEFAULT_PROJECTS);
  const [messages, setMessages]   = useState([]);
  const [booting, setBooting]     = useState(true);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [form, setForm]           = useState({ name:"", email:"", service:"", msg:"" });
  const [sent, setSent]           = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const secretBuf = useRef("");

  useEffect(() => {
    (async () => {
      try { const r=await window.storage.get("nxr3_p"); if(r?.value) { const p=JSON.parse(r.value); setProjects(p.map((proj,i)=>({...DEFAULT_PROJECTS[i]||{}, ...proj, PreviewComponent:DEFAULT_PROJECTS.find(d=>d.id===proj.id)?.PreviewComponent}))); } } catch {}
      try { const r=await window.storage.get("nxr3_m"); if(r?.value) setMessages(JSON.parse(r.value)); } catch {}
      setBooting(false);
    })();
  }, []);

  useEffect(() => {
    const fn=(e)=>{ if(e.ctrlKey||e.altKey||e.metaKey) return; secretBuf.current=(secretBuf.current+e.key.toLowerCase()).slice(-SECRET_SEQ.length); if(secretBuf.current===SECRET_SEQ){secretBuf.current="";setView("login");} };
    window.addEventListener("keydown",fn); return ()=>window.removeEventListener("keydown",fn);
  }, []);

  useEffect(() => { const fn=()=>setScrolled(window.scrollY>50); window.addEventListener("scroll",fn); return ()=>window.removeEventListener("scroll",fn); }, []);

  useEffect(() => {
    if(view!=="site") return;
    const els=NAV_LINKS.map(n=>document.getElementById(n));
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActiveNav(e.target.id);}),{threshold:0.35});
    els.forEach(el=>el&&obs.observe(el)); return ()=>obs.disconnect();
  }, [view]);

  const saveProjects = async (d) => {
    const stripped = d.map(({PreviewComponent,...rest})=>rest);
    setProjects(d); try{await window.storage.set("nxr3_p",JSON.stringify(stripped));}catch{}
  };
  const saveMessages = async (d) => { setMessages(d); try{await window.storage.set("nxr3_m",JSON.stringify(d));}catch{} };
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setMenuOpen(false); };
  const handleContact = (e) => {
    e.preventDefault();
    const msg={...form,id:Date.now(),date:new Date().toLocaleDateString(),read:false};
    saveMessages([msg,...messages]); setSent(true); setForm({name:"",email:"",service:"",msg:""});
    setTimeout(()=>setSent(false),4000);
  };
  const login=(creds)=>{if(creds.u===ADMIN_CRED.u&&creds.p===ADMIN_CRED.p){setView("admin");setAdminTab("dash");return true;}return false;};
  const logout=()=>setView("site");

  if(booting) return(
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",background:"#03050e"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');@keyframes pulseGlow{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
      <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.2rem",color:"#00ffc8",letterSpacing:"0.2em",animation:"pulseGlow 1.2s infinite"}}>NEXORA.</div>
    </div>
  );

  const displayProjects = projects.map(p=>({...p,PreviewComponent:DEFAULT_PROJECTS.find(d=>d.id===p.id)?.PreviewComponent}));

  return (
    <>
      <style>{CSS}</style>
      {openProject && <ProjectModal project={openProject} onClose={()=>setOpenProject(null)} />}
      {view==="site" && <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-float" title="Chat on WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>}
      {view==="login" && <LoginPage onLogin={login} onBack={()=>setView("site")} />}
      {view==="admin" && <AdminPanel tab={adminTab} setTab={setAdminTab} projects={projects} messages={messages} saveProjects={saveProjects} saveMessages={saveMessages} onLogout={logout} />}
      {view==="site"  && <SiteView scrolled={scrolled} activeNav={activeNav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} form={form} setForm={setForm} sent={sent} handleContact={handleContact} projects={displayProjects} onProjectClick={setOpenProject} />}
    </>
  );
}

/* ── LOGIN ─────────────────────────────────────────────────── */
function LoginPage({onLogin,onBack}) {
  const [creds,setCreds]=useState({u:"",p:""}); const [err,setErr]=useState(""); const [loading,setLoading]=useState(false);
  const submit=async(e)=>{e.preventDefault();setLoading(true);setErr("");await new Promise(r=>setTimeout(r,700));if(!onLogin(creds))setErr("Invalid credentials.");setLoading(false);};
  return(
    <div style={{minHeight:"100vh",background:"#03050e",display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",overflow:"hidden"}}>
      <ThreeCanvas />
      <div style={{width:"100%",maxWidth:420,position:"relative",zIndex:10,animation:"fadeUp 0.6s ease"}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:"#334155",cursor:"pointer",fontFamily:"'Syne',sans-serif",fontSize:"0.78rem",marginBottom:28,display:"flex",alignItems:"center",gap:6,padding:0,transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color="#00ffc8"} onMouseLeave={e=>e.currentTarget.style.color="#334155"}>← Back</button>
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:22,padding:44,backdropFilter:"blur(20px)"}}>
          <div style={{textAlign:"center",marginBottom:32}}>
            <div style={{width:52,height:52,borderRadius:14,background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.3rem",color:"#03050e"}}>N</div>
            <h1 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.5rem",marginBottom:6}}>Admin Access</h1>
          </div>
          <form onSubmit={submit} style={{display:"flex",flexDirection:"column",gap:16}}>
            <div><label style={LBL}>Username</label><input placeholder="admin" value={creds.u} onChange={e=>setCreds(c=>({...c,u:e.target.value}))} required /></div>
            <div><label style={LBL}>Password</label><input type="password" placeholder="••••••••" value={creds.p} onChange={e=>setCreds(c=>({...c,p:e.target.value}))} required /></div>
            {err&&<div style={{background:"rgba(248,113,113,0.07)",border:"1px solid rgba(248,113,113,0.2)",borderRadius:8,padding:"10px 14px",color:"#f87171",fontSize:"0.8rem"}}>{err}</div>}
            <button type="submit" className="btn-solid" style={{padding:"14px",borderRadius:10,fontSize:"0.9rem",marginTop:4}} disabled={loading}>{loading?"Verifying…":"Sign In →"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ── ADMIN ─────────────────────────────────────────────────── */
function AdminPanel({tab,setTab,projects,messages,saveProjects,saveMessages,onLogout}) {
  const unread=messages.filter(m=>!m.read).length;
  const tabs=[{id:"dash",label:"Dashboard",icon:"◈"},{id:"projects",label:"Projects",icon:"⬡"},{id:"messages",label:"Messages",icon:"✉",badge:unread}];
  return(
    <div style={{minHeight:"100vh",background:"#03050e",display:"flex",flexDirection:"column"}}>
      <header style={{height:56,borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(3,5,14,0.96)",backdropFilter:"blur(20px)",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:7,background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"0.85rem",color:"#03050e"}}>N</div>
          <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.9rem"}}>NEXORA <span style={{color:"#1e293b"}}>Admin</span></span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{display:"flex",alignItems:"center",gap:8,background:"rgba(0,255,200,0.05)",border:"1px solid rgba(0,255,200,0.1)",borderRadius:30,padding:"5px 12px"}}>
            <div className="dev-avatar" style={{width:22,height:22,fontSize:"0.6rem"}}>{DEVELOPER.avatar}</div>
            <span style={{fontSize:"0.75rem",color:"#00ffc8",fontFamily:"'Syne',sans-serif",fontWeight:600}}>{DEVELOPER.name}</span>
          </div>
          <button className="btn-neon" style={{padding:"6px 16px",borderRadius:8,fontSize:"0.75rem"}} onClick={onLogout}>Logout</button>
        </div>
      </header>
      <div className="adm-wrap" style={{display:"flex",flex:1}}>
        <aside className="adm-side" style={{width:180,borderRight:"1px solid rgba(255,255,255,0.05)",padding:"16px 10px",display:"flex",flexDirection:"column",gap:3,flexShrink:0}}>
          {tabs.map(t=>(
            <button key={t.id} className={`sbl ${tab===t.id?"on":""}`} onClick={()=>setTab(t.id)}>
              <span style={{fontSize:"0.9rem"}}>{t.icon}</span>{t.label}
              {t.badge>0&&<span style={{marginLeft:"auto",background:"#f87171",color:"#fff",borderRadius:10,padding:"1px 6px",fontSize:"0.64rem",fontWeight:700}}>{t.badge}</span>}
            </button>
          ))}
        </aside>
        <main style={{flex:1,padding:"24px 22px",overflowY:"auto",minWidth:0}}>
          {tab==="dash"     && <AdminDash projects={projects} messages={messages} setTab={setTab} />}
          {tab==="projects" && <AdminProjects projects={projects} saveProjects={saveProjects} />}
          {tab==="messages" && <AdminMsgs messages={messages} saveMessages={saveMessages} />}
        </main>
      </div>
    </div>
  );
}

function AdminDash({projects,messages,setTab}) {
  const sc={completed:0,"in-progress":0,"not-started":0};
  projects.forEach(p=>{if(sc[p.status]!==undefined)sc[p.status]++;});
  const cards=[{label:"Total",val:projects.length,color:"#00ffc8",icon:"⬡"},{label:"Completed",val:sc.completed,color:"#00ffc8",icon:"✓"},{label:"In Progress",val:sc["in-progress"],color:"#ffd166",icon:"◎"},{label:"Unread",val:messages.filter(m=>!m.read).length,color:"#f87171",icon:"✉"}];
  return(
    <div style={{animation:"fadeIn 0.4s ease"}}>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:22}}>
        <div>
          <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.4rem"}}>Dashboard</h2>
          <p style={{color:"#1e293b",fontSize:"0.8rem",marginTop:3}}>Welcome back, {DEVELOPER.name}</p>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:12,marginBottom:28}}>
        {cards.map((c,i)=><div key={i} style={{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:13,padding:"20px 16px"}}><div style={{fontSize:"1.2rem",marginBottom:10,color:c.color}}>{c.icon}</div><div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.8rem",fontWeight:800,color:c.color}}>{c.val}</div><div style={{fontSize:"0.72rem",color:"#1e293b",marginTop:2}}>{c.label}</div></div>)}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {projects.map(p=>(
          <div key={p.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:11,padding:"11px 15px",flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:9}}><span style={{fontSize:"1rem"}}>{p.emoji}</span><div><div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.86rem"}}>{p.title}</div><div style={{fontSize:"0.7rem",color:"#1e293b"}}>{p.category}</div></div></div>
            <SBadge status={p.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminProjects({projects,saveProjects}) {
  const blank={title:"",category:"Web App",year:String(new Date().getFullYear()),status:"not-started",desc:"",tech:"",bg:"linear-gradient(135deg,#0f0c29,#302b63)",emoji:"🚀",longDesc:"",client:"",result:""};
  const [form,setForm]=useState(blank); const [editing,setEditing]=useState(null); const [showForm,setShowForm]=useState(false); const [filter,setFilter]=useState("all");
  const openNew=()=>{setForm(blank);setEditing(null);setShowForm(true);};
  const openEdit=(p)=>{setForm({...p,tech:Array.isArray(p.tech)?p.tech.join(", "):p.tech});setEditing(p.id);setShowForm(true);};
  const cancel=()=>{setShowForm(false);setEditing(null);};
  const save=()=>{
    const techArr=typeof form.tech==="string"?form.tech.split(",").map(t=>t.trim()).filter(Boolean):form.tech;
    const proj={...form,tech:techArr,PreviewComponent:DEFAULT_PROJECTS.find(d=>d.id===editing)?.PreviewComponent};
    saveProjects(editing?projects.map(p=>p.id===editing?{...proj,id:editing}:p):[{...proj,id:"p_"+Date.now()},...projects]);
    cancel();
  };
  const remove=(id)=>{if(window.confirm("Delete?"))saveProjects(projects.filter(p=>p.id!==id));};
  const changeStatus=(id,status)=>saveProjects(projects.map(p=>p.id===id?{...p,status}:p));
  const filtered=filter==="all"?projects:projects.filter(p=>p.status===filter);
  return(
    <div style={{animation:"fadeIn 0.4s ease"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20,flexWrap:"wrap",gap:10}}>
        <div><h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.4rem"}}>Projects</h2><p style={{color:"#1e293b",fontSize:"0.78rem",marginTop:2}}>{projects.length} total</p></div>
        <button className="btn-solid" style={{padding:"9px 20px",borderRadius:9,fontSize:"0.8rem"}} onClick={openNew}>+ New Project</button>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:18,flexWrap:"wrap"}}>
        {[["all","All"],["completed","Completed"],["in-progress","In Progress"],["not-started","Not Started"]].map(([v,l])=>(
          <button key={v} onClick={()=>setFilter(v)} style={{padding:"5px 13px",borderRadius:20,border:"1px solid",cursor:"pointer",fontFamily:"'Syne',sans-serif",fontSize:"0.7rem",fontWeight:600,transition:"all 0.2s",background:filter===v?"rgba(0,255,200,0.07)":"transparent",borderColor:filter===v?"rgba(0,255,200,0.35)":"rgba(255,255,255,0.07)",color:filter===v?"#00ffc8":"#1e293b"}}>{l}</button>
        ))}
      </div>
      {showForm&&(
        <div style={{background:"rgba(0,255,200,0.03)",border:"1px solid rgba(0,255,200,0.15)",borderRadius:13,padding:22,marginBottom:20}}>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.92rem",marginBottom:16}}>{editing?"Edit":"New Project"}</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
            <div><label style={LBL}>Title</label><input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="Project title" /></div>
            <div><label style={LBL}>Category</label><input value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))} placeholder="Web App" /></div>
            <div><label style={LBL}>Year</label><input value={form.year} onChange={e=>setForm(f=>({...f,year:e.target.value}))} placeholder="2024" /></div>
            <div><label style={LBL}>Emoji</label><input value={form.emoji} onChange={e=>setForm(f=>({...f,emoji:e.target.value}))} placeholder="🚀" /></div>
            <div><label style={LBL}>Client</label><input value={form.client||""} onChange={e=>setForm(f=>({...f,client:e.target.value}))} placeholder="Company — City" /></div>
            <div><label style={LBL}>Result</label><input value={form.result||""} onChange={e=>setForm(f=>({...f,result:e.target.value}))} placeholder="Key metric achieved" /></div>
            <div style={{gridColumn:"1/-1"}}><label style={LBL}>Status</label><select value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}><option value="not-started">Not Started</option><option value="in-progress">In Progress</option><option value="completed">Completed</option></select></div>
            <div style={{gridColumn:"1/-1"}}><label style={LBL}>Short Description</label><textarea rows={2} value={form.desc} onChange={e=>setForm(f=>({...f,desc:e.target.value}))} placeholder="Brief summary shown on card" /></div>
            <div style={{gridColumn:"1/-1"}}><label style={LBL}>Full Description (shown in modal)</label><textarea rows={3} value={form.longDesc||""} onChange={e=>setForm(f=>({...f,longDesc:e.target.value}))} placeholder="Detailed project description" /></div>
            <div style={{gridColumn:"1/-1"}}><label style={LBL}>Tech stack (comma-separated)</label><input value={form.tech} onChange={e=>setForm(f=>({...f,tech:e.target.value}))} placeholder="React, Node.js" /></div>
          </div>
          <div style={{display:"flex",gap:9}}><button className="btn-solid" style={{padding:"9px 20px",borderRadius:8,fontSize:"0.8rem"}} onClick={save}>{editing?"Save":"Add"}</button><button className="btn-neon" style={{padding:"9px 20px",borderRadius:8,fontSize:"0.8rem"}} onClick={cancel}>Cancel</button></div>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {filtered.length===0&&<div style={{textAlign:"center",color:"#0f172a",padding:"40px 0",fontFamily:"'Syne',sans-serif"}}>No projects</div>}
        {filtered.map(p=>(
          <div key={p.id} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:12,padding:"14px 16px"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5,flexWrap:"wrap"}}>
                  <span style={{fontSize:"1rem"}}>{p.emoji}</span>
                  <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.9rem"}}>{p.title}</span>
                  <SBadge status={p.status} />
                </div>
                <p style={{fontSize:"0.81rem",color:"#334155",lineHeight:1.7,marginBottom:8}}>{p.desc}</p>
                <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>{(Array.isArray(p.tech)?p.tech:[]).map(t=><span key={t} style={{fontSize:"0.63rem",padding:"2px 8px",borderRadius:20,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"#334155"}}>{t}</span>)}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-end"}}>
                <div style={{display:"flex",gap:5}}>
                  <button style={SBTN} onClick={()=>openEdit(p)} onMouseEnter={e=>{e.currentTarget.style.color="#00ffc8";e.currentTarget.style.borderColor="rgba(0,255,200,0.3)";}} onMouseLeave={e=>{e.currentTarget.style.color="#475569";e.currentTarget.style.borderColor="rgba(255,255,255,0.08)";}}>Edit</button>
                  <button style={{...SBTN,color:"#f87171",borderColor:"rgba(248,113,113,0.2)"}} onClick={()=>remove(p.id)} onMouseEnter={e=>{e.currentTarget.style.background="rgba(248,113,113,0.08)";}} onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}>Delete</button>
                </div>
                <select value={p.status} onChange={e=>changeStatus(p.id,e.target.value)} style={{padding:"4px 9px",fontSize:"0.68rem",borderRadius:7,width:"auto",cursor:"pointer"}}><option value="not-started">Not Started</option><option value="in-progress">In Progress</option><option value="completed">Completed</option></select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMsgs({messages,saveMessages}) {
  const [open,setOpen]=useState(null);
  const mark=(id,read)=>saveMessages(messages.map(m=>m.id===id?{...m,read}:m));
  const remove=(id)=>{if(window.confirm("Delete?"))saveMessages(messages.filter(m=>m.id!==id));};
  return(
    <div style={{animation:"fadeIn 0.4s ease"}}>
      <h2 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.4rem",marginBottom:4}}>Messages</h2>
      <p style={{color:"#1e293b",fontSize:"0.78rem",marginBottom:22}}>{messages.filter(m=>!m.read).length} unread · {messages.length} total</p>
      {messages.length===0&&<div style={{textAlign:"center",color:"#0f172a",padding:"56px 0",fontFamily:"'Syne',sans-serif"}}>No messages yet.</div>}
      <div style={{display:"flex",flexDirection:"column",gap:7}}>
        {messages.map(m=>(
          <div key={m.id} onClick={()=>{setOpen(open===m.id?null:m.id);if(!m.read)mark(m.id,true);}} style={{background:m.read?"rgba(255,255,255,0.015)":"rgba(0,255,200,0.04)",border:`1px solid ${m.read?"rgba(255,255,255,0.05)":"rgba(0,255,200,0.14)"}`,borderRadius:12,padding:"13px 16px",cursor:"pointer"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                {!m.read&&<span style={{width:6,height:6,borderRadius:"50%",background:"#00ffc8",boxShadow:"0 0 6px #00ffc8",display:"block"}} />}
                <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.86rem"}}>{m.name}</span>
                <span style={{color:"#1e293b",fontSize:"0.74rem"}}>{m.email}</span>
              </div>
              <div style={{display:"flex",gap:7}}>
                {m.service&&<span style={{fontSize:"0.66rem",color:"#334155",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:6,padding:"1px 7px"}}>{m.service}</span>}
                <span style={{fontSize:"0.68rem",color:"#0f172a"}}>{m.date}</span>
              </div>
            </div>
            {open===m.id&&(
              <div style={{marginTop:11,paddingTop:11,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
                <p style={{fontSize:"0.85rem",color:"#94a3b8",lineHeight:1.8,marginBottom:12}}>{m.msg||m.message}</p>
                <div style={{display:"flex",gap:7}}>
                  <button style={SBTN} onClick={e=>{e.stopPropagation();mark(m.id,!m.read);}}>{m.read?"Mark Unread":"Mark Read"}</button>
                  <button style={{...SBTN,color:"#f87171",borderColor:"rgba(248,113,113,0.2)"}} onClick={e=>{e.stopPropagation();remove(m.id);}}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SITE ───────────────────────────────────────────────────── */
function SiteView({scrolled,activeNav,menuOpen,setMenuOpen,scrollTo,form,setForm,sent,handleContact,projects,onProjectClick}) {
  return(
    <>
      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,padding:"0 5%",background:scrolled?"rgba(3,5,14,0.93)":"transparent",backdropFilter:scrolled?"blur(24px)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.05)":"none",transition:"all 0.4s",display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>scrollTo("Home")}>
          <div style={{width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"0.95rem",color:"#03050e",boxShadow:"0 0 20px rgba(0,255,200,0.3)"}}>N</div>
          <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1rem",letterSpacing:"0.06em"}}>NEXORA<span style={{color:"#00ffc8",textShadow:"0 0 10px #00ffc8"}}>.</span></span>
        </div>
        <div className="d-nav" style={{display:"flex",gap:32,alignItems:"center"}}>
          {NAV_LINKS.map(l=><span key={l} className={`nav-link ${activeNav===l?"active":""}`} onClick={()=>scrollTo(l)}>{l}</span>)}
          <button className="btn-solid" style={{padding:"9px 22px",borderRadius:9,fontSize:"0.8rem"}} onClick={()=>scrollTo("Contact")}>Get Started</button>
        </div>
        <button className="m-btn" onClick={()=>setMenuOpen(m=>!m)} style={{display:"none",background:"none",border:"none",cursor:"pointer",flexDirection:"column",gap:5,padding:8}}>
          {[0,1,2].map(i=><div key={i} style={{width:22,height:2,background:"#00ffc8",borderRadius:1,transition:"all 0.3s",boxShadow:"0 0 6px #00ffc8",transform:menuOpen&&i===0?"rotate(45deg) translate(5px,5px)":menuOpen&&i===1?"scaleX(0)":menuOpen&&i===2?"rotate(-45deg) translate(5px,-5px)":"none"}} />)}
        </button>
      </nav>
      {/* Mobile menu */}
      <div style={{position:"fixed",inset:0,background:"rgba(3,5,14,0.98)",zIndex:999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28,opacity:menuOpen?1:0,pointerEvents:menuOpen?"all":"none",transition:"opacity 0.3s"}}>
        {NAV_LINKS.map((l,i)=><span key={l} onClick={()=>scrollTo(l)} style={{fontFamily:"'Syne',sans-serif",fontSize:"1.7rem",fontWeight:800,cursor:"pointer",color:activeNav===l?"#00ffc8":"#475569",transition:`all 0.4s ease ${i*0.06}s`,transform:menuOpen?"translateY(0)":"translateY(24px)"}}>{l}</span>)}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{marginTop:12,display:"flex",alignItems:"center",gap:8,color:"#25d366",fontFamily:"'Syne',sans-serif",fontSize:"0.9rem",fontWeight:700,textDecoration:"none"}}>💬 WhatsApp Us</a>
      </div>

      {/* HOME */}
      <section id="Home" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"90px 5% 60px",position:"relative",overflow:"hidden"}}>
        <ThreeCanvas /><CSSParticles />
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(0,255,200,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,200,0.025) 1px,transparent 1px)",backgroundSize:"60px 60px",zIndex:1,pointerEvents:"none"}} />
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at center,transparent 40%,rgba(3,5,14,0.7) 100%)",zIndex:2,pointerEvents:"none"}} />
        <div style={{position:"absolute",top:"50%",right:"6%",transform:"translateY(-50%)",width:280,height:280,zIndex:3}}>
          <div style={{position:"absolute",inset:0,border:"1px solid rgba(0,255,200,0.1)",borderRadius:"50%",animation:"spinSlow 25s linear infinite"}} />
          <div style={{position:"absolute",inset:"20%",border:"1px dashed rgba(167,139,250,0.12)",borderRadius:"50%",animation:"spinSlowR 18s linear infinite"}} />
          <div style={{position:"absolute",top:"50%",left:"50%",width:10,height:10,borderRadius:"50%",background:"#00ffc8",boxShadow:"0 0 20px #00ffc8",transform:"translate(-50%,-50%)"}} />
          <div style={{position:"absolute",top:"50%",left:"50%",width:7,height:7,borderRadius:"50%",background:"#a78bfa",boxShadow:"0 0 12px #a78bfa",marginTop:-3.5,marginLeft:-3.5,animation:"orbit 6s linear infinite"}} />
          <div style={{position:"absolute",top:"50%",left:"50%",width:6,height:6,borderRadius:"50%",background:"#fbbf24",boxShadow:"0 0 10px #fbbf24",marginTop:-3,marginLeft:-3,animation:"orbit2 9s linear infinite"}} />
          <div style={{position:"absolute",top:"50%",left:"50%",width:5,height:5,borderRadius:"50%",background:"#f87171",boxShadow:"0 0 8px #f87171",marginTop:-2.5,marginLeft:-2.5,animation:"orbit3 12s linear infinite"}} />
        </div>
        <div style={{maxWidth:660,position:"relative",zIndex:5}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(0,255,200,0.06)",border:"1px solid rgba(0,255,200,0.18)",borderRadius:30,padding:"5px 14px",marginBottom:26,animation:"borderPulse 3s infinite"}}>
            <span style={{width:6,height:6,background:"#00ffc8",borderRadius:"50%",display:"block",boxShadow:"0 0 8px #00ffc8",animation:"pulseGlow 1.5s infinite"}} />
            <span style={{fontSize:"0.7rem",fontFamily:"'Syne',sans-serif",letterSpacing:"0.12em",color:"#00ffc8",textTransform:"uppercase"}}>Available for new projects</span>
          </div>
          <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2.4rem,5vw,4.8rem)",fontWeight:800,lineHeight:1.06,marginBottom:20}}>
            We Build<br /><span className="glow-text">Digital Products</span><br />That Dominate.
          </h1>
          <p style={{fontSize:"1rem",color:"#475569",lineHeight:1.9,maxWidth:490,marginBottom:32,fontWeight:300}}>
            A full-service agency crafting <strong style={{color:"#94a3b8",fontWeight:500}}>web apps, AI chatbots, mobile apps</strong>, and rescuing broken codebases — with obsessive precision.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:28}}>
            <button className="btn-solid" style={{padding:"13px 30px",borderRadius:10,fontSize:"0.9rem"}} onClick={()=>scrollTo("Services")}>Explore Services →</button>
            <button className="btn-neon" style={{padding:"13px 30px",borderRadius:10,fontSize:"0.9rem"}} onClick={()=>scrollTo("Portfolio")}>View Portfolio</button>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:7,padding:"13px 24px",borderRadius:10,background:"rgba(37,211,102,0.08)",border:"1px solid rgba(37,211,102,0.3)",color:"#25d366",fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.85rem",textDecoration:"none",transition:"all 0.3s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(37,211,102,0.15)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(37,211,102,0.08)"}>💬 WhatsApp</a>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18,paddingTop:32,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
            {STATS.map((s,i)=><div key={i} style={{animation:`fadeUp 0.8s ease ${0.2+i*0.1}s both`}}><div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.6rem",fontWeight:800,color:"#00ffc8",textShadow:"0 0 18px rgba(0,255,200,0.35)"}}>{s.val}</div><div style={{fontSize:"0.7rem",color:"#1e293b",marginTop:3}}>{s.label}</div></div>)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="About" style={{padding:"120px 5%",position:"relative"}}>
        <div style={{position:"absolute",top:"30%",right:0,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(167,139,250,0.05),transparent 70%)",filter:"blur(60px)",pointerEvents:"none"}} />
        <div style={{maxWidth:1080,margin:"0 auto"}}>
          <div className="ab-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
            <Reveal delay={0}>
              <div style={{position:"relative"}}>
                <TiltCard style={{background:"linear-gradient(135deg,#080d1c,#0d1628)",borderRadius:20,border:"1px solid rgba(255,255,255,0.06)",overflow:"hidden",position:"relative"}}>
                  <div style={{padding:"60px 40px",textAlign:"center"}}>
                    <div style={{fontSize:"5rem",animation:"floatY 5s ease-in-out infinite",display:"block",marginBottom:20}}>🧠</div>
                    <div style={{fontFamily:"'Syne',sans-serif",fontSize:"0.7rem",letterSpacing:"0.16em",color:"#1e293b",textTransform:"uppercase"}}>Built on intelligence</div>
                    <div style={{position:"absolute",left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,rgba(0,255,200,0.3),transparent)",animation:"scanline 4s linear infinite"}} />
                  </div>
                  <div style={{position:"absolute",top:16,left:16,width:36,height:36,borderTop:"2px solid #00ffc8",borderLeft:"2px solid #00ffc8",boxShadow:"inset 0 0 10px rgba(0,255,200,0.1)"}} />
                  <div style={{position:"absolute",bottom:16,right:16,width:36,height:36,borderBottom:"2px solid #a78bfa",borderRight:"2px solid #a78bfa"}} />
                </TiltCard>
                <div style={{position:"absolute",bottom:-20,right:-20,background:"linear-gradient(135deg,#00ffc8,#a78bfa)",borderRadius:14,padding:"14px 22px",color:"#03050e",fontFamily:"'Syne',sans-serif",fontWeight:800,boxShadow:"0 10px 40px rgba(0,255,200,0.3)"}}>
                  <div style={{fontSize:"1.5rem"}}>4+</div><div style={{fontSize:"0.7rem",fontWeight:600}}>Years of craft</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{fontSize:"0.7rem",fontFamily:"'Syne',sans-serif",letterSpacing:"0.16em",color:"#00ffc8",textTransform:"uppercase",marginBottom:14}}>Who We Are</p>
              <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,3vw,2.8rem)",fontWeight:800,lineHeight:1.12,marginBottom:22}}>A team obsessed with<br /><span className="glow-cyan">digital excellence.</span></h2>
              <p style={{color:"#475569",lineHeight:1.9,marginBottom:18,fontWeight:300}}>We're a boutique agency led by expert engineers, designers, and AI specialists who refuse to ship average work. Every line of code is purposeful. Every interface crafted to perform.</p>
              {/* Developer card */}
              <div style={{display:"flex",alignItems:"center",gap:14,background:"rgba(0,255,200,0.04)",border:"1px solid rgba(0,255,200,0.12)",borderRadius:14,padding:"16px 18px",marginBottom:24}}>
                <div className="dev-avatar">{DEVELOPER.avatar}</div>
                <div>
                  <div style={{fontSize:"0.65rem",color:"#00ffc8",fontFamily:"'Syne',sans-serif",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3}}>Lead Developer</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1rem",color:"#e2e8f0"}}>{DEVELOPER.name}</div>
                  <div style={{fontSize:"0.78rem",color:"#475569",marginTop:2}}>{DEVELOPER.role} · Nabeul, Tunisia</div>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                {["Full-stack engineering from concept to deploy","AI-native products on the latest models","Transparent process, on-time delivery","Post-launch support included"].map((item,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:17,height:17,borderRadius:"50%",background:"rgba(0,255,200,0.08)",border:"1px solid rgba(0,255,200,0.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#00ffc8",fontSize:"0.55rem",boxShadow:"0 0 8px rgba(0,255,200,0.2)"}}>✓</div>
                    <span style={{color:"#94a3b8",fontSize:"0.9rem"}}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="Services" style={{padding:"120px 5%",position:"relative"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle,rgba(167,139,250,0.04),transparent 60%)",pointerEvents:"none"}} />
        <div style={{maxWidth:1080,margin:"0 auto"}}>
          <Reveal><div style={{textAlign:"center",marginBottom:68}}><p style={{fontSize:"0.7rem",fontFamily:"'Syne',sans-serif",letterSpacing:"0.16em",color:"#00ffc8",textTransform:"uppercase",marginBottom:14}}>What We Do</p><h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:800}}>Services built for<br /><span className="glow-cyan">the modern web.</span></h2></div></Reveal>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:20}}>
            {SERVICES.map((s,i)=>(
              <Reveal key={i} delay={i*0.09}>
                <TiltCard style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:18,padding:"30px 24px",height:"100%",position:"relative",overflow:"hidden",cursor:"default"}}>
                  <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:`linear-gradient(90deg,transparent,${s.color},transparent)`,boxShadow:`0 0 12px ${s.color}`}} />
                  <div style={{position:"absolute",top:"-30%",left:"-10%",width:"120%",height:"120%",background:`radial-gradient(circle at 50% 0%,${s.color}07,transparent 60%)`,pointerEvents:"none"}} />
                  <div style={{fontSize:"1.8rem",marginBottom:20,color:s.color,display:"inline-block",textShadow:`0 0 18px ${s.color}`}}>{s.icon}</div>
                  <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:"1.05rem",fontWeight:700,marginBottom:12}}>{s.title}</h3>
                  <p style={{color:"#334155",fontSize:"0.84rem",lineHeight:1.8,marginBottom:20,fontWeight:300}}>{s.desc}</p>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{s.tags.map(t=><span key={t} style={{fontSize:"0.63rem",padding:"2px 9px",borderRadius:20,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",color:"#475569"}}>{t}</span>)}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="Portfolio" style={{padding:"120px 5%",position:"relative"}}>
        <div style={{position:"absolute",bottom:"10%",left:0,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,255,200,0.04),transparent 70%)",filter:"blur(60px)",pointerEvents:"none"}} />
        <div style={{maxWidth:1080,margin:"0 auto"}}>
          <Reveal>
            <div style={{marginBottom:52}}>
              <p style={{fontSize:"0.7rem",fontFamily:"'Syne',sans-serif",letterSpacing:"0.16em",color:"#00ffc8",textTransform:"uppercase",marginBottom:14}}>Our Work</p>
              <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:800}}>Selected<br /><span className="glow-cyan">projects.</span></h2>
              <p style={{color:"#334155",fontSize:"0.88rem",marginTop:12}}>Click any project to see a live preview and full details →</p>
            </div>
          </Reveal>
          <div style={{display:"flex",flexDirection:"column",gap:18}}>
            {projects.map((p,i)=>(
              <Reveal key={p.id} delay={i*0.07}>
                <div className="proj-card-wrap pj-grid" onClick={()=>onProjectClick(p)} style={{background:"rgba(255,255,255,0.015)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden",display:"grid",gridTemplateColumns:"220px 1fr",position:"relative"}}>
                  {/* Click hint */}
                  <div style={{position:"absolute",top:14,right:14,zIndex:3,fontSize:"0.65rem",color:"#00ffc8",background:"rgba(0,255,200,0.08)",border:"1px solid rgba(0,255,200,0.2)",borderRadius:20,padding:"3px 10px",fontFamily:"'Syne',sans-serif",fontWeight:600}}>👁 Click to preview</div>
                  <div className="pj-img" style={{background:p.bg,display:"flex",alignItems:"center",justifyContent:"center",minHeight:160,position:"relative",overflow:"hidden"}}>
                    <div style={{position:"absolute",inset:0,background:"rgba(3,5,14,0.2)"}} />
                    <span style={{fontSize:"3rem",position:"relative",zIndex:1,animation:"floatY 4s ease-in-out infinite",animationDelay:`${i*0.6}s`,filter:"drop-shadow(0 0 18px rgba(255,255,255,0.25))"}}>{p.emoji}</span>
                  </div>
                  <div style={{padding:"22px 26px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:7,flexWrap:"wrap"}}>
                      <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.05rem"}}>{p.title}</h3>
                      <SBadge status={p.status} />
                    </div>
                    <div style={{fontSize:"0.7rem",color:"#1e293b",marginBottom:10,fontFamily:"'Syne',sans-serif",letterSpacing:"0.07em"}}>{p.category} · {p.year}</div>
                    <p style={{color:"#334155",fontSize:"0.84rem",lineHeight:1.8,marginBottom:12,fontWeight:300}}>{p.desc}</p>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:p.result?12:0}}>
                      {(Array.isArray(p.tech)?p.tech:[]).map(t=><span key={t} style={{fontSize:"0.62rem",padding:"2px 9px",borderRadius:20,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"#334155"}}>{t}</span>)}
                    </div>
                    {p.result&&<div style={{display:"flex",alignItems:"center",gap:7,background:"rgba(0,255,200,0.05)",border:"1px solid rgba(0,255,200,0.12)",borderRadius:9,padding:"7px 12px"}}><span style={{fontSize:"0.8rem"}}>📈</span><span style={{fontSize:"0.75rem",color:"#00ffc8",fontFamily:"'Syne',sans-serif",fontWeight:600}}>{p.result}</span></div>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{padding:"120px 5% 130px",position:"relative"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,255,200,0.04),transparent 60%)",pointerEvents:"none"}} />
        <div style={{maxWidth:680,margin:"0 auto",position:"relative",zIndex:2}}>
          <Reveal>
            <div style={{textAlign:"center",marginBottom:52}}>
              <p style={{fontSize:"0.7rem",fontFamily:"'Syne',sans-serif",letterSpacing:"0.16em",color:"#00ffc8",textTransform:"uppercase",marginBottom:14}}>Get In Touch</p>
              <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,3.5vw,3rem)",fontWeight:800,marginBottom:18}}>Ready to build<br /><span className="glow-cyan">something great?</span></h2>
              <div style={{display:"flex",alignItems:"center",gap:12,justifyContent:"center",marginBottom:16}}>
                <div className="dev-avatar" style={{width:36,height:36,fontSize:"0.75rem"}}>{DEVELOPER.avatar}</div>
                <div style={{textAlign:"left"}}>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.9rem",color:"#e2e8f0"}}>{DEVELOPER.name}</div>
                  <div style={{fontSize:"0.75rem",color:"#334155"}}>{DEVELOPER.role}</div>
                </div>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:9,marginTop:8,padding:"11px 26px",borderRadius:40,background:"rgba(37,211,102,0.08)",border:"1px solid rgba(37,211,102,0.3)",color:"#25d366",fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.86rem",textDecoration:"none",transition:"all 0.3s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(37,211,102,0.15)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(37,211,102,0.08)"}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp · +216 27 870 862
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:22,padding:"clamp(22px,5vw,48px)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,#00ffc8,transparent)"}} />
              {sent?(
                <div style={{textAlign:"center",padding:"36px 0"}}>
                  <div style={{fontSize:"3rem",marginBottom:16,animation:"floatY 3s ease-in-out infinite"}}>🚀</div>
                  <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:"1.25rem",fontWeight:800,marginBottom:8,color:"#00ffc8",textShadow:"0 0 18px rgba(0,255,200,0.4)"}}>Message Sent!</h3>
                  <p style={{color:"#334155",marginBottom:14}}>We'll reply within 24 hours.</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{color:"#25d366",fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.85rem",textDecoration:"none"}}>💬 Or reach us instantly on WhatsApp →</a>
                </div>
              ):(
                <form onSubmit={handleContact} style={{display:"flex",flexDirection:"column",gap:16}}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                    <div><label style={LBL}>Name</label><input required placeholder="John Doe" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} /></div>
                    <div><label style={LBL}>Email</label><input required type="email" placeholder="john@company.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} /></div>
                  </div>
                  <div><label style={LBL}>Service</label>
                    <select required value={form.service} onChange={e=>setForm(f=>({...f,service:e.target.value}))}>
                      <option value="">Select a service…</option>
                      {SERVICES.map(s=><option key={s.title} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div><label style={LBL}>Project Details</label><textarea required rows={4} placeholder="Describe your idea…" value={form.msg} onChange={e=>setForm(f=>({...f,msg:e.target.value}))} style={{resize:"vertical"}} /></div>
                  <button type="submit" className="btn-solid" style={{padding:"14px",borderRadius:11,fontSize:"0.92rem"}}>Send Message →</button>
                </form>
              )}
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,0.05)",padding:"32px 5%",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:14}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:24,height:24,borderRadius:6,background:"linear-gradient(135deg,#00ffc8,#a78bfa)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"0.75rem",color:"#03050e"}}>N</div>
          <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,color:"#0f172a",fontSize:"0.82rem",letterSpacing:"0.06em"}}>NEXORA.</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div className="dev-avatar" style={{width:24,height:24,fontSize:"0.6rem"}}>{DEVELOPER.avatar}</div>
          <span style={{fontSize:"0.74rem",color:"#0f172a",fontFamily:"'Syne',sans-serif"}}>Built by <span style={{color:"#00ffc8"}}>{DEVELOPER.name}</span></span>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"#1e293b",fontSize:"0.76rem",fontFamily:"'Syne',sans-serif",textDecoration:"none",transition:"color 0.2s"}} onMouseEnter={e=>e.currentTarget.style.color="#25d366"} onMouseLeave={e=>e.currentTarget.style.color="#1e293b"}>💬 +216 27 870 862</a>
      </footer>
    </>
  );
}
