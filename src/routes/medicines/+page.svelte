<script>
    import { language } from '../../stores/language.js';
  
    // Language-specific content
    const text = {
      en: {
        introduction: "Eziday is a brand name for the drug Losartan, commonly prescribed in 25 mg or 50 mg doses, which belongs to a group of medications called angiotensin II receptor blockers (ARBs). It’s primarily used to treat high blood pressure (hypertension) and is sometimes prescribed for other cardiovascular conditions.",
        definition: "Losartan is an ARB that works by blocking the action of angiotensin II, a chemical in the body that narrows blood vessels and increases blood pressure. By blocking this effect, Losartan helps relax blood vessels, which lowers blood pressure and improves blood flow.",
        basic_usage: {
          point1: "Hypertension (High Blood Pressure): Losartan is primarily prescribed to lower high blood pressure, which can help prevent heart attacks, strokes, and kidney problems.",
          point2: "Heart Protection in Diabetes: It’s also used to help protect the kidneys in people with type 2 diabetes who have high blood pressure.",
        },
        advanced_usage: {
          point1: "Heart Failure: Losartan may be used in managing chronic heart failure to improve heart function.",
          point2: "Prevention of Strokes: In some patients, Losartan can reduce the risk of strokes, particularly in those with a heart condition known as left ventricular hypertrophy (enlarged heart).",
        },
        when_not_to_use: {
          point1: "Pregnancy: Losartan should not be taken during pregnancy, especially in the second and third trimesters, as it can harm the developing fetus.",
          point2: "Kidney Impairment: People with severe kidney impairment or those who are on certain medications like ACE inhibitors should avoid Losartan.",
          point3: "Allergy: If you have a known allergy to Losartan or any of its components, you should not take this medication.",
        },
        side_effects: {
          point1: "Dizziness or lightheadedness (especially when starting the medication or increasing the dose)",
          point2: "Fatigue",
          point3: "Nausea",
          point4: "High potassium levels (hyperkalemia), which can cause symptoms like weakness, irregular heartbeat, or muscle pain",
          point5: "Kidney function changes or worsening kidney function",
          point6: "Allergic reactions, though rare, can occur and may include swelling, rash, and breathing difficulties.",
        },
        conclusion: "Losartan (Eziday) is generally well-tolerated and effective for managing blood pressure and reducing cardiovascular risks, especially in patients with diabetes or heart conditions. However, it must be used under the guidance of a healthcare professional to avoid side effects and potential interactions. Avoiding Losartan during pregnancy and being cautious with kidney issues is essential, as is regular monitoring of blood pressure and kidney function during use."
      },
      ur: {
    introduction: "Eziday ایک دوائی Losartan کا برانڈ نام ہے، جو عام طور پر 25 mg یا 50 mg کی خوراک میں تجویز کی جاتی ہے، اور یہ انجیوٹینسن II ریسیپٹر بلاکرز (ARBs) نامی دوائیوں کے گروپ سے تعلق رکھتی ہے۔ اسے بنیادی طور پر ہائی بلڈ پریشر (ہائپرٹینشن) کے علاج کے لیے استعمال کیا جاتا ہے اور بعض اوقات دل کی دیگر بیماریوں کے لیے بھی تجویز کیا جاتا ہے۔",
    definition: "Losartan ایک ARB ہے جو انجیوٹینسن II کے اثر کو بلاک کر کے کام کرتا ہے، یہ جسم میں ایک ایسا کیمیکل ہے جو خون کی نالیوں کو سکڑتا ہے اور بلڈ پریشر کو بڑھاتا ہے۔ اس اثر کو روک کر، Losartan خون کی نالیوں کو آرام دینے میں مدد کرتا ہے، جو بلڈ پریشر کو کم کرتا ہے اور خون کے بہاؤ کو بہتر بناتا ہے۔",
    basic_usage: {
      point1: "بلند فشار خون: Losartan کو بنیادی طور پر بلند فشار خون کو کم کرنے کے لیے تجویز کیا جاتا ہے، جس سے دل کے دورے، فالج، اور گردوں کے مسائل سے بچاؤ میں مدد مل سکتی ہے۔",
      point2: "ذیابیطس میں دل کی حفاظت: اسے ٹائپ 2 ذیابیطس کے مریضوں میں دل اور گردوں کی حفاظت کے لیے بھی استعمال کیا جاتا ہے۔",
    },
    advanced_usage: {
      point1: "دل کی ناکامی: Losartan کو بعض اوقات دل کی دائمی ناکامی کو بہتر بنانے کے لیے استعمال کیا جا سکتا ہے۔",
      point2: "فالج سے بچاؤ: کچھ مریضوں میں، خاص طور پر ان میں جو بائیں وینٹریکولر ہائپرٹرافی (بڑا ہوا دل) کے مسئلے سے دوچار ہیں، فالج کا خطرہ کم کرنے میں مددگار ثابت ہو سکتا ہے۔",
    },
    when_not_to_use: {
      point1: "حمل: Losartan حمل کے دوران نہیں لینا چاہیے، خاص طور پر دوسرے اور تیسرے سہ ماہی میں، کیونکہ اس سے بچے کو نقصان پہنچ سکتا ہے۔",
      point2: "گردوں کی بیماری: شدید گردے کی بیماری یا کچھ دوائیں جیسے ACE inhibitors استعمال کرنے والے افراد کو Losartan سے پرہیز کرنا چاہیے۔",
      point3: "الرجی: اگر آپ کو Losartan یا اس کے کسی بھی جزو سے الرجی ہو، تو یہ دوا نہیں لینا چاہیے۔",
    },
    side_effects: {
      point1: "چکر آنا یا ہلکی سرسراہٹ (خاص طور پر دوا شروع کرنے یا خوراک بڑھانے کے وقت)",
      point2: "تھکاوٹ",
      point3: "متلی",
      point4: "ہائی پوٹاشیم کی سطح (ہائپرکلیمیا)، جو کمزوری، بے قاعدہ دل کی دھڑکن، یا پٹھوں میں درد جیسے علامات کا سبب بن سکتی ہے",
      point5: "گردوں کے کام میں تبدیلی یا اس میں مزید بگاڑ",
      point6: "کبھی کبھار الرجی ردعمل، جیسے سوجن، خارش، اور سانس کی تکلیف",
    },
    conclusion: "Losartan (Eziday) عام طور پر اچھی طرح برداشت کی جاتی ہے اور بلڈ پریشر کو کنٹرول کرنے اور دل کی بیماری کے خطرات کو کم کرنے میں مؤثر ثابت ہوتی ہے، خاص طور پر ان مریضوں میں جو ذیابیطس یا دل کے امراض کا شکار ہیں۔ اس کے استعمال میں احتیاط کی ضرورت ہے، خاص طور پر حمل کے دوران یا گردوں کی بیماری کی صورت میں، اور بلڈ پریشر اور گردوں کے فعل کا باقاعدگی سے معائنہ کیا جانا چاہیے۔"
  }
    };
  </script>
  

  
  {#if $language === 'en'}
  <h1>Eziday</h1>
    <p>{text.en.introduction}</p>
  
    <h6>Definition</h6>
    <p>{text.en.definition}</p>
  
    <h6>Basic Usage</h6>
    <ul>
      <li>{text.en.basic_usage.point1}</li>
      <li>{text.en.basic_usage.point2}</li>
    </ul>
  
    <h6>Advanced Usage</h6>
    <ul>
      <li>{text.en.advanced_usage.point1}</li>
      <li>{text.en.advanced_usage.point2}</li>
    </ul>
  
    <h6>When Not to Use</h6>
    <ul>
      <li>{text.en.when_not_to_use.point1}</li>
      <li>{text.en.when_not_to_use.point2}</li>
      <li>{text.en.when_not_to_use.point3}</li>
    </ul>
  
    <h6>Side Effects</h6>
    <ul>
      <li>{text.en.side_effects.point1}</li>
      <li>{text.en.side_effects.point2}</li>
      <li>{text.en.side_effects.point3}</li>
      <li>{text.en.side_effects.point4}</li>
      <li>{text.en.side_effects.point5}</li>
      <li>{text.en.side_effects.point6}</li>
    </ul>
  
    <h6>Conclusion</h6>
    <p>{text.en.conclusion}</p>
  {:else}
    <!-- Urdu Translation Content Here with Same Structure -->
    <h1>Eziday</h1>
    <p>{text.ur.introduction}</p>
  
    <h6>Introduction</h6>
    <p>{text.ur.definition}</p>
  
    <h6>Basic Usage</h6>
    <ul>
      <li>{text.ur.basic_usage.point1}</li>
      <li>{text.ur.basic_usage.point2}</li>
    </ul>
  
    <h6>Advanced Usage</h6>
    <ul>
      <li>{text.ur.advanced_usage.point1}</li>
      <li>{text.ur.advanced_usage.point2}</li>
    </ul>
  
    <h6>When Not to Use</h6>
    <ul>
      <li>{text.ur.when_not_to_use.point1}</li>
      <li>{text.ur.when_not_to_use.point2}</li>
      <li>{text.ur.when_not_to_use.point3}</li>
    </ul>
  
    <h6>Side Effects</h6>
    <ul>
      <li>{text.ur.side_effects.point1}</li>
      <li>{text.ur.side_effects.point2}</li>
      <li>{text.ur.side_effects.point3}</li>
      <li>{text.ur.side_effects.point4}</li>
      <li>{text.ur.side_effects.point5}</li>
      <li>{text.ur.side_effects.point6}</li>
    </ul>
  
    <h6>Conclusion</h6>
    <p>{text.ur.conclusion}</p>
  {/if}
  
  <style>
    * {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
      background-color: white;
      color: black;
    }
    h1 {
      font-size: 48px;
      margin: 40px 0;
      text-decoration: underline;
      text-align: center;
    }
    h6 {
      font-size: 24px;
      margin: 20px 0 10px;
    }
    p, li {
      font-size: 18px;
      line-height: 1.5;
      margin: 10px 0;
    }
    ul {
      margin: 0 0 20px 20px;
    }
  </style>
  