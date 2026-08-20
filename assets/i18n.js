/*
  Desert Roses Yoga Dance — lightweight bilingual (EN/中文) switcher.
  No build step, no framework: elements marked data-i18n="key" get their
  textContent swapped; data-i18n-html="key" gets innerHTML swapped (for
  strings that need inline tags like <strong>). Default language:
  - a returning visitor's saved choice (localStorage), else
  - the browser's own language/locale as a proxy for the visitor's region
    (navigator.languages starting with "zh" -> Chinese; everything else -> English)
  English is always the fallback when neither signal points to Chinese.

  DICT below is generated from build_i18n.py — edit the Python source dicts,
  not this block, and re-run the script to regenerate this file.
*/
(function () {
  var STORAGE_KEY = "dr_lang";

  var DICT = {
  "en": {
    "nav_classes": "Classes",
    "nav_pricing": "Pricing",
    "nav_locations": "Locations",
    "nav_journal": "Journal",
    "nav_faq": "FAQ",
    "nav_book": "Book Free Trial",
    "hero_eyebrow": "Singapore · Bilingual Studio Since 2009",
    "hero_h1": "You don't have to become the light alone.",
    "hero_lede": "Desert Roses Yoga Dance is Singapore's bilingual (English & Mandarin) yoga and dance studio — Mandarin Yoga, Bellydance, Adult Ballet, Chinese Dance, Jazz Dance and Yogalates, taught across two studios in Chinatown and Paya Lebar.",
    "hero_cta_book": "Book Your Free Trial Class",
    "hero_cta_classes": "See All Classes",
    "why_badge": "Why we're saying this now",
    "why_h2": "Practice sticks when you don't do it alone",
    "why_p1": "Across a year of Singapore yoga & dance content, one pattern kept surfacing: the posts and stories that got the most genuine engagement weren't about a single class — they were about a friend, a partner, a sister showing up together. Competitors mostly talk about the workout. We noticed Desert Roses' own real community already lives this — partner poses, side-by-side practice, shared milestones.",
    "why_p2": "That's the gap we're leaning into: <strong>Bring Your People</strong> — a studio built around practicing with someone, not just practicing alone.",
    "byp_badge": "Bring Your People",
    "byp_h2": "Refer your people, practice together",
    "byp_p1": "Desert Roses' real “Goddess Referral Challenge” already rewards students for bringing friends into the studio. We're building on exactly that:",
    "byp_li1": "<strong>Refer 1 friend</strong> — unlock a bonus class for both of you.",
    "byp_li2": "<strong>Refer 5 friends</strong> — unlock a free month add-on.",
    "byp_li3": "<strong>Refer 10 friends</strong> — unlock a complimentary private session for your group.",
    "byp_p2": "It's not a gimmick — it's what the data and the studio's own community already show works.",
    "off_eyebrow": "What We Teach",
    "off_h2": "Seven ways to move, bilingual from day one",
    "off_cta": "Book this class →",
    "off_1_name": "Mandarin Yoga",
    "off_1_desc": "Traditional yoga taught in Mandarin for our bilingual community.",
    "off_2_name": "Bellydance Fitness & Choreography",
    "off_2_desc": "High-energy bellydance fitness and performance choreography.",
    "off_3_name": "Adult Ballet",
    "off_3_desc": "Beginner-friendly ballet fundamentals for adult students.",
    "off_4_name": "Chinese Dance",
    "off_4_desc": "Classical and contemporary Chinese dance forms.",
    "off_5_name": "Jazz Dance",
    "off_5_desc": "Upbeat jazz dance technique and routines.",
    "off_6_name": "Yogalates",
    "off_6_desc": "A yoga + pilates fusion for strength and flexibility.",
    "off_7_name": "Corporate Workshops",
    "off_7_desc": "Team-building wellness sessions for companies.",
    "price_eyebrow": "Pricing",
    "price_h2": "Start free. Stay for as long as it helps.",
    "price_th1": "Package",
    "price_th2": "Price",
    "price_th3": "Validity",
    "price_r1_a": "First Class",
    "price_r1_b": "Free",
    "price_r1_c": "New students only",
    "price_r2_a": "Yoga Package",
    "price_r2_b": "99 SGD / 10 classes",
    "price_r2_c": "3 months",
    "price_r3_a": "Yoga & Dance Combo",
    "price_r3_b": "98 SGD / 8 classes",
    "price_r3_c": "2 months",
    "price_r4_a": "Regular Package",
    "price_r4_b": "498 SGD / 30 classes",
    "price_r4_c": "6 months",
    "price_r5_a": "Regular Package",
    "price_r5_b": "888 SGD / 66 classes",
    "price_r5_c": "6 months",
    "price_r6_a": "Yoga-Only Package",
    "price_r6_b": "999 SGD / 78 classes",
    "price_r6_c": "12 months",
    "sec1_badge": "Also Rising",
    "sec1_h3": "Wellness That Travels",
    "sec1_p": "Two studios, one membership — Chinatown and Paya Lebar, both MRT-accessible, so practice fits your week instead of the other way around.",
    "sec2_badge": "Also Rising",
    "sec2_h3": "Practice At Your Own Pace",
    "sec2_p": "No leaderboard, no comparison — Yogalates and Mandarin Yoga classes are built for steady, self-paced progress at any level.",
    "sec3_badge": "Est. 2009",
    "sec3_h3": "17 Years in Singapore",
    "sec3_p": "A bilingual studio community built class by class since 2009 — not a recent trend.",
    "journal_eyebrow": "The Journal",
    "journal_h2": "Guides on yoga, dance and wellness in Singapore",
    "journal_zh_note": "These journal guides are currently available in English only.",
    "faq_eyebrow": "Frequently Asked",
    "faq_h2": "Common questions, answered directly",
    "faq_q1": "Is Desert Roses Yoga Dance a bilingual studio?",
    "faq_a1": "Yes. Desert Roses has taught classes in both English and Mandarin since 2009, making it one of Singapore's few genuinely bilingual yoga and dance studios.",
    "faq_q2": "How much does it cost to try a class?",
    "faq_a2": "Your first class is free. After that, a Yoga package is 99 SGD for 10 classes valid 3 months, and a Yoga & Dance Combo package is 98 SGD for 8 classes valid 2 months.",
    "faq_q3": "Where are the studios located?",
    "faq_a3": "22B Upper Cross Street, Singapore 058334 (Chinatown), and 706A Geylang Road, Singapore 389621 (Paya Lebar).",
    "faq_q4": "What classes are offered?",
    "faq_a4": "Mandarin Yoga, Bellydance Fitness & Choreography, Adult Ballet, Chinese Dance, Jazz Dance, Yogalates, and corporate wellness workshops.",
    "faq_q5": "Can I bring a friend?",
    "faq_a5": "Yes — Desert Roses runs referral perks for members who bring people along, and encourages practicing together.",
    "faq_q6": "How do I book a free trial?",
    "faq_a6": "Click “Book Free Trial” anywhere on this page to open the live booking calendar without leaving this site, or message on WhatsApp (+65 9665 2368), WeChat (desertrosesfit), or Facebook (desertrosesbellydance).",
    "loc_eyebrow": "Locations",
    "loc_h2": "Two studios, MRT-accessible",
    "loc_1_name": "Chinatown",
    "loc_1_addr": "22B Upper Cross Street, Singapore 058334",
    "loc_2_name": "Paya Lebar",
    "loc_2_addr": "706A Geylang Road, Singapore 389621",
    "contact_eyebrow": "Get In Touch",
    "contact_h2": "Your first class is free. Let's find your people.",
    "contact_whatsapp_name": "WhatsApp",
    "contact_whatsapp_hint": "Chat with us →",
    "contact_wechat_name": "WeChat",
    "contact_wechat_hint": "Tap to copy ID →",
    "contact_wechat_copied": "Copied! Search desertrosesfit in WeChat",
    "contact_facebook_name": "Facebook",
    "contact_facebook_hint": "Visit our page →",
    "contact_cta_book": "Book Online Now",
    "contact_cta_whatsapp": "Message Us on WhatsApp",
    "footer_tagline": "“Become the light you already are”",
    "footer_chinatown": "Chinatown:",
    "footer_payalebar": "Paya Lebar:",
    "footer_whatsapp": "WhatsApp"
  },
  "zh": {
    "nav_classes": "课程",
    "nav_pricing": "价格",
    "nav_locations": "地点",
    "nav_journal": "专栏",
    "nav_faq": "常见问题",
    "nav_book": "预约免费试课",
    "hero_eyebrow": "新加坡 · 双语教室 · 2009年创立",
    "hero_h1": "你不必独自成为那道光。",
    "hero_lede": "沙漠玫瑰瑜伽舞蹈是新加坡的双语（英语、华语）瑜伽舞蹈教室，提供华语瑜伽、肚皮舞、成人芭蕾、中国舞、爵士舞和瑜伽普拉提课程，牛车水和巴耶利峇两家分店均可上课。",
    "hero_cta_book": "预约免费试课",
    "hero_cta_classes": "查看所有课程",
    "why_badge": "我们为什么现在这样说",
    "why_h2": "有伙伴同行，练习才能持续",
    "why_p1": "回顾新加坡瑜伽与舞蹈内容一整年的数据，一个规律反复出现：获得最多真实互动的帖子，往往不是关于某一节课，而是关于朋友、伴侣、姐妹一起出现。同行大多只谈论运动本身。我们发现沙漠玫瑰自己的真实社群早已如此，搭档体式、并肩练习、共同的里程碑。",
    "why_p2": "这正是我们想深耕的空白地带：<strong>带着你的人一起来</strong>，一个围绕结伴练习而不是独自练习打造的教室。",
    "byp_badge": "带着你的人一起来",
    "byp_h2": "推荐你的朋友，一起练习",
    "byp_p1": "沙漠玫瑰真实的女神推荐挑战活动，已经在奖励带朋友加入教室的学员。我们正基于此继续拓展：",
    "byp_li1": "<strong>推荐1位朋友</strong>，你和朋友各解锁1节免费课程。",
    "byp_li2": "<strong>推荐5位朋友</strong>，解锁一个月的免费加赠。",
    "byp_li3": "<strong>推荐10位朋友</strong>，为你的团体解锁一次免费私教课。",
    "byp_p2": "这不是噱头，这是数据和教室自身社群已经证明有效的方法。",
    "off_eyebrow": "我们教什么",
    "off_h2": "七种律动方式，从第一天起就双语教学",
    "off_cta": "预约这节课 →",
    "off_1_name": "华语瑜伽",
    "off_1_desc": "以华语教授的传统瑜伽课程，专为我们的双语社群设计。",
    "off_2_name": "肚皮舞燃脂编舞",
    "off_2_desc": "高能量的肚皮舞燃脂运动与表演编舞。",
    "off_3_name": "成人芭蕾",
    "off_3_desc": "适合零基础成人学员的芭蕾基础课程。",
    "off_4_name": "中国舞",
    "off_4_desc": "经典与现代中国舞蹈形式。",
    "off_5_name": "爵士舞",
    "off_5_desc": "充满活力的爵士舞技巧与编舞。",
    "off_6_name": "瑜伽普拉提",
    "off_6_desc": "瑜伽与普拉提融合课程，兼顾力量与柔韧性。",
    "off_7_name": "企业团建工作坊",
    "off_7_desc": "为企业设计的团队健康工作坊。",
    "price_eyebrow": "价格",
    "price_h2": "免费开始，需要多久就练多久。",
    "price_th1": "套餐",
    "price_th2": "价格",
    "price_th3": "有效期",
    "price_r1_a": "首次试课",
    "price_r1_b": "免费",
    "price_r1_c": "仅限新学员",
    "price_r2_a": "瑜伽套餐",
    "price_r2_b": "99新元 / 10节课",
    "price_r2_c": "3个月",
    "price_r3_a": "瑜伽舞蹈组合套餐",
    "price_r3_b": "98新元 / 8节课",
    "price_r3_c": "2个月",
    "price_r4_a": "常规套餐",
    "price_r4_b": "498新元 / 30节课",
    "price_r4_c": "6个月",
    "price_r5_a": "常规套餐",
    "price_r5_b": "888新元 / 66节课",
    "price_r5_c": "6个月",
    "price_r6_a": "瑜伽专属套餐",
    "price_r6_b": "999新元 / 78节课",
    "price_r6_c": "12个月",
    "sec1_badge": "同样上升的趋势",
    "sec1_h3": "健康随行",
    "sec1_p": "两家教室，一份会员卡，牛车水与巴耶利峇均可搭乘地铁到达，练习配合你的生活节奏。",
    "sec2_badge": "同样上升的趋势",
    "sec2_h3": "按自己的节奏练习",
    "sec2_p": "没有排行榜，没有比较，瑜伽普拉提和华语瑜伽课程专为稳步、自主的进步而设计。",
    "sec3_badge": "2009年创立",
    "sec3_h3": "17年新加坡教学经验",
    "sec3_p": "自2009年起，一节课接一节课积累起来的双语教室社群，不是一时的潮流。",
    "journal_eyebrow": "专栏",
    "journal_h2": "关于新加坡瑜伽、舞蹈与健康生活的指南",
    "journal_zh_note": "以下专栏文章目前仅提供英文版本。",
    "faq_eyebrow": "常见问题",
    "faq_h2": "直接解答常见问题",
    "faq_q1": "沙漠玫瑰瑜伽舞蹈是双语教室吗？",
    "faq_a1": "是的。沙漠玫瑰自2009年起就以英语和华语双语授课，是新加坡少数真正双语教学的瑜伽舞蹈教室之一。",
    "faq_q2": "试课需要多少费用？",
    "faq_a2": "第一节课完全免费。之后，瑜伽套餐为99新元十节课，三个月有效；瑜伽舞蹈组合套餐为98新元八节课，两个月有效。",
    "faq_q3": "教室地址在哪里？",
    "faq_a3": "牛车水：22B Upper Cross Street, Singapore 058334；巴耶利峇：706A Geylang Road, Singapore 389621。",
    "faq_q4": "有哪些课程？",
    "faq_a4": "华语瑜伽、肚皮舞燃脂编舞、成人芭蕾、中国舞、爵士舞、瑜伽普拉提，以及企业健康团建工作坊。",
    "faq_q5": "可以带朋友一起来吗？",
    "faq_a5": "当然可以，沙漠玫瑰为带朋友加入的学员提供推荐奖励，并鼓励大家一起练习。",
    "faq_q6": "如何预约免费试课？",
    "faq_a6": "点击本页任意一处的预约免费试课按钮，即可在本站内直接打开实时预约日历；也可以通过WhatsApp（+65 9665 2368）、微信（desertrosesfit）或Facebook（desertrosesbellydance）联系我们。",
    "loc_eyebrow": "地点",
    "loc_h2": "两家教室，地铁直达",
    "loc_1_name": "牛车水",
    "loc_1_addr": "22B Upper Cross Street, Singapore 058334",
    "loc_2_name": "巴耶利峇",
    "loc_2_addr": "706A Geylang Road, Singapore 389621",
    "contact_eyebrow": "联系我们",
    "contact_h2": "第一节课免费，让我们找到你的同行伙伴。",
    "contact_whatsapp_name": "WhatsApp",
    "contact_whatsapp_hint": "点击聊天 →",
    "contact_wechat_name": "微信",
    "contact_wechat_hint": "点击复制微信号 →",
    "contact_wechat_copied": "已复制！请在微信搜索 desertrosesfit",
    "contact_facebook_name": "Facebook",
    "contact_facebook_hint": "访问我们的主页 →",
    "contact_cta_book": "立即在线预约",
    "contact_cta_whatsapp": "通过WhatsApp联系我们",
    "footer_tagline": "遇见最美好的自己，成为那道光",
    "footer_chinatown": "牛车水：",
    "footer_payalebar": "巴耶利峇：",
    "footer_whatsapp": "WhatsApp"
  }
};

  function detectDefaultLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "zh") return saved;
    } catch (e) { /* localStorage unavailable - fall through to detection */ }
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh/i.test(langs[i])) return "zh";
    }
    return "en";
  }

  function apply(lang) {
    var dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    if (window.__drBookingModalRelocalize) window.__drBookingModalRelocalize();
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  function init() {
    apply(detectDefaultLang());
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  window.DR_I18N = { setLang: setLang, dict: DICT };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
