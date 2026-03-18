---
title: Dynamic Image Optimization
description: "# Astro Tech Tip: Dynamic Image Optimization 🚀"
pubDate: 2026-03-19
---
# Astro Tech Tip: Dynamic Image Optimization 🚀

Astro မှာ ပုံတွေကို ရိုးရိုး `<img>` tag နဲ့ သုံးမယ့်အစား Astro ရဲ့ Built-in **Image Component** ကို သုံးတာက Performance အတွက် အကောင်းဆုံးပါပဲ။ ဒါဟာ Web Vitals Score ကို သိသိသာသာ တက်စေပါတယ်။

### 1. ပုံတွေကို ဘယ်လို Import လုပ်မလဲ?
Astro မှာ ပုံတွေကို `src/assets/` folder ထဲမှာ ထားတာ အကောင်းဆုံးပါ။ ဒါမှ Astro က ပုံတွေကို Compress လုပ်ပြီး Format ပြောင်းပေးနိုင်မှာ ဖြစ်ပါတယ်။

### 2. Image Component ကို အသုံးပြုပုံ
သင်ဟာ `.astro` file ထဲမှာ ရေးနေတယ်ဆိုရင် အောက်ပါအတိုင်း အသုံးပြုနိုင်ပါတယ်။

```astro
import { Image } from 'astro:assets';
import myImage from '../assets/my-banner.png'; // ပုံကို import လုပ်ပါ
```

<Image 
  src={myImage} 
  alt="A description of my image" 
  width={800} 
  height={450}
  format="webp"
  quality="mid"
/>
