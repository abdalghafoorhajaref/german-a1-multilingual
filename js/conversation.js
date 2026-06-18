// ============================================================
// CONVERSATION SIMULATOR - ممارسة المحادثة التفاعلية
// Berliner Platz 1 Neu A1 - 12 Dialogue Scenarios
// ============================================================

const CONVERSATION_SCENARIOS = [
  // ── CHAPTER 1: Sich vorstellen ──────────────────────────────
  {
    id: 1,
    ch: 1,
    title: "Sich vorstellen",
    titleAr: "التعريف بالنفس",
    emoji: "👤",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Ich bin Anna. Wie heißt du?", textAr: "مرحباً! أنا آنا. ما اسمك؟" },
      {
        speaker: "user",
        prompt: "عرّف بنفسك وقل اسمك للشريك",
        options: [
          { textDe: "Hallo Anna! Ich heiße Ahmad.", textAr: "مرحباً آنا! اسمي أحمد.", points: 10 },
          { textDe: "Guten Tag! Mein Name ist Ahmad.", textAr: "نهارك سعيد! اسمي أحمد.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Freut mich, Ahmad! Woher kommst du?", textAr: "سررت بلقائك يا أحمد! من أين أنت؟" },
      {
        speaker: "user",
        prompt: "أخبر الشريك ببلدك الأصلي",
        options: [
          { textDe: "Ich komme aus Syrien.", textAr: "أنا من سوريا.", points: 10 },
          { textDe: "Ich komme aus Ägypten.", textAr: "أنا من مصر.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ah, schön! Und wo wohnst du jetzt?", textAr: "آه، جميل! وأين تسكن الآن؟" },
      {
        speaker: "user",
        prompt: "أخبر الشريك بمدينتك الحالية",
        options: [
          { textDe: "Ich wohne jetzt in Berlin.", textAr: "أنا أسكن الآن في برلين.", points: 10 },
          { textDe: "Ich wohne jetzt in München.", textAr: "أنا أسكن الآن في ميونيخ.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Berlin ist toll! Welche Sprachen sprichst du?", textAr: "برلين رائعة! ما اللغات التي تتحدثها؟" },
      {
        speaker: "user",
        prompt: "اذكر اللغات التي تتحدثها",
        options: [
          { textDe: "Ich spreche Arabisch und ein bisschen Deutsch.", textAr: "أتحدث العربية وقليلاً من الألمانية.", points: 15 },
          { textDe: "Meine Muttersprache ist Arabisch. Ich lerne jetzt Deutsch.", textAr: "لغتي الأم هي العربية. وأتعلم الألمانية الآن.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Sehr gut! Auf Wiedersehen, Ahmad!", textAr: "ممتاز! مع السلامة يا أحمد!" },
      {
        speaker: "user",
        prompt: "ودّع الشريك بطريقة مناسبة",
        options: [
          { textDe: "Auf Wiedersehen, Anna! Tschüss!", textAr: "إلى اللقاء آنا! مع السلامة!", points: 10 },
          { textDe: "Tschüss! Bis bald!", textAr: "مع السلامة! نلتقي قريباً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 2: Wie geht's? ──────────────────────────────────
  {
    id: 2,
    ch: 2,
    title: "Ein Treffen im Café",
    titleAr: "لقاء في المقهى والاطمئنان",
    emoji: "☕",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wie geht es dir heute?", textAr: "مرحباً! كيف حالك اليوم؟" },
      {
        speaker: "user",
        prompt: "أجب بأنك بخير واسأل الشريك عن حاله",
        options: [
          { textDe: "Hallo! Mir geht es sehr gut, danke. Und dir?", textAr: "مرحباً! أنا بخير جداً، شكراً. وأنت؟", points: 10 },
          { textDe: "Danke, gut! Und wie geht es dir?", textAr: "شكراً، جيد! وكيف حالك أنت؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Mir geht's auch gut, danke. Möchtest du Kaffee oder Tee trinken?", textAr: "أنا بخير أيضاً، شكراً. هل تود شرب القهوة أم الشاي؟" },
      {
        speaker: "user",
        prompt: "اطلب فنجاناً من القهوة بالحليب من فضلك",
        options: [
          { textDe: "Ich möchte einen Kaffee mit Milch, bitte.", textAr: "أود قهوة بالحليب من فضلك.", points: 10 },
          { textDe: "Einen Kaffee mit Milch für mich, bitte.", textAr: "فنجان قهوة بالحليب لي من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Gerne! Ich nehme einen Tee. Was ist deine Handynummer für später?", textAr: "بكل سرور! سآخذ شاياً. ما هو رقم جوالك لنتواصل لاحقاً؟" },
      {
        speaker: "user",
        prompt: "أعطِ رقم هاتفك للشريك (0176...)",
        options: [
          { textDe: "Meine Nummer ist null-eins-sieben-sechs-zwei-drei-vier.", textAr: "رقمي هو 0176234.", points: 15 },
          { textDe: "Hier ist meine Nummer: null-eins-sieben-sechs-fünf-sechs-sieben.", textAr: "تفضل رقمي: 0176567.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Danke, ich habe sie notiert! Bis zum nächsten Mal!", textAr: "شكراً، قمت بتدوينه! إلى اللقاء في المرة القادمة!" },
      {
        speaker: "user",
        prompt: "ودع زميلك وتمنّ له يوماً طيباً",
        options: [
          { textDe: "Tschüss! Einen schönen Tag noch!", textAr: "مع السلامة! يوم سعيد!", points: 10 },
          { textDe: "Auf Wiedersehen! Bis bald!", textAr: "إلى اللقاء! نلتقي قريباً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 3: Was kostet das? ──────────────────────────────
  {
    id: 3,
    ch: 3,
    title: "Auf dem Flohmarkt",
    titleAr: "في سوق البضائع المستعملة",
    emoji: "📷",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Suchen Sie etwas Bestimmtes?", textAr: "نهارك سعيد! هل تبحث عن شيء معين؟" },
      {
        speaker: "user",
        prompt: "قل أنك تبحث عن كاميرا أو كتاب وتتساءل عن السعر",
        options: [
          { textDe: "Guten Tag! Ich suche ein Buch. Was kostet dieses Buch?", textAr: "نهارك سعيد! أبحث عن كتاب. كم سعر هذا الكتاب؟", points: 10 },
          { textDe: "Hallo! Was kostet diese Kamera hier?", textAr: "مرحباً! كم سعر هذه الكاميرا هنا؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das Buch kostet 5 Euro. Die Kamera kostet 45 Euro. Das ist billig!", textAr: "الكتاب سعره 5 يورو. الكاميرا سعرها 45 يورو. هذا رخيص!" },
      {
        speaker: "user",
        prompt: "قل أن السعر مرتفع جداً (غالي) وحاول المفاصلة بسعر أقل للغرض",
        options: [
          { textDe: "Das Buch ist günstig. Ich nehme das Buch.", textAr: "سعر الكتاب مناسب. سآخذ الكتاب.", points: 10 },
          { textDe: "Oh, 45 Euro ist zu teuer! Geht auch 35 Euro?", textAr: "أوه، 45 يورو غالي جداً! هل ينفع 35 يورو؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Na gut, 35 Euro für die Kamera ist okay. Nehmen Sie sie?", textAr: "حسناً، 35 يورو للكاميرا موافق. هل ستأخذها؟" },
      {
        speaker: "user",
        prompt: "وافق وقل أنك ستأخذها وسل أين تدفع",
        options: [
          { textDe: "Ja, ich nehme sie. Danke schön!", textAr: "نعم، سآخذها. شكراً جزيلاً!", points: 10 },
          { textDe: "Super, ich nehme die Kamera für 35 Euro.", textAr: "رائع، سآخذ الكاميرا بـ 35 يورو.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Bitte sehr. Das macht dann 35 Euro.", textAr: "تفضل. المجموع 35 يورو." },
      {
        speaker: "user",
        prompt: "ادفع للبائع واشكره",
        options: [
          { textDe: "Hier sind 35 Euro. Vielen Dank!", textAr: "تفضل، هذه 35 يورو. شكراً جزيلاً!", points: 10 },
          { textDe: "Bitte schön, 35 Euro. Einen schönen Tag!", textAr: "تفضل، 35 يورو. أتمنى لك يوماً سعيداً!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 4: Wie spät ist es? ─────────────────────────────
  {
    id: 4,
    ch: 4,
    title: "Morgens und Termine",
    titleAr: "روتين المواعيد والوقت",
    emoji: "⏰",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wann stehst du normalerweise auf?", textAr: "مرحباً! متى تستيقظ عادةً؟" },
      {
        speaker: "user",
        prompt: "أخبره أنك تستيقظ عادة في الساعة 7 صباحاً وتفطر في 7:30",
        options: [
          { textDe: "Ich stehe um sieben Uhr auf und frühstücke um halb acht.", textAr: "أستيقظ في السابعة صباحاً وأتناول الفطور في السابعة والنصف.", points: 15 },
          { textDe: "Normalerweise stehe ich um 7 Uhr auf, dann frühstücke ich.", textAr: "عادة أستيقظ في السابعة، ثم أتناول الفطور.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Und wann fängt dein Deutschkurs an?", textAr: "ومتى تبدأ دورة اللغة الألمانية الخاصة بك؟" },
      {
        speaker: "user",
        prompt: "أخبره أن الدرس يبدأ في التاسعة تماماً وينتهي في الواحدة والنصف ظهراً",
        options: [
          { textDe: "Der Kurs fängt um neun Uhr an und endet um halb zwei.", textAr: "يبدأ الكورس في التاسعة تماماً وينتهي في الواحدة والنصف.", points: 15 },
          { textDe: "Er beginnt um 9 Uhr und geht bis 13 Uhr 30.", textAr: "يبدأ في التاسعة ويستمر حتى الساعة الواحدة والنصف.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Oh, das ist ein langer Kurs! Hast du am Freitagabend Zeit? Gehen wir ins Kino?", textAr: "أوه، هذا كورس طويل! هل لديك وقت مساء الجمعة؟ هل نذهب للسينما؟" },
      {
        speaker: "user",
        prompt: "اعتذر بأنه ليس لديك وقت لأن لديك موعد آخر، واسأل عن السبت",
        options: [
          { textDe: "Es tut mir leid, am Freitag habe ich keine Zeit. Geht es am Samstag?", textAr: "يؤسفني، ليس لدي وقت يوم الجمعة. هل يناسبك السبت؟", points: 15 },
          { textDe: "Leider habe ich einen Termin am Freitag. Wie ist es am Samstag?", textAr: "للأسف لدي موعد يوم الجمعة. ما رأيك بالسبت؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Ja, Samstag um 18 Uhr passt gut! Bis Samstag!", textAr: "نعم، السبت الساعة السادسة مساءً مناسب جداً! نلتقي السبت!" },
      {
        speaker: "user",
        prompt: "وافق على الموعد وودّعه",
        options: [
          { textDe: "Klasse! Bis Samstag um 18 Uhr. Tschüss!", textAr: "ممتاز! نلتقي السبت في السادسة. مع السلامة!", points: 10 },
          { textDe: "Abgemacht! Bis Samstag!", textAr: "اتفقنا! نلتقي السبت!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 5: Einkaufen ────────────────────────────────────
  {
    id: 5,
    ch: 5,
    title: "Lebensmittel einkaufen",
    titleAr: "التسوق في السوبرماركت",
    emoji: "🛒",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Was kann ich für Sie tun?", textAr: "نهارك سعيد! ماذا يمكنني أن أقدم لك؟" },
      {
        speaker: "user",
        prompt: "قل أنك تريد شراء الطماطم والجبن وتتساءل إن كانت طازجة",
        options: [
          { textDe: "Guten Tag! Ich brauche Tomaten und Käse. Sind sie frisch?", textAr: "نهارك سعيد! أحتاج طماطم وجبناً. هل هي طازجة؟", points: 10 },
          { textDe: "Hallo! Ich möchte Tomaten und Käse kaufen.", textAr: "مرحباً! أود شراء طماطم وجبن.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ja, alles ist ganz frisch! Wie viel Tomaten möchten Sie?", textAr: "نعم، كل شيء طازج تماماً! كم كمية الطماطم التي تريدها؟" },
      {
        speaker: "user",
        prompt: "اطلب كيلو غراماً واحداً من الطماطم",
        options: [
          { textDe: "Ich möchte ein Kilo Tomaten, bitte.", textAr: "أود كيلو غراماً واحداً من الطماطم من فضلك.", points: 10 },
          { textDe: "Ein Kilo Tomaten, bitte.", textAr: "كيلو طماطم من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Gerne. Und wie viel Käse darf es sein?", textAr: "بكل سرور. وكم كمية الجبن التي تريدها؟" },
      {
        speaker: "user",
        prompt: "اطلب 300 غرام من الجبن السويسري",
        options: [
          { textDe: "Geben Sie mir bitte 300 Gramm Käse.", textAr: "أعطني من فضلك 300 غرام من الجبن.", points: 15 },
          { textDe: "Ich brauche dreihundert Gramm Käse, bitte.", textAr: "أحتاج ثلاثمئة غرام من الجبن من فضلك.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Bitte sehr. Sonst noch etwas?", textAr: "تفضل. هل هناك أي شيء آخر؟" },
      {
        speaker: "user",
        prompt: "أجب بالنفي وسل عن التكلفة الكلية",
        options: [
          { textDe: "Nein, danke. Das ist alles. Was kostet das?", textAr: "لا شكراً. هذا كل شيء. كم الحساب؟", points: 10 },
          { textDe: "Das ist alles, danke. Wie viel macht das?", textAr: "هذا كل شيء، شكراً. كم المجموع؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das macht zusammen 9 Euro 40, bitte.", textAr: "المجموع الكلي هو 9 يورو و40 سنتاً من فضلك." },
      {
        speaker: "user",
        prompt: "أعطه ورقة نقود بقيمة 10 يورو وقل له أن يحتفظ بالفكة (الباقي)",
        options: [
          { textDe: "Hier sind 10 Euro. Stimmt so!", textAr: "تفضل، هذه 10 يورو. احتفظ بالباقي!", points: 15 },
          { textDe: "Bitte schön. Zehn Euro. Stimmt so.", textAr: "تفضل، عشرة يورو. احتفظ بالباقي.", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 6: Meine Familie ────────────────────────────────
  {
    id: 6,
    ch: 6,
    title: "Über Familie sprechen",
    titleAr: "التحدث عن أفراد العائلة والأبناء",
    emoji: "👨‍👩‍👧‍👦",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wohnst du allein oder mit deiner Familie?", textAr: "مرحباً! هل تسكن بمفردك أم مع عائلتك؟" },
      {
        speaker: "user",
        prompt: "قل أنك متزوج وتسكن مع عائلتك وأبنائك",
        options: [
          { textDe: "Ich bin verheiratet und wohne mit meiner Familie.", textAr: "أنا متزوج وأسكن مع عائلتي.", points: 10 },
          { textDe: "Ich lebe mit meiner Frau und meinen zwei Kindern zusammen.", textAr: "أعيش مع زوجتي وطفليّ الاثنين.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Ah, wie schön! Wie alt sind deine Kinder?", textAr: "آه، ما أجمل هذا! كم تبلغ أعمار أطفالك؟" },
      {
        speaker: "user",
        prompt: "أخبره أن ابنتك عمرها 8 سنوات وابنك عمره 5 سنوات",
        options: [
          { textDe: "Meine Tochter ist acht und mein Sohn ist fünf Jahre alt.", textAr: "ابنتي عمرها ثماني سنوات وابني عمره خمس سنوات.", points: 15 },
          { textDe: "Die Tochter ist 8 Jahre alt und der Sohn ist 5.", textAr: "الابنة عمرها 8 سنوات والابن عمره 5.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Und deine Eltern? Wohnen sie auch hier in Deutschland?", textAr: "ووالداك؟ هل يسكنان أيضاً هنا في ألمانيا؟" },
      {
        speaker: "user",
        prompt: "أخبره أنهما يسكنان في بلدك الأصلي ولكنك تتحدث معهما هاتفياً دائماً",
        options: [
          { textDe: "Nein, meine Eltern wohnen in meiner Heimat. Aber wir telefonieren oft.", textAr: "لا، والداي يسكنان في وطني. لكننا نتحدث هاتفياً كثيراً.", points: 15 },
          { textDe: "Sie wohnen in Ägypten/Syrien. Ich telefoniere jeden Tag mit ihnen.", textAr: "يسكنان في مصر/سوريا. أتحدث معهما هاتفياً كل يوم.", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Das ist gut! Morgen hat meine Schwester Geburtstag. Wir feiern!", textAr: "هذا جيد! غداً عيد ميلاد أختي. نحن نحتفل!" },
      {
        speaker: "user",
        prompt: "هنئ أخته وتمنّ لها عيد ميلاد سعيد",
        options: [
          { textDe: "Herzlichen Glückwunsch zum Geburtstag für deine Schwester!", textAr: "تهانينا الحارة بمناسبة عيد الميلاد لأختك!", points: 15 },
          { textDe: "Alles Gute zum Geburtstag für sie!", textAr: "كل التمنيات الطيبة لعيد ميلادها!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 7: Wohnungssuche ────────────────────────────────
  {
    id: 7,
    ch: 7,
    title: "Eine Wohnung mieten",
    titleAr: "حوار استئجار شقة جديدة",
    emoji: "🏠",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Sie rufen wegen der 3-Zimmer-Wohnung an?", textAr: "نهارك سعيد! هل تتصل بخصوص الشقة ذات الثلاث غرف؟" },
      {
        speaker: "user",
        prompt: "أكد الاتصال وسل عن مساحة الشقة الإجمالية بالامتار",
        options: [
          { textDe: "Ja, genau. Wie groß ist die Wohnung eigentlich?", textAr: "نعم، تماماً. كم تبلغ مساحة الشقة في الواقع؟", points: 10 },
          { textDe: "Guten Tag! Ja, ich interessiere mich für die Wohnung. Wie viele Quadratmeter hat sie?", textAr: "نهارك سعيد! نعم، أنا مهتم بالشقة. كم متراً مربعاً مساحتها؟", points: 15 }
        ]
      },
      { speaker: "partner", textDe: "Die Wohnung ist 85 Quadratmeter groß und hat auch einen Balkon.", textAr: "تبلغ مساحة الشقة 85 متراً مربعاً وبها شرفة أيضاً." },
      {
        speaker: "user",
        prompt: "اسأل عن الإيجار البارد وتكلفة الخدمات الإضافية والكهرباء",
        options: [
          { textDe: "Wie hoch ist die Kaltmiete? Und wie hoch sind die Nebenkosten?", textAr: "كم يبلغ الإيجار البارد؟ وكم تبلغ تكاليف الخدمات الإضافية؟", points: 15 },
          { textDe: "Was kostet die Miete warm?", textAr: "كم يبلغ الإيجار الكلي (الدافئ)؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Die Kaltmiete ist 750 Euro. Die Nebenkosten betragen 180 Euro.", textAr: "الإيجار البارد هو 750 يورو. والخدمات الإضافية تبلغ 180 يورو." },
      {
        speaker: "user",
        prompt: "اسأل في أي طابق تقع الشقة وهل تحتوي البناية على مصعد",
        options: [
          { textDe: "In welchem Stock ist die Wohnung? Gibt es einen Aufzug?", textAr: "في أي طابق تقع الشقة؟ وهل هناك مصعد؟", points: 15 },
          { textDe: "Liegt die Wohnung im Erdgeschoss oder im ersten Stock?", textAr: "هل تقع الشقة في الطابق الأرضي أم الطابق الأول؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Die Wohnung liegt im dritten Stock. Aber es gibt leider keinen Aufzug.", textAr: "تقع الشقة في الطابق الثالث. ولكن للأسف لا يوجد مصعد." },
      {
        speaker: "user",
        prompt: "قل أنك تجد الشقة مناسبة وسل عن إمكانية معاينتها قريباً",
        options: [
          { textDe: "Das ist okay für mich. Kann ich die Wohnung besichtigen?", textAr: "هذا لا بأس به بالنسبة لي. هل يمكنني معاينة الشقة؟", points: 15 },
          { textDe: "Wann ist eine Besichtigung möglich? Ich möchte sie sehen.", textAr: "متى تكون المعاينة ممكنة؟ أود رؤيتها.", points: 15 }
        ]
      }
    ]
  },

  // ── CHAPTER 8: Beim Arzt ────────────────────────────────────
  {
    id: 8,
    ch: 8,
    title: "Beim Arzt",
    titleAr: "عند الطبيب وشرح الحالة المرضية",
    emoji: "🩺",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Was fehlt Ihnen denn?", textAr: "نهارك سعيد! ما الذي تشكو منه؟" },
      {
        speaker: "user",
        prompt: "اشرح للطبيب أنك متعب ولديك صداع شديد وحمى",
        options: [
          { textDe: "Guten Tag, Herr Doktor. Ich fühle mich sehr schlecht. Ich habe Kopfschmerzen und Fieber.", textAr: "نهارك سعيد يا دكتور. أشعر بسوء شديد. لدي صداع وحمى.", points: 15 },
          { textDe: "Ich bin krank. Mein Kopf tut weh und ich habe Fieber.", textAr: "أنا مريض. رأسي يؤلمني ولدي سخونة.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Verstehe. Haben Sie auch Halsschmerzen oder Husten?", textAr: "فهمت. هل تشكو أيضاً من ألم في الحلق أو سعال؟" },
      {
        speaker: "user",
        prompt: "أجبه بنعم، حلقك يؤلمك أيضاً ولا تستطيع النوم جيداً",
        options: [
          { textDe: "Ja, mein Hals tut auch weh und ich kann nicht schlafen.", textAr: "نعم، حلقي يؤلمني أيضاً ولا أستطيع النوم.", points: 15 },
          { textDe: "Ja, ich habe Halsschmerzen seit gestern.", textAr: "نعم، لدي ألم في الحلق منذ الأمس.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sie haben eine starke Erkältung. Ich verschreibe Ihnen Medikamente.", textAr: "لديك نزلة برد شديدة. سأكتب لك وصفة طبية للدواء." },
      {
        speaker: "user",
        prompt: "اسأل الطبيب كم مرة في اليوم يجب أن تأخذ هذا الدواء",
        options: [
          { textDe: "Wie oft am Tag muss ich die Medikamente nehmen?", textAr: "كم مرة في اليوم يجب أن آخذ الأدوية؟", points: 15 },
          { textDe: "Wann soll ich das Medikament einnehmen?", textAr: "متى يجب علي تناول الدواء؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Zweimal täglich, morgens und abends nach dem Essen. Gute Besserung!", textAr: "مرتين يومياً، صباحاً ومساءً بعد تناول الطعام. أتمنى لك الشفاء العاجل!" },
      {
        speaker: "user",
        prompt: "اشكره وودعه بأدب",
        options: [
          { textDe: "Vielen Dank, Herr Doktor. Auf Wiedersehen!", textAr: "شكراً جزيلاً يا دكتور. مع السلامة!", points: 10 },
          { textDe: "Danke schön für Ihre Hilfe. Tschüss!", textAr: "شكراً جزيلاً لمساعدتك. مع السلامة!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 9: Wegbeschreibung ──────────────────────────────
  {
    id: 9,
    ch: 9,
    title: "Nach dem Weg fragen",
    titleAr: "السؤال عن الطريق ووصفه",
    emoji: "🗺️",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Entschuldigung! Wie komme ich zum Bahnhof?", textAr: "معذرة! كيف أصل إلى محطة القطار؟" },
      {
        speaker: "user",
        prompt: "أخبر السائل أن يذهب للأمام مباشرة ثم ينعطف يساراً",
        options: [
          { textDe: "Gehen Sie geradeaus und dann die nächste Straße links.", textAr: "اذهب مباشرة ثم خذ الشارع التالي يساراً.", points: 15 },
          { textDe: "Gehen Sie zuerst geradeaus, dann links abbiegen.", textAr: "اذهب أولاً مباشرة، ثم انعطف يساراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Ist der Bahnhof weit von hier?", textAr: "هل المحطة بعيدة من هنا؟" },
      {
        speaker: "user",
        prompt: "أخبره أنه ليس بعيداً، فقط خمس دقائق مشياً على الأقدام",
        options: [
          { textDe: "Nein, es ist ganz nah. Nur fünf Minuten zu Fuß.", textAr: "لا، إنها قريبة جداً. فقط خمس دقائق مشياً.", points: 15 },
          { textDe: "Es ist nicht weit, ungefähr 500 Meter.", textAr: "ليست بعيدة، حوالي 500 متر.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Kann ich auch den Bus nehmen?", textAr: "هل يمكنني أيضاً ركوب الحافلة؟" },
      {
        speaker: "user",
        prompt: "أخبره بنعم، حافلة رقم 100 تذهب مباشرة إلى هناك",
        options: [
          { textDe: "Ja, der Bus Linie 100 fährt direkt dorthin.", textAr: "نعم، الحافلة رقم 100 تذهب مباشرة إلى هناك.", points: 15 },
          { textDe: "Ja, nehmen Sie den Bus Nummer 100.", textAr: "نعم، اركب الحافلة رقم 100.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Super! Vielen Dank für Ihre Hilfe!", textAr: "رائع! شكراً جزيلاً لمساعدتك!" },
      {
        speaker: "user",
        prompt: "رد عليه بـ (على الرحب والسعة) وتمنّ له رحلة سعيدة",
        options: [
          { textDe: "Gern geschehen! Gute Reise!", textAr: "على الرحب والسعة! رحلة سعيدة!", points: 10 },
          { textDe: "Bitte sehr! Schönen Tag noch!", textAr: "عفواً! طاب يومك!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 10: Freizeit und Hobbys ──────────────────────────
  {
    id: 10,
    ch: 10,
    title: "Freizeitpläne machen",
    titleAr: "التخطيط لوقت الفراغ والهوايات",
    emoji: "⚽",
    difficulty: "Einfach",
    turns: [
      { speaker: "partner", textDe: "Hallo! Was machst du am liebsten in deiner Freizeit?", textAr: "مرحباً! ما الذي تفضل فعله في وقت فراغك؟" },
      {
        speaker: "user",
        prompt: "أخبره أنك تحب لعب كرة القدم وسماع الموسيقى",
        options: [
          { textDe: "Ich spiele sehr gern Fußball und höre gern Musik.", textAr: "أحب لعب كرة القدم كثيراً وسماع الموسيقى.", points: 10 },
          { textDe: "In meiner Freizeit spiele ich Fußball oder lese ein Buch.", textAr: "في وقت فراغي ألعب كرة القدم أو أقرأ كتاباً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Fußball ist toll! Wir spielen am Samstag. Hast du Lust mitzukommen?", textAr: "كرة القدم رائعة! سنلعب يوم السبت. هل تود المجيء معنا؟" },
      {
        speaker: "user",
        prompt: "أبدِ إعجابك بالفكرة وسل في أي ساعة ستبدأ اللعب",
        options: [
          { textDe: "Ja, sehr gerne! Um wie viel Uhr trefft ihr euch?", textAr: "نعم، بكل سرور! في أي ساعة ستلتقون؟", points: 15 },
          { textDe: "Das macht Spaß! Wann spielt ihr am Samstag?", textAr: "هذا ممتع! متى ستلعبون يوم السبت؟", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Wir spielen am Samstag um 15 Uhr im Park. Bring einfach Sportschuhe mit.", textAr: "سنلعب السبت الساعة الثالثة عصراً في الحديقة. أحضر معك فقط حذاءً رياضياً." },
      {
        speaker: "user",
        prompt: "أكد حضورك بالموعد المحدد وقل أنك ستأتي بالتأكيد",
        options: [
          { textDe: "Alles klar! Ich komme am Samstag um 15 Uhr. Bis dann!", textAr: "واضح تماماً! سآتي السبت في الثالثة. أراك حينها!", points: 15 },
          { textDe: "Prima, ich bin am Samstag um drei Uhr da.", textAr: "ممتاز، سأكون هناك السبت الساعة الثالثة.", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 11: Arbeit und Beruf ────────────────────────────
  {
    id: 11,
    ch: 11,
    title: "Über Berufe sprechen",
    titleAr: "التحدث عن المهن والوظائف",
    emoji: "💼",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Hallo! Was sind Sie von Beruf?", textAr: "مرحباً! ما هي مهنتك؟" },
      {
        speaker: "user",
        prompt: "أخبره بمهنتك (مثلاً مهندس حاسوب) والشركة التي تعمل بها",
        options: [
          { textDe: "Ich bin Ingenieur von Beruf und arbeite bei einer Computerfirma.", textAr: "أنا مهندس كمبيوتر وأعمل في شركة حاسوب.", points: 15 },
          { textDe: "Ich arbeite als Verkäufer in einem Supermarkt.", textAr: "أعمل كبائع في سوبرماركت.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das ist interessant! Wie viele Stunden arbeiten Sie pro Woche?", textAr: "هذا مثير للاهتمام! كم ساعة تعمل في الأسبوع؟" },
      {
        speaker: "user",
        prompt: "قل أنك تعمل 40 ساعة في الأسبوع وعملك ممتع ولكنه متعب",
        options: [
          { textDe: "Ich arbeite 40 Stunden pro Woche. Die Arbeit macht Spaß, aber sie ist stressig.", textAr: "أعمل 40 ساعة في الأسبوع. العمل ممتع لكنه متعب/مجهد.", points: 15 },
          { textDe: "Ich arbeite vierzig Stunden. Mein Beruf gefällt mir sehr.", textAr: "أعمل 40 ساعة. عملي يعجبني كثيراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Verstehe. Und was ist Ihr Traumjob?", textAr: "فهمت. وما هي وظيفة أحلامك؟" },
      {
        speaker: "user",
        prompt: "قل أن وظيفة أحلامك هي أن تعمل كمدير أو مصمم برامج وتكسب الكثير من المال",
        options: [
          { textDe: "Mein Traumjob ist Softwareentwickler. Ich möchte flexibel arbeiten.", textAr: "وظيفة أحلامي هي مطور برمجيات. أود أن أعمل بمرونة.", points: 15 },
          { textDe: "Ich möchte ein erfolgreicher Koch sein und mein eigenes Restaurant haben.", textAr: "أود أن أكون طباخاً ناجحاً وأمتلك مطعمي الخاص.", points: 15 }
        ]
      }
    ]
  },

  // ── CHAPTER 12: Im Restaurant ──────────────────────────────
  {
    id: 12,
    ch: 12,
    title: "Im Restaurant",
    titleAr: "في المطعم وطلب الطعام والدفع",
    emoji: "🍽️",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Guten Abend! Haben Sie einen Tisch reserviert?", textAr: "مساء الخير! هل قمت بحجز طاولة؟" },
      {
        speaker: "user",
        prompt: "أجب بنعم، حجزت طاولة لشخصين باسم (أحمد)",
        options: [
          { textDe: "Guten Abend! Ja, wir haben einen Tisch für zwei Personen auf den Namen Ahmad reserviert.", textAr: "مساء الخير! نعم، حجزنا طاولة لشخصين باسم أحمد.", points: 15 },
          { textDe: "Ja, einen Tisch für zwei Personen. Der Name ist Ahmad.", textAr: "نعم، طاولة لشخصين. الاسم هو أحمد.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sehr wohl, Herr Ahmad. Hier ist Ihr Tisch. Was möchten Sie trinken?", textAr: "على الرحب والسعة يا سيد أحمد. هنا طاولتك. ماذا تريد أن تشرب؟" },
      {
        speaker: "user",
        prompt: "اطلب زجاجة مياه معدنية وعصير تفاح",
        options: [
          { textDe: "Ich möchte eine Flasche Mineralwasser und einen Apfelsaft, bitte.", textAr: "أود زجاجة مياه معدنية وعصير تفاح من فضلك.", points: 15 },
          { textDe: "Bringen Sie mir bitte ein Wasser und einen Saft.", textAr: "أحضر لي من فضلك ماءً وعصيراً.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Sehr gerne. Und was möchten Sie essen?", textAr: "بكل سرور. وماذا تود أن تأكل؟" },
      {
        speaker: "user",
        prompt: "اطلب حساء الطماطم كمقبلات وشنيتزل كطبق رئيسي",
        options: [
          { textDe: "Als Vorspeise die Tomatensuppe und als Hauptspeise das Schnitzel.", textAr: "كمقبلات شوربة الطماطم وكطبق رئيسي الشنيتزل.", points: 15 },
          { textDe: "Ich nehme eine Suppe und ein Schnitzel, bitte.", textAr: "سآخذ شوربة وشنيتزل من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Kommt sofort. (Später...) War das Essen lecker? Möchten Sie bezahlen?", textAr: "سيأتي فوراً. (لاحقاً...) هل كان الطعام لذيذاً؟ هل تريد الدفع؟" },
      {
        speaker: "user",
        prompt: "امتدح الطعام واطلب الفاتورة (الحساب)",
        options: [
          { textDe: "Ja, das Essen war fantastisch! Zahlen, bitte!", textAr: "نعم، كان الطعام رائعاً! الحساب من فضلك!", points: 15 },
          { textDe: "Es war sehr lecker. Die Rechnung, bitte.", textAr: "كان لذيذاً جداً. الفاتورة من فضلك.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das macht zusammen 27 Euro 80 Cent.", textAr: "المجموع الكلي هو 27 يورو و 80 سنتاً." },
      {
        speaker: "user",
        prompt: "أعطه 30 يورو وقل له أن يحتفظ بالباقي (إكرامية)",
        options: [
          { textDe: "Hier sind 30 Euro. Stimmt so!", textAr: "تفضل، هذه 30 يورو. احتفظ بالباقي!", points: 15 },
          { textDe: "Stimmt so. Machen Sie 30 Euro.", textAr: "اجعلها 30 يورو واحتفظ بالباقي.", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 13: Beim Hausarzt ──────────────────────────────
  {
  "id": 13,
  "ch": 13,
  "title": "In der Kleiderboutique",
  "titleAr": "في محل الملابس",
  "titleEn": "Shopping for clothes in a boutique",
  "emoji": "👕",
  "difficulty": "Mittel",
  "titleTr": "Bir butikten kıyafet alışverişi",
  "titleRo": "Cumpărături pentru haine într-un butic",
  "titleBs": "Kupovina odjeće u butiku",
  "titleEs": "Comprando ropa en una boutique",
  "titleBg": "Пазаруване на дрехи в бутик",
  "titleEl": "Αγορά ρούχων σε μπουτίκ",
  "turns": [
    {
      "speaker": "partner",
      "textDe": "Guten Tag! Kann ich Ihnen helfen?",
      "textEn": "Good day! Can I help you?",
      "textAr": "يوم جيد! أيمكنني مساعدتك؟",
      "textTr": "İyi günler! Yardımcı olabilir miyim?",
      "textRo": "Bună ziua! Vă pot ajuta?",
      "textBs": "Dobar dan! Mogu li vam pomoći?",
      "textEs": "¡Buen día! ¿Puedo ayudarle?",
      "textBg": "Добър ден! мога ли да ти помогна",
      "textEl": "Καλημέρα! Μπορώ να σε βοηθήσω;"
    },
    {
      "speaker": "user",
      "prompt": "أجب بالتحية وقل للبائع أنك تبحث عن سترة (جاكيت) زرقاء",
      "promptEn": "Greet the clerk and say that you are looking for a blue jacket.",
      "promptAr": "أجب بالتحية وقل للبائع أنك تبحث عن سترة (جاكيت) زرقاء",
      "promptTr": "Görevliyi selamlayın ve mavi bir ceket aradığınızı söyleyin.",
      "promptRo": "Salutați funcționarul și spuneți că sunteți în căutarea unui sacou albastru.",
      "promptBs": "Pozdravite službenika i recite da tražite plavu jaknu.",
      "promptEs": "Salude al empleado y dígale que está buscando una chaqueta azul.",
      "promptBg": "Поздравете служителя и кажете, че търсите синьо яке.",
      "promptEl": "Χαιρετίστε τον υπάλληλο και πείτε ότι ψάχνετε για ένα μπλε σακάκι.",
      "options": [
        {
          "textDe": "Guten Tag! Ja, bitte. Ich suche eine blaue Jacke.",
          "textEn": "Good day! Yes, please. I am looking for a blue jacket.",
          "textAr": "يوم جيد! نعم من فضلك. أنا أبحث عن سترة زرقاء.",
          "points": 15,
          "textTr": "İyi günler! Evet lütfen. Mavi bir ceket arıyorum.",
          "textRo": "Bună ziua! Da, te rog. Caut o jacheta albastra.",
          "textBs": "Dobar dan! Da, molim. Tražim plavu jaknu.",
          "textEs": "¡Buen día! Sí, por favor. Busco una chaqueta azul.",
          "textBg": "Добър ден! да моля Търся синьо яке.",
          "textEl": "Καλημέρα! Ναι, παρακαλώ. Ψάχνω για μπλε σακάκι."
        },
        {
          "textDe": "Hallo! Haben Sie Jacken in Blau?",
          "textEn": "Hello! Do you have jackets in blue?",
          "textAr": "مرحبًا! هل لديكم سترات باللون الأزرق؟",
          "points": 10,
          "textTr": "Merhaba! Mavi ceketiniz var mı?",
          "textRo": "Buna ziua! Aveți jachete în albastru?",
          "textBs": "Zdravo! Imate li plave jakne?",
          "textEs": "¡Hola! ¿Tienes chaquetas en azul?",
          "textBg": "здравей Имате ли якета в синьо?",
          "textEl": "Γειά σου! Έχεις μπουφάν σε μπλε χρώμα;"
        }
      ]
    },
    {
      "speaker": "partner",
      "textDe": "Welche Größe tragen Sie denn?",
      "textEn": "What size do you wear?",
      "textAr": "ما الحجم الذي ترتديه؟",
      "textTr": "Kaç beden giyiyorsun?",
      "textRo": "Ce marime porti?",
      "textBs": "Koju veličinu nosiš?",
      "textEs": "¿Qué talla usas?",
      "textBg": "какъв размер носиш",
      "textEl": "Τι νούμερο φοράς;"
    },
    {
      "speaker": "user",
      "prompt": "قل له أنك ترتدي مقاس M عادةً، واسأله إذا كان بإمكانك قياسها",
      "promptEn": "Tell him you usually wear size M, and ask if you can try it on.",
      "promptAr": "قل له أنك ترتدي مقاس M عادةً، واسأله إذا كان بإمكانك قياسها",
      "promptTr": "Ona genellikle M beden giydiğinizi söyleyin ve deneyip deneyemeyeceğinizi sorun.",
      "promptRo": "Spune-i că porți de obicei mărimea M și întreabă-l dacă o poți încerca.",
      "promptBs": "Recite mu da obično nosite veličinu M i pitajte da li možete da je isprobate.",
      "promptEs": "Dile que normalmente usas talla M y pregúntale si puedes probártela.",
      "promptBg": "Кажете му, че обикновено носите размер М, и попитайте дали можете да го пробвате.",
      "promptEl": "Πείτε του ότι φοράτε συνήθως νούμερο Μ και ρωτήστε αν μπορείτε να το δοκιμάσετε.",
      "options": [
        {
          "textDe": "Ich trage normalerweise Größe M. Kann ich diese hier anprobieren?",
          "textEn": "I usually wear size M. Can I try this one on?",
          "textAr": "أرتدي عادةً المقاس M. هل يمكنني تجربة هذا المقاس؟",
          "points": 15,
          "textTr": "Genelde M beden giyiyorum. Bunu deneyebilir miyim?",
          "textRo": "De obicei port mărimea M. Pot să-l încerc pe acesta?",
          "textBs": "Obično nosim veličinu M. Mogu li probati ovu?",
          "textEs": "Normalmente uso talla M. ¿Puedo probarme este?",
          "textBg": "Обикновено нося размер M. Мога ли да пробвам този?",
          "textEl": "Συνήθως φοράω νούμερο M. Μπορώ να το δοκιμάσω;"
        },
        {
          "textDe": "Größe M. Wo kann ich das anprobieren?",
          "textEn": "Size M. Where can I try this on?",
          "textAr": "الحجم M. أين يمكنني تجربة ذلك؟",
          "points": 10,
          "textTr": "M beden. Bunu nerede deneyebilirim?",
          "textRo": "Mărimea M. Unde pot încerca asta?",
          "textBs": "Veličina M. Gdje mogu ovo isprobati?",
          "textEs": "Talla M. ¿Dónde puedo probarme esto?",
          "textBg": "Размер M. Къде мога да го пробвам?",
          "textEl": "Μέγεθος M. Πού μπορώ να το δοκιμάσω;"
        }
      ]
    },
    {
      "speaker": "partner",
      "textDe": "Ja, natürlich. Die Umkleidekabine ist dort hinten. Wie passt die Jacke?",
      "textEn": "Yes, of course. The changing room is back there. How does the jacket fit?",
      "textAr": "نعم بالطبع. غرفة تغيير الملابس عادت إلى هناك كيف تناسب السترة؟",
      "textTr": "Evet elbette. Soyunma odası arka tarafta. Ceket nasıl oluyor?",
      "textRo": "Da, desigur. Vestiarul este acolo înapoi. Cum se potrivește jacheta?",
      "textBs": "Da, naravno. Svlačionica je tamo pozadi. Kako pristaje jakna?",
      "textEs": "Sí, claro. El vestuario está ahí atrás. ¿Cómo le queda la chaqueta?",
      "textBg": "да разбира се Съблекалнята е там отзад. Как стои якето?",
      "textEl": "Ναι, φυσικά. Τα αποδυτήρια είναι πίσω εκεί. Πώς ταιριάζει το σακάκι;"
    },
    {
      "speaker": "user",
      "prompt": "قل له أن الجاكيت مناسب تماماً، لكنك تجد السعر مرتفعاً قليلاً، واسأله إن كان هناك خصم",
      "promptEn": "Say the jacket fits perfectly, but you find the price a bit high, and ask if there is a discount.",
      "promptAr": "قل له أن الجاكيت مناسب تماماً، لكنك تجد السعر مرتفعاً قليلاً، واسأله إن كان هناك خصم",
      "promptTr": "Diyelim ki ceket tam oldu ama fiyatı biraz yüksek buluyorsunuz ve indirim var mı diye soruyorsunuz.",
      "promptRo": "Spune că jacheta se potrivește perfect, dar prețul ți se pare cam mare și întreabă dacă există o reducere.",
      "promptBs": "Recimo da vam jakna savršeno stoji, ali da vam je cijena malo visoka, pa pitajte ima li popusta.",
      "promptEs": "Digamos que la chaqueta le queda perfecta, pero el precio le parece un poco alto y pregunta si hay algún descuento.",
      "promptBg": "Кажете, че якето стои идеално, но намирате цената за малко висока и попитайте дали има отстъпка.",
      "promptEl": "Πείτε ότι το σακάκι ταιριάζει τέλεια, αλλά βρίσκετε την τιμή λίγο υψηλή και ρωτήστε αν υπάρχει έκπτωση.",
      "options": [
        {
          "textDe": "Die Jacke passt perfekt, aber ich finde den Preis ein bisschen hoch. Gibt es einen Rabatt?",
          "textEn": "The jacket fits perfectly, but I find the price a bit high. Is there a discount?",
          "textAr": "السترة مناسبة تمامًا، لكني أجد السعر مرتفعًا بعض الشيء. هل هناك خصم؟",
          "points": 15,
          "textTr": "Ceket tam oldu ama fiyatı biraz yüksek buldum. İndirim var mı?",
          "textRo": "Jacheta se potrivește perfect, dar prețul mi se pare cam mare. Există o reducere?",
          "textBs": "Jakna savršeno stoji, ali smatram da je cijena malo previsoka. Ima li popusta?",
          "textEs": "La chaqueta me queda perfecta, pero el precio me parece un poco elevado. ¿Hay algún descuento?",
          "textBg": "Якето стои идеално, но ми се струва малко висока цената. Има ли отстъпка?",
          "textEl": "Το σακάκι ταιριάζει τέλεια, αλλά βρίσκω την τιμή λίγο υψηλή. Υπάρχει έκπτωση;"
        },
        {
          "textDe": "Sie passt gut, aber sie ist teuer. Gibt es Rabatt?",
          "textEn": "It fits well, but it's expensive. Is there a discount?",
          "textAr": "تناسبها بشكل جيد، ولكنها مكلفة. هل هناك خصم؟",
          "points": 10,
          "textTr": "İyi uyuyor, ancak pahalı. İndirim var mı?",
          "textRo": "Se potrivește bine, dar e scump. Există o reducere?",
          "textBs": "Dobro stoji, ali je skupo. Ima li popusta?",
          "textEs": "Encaja bien, pero es caro. ¿Hay algún descuento?",
          "textBg": "Стои добре, но е скъпо. Има ли отстъпка?",
          "textEl": "Ταιριάζει καλά, αλλά είναι ακριβό. Υπάρχει έκπτωση;"
        }
      ]
    },
    {
      "speaker": "partner",
      "textDe": "Heute haben wir 10% Rabatt auf alle Jacken. Die Farbe steht Ihnen auch sehr gut!",
      "textEn": "Today we have 10% discount on all jackets. The color also suits you very well!",
      "textAr": "اليوم لدينا خصم 10% على جميع السترات. اللون يناسبك أيضًا بشكل جيد جدًا!",
      "textTr": "Bugün tüm ceketlerde %10 indirimimiz var. Rengi de sana çok yakışıyor!",
      "textRo": "Astăzi avem 10% reducere la toate jachetele. Culoarea ti se potriveste foarte bine!",
      "textBs": "Danas imamo 10% popusta na sve jakne. Boja vam takođe odlično stoji!",
      "textEs": "Hoy tenemos 10% de descuento en todas las chaquetas. ¡El color también te sienta muy bien!",
      "textBg": "Днес имаме 10% намаление на всички якета. Цветът също много ти отива!",
      "textEl": "Σήμερα έχουμε 10% έκπτωση σε όλα τα μπουφάν. Σου πάει πολύ και το χρώμα!"
    },
    {
      "speaker": "user",
      "prompt": "عبر عن سعادتك، وقل أنك ستأخذها وستدفع عند الصندوق",
      "promptEn": "Express happiness, say you will take it and pay at the cash register.",
      "promptAr": "عبر عن سعادتك، وقل أنك ستأخذها وستدفع عند الصندوق",
      "promptTr": "Mutluluğunuzu ifade edin, alacağınızı söyleyin ve kasada ödeyin.",
      "promptRo": "Exprimați fericirea, spuneți că o veți lua și plătiți la casa de marcat.",
      "promptBs": "Izrazite sreću, recite da ćete uzeti i platiti na kasi.",
      "promptEs": "Expresa felicidad, di que lo tomarás y pagarás en la caja registradora.",
      "promptBg": "Изразете щастието, кажете, че ще го вземете и платете на касата.",
      "promptEl": "Εκφράστε την ευτυχία, πείτε ότι θα το πάρετε και θα πληρώσετε στο ταμείο.",
      "options": [
        {
          "textDe": "Super! Dann nehme ich sie. Ich bezahle an der Kasse.",
          "textEn": "Super! Then I'll take it. I will pay at the register.",
          "textAr": "ممتاز! ثم سوف أعتبر. سأدفع في السجل.",
          "points": 10,
          "textTr": "Süper! O zaman onu alacağım. Ödemeyi kasada yapacağım.",
          "textRo": "Super! Atunci o voi lua. Voi plăti la registru.",
          "textBs": "Super! Onda ću je uzeti. Platiću na registru.",
          "textEs": "¡Súper! Entonces lo tomaré. Pagaré en caja.",
          "textBg": "Супер! Тогава ще го взема. Ще платя на касата.",
          "textEl": "Σούπερ! Τότε θα το πάρω. Θα πληρώσω στο μητρώο."
        },
        {
          "textDe": "Das ist toll! Ich kaufe die Jacke.",
          "textEn": "That's great! I'll buy the jacket.",
          "textAr": "هذا عظيم! سأشتري السترة.",
          "points": 10,
          "textTr": "Bu harika! Ceketi satın alacağım.",
          "textRo": "Grozav! O să cumpăr jacheta.",
          "textBs": "To je super! Ja ću kupiti jaknu.",
          "textEs": "¡Genial! Compraré la chaqueta.",
          "textBg": "Това е страхотно! Ще купя якето.",
          "textEl": "Αυτό είναι υπέροχο! Θα αγοράσω το σακάκι."
        }
      ]
    }
  ]
},

  // ── CHAPTER 21: Bewerbung & Beruf ──────────────────────────
  {
    id: 14,
    ch: 21,
    title: "Bewerbung & Beruf",
    titleAr: "مقابلة العمل والحديث عن المهارات",
    emoji: "💼",
    difficulty: "Schwer",
    turns: [
      { speaker: "partner", textDe: "Guten Tag! Erzählen Sie mir bitte etwas über Ihre Berufserfahrung.", textAr: "نهارك سعيد! يرجى إخباري بشيء عن خبرتك المهنية.", textEn: "Good day! Please tell me something about your professional experience." },
      {
        speaker: "user",
        prompt: "قل أنك عملت كمطور برمجيات لثلاث سنوات في شركة تقنية",
        promptEn: "Say that you worked as a software developer for three years at a tech company.",
        options: [
          { textDe: "Guten Tag! Ich habe drei Jahre lang als Software-Entwickler bei einer großen IT-Firma gearbeitet.", textAr: "نهارك سعيد! لقد عملت كمطور برمجيات لمدة ثلاث سنوات في شركة تقنية كبيرة.", textEn: "Good day! I worked as a software developer for three years at a large IT company.", points: 15 },
          { textDe: "Ich habe als Programmierer drei Jahre gearbeitet.", textAr: "عملت كمبرمج لمدة ثلاث سنوات.", textEn: "I worked as a programmer for three years.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das ist interessant. Warum bewerben Sie sich bei uns?", textAr: "هذا مثير للاهتمام. لماذا تتقدم بطلب عمل لدينا؟", textEn: "That's interesting. Why are you applying to us?" },
      {
        speaker: "user",
        prompt: "عبر عن رغبتك بالعمل لديهم لأن بيئة العمل ممتازة وتوفر ساعات مرنة",
        promptEn: "Express your desire to work for them because the work environment is excellent and offers flexible hours.",
        options: [
          { textDe: "Ich möchte bei Ihnen arbeiten, weil Ihre Firma eine sehr gute Arbeitsatmosphäre und flexible Arbeitszeiten bietet.", textAr: "أود العمل لديكم لأن شركتكم توفر بيئة عمل جيدة جداً وساعات عمل مرنة.", textEn: "I would like to work for you because your company offers a very good working atmosphere and flexible working hours.", points: 15 },
          { textDe: "Ihre Firma ist sehr gut. Ich möchte flexible Zeiten haben.", textAr: "شركتكم جيدة جداً. أود الحصول على ساعات عمل مرنة.", textEn: "Your company is very good. I want to have flexible hours.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Wir suchen jemanden mit guten Englischkenntnissen. Sprechen Sie Englisch?", textAr: "نحن نبحث عن شخص لديه معرفة جيدة بالإنجليزية. هل تتحدث الإنجليزية؟", textEn: "We are looking for someone with good English skills. Do you speak English?" },
      {
        speaker: "user",
        prompt: "أكد أنك تتحدث الإنجليزية بطلاقة وتدرس الألمانية الآن",
        promptEn: "Confirm that you speak fluent English and are currently studying German.",
        options: [
          { textDe: "Ja, ich spreche fließend Englisch und lerne jetzt fleißig Deutsch für Niveau A2.", textAr: "نعم، أتحدث الإنجليزية بطلاقة وأدرس الألمانية بجد الآن لمستوى A2.", textEn: "Yes, I speak fluent English and am currently studying German diligently for A2 level.", points: 15 },
          { textDe: "Ja, mein Englisch ist sehr gut und ich lerne Deutsch.", textAr: "نعم، إنجليزيتي ممتازة وأنا أتعلم الألمانية.", textEn: "Yes, my English is very good and I am learning German.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das klingt hervorragend! Wir melden uns nächste Woche bei Ihnen.", textAr: "هذا يبدو ممتازاً! سنقوم بالتواصل معك في الأسبوع المقبل.", textEn: "That sounds excellent! We will get in touch with you next week." },
      {
        speaker: "user",
        prompt: "عبر عن شكرك وتمنياتك بيوم طيب",
        promptEn: "Express your thanks and wish them a nice day.",
        options: [
          { textDe: "Vielen Dank für das Gespräch! Ich wünsche Ihnen einen schönen Tag!", textAr: "شكراً جزيلاً على هذه المقابلة! أتمنى لك يوماً طيباً!", textEn: "Thank you very much for the interview! I wish you a nice day!", points: 15 },
          { textDe: "Vielen Dank! Schönen Tag noch!", textAr: "شكراً جزيلاً! يوم طيب!", textEn: "Thank you! Have a nice day!", points: 10 }
        ]
      }
    ]
  },

  // ── CHAPTER 20: Ein unvergesslicher Urlaub ──────────────────
  {
    id: 15,
    ch: 20,
    title: "Ein unvergesslicher Urlaub",
    titleAr: "التحدث عن عطلة ماضية وتجربة سفر",
    emoji: "✈️",
    difficulty: "Mittel",
    turns: [
      { speaker: "partner", textDe: "Hallo! Wohin bist du im letzten Urlaub gereist?", textAr: "مرحباً! إلى أين سافرت في العطلة الماضية؟", textEn: "Hello! Where did you travel to in your last vacation?" },
      {
        speaker: "user",
        prompt: "أخبره أنك سافرت إلى ميونخ مع عائلتك بالسيارة",
        promptEn: "Tell him you traveled to Munich with your family by car.",
        options: [
          { textDe: "Hallo! Im letzten Urlaub bin ich mit meiner Familie nach München gereist. Wir sind mit dem Auto gefahren.", textAr: "مرحباً! في العطلة الماضية سافرت مع عائلتي إلى ميونخ. لقد ذهبنا بالسيارة.", textEn: "Hello! On my last vacation I traveled to Munich with my family. We went by car.", points: 15 },
          { textDe: "Ich bin mit der Familie nach München gefahren.", textAr: "سافرت مع العائلة إلى ميونخ.", textEn: "I went with my family to Munich.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "München ist wunderschön! Was habt ihr dort gemacht?", textAr: "ميونخ جميلة جداً! ماذا فعلتم هناك؟", textEn: "Munich is beautiful! What did you do there?" },
      {
        speaker: "user",
        prompt: "قل أنكم زرتم الحديقة الإنجليزية وقمتم بنزهة هناك",
        promptEn: "Say that you visited the English Garden and had a picnic there.",
        options: [
          { textDe: "Wir haben viele Sehenswürdigkeiten besucht und im Englischen Garten ein Picknick gemacht.", textAr: "لقد زرنا الكثير من المعالم السياحية وقمنا بنزهة في الحديقة الإنجليزية.", textEn: "We visited many sights and had a picnic in the English Garden.", points: 15 },
          { textDe: "Wir haben den Englischen Garten gesehen und dort gegessen.", textAr: "شاهدنا الحديقة الإنجليزية وأكلنا هناك.", textEn: "We saw the English Garden and ate there.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Toll! Wie war das deutsche Essen? Hat es geschmeckt?", textAr: "رائع! كيف كان الطعام الألماني؟ هل كان لذيذاً؟", textEn: "Great! How was the German food? Did you like it?" },
      {
        speaker: "user",
        prompt: "أجب بأن الطعام كان لذيذاً جداً وخاصة الشنيتزل",
        promptEn: "Answer that the food was very delicious, especially the Schnitzel.",
        options: [
          { textDe: "Ja, das deutsche Essen war wirklich lecker, besonders das Schnitzel hat uns super geschmeckt!", textAr: "نعم، الطعام الألماني كان لذيذاً حقاً، وخاصة الشنيتزل أعجبنا كثيراً!", textEn: "Yes, the German food was really delicious, especially the Schnitzel tasted great to us!", points: 15 },
          { textDe: "Das Essen war gut. Das Schnitzel war lecker.", textAr: "الطعام كان جيداً. الشنيتزل كان لذيذاً.", textEn: "The food was good. The Schnitzel was delicious.", points: 10 }
        ]
      },
      { speaker: "partner", textDe: "Das freut mich! Es war sicher eine unvergessliche Reise.", textAr: "يسرني ذلك! من المؤكد أنها كانت رحلة لا تُنسى.", textEn: "I'm glad! It must have been an unforgettable trip." },
      {
        speaker: "user",
        prompt: "وافق على كلامه وقل أنها كانت تجربة رائعة",
        promptEn: "Agree with him and say it was a great experience.",
        options: [
          { textDe: "Ja, absolut! Die Reise war ein unvergessliches Erlebnis für uns alle.", textAr: "نعم، تماماً! كانت الرحلة تجربة لا تُنسى لنا جميعاً.", textEn: "Yes, absolutely! The trip was an unforgettable experience for all of us.", points: 15 },
          { textDe: "Ja, das war eine tolle Erfahrung.", textAr: "نعم، كانت تجربة رائعة.", textEn: "Yes, that was a great experience.", points: 10 }
        ]
      }
    ]
  },
  {
    "id": 16,
    "ch": 14,
    "title": "Eine Geburtstagsparty planen",
    "titleAr": "التخطيط لحفلة عيد ميلاد",
    "emoji": "🎉",
    "difficulty": "Einfach",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Hallo! Mein Geburtstag ist nächste Woche. Hilfst du mir beim Planen?",
        "textAr": "مرحباً! عيد ميلادي الأسبوع القادم. هل تساعدني في التخطيط؟"
      },
      {
        "speaker": "user",
        "prompt": "وافق بترحيب واقترح إقامة الحفلة يوم السبت",
        "options": [
          {
            "textDe": "Hallo! Ja, gerne. Lass uns die Party am Samstag feiern.",
            "textAr": "مرحباً! نعم، بكل سرور. لنحتفل بالحفلة يوم السبت.",
            "points": 10
          },
          {
            "textDe": "Klar helfe ich dir! Wir können am Samstag feiern.",
            "textAr": "بالتأكيد سأساعدك! يمكننا الاحتفال يوم السبت.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Super Idee! Sollen wir in meiner Wohnung oder im Park feiern?",
        "textAr": "فكرة رائعة! هل نحتفل في شقتي أم في الحديقة؟"
      },
      {
        "speaker": "user",
        "prompt": "اقترح الحديقة لأن الطقس جميل",
        "options": [
          {
            "textDe": "Ich schlage vor, wir feiern im Park, weil das Wetter schön ist.",
            "textAr": "أقترح أن نحتفل في الحديقة لأن الطقس جميل.",
            "points": 10
          },
          {
            "textDe": "Im Park ist es besser. Das Wetter ist am Samstag super.",
            "textAr": "في الحديقة أفضل. الطقس يوم السبت سيكون رائعاً.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Abgemacht, im Park! Kannst du vielleicht einen Salat mitbringen?",
        "textAr": "اتفقنا، في الحديقة! هل يمكنك جلب سلطة معك؟"
      },
      {
        "speaker": "user",
        "prompt": "وافق وأخبره بنوع السلطة التي ستحضرها",
        "options": [
          {
            "textDe": "Ja, kein Problem. Ich mache einen leckeren Nudelsalat.",
            "textAr": "نعم، لا مشكلة. سأصنع سلطة معكرونة لذيذة.",
            "points": 10
          },
          {
            "textDe": "Klar, ich bringe gerne einen Kartoffelsalat mit.",
            "textAr": "بالتأكيد، سأجلب معي سلطة بطاطس بكل سرور.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Vielen Dank! Ich lade jetzt die anderen Freunde ein. Bis dann!",
        "textAr": "شكراً جزيلاً! سأدعو الآن الأصدقاء الآخرين. أراك لاحقاً!"
      },
      {
        "speaker": "user",
        "prompt": "ودّع صديقك وتمنّى له يوماً سعيداً",
        "options": [
          {
            "textDe": "Tschüss! Bis Samstag und viel Spaß!",
            "textAr": "مع السلامة! أراك السبت واستمتع بوقتك!",
            "points": 10
          },
          {
            "textDe": "Bis bald! Ich freue mich auf die Party.",
            "textAr": "أراك قريباً! أنا متطلع للحفلة.",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "ch": 15,
    "title": "Konflikt mit dem Nachbarn lösen",
    "titleAr": "حل نزاع مع الجار",
    "emoji": "🏢",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Guten Tag. Ich bin Ihr Nachbar. Die Musik aus Ihrer Wohnung ist sehr laut.",
        "textAr": "نهار سعيد. أنا جارك. الموسيقى من شقتك عالية جداً."
      },
      {
        "speaker": "user",
        "prompt": "اعتذر بلطف واشرح له أنك تنظف الشقة",
        "options": [
          {
            "textDe": "Entschuldigung! Das tut mir leid. Ich putze gerade meine Wohnung.",
            "textAr": "المعذرة! أنا آسف جداً. أنا أنظف شقتي حالياً.",
            "points": 10
          },
          {
            "textDe": "Oh, entschuldigen Sie bitte. Ich habe beim Putzen Musik gehört.",
            "textAr": "أوه، أرجو المعذرة. كنت أستمع للموسيقى أثناء التنظيف.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Verstehe, aber laut Hausordnung müssen wir ab 13 Uhr Mittagsruhe haben.",
        "textAr": "أفهم ذلك، ولكن وفقاً للائحة البيت يجب أن نلتزم بفترة الراحة الظهرية بدءاً من الساعة الواحدة."
      },
      {
        "speaker": "user",
        "prompt": "أكد التزامك بلائحة البيت ووعده بإغلاق الموسيقى فوراً",
        "options": [
          {
            "textDe": "Sie haben recht. Ich mache die Musik sofort aus.",
            "textAr": "أنت على حق. سأغلق الموسيقى فوراً.",
            "points": 15
          },
          {
            "textDe": "Das wusste ich nicht. Ich mache die Musik natürlich sofort leiser.",
            "textAr": "لم أكن أعلم ذلك. سأخفض صوت الموسيقى فوراً بالطبع.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Vielen Dank für Ihr Verständnis. Ich arbeite im Homeoffice und brauche Ruhe.",
        "textAr": "شكراً جزيلاً لتفهمك. أنا أعمل من المنزل وأحتاج للهدوء."
      },
      {
        "speaker": "user",
        "prompt": "عبّر عن تفهمك وتمنّى له عملاً موفقاً",
        "options": [
          {
            "textDe": "Kein Problem, das verstehe ich gut. Frohes Schaffen!",
            "textAr": "لا مشكلة، أنا أفهم ذلك جيداً. عمل موفق!",
            "points": 10
          },
          {
            "textDe": "Ich verstehe. Es tut mir nochmals leid. Einen schönen Arbeitstag noch!",
            "textAr": "أنا أفهم. أنا آسف مجدداً. أتمنى لك يوم عمل سعيداً!",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "ch": 16,
    "title": "Über die Ausbildung sprechen",
    "titleAr": "التحدث عن التدريب المهني",
    "emoji": "🎓",
    "difficulty": "Einfach",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Hallo! Was machst du nach der Schule? Machst du eine Ausbildung?",
        "textAr": "مرحباً! ماذا تفعل بعد المدرسة؟ هل تقوم بتدريب مهني؟"
      },
      {
        "speaker": "user",
        "prompt": "أجبه بنعم وأخبره أنك تقوم بتدريب مهني ككهربائي",
        "options": [
          {
            "textDe": "Hallo! Ja, ich mache eine Ausbildung als Elektriker.",
            "textAr": "مرحباً! نعم، أنا أقوم بتدريب مهني ككهربائي.",
            "points": 10
          },
          {
            "textDe": "Ja, genau. Ich lerne den Beruf Elektriker in einer Firma.",
            "textAr": "نعم، تماماً. أنا أتعلم مهنة الكهربائي في شركة.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Interessant! Wie lange dauert die Ausbildung und wie ist die Berufsschule?",
        "textAr": "مثير للاهتمام! كم مدة التدريب المهني وكيف هي المدرسة المهنية؟"
      },
      {
        "speaker": "user",
        "prompt": "أخبره بمدة الدراسة وأن القواعد صعبة قليلاً",
        "options": [
          {
            "textDe": "Die Ausbildung dauert drei Jahre. Die Schule ist gut, aber die Grammatik ist schwer.",
            "textAr": "يستمر التدريب ثلاث سنوات. المدرسة جيدة، لكن القواعد صعبة.",
            "points": 15
          },
          {
            "textDe": "Sie dauert drei Jahre. Die Berufsschule ist interessant, aber manchmal schwer.",
            "textAr": "يستمر ثلاث سنوات. المدرسة المهنية مثيرة للاهتمام، لكنها صعبة أحياناً.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Das verstehe ich. Möchtest du nach der Ausbildung in der Firma bleiben?",
        "textAr": "أنا أفهم ذلك. هل تود البقاء في الشركة بعد إنهاء التدريب؟"
      },
      {
        "speaker": "user",
        "prompt": "أكد رغبتك بالبقاء لأن زملاء العمل رائعون",
        "options": [
          {
            "textDe": "Ja, ich möchte bleiben, weil die Kollegen sehr nett sind.",
            "textAr": "نعم، أود البقاء لأن الزملاء لطفاء جداً.",
            "points": 10
          },
          {
            "textDe": "Ich hoffe es. Die Arbeitsatmosphäre und die Kollegen sind super.",
            "textAr": "آمل ذلك. بيئة العمل والزملاء رائعون للغاية.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Viel Erfolg dabei! Wir sehen uns später.",
        "textAr": "بالتوفيق في ذلك! نراك لاحقاً."
      },
      {
        "speaker": "user",
        "prompt": "اشكره وودّعه",
        "options": [
          {
            "textDe": "Danke schön! Bis bald, Tschüss!",
            "textAr": "شكراً جزيلاً! أراك قريباً، مع السلامة!",
            "points": 10
          },
          {
            "textDe": "Vielen Dank! Mach's gut!",
            "textAr": "شكراً جزيلاً! رافقتك السلامة!",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "ch": 17,
    "title": "Wohnungsbesichtigung",
    "titleAr": "معاينة شقة",
    "emoji": "🏡",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Guten Tag. Ich bin der Vermieter. Hier ist das Wohnzimmer. Wie gefällt es Ihnen?",
        "textAr": "نهار سعيد. أنا المؤجر. هذه هي غرفة المعيشة. كيف تعجبكم؟"
      },
      {
        "speaker": "user",
        "prompt": "عبّر عن إعجابك بالغرفة لأنها كبيرة ومضيئة",
        "options": [
          {
            "textDe": "Guten Tag! Das Wohnzimmer gefällt mir sehr. Es ist sehr groß und hell.",
            "textAr": "نهار سعيد! غرفة المعيشة تعجبني كثيراً. إنها كبيرة ومضيئة جداً.",
            "points": 10
          },
          {
            "textDe": "Sehr schön! Der Raum ist wirklich groß und hat viel Licht.",
            "textAr": "جميل جداً! الغرفة كبيرة حقاً وبها الكثير من الضوء.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Ja, das stimmt. Die Wohnung hat auch einen Balkon. Wie hoch ist Ihr Budget?",
        "textAr": "نعم، هذا صحيح. تحتوي الشقة أيضاً على شرفة. كم تبلغ ميزانيتك؟"
      },
      {
        "speaker": "user",
        "prompt": "اسأل عن الإيجار البارد والمصاريف الجانبية",
        "options": [
          {
            "textDe": "Wie hoch ist die Kaltmiete und wie viel sind die Nebenkosten?",
            "textAr": "كم يبلغ الإيجار البارد وكم تبلغ المصاريف الجانبية؟",
            "points": 15
          },
          {
            "textDe": "Was kostet die Wohnung warm im Monat?",
            "textAr": "كم تكلفة الشقة شاملة التدفئة شهرياً؟",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Die Kaltmiete ist 500 Euro und die Nebenkosten sind 150 Euro. Die Kaution ist zwei Kaltmieten.",
        "textAr": "الإيجار البارد 500 يورو والمصاريف الجانبية 150 يورو. التأمين هو قيمة إيجار بارد لشهرين."
      },
      {
        "speaker": "user",
        "prompt": "وافق على السعر واطلب توقيع العقد",
        "options": [
          {
            "textDe": "Das passt gut in mein Budget. Wann kann ich den Mietvertrag unterschreiben?",
            "textAr": "هذا يناسب ميزانيتي جيداً. متى يمكنني توقيع عقد الإيجار؟",
            "points": 10
          },
          {
            "textDe": "Der Preis ist okay. Ich möchte die Wohnung gerne mieten.",
            "textAr": "السعر مناسب. أود استئجار الشقة بكل سرور.",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "ch": 18,
    "title": "Nach dem Weg fragen",
    "titleAr": "السؤال عن الطريق",
    "emoji": "🗺️",
    "difficulty": "Einfach",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Entschuldigung, kann ich Ihnen helfen? Suchen Sie etwas?",
        "textAr": "المعذرة، هل يمكنني مساعدتك؟ هل تبحث عن شيء؟"
      },
      {
        "speaker": "user",
        "prompt": "رحب بالمار واسأله عن الطريق إلى محطة القطار الرئيسية",
        "options": [
          {
            "textDe": "Hallo! Ja, bitte. Wie komme ich zum Hauptbahnhof?",
            "textAr": "مرحباً! نعم، من فضلك. كيف أصل إلى محطة القطار الرئيسية؟",
            "points": 10
          },
          {
            "textDe": "Guten Tag. Entschuldigung, wo ist der Hauptbahnhof?",
            "textAr": "نهار سعيد. المعذرة، أين تقع محطة القطار الرئيسية؟",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Gehen Sie geradeaus bis zur Ampel, dann links. Oder nehmen Sie die U-Bahn.",
        "textAr": "سر بشكل مستقيم حتى الإشارة الضوئية، ثم يساراً. أو استقل مترو الأنفاق."
      },
      {
        "speaker": "user",
        "prompt": "اسأل عن أقرب محطة مترو أنفاق",
        "options": [
          {
            "textDe": "Wo ist die nächste U-Bahn-Haltestelle?",
            "textAr": "أين تقع أقرب محطة لمترو الأنفاق؟",
            "points": 15
          },
          {
            "textDe": "Gibt es eine U-Bahn-Station in der Nähe?",
            "textAr": "هل توجد محطة مترو أنفاق بالقرب من هنا؟",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Die Station ist direkt da drüben, hinter der Bäckerei. Nur zwei Minuten zu Fuß.",
        "textAr": "المحطة هناك تماماً، خلف المخبز. دقيقتان فقط سيراً على الأقدام."
      },
      {
        "speaker": "user",
        "prompt": "اشكر المار بلطف وودّعه",
        "options": [
          {
            "textDe": "Vielen Dank für Ihre Hilfe! Auf Wiedersehen.",
            "textAr": "شكراً جزيلاً لمساعدتك! إلى اللقاء.",
            "points": 10
          },
          {
            "textDe": "Super, danke schön! Einen schönen Tag noch!",
            "textAr": "رائع، شكراً جزيلاً! أتمنى لك يوماً سعيداً!",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "ch": 19,
    "title": "Im Kunstmuseum",
    "titleAr": "في متحف الفن",
    "emoji": "🎨",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Dieses Gemälde hier ist sehr interessant. Wie gefällt es dir?",
        "textAr": "هذه اللوحة هنا مثيرة جداً للاهتمام. كيف تعجبك؟"
      },
      {
        "speaker": "user",
        "prompt": "أجبه بأنها تعجبك كثيراً بسبب الألوان الزاهية",
        "options": [
          {
            "textDe": "Mir gefällt das Bild sehr gut, weil die Farben sehr bunt und hell sind.",
            "textAr": "تعجبني اللوحة كثيراً لأن ألوانها زاهية ومضيئة للغاية.",
            "points": 10
          },
          {
            "textDe": "Ich finde es wunderschön. Die bunten Farben sind toll.",
            "textAr": "أجدها رائعة الجمال. الألوان الزاهية رائعة.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Stimmt, der Stil ist sehr modern. Weißt du, wer der Künstler ist?",
        "textAr": "صحيح، الأسلوب حديث جداً. هل تعرف من هو الفنان؟"
      },
      {
        "speaker": "user",
        "prompt": "أخبره أنه فنان ألماني مشهور ورأيت معرضه من قبل",
        "options": [
          {
            "textDe": "Ja, das ist ein berühmter deutscher Künstler. Ich kenne seine Ausstellung.",
            "textAr": "نعم، هذا فنان ألماني مشهور. أنا أعرف معرضه.",
            "points": 15
          },
          {
            "textDe": "Das Bild ist von einem bekannten Maler. Ich habe seine Kunstwerke schon gesehen.",
            "textAr": "اللوحة لرسام معروف. لقد رأيت أعماله الفنية من قبل.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Interessant! Wollen wir noch in den nächsten Raum gehen?",
        "textAr": "مثير للاهتمام! هل نذهب إلى الغرفة التالية؟"
      },
      {
        "speaker": "user",
        "prompt": "وافق واقترح شرب قهوة بعد ذلك",
        "options": [
          {
            "textDe": "Ja, gerne. Und danach können wir im Café einen Kaffee trinken.",
            "textAr": "نعم، بكل سرور. وبعد ذلك يمكننا شرب القهوة في المقهى.",
            "points": 10
          },
          {
            "textDe": "Gute Idee! Lass uns weitergehen und später Kuchen essen.",
            "textAr": "فكرة طيبة! لنكمل السير ونأكل الكعك لاحقاً.",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "ch": 22,
    "title": "Probleme mit dem Computer",
    "titleAr": "مشاكل في الكمبيوتر",
    "emoji": "💻",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Hallo. Du siehst gestresst aus. Funktioniert dein Computer nicht?",
        "textAr": "مرحباً. تبدو متوتراً. هل الكمبيوتر الخاص بك لا يعمل؟"
      },
      {
        "speaker": "user",
        "prompt": "أكّد ذلك واشرح له أن الشاشة سوداء ولا يمكنك كتابة كلمة المرور",
        "options": [
          {
            "textDe": "Hallo. Ja, der Bildschirm ist schwarz. Ich kann mein Passwort nicht eingeben.",
            "textAr": "مرحباً. نعم، الشاشة سوداء. لا يمكنني إدخال كلمة المرور الخاصة بي.",
            "points": 10
          },
          {
            "textDe": "Stimmt, meine Tastatur reagiert nicht und der Bildschirm bleibt dunkel.",
            "textAr": "صحيح، لوحة المفاتيح لا تستجيب وتظل الشاشة مظلمة.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Hast du schon versucht, den Laptop neu zu starten?",
        "textAr": "هل جربت بالفعل إعادة تشغيل اللابتوب؟"
      },
      {
        "speaker": "user",
        "prompt": "أجبه بأنك جربت ذلك ولم يتغير شيء، واسأله عن الحل",
        "options": [
          {
            "textDe": "Ja, das habe ich versucht, aber es hilft nicht. Was soll ich tun?",
            "textAr": "نعم، لقد جربت ذلك ولكن هذا لا يفيد. ماذا علي أن أفعل؟",
            "points": 15
          },
          {
            "textDe": "Ich habe ihn neu gestartet, aber nichts funktioniert. Hast du eine Idee?",
            "textAr": "لقد أعدت تشغيله ولكن لا شيء يعمل. هل لديك فكرة؟",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Vielleicht ist der Akku leer. Schließe ihn mal an das Ladekabel an.",
        "textAr": "ربما تكون البطارية فارغة. قم بتوصيله بكابل الشحن."
      },
      {
        "speaker": "user",
        "prompt": "جرب ذلك واشكر زميلك لأن الكمبيوتر بدأ يعمل",
        "options": [
          {
            "textDe": "Oh, du hast recht! Jetzt läuft er wieder. Vielen Dank für deine Hilfe!",
            "textAr": "أوه، أنت على حق! الآن يعمل مجدداً. شكراً جزيلاً لمساعدتك!",
            "points": 10
          },
          {
            "textDe": "Super, das war das Problem. Der Bildschirm geht an. Danke dir!",
            "textAr": "رائع، هذه كانت المشكلة. الشاشة تعمل. شكراً لك!",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "ch": 23,
    "title": "Über eine Wahl diskutieren",
    "titleAr": "نقاش حول انتخابات",
    "emoji": "🗳️",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Hallo! Am Sonntag ist die Wahl. Gehst du wählen?",
        "textAr": "مرحباً! يوم الأحد هناك انتخابات. هل ستذهب للتصويت؟"
      },
      {
        "speaker": "user",
        "prompt": "أكّد ذلك واشرح أن التصويت حق وواجب لكل مواطن",
        "options": [
          {
            "textDe": "Hallo! Ja, natürlich. Ich denke, dass Wählen ein wichtiges Recht ist.",
            "textAr": "مرحباً! نعم، بالطبع. أعتقد أن الانتخاب حق مهم.",
            "points": 10
          },
          {
            "textDe": "Auf jeden Fall. Jeder Bürger sollte zur Wahl gehen.",
            "textAr": "بالتأكيد. يجب على كل مواطن الذهاب للتصويت.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Ich weiß nicht. Ich finde, meine einzelne Stimme ändert sowieso nichts.",
        "textAr": "لا أدري. أرى أن صوتي الفردي لن يغير شيئاً على أي حال."
      },
      {
        "speaker": "user",
        "prompt": "عارضه بلطف وبيّن له أن كل صوت يساهم في تحديد الحكومة والمستقبل",
        "options": [
          {
            "textDe": "Das stimmt nicht. Jede Stimme zählt, um die Regierung und unsere Zukunft zu entscheiden.",
            "textAr": "هذا غير صحيح. كل صوت يهم لتحديد الحكومة ومستقبلنا.",
            "points": 15
          },
          {
            "textDe": "Ich sehe das anders. Zusammen machen viele Stimmen einen großen Unterschied.",
            "textAr": "أرى الأمر بشكل مختلف. معاً تشكل الأصوات الكثيرة فرقاً كبيراً.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Hm, da hast du eigentlich recht. Vielleicht gehe ich am Sonntag doch mit dir mit.",
        "textAr": "همم، أنت على حق في الواقع. ربما أذهب معك يوم الأحد في النهاية."
      },
      {
        "speaker": "user",
        "prompt": "عبّر عن سعادتك واقترح الذهاب معاً في الصباح",
        "options": [
          {
            "textDe": "Das freut mich! Lass uns am Sonntagvormittag zusammen zum Wahllokal gehen.",
            "textAr": "هذا يسعدني! لنذهب معاً صباح الأحد إلى مقر اللجنة الانتخابية.",
            "points": 10
          },
          {
            "textDe": "Super! Ich hole dich am Sonntag ab und wir gehen gemeinsam wählen.",
            "textAr": "رائع! سأمر عليك الأحد ونذهب للتصويت معاً.",
            "points": 10
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "ch": 24,
    "title": "Kulturen vergleichen",
    "titleAr": "مقارنة الثقافات",
    "emoji": "🌍",
    "difficulty": "Mittel",
    "turns": [
      {
        "speaker": "partner",
        "textDe": "Hallo! Du lebst jetzt schon ein Jahr in Deutschland. Wie gefällt es dir?",
        "textAr": "مرحباً! أنت تعيش الآن منذ عام في ألمانيا. كيف تعجبك؟"
      },
      {
        "speaker": "user",
        "prompt": "أجبه بأنها تعجبك كثيراً ولكن هناك اختلافات في العادات اليومية",
        "options": [
          {
            "textDe": "Hallo! Es gefällt mir sehr gut, obwohl es viele Unterschiede bei den Gewohnheiten gibt.",
            "textAr": "مرحباً! تعجبني كثيراً، على الرغم من وجود فروق كثيرة في العادات.",
            "points": 10
          },
          {
            "textDe": "Sehr gut! Aber das Leben hier ist ein bisschen anders als in meiner Heimat.",
            "textAr": "جيد جداً! ولكن الحياة هنا مختلفة قليلاً عنها في وطني.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Was ist denn der größte Unterschied zwischen Deutschland und deiner Heimat?",
        "textAr": "ما هو الفرق الأكبر إذاً بين ألمانيا ووطنك؟"
      },
      {
        "speaker": "user",
        "prompt": "أخبره أن المواعيد في ألمانيا دقيقة جداً بينما في بلدك مرنة",
        "options": [
          {
            "textDe": "In Deutschland sind alle sehr pünktlich. In meiner Heimat sind Termine flexibler.",
            "textAr": "في ألمانيا الجميع دقيقون جداً بالمواعيد. في وطني المواعيد أكثر مرونة.",
            "points": 15
          },
          {
            "textDe": "Die Pünktlichkeit! Hier muss man immer genau zur Uhrzeit ankommen.",
            "textAr": "الدقة في المواعيد! هنا يجب على المرء أن يصل دائماً في الوقت المحدد تماماً.",
            "points": 10
          }
        ]
      },
      {
        "speaker": "partner",
        "textDe": "Das stimmt, Pünktlichkeit ist uns sehr wichtig! Konntest du dich gut einleben?",
        "textAr": "هذا صحيح، الدقة بالمواعيد مهمة جداً لنا! هل استطعت الاستقرار والاندماج جيداً؟"
      },
      {
        "speaker": "user",
        "prompt": "أكّد ذلك واشرح أن تعلم اللغة ساعدك كثيراً",
        "options": [
          {
            "textDe": "Ja, ich habe mich gut eingelebt, weil ich fleißig Deutsch gelernt habe.",
            "textAr": "نعم، لقد استقررت جيداً لأنني تعلمت الألمانية باجتهاد.",
            "points": 10
          },
          {
            "textDe": "Auf jeden Fall. Die Sprache zu sprechen ist der beste Weg zur Integration.",
            "textAr": "بالتأكيد. التحدث باللغة هو أفضل طريق للاندماج.",
            "points": 10
          }
        ]
      }
    ]
  }
];

// ── Conversation UI Translations ────────────────────────────
const CONV_LOCALIZED_UI = {
  ar: {
    points_label: "النقاط",
    points_suffix: "نقطة",
    partner_typing: "الشريك يكتب...",
    task_label: "🎯 المطلوب:",
    mic_instructions: "انقر زر الميكروفون وتدرب على نطق الخيار المحدد بصوتك",
    send_without_voice: "إرسال بدون صوت ➔",
    listening_status: "جاري الاستماع... تحدّث الآن بالألمانية",
    great_pronunciation: "نطق رائع!",
    imprecise_pronunciation: "نطق غير دقيق. حاول مجدداً أو اضغط إرسال.",
    voice_error: "تعذر التعرف على الصوت. اضغط مجدداً أو اختر إرسال.",
    sent_points: "تم الإرسال (+{points} نقاط)",
    end_msg_excellent: "مذهل! تتحدث كالألمان تماماً! 🏆",
    end_msg_good: "أداء رائع وقدرة ممتازة على التعبير! 👏",
    end_msg_poor: "جيد! تدرب أكثر لتحسين طلاقتك 💪",
    result_score_details: "النقاط المحرزة: {score} من أصل {max} نقطة {stars}",
    result_scenario: "سيناريو: {title}",
    restart_btn: "🔄 أعد المحادثة",
    scenarios_menu_btn: "← قائمة السيناريوهات",
    active_conversation: "المحادثة النشطة",
    exit_conversation: "← إنهاء المحادثة",
  },
  en: {
    points_label: "Points",
    points_suffix: "pts",
    partner_typing: "Partner is typing...",
    task_label: "🎯 Task:",
    mic_instructions: "Click the microphone button and practice pronouncing the selected option",
    send_without_voice: "Send without voice ➔",
    listening_status: "Listening... Speak now in German",
    great_pronunciation: "Great pronunciation!",
    imprecise_pronunciation: "Imprecise pronunciation. Try again or click send.",
    voice_error: "Could not recognize speech. Press again or choose send.",
    sent_points: "Sent (+{points} points)",
    end_msg_excellent: "Amazing! You speak exactly like a German! 🏆",
    end_msg_good: "Great performance and excellent expression! 👏",
    end_msg_poor: "Good! Practice more to improve your fluency 💪",
    result_score_details: "Points achieved: {score} out of {max} points {stars}",
    result_scenario: "Scenario: {title}",
    restart_btn: "🔄 Restart Conversation",
    scenarios_menu_btn: "← Scenarios List",
    active_conversation: "Active Conversation",
    exit_conversation: "← Exit Conversation",
  },
  tr: {
    points_label: "Puan",
    points_suffix: "puan",
    partner_typing: "Ortak yazıyor...",
    task_label: "🎯 Görev:",
    mic_instructions: "Mikrofon düğmesine tıklayın ve seçilen seçeneği telaffuz etme pratiği yapın",
    send_without_voice: "Ses olmadan gönder ➔",
    listening_status: "Dinleniyor... Şimdi Almanca konuşun",
    great_pronunciation: "Harika telaffuz!",
    imprecise_pronunciation: "Hatalı telaffuz. Tekrar deneyin veya göndere basın.",
    voice_error: "Ses tanınamadı. Tekrar basın veya göndermeyi seçin.",
    sent_points: "Gönderildi (+{points} puan)",
    end_msg_excellent: "Harika! Tam bir Alman gibi konuşuyorsun! 🏆",
    end_msg_good: "Harika performans ve mükemmel ifade! 👏",
    end_msg_poor: "İyi! Akıcılığını geliştirmek için daha fazla pratik yap 💪",
    result_score_details: "Kazanılan Puan: {max} puan üzerinden {score} {stars}",
    result_scenario: "Senaryo: {title}",
    restart_btn: "🔄 Konuşmayı Yeniden Başlat",
    scenarios_menu_btn: "← Senaryo Listesi",
    active_conversation: "Aktif Konuşma",
    exit_conversation: "← Konuşmadan Çık",
  },
  ro: {
    points_label: "Puncte",
    points_suffix: "puncte",
    partner_typing: "Partenerul scrie...",
    task_label: "🎯 Cerință:",
    mic_instructions: "Faceți clic pe butonul microfonului și exersați pronunțarea opțiunii selectate",
    send_without_voice: "Trimite fără voce ➔",
    listening_status: "Se ascultă... Vorbiți acum în germană",
    great_pronunciation: "Pronunție excelentă!",
    imprecise_pronunciation: "Pronunție imprecisă. Încercați din nou sau faceți clic pe trimitere.",
    voice_error: "Nu s-a putut recunoaște vorbirea. Apăsați din nou sau alegeți trimitere.",
    sent_points: "Trimis (+{points} puncte)",
    end_msg_excellent: "Uimitor! Vorbești exact ca un german! 🏆",
    end_msg_good: "Performanță excelentă și exprimare minunată! 👏",
    end_msg_poor: "Bine! Exersați mai mult pentru a vă îmbunătăți fluența 💪",
    result_score_details: "Puncte obținute: {score} din {max} puncte {stars}",
    result_scenario: "Scenariu: {title}",
    restart_btn: "🔄 Reporniți conversația",
    scenarios_menu_btn: "← Lista scenariilor",
    active_conversation: "Conversație activă",
    exit_conversation: "← Finalizează conversația",
  },
  bs: {
    points_label: "Bodovi",
    points_suffix: "boda",
    partner_typing: "Partner kuca...",
    task_label: "🎯 Zadatak:",
    mic_instructions: "Kliknite dugme mikrofona i vježbajte izgovor odabrane opcije",
    send_without_voice: "Pošalji bez glasa ➔",
    listening_status: "Slušam... Govorite sada na njemačkom",
    great_pronunciation: "Odličan izgovor!",
    imprecise_pronunciation: "Neprecizan izgovor. Pokušajte ponovo ili kliknite pošalji.",
    voice_error: "Govor nije prepoznat. Pritisnite ponovo ili odaberite slanje.",
    sent_points: "Poslano (+{points} bodova)",
    end_msg_excellent: "Nevjerovatno! Govorite baš kao Nijemac! 🏆",
    end_msg_good: "Sjajan nastup i odličan izraz! 👏",
    end_msg_poor: "Dobro! Vježbajte više da poboljšate tečnost 💪",
    result_score_details: "Osvojeni bodovi: {score} od {max} bodova {stars}",
    result_scenario: "Scenarij: {title}",
    restart_btn: "🔄 Ponovo pokreni razgovor",
    scenarios_menu_btn: "← Lista scenarija",
    active_conversation: "Aktivan razgovor",
    exit_conversation: "← Završi razgovor",
  },
  es: {
    points_label: "Puntos",
    points_suffix: "puntos",
    partner_typing: "El compañero está escribiendo...",
    task_label: "🎯 Tarea:",
    mic_instructions: "Haz clic en el botón del micrófono y practica la pronunciación de la opción seleccionada",
    send_without_voice: "Enviar sin voz ➔",
    listening_status: "Escuchando... Habla ahora en alemán",
    great_pronunciation: "¡Excelente pronunciación!",
    imprecise_pronunciation: "Pronunciación imprecisa. Intenta de nuevo o haz clic en enviar.",
    voice_error: "No se pudo reconocer el habla. Presiona de nuevo o elige enviar.",
    sent_points: "Enviado (+{points} puntos)",
    end_msg_excellent: "¡Increíble! ¡Hablas igual que un alemán! 🏆",
    end_msg_good: "¡Excelente actuación y expresión! 👏",
    end_msg_poor: "¡Bien! Practica más para mejorar tu fluidez 💪",
    result_score_details: "Puntos obtenidos: {score} de {max} puntos {stars}",
    result_scenario: "Escenario: {title}",
    restart_btn: "🔄 Reiniciar conversación",
    scenarios_menu_btn: "← Lista de escenarios",
    active_conversation: "Conversación activa",
    exit_conversation: "← Terminar conversación",
  },
  bg: {
    points_label: "Точки",
    points_suffix: "точки",
    partner_typing: "Партньорът пише...",
    task_label: "🎯 Задача:",
    mic_instructions: "Кликнете върху бутона на микрофона и упражнете произношението на избрания вариант",
    send_without_voice: "Изпрати без глас ➔",
    listening_status: "Слушам... Говорете сега на немски",
    great_pronunciation: "Отлично произношение!",
    imprecise_pronunciation: "Неточно произношение. Опитайте отново или кликнете изпрати.",
    voice_error: "Речта не беше разпозната. Натиснете отново или изберете изпращане.",
    sent_points: "Изпратено (+{points} точки)",
    end_msg_excellent: "Невероятно! Говорите точно като германец! 🏆",
    end_msg_good: "Отлично представяне и изraz! 👏",
    end_msg_poor: "Добре! Практикувайте повече, за да подобрите плавността 💪",
    result_score_details: "Спечелени точки: {score} от {max} точки {stars}",
    result_scenario: "Сценарий: {title}",
    restart_btn: "🔄 Рестартирай разговора",
    scenarios_menu_btn: "← Списък на сценариите",
    active_conversation: "Активен разговор",
    exit_conversation: "← Приключи разговора",
  },
  el: {
    points_label: "Πόντοι",
    points_suffix: "πόντοι",
    partner_typing: "Ο συνεργάτης πληκτρολογεί...",
    task_label: "🎯 Εργασία:",
    mic_instructions: "Κάντε κλικ στο κουμπί μικροφώνου και εξασκήστε την προφορά της επιλεγμένης επιλογής",
    send_without_voice: "Αποστολή χωρίς φωνή ➔",
    listening_status: "Ακούω... Μιλήστε τώρα στα γερμανικά",
    great_pronunciation: "Εξαιρετική προφορά!",
    imprecise_pronunciation: "Ανακριβής προφορά. Δοκιμάστε ξανά ή κάντε κλικ αποστολή.",
    voice_error: "Η ομιλία δεν αναγνωρίστηκε. Πατήστε ξανά ή επιλέξτε αποστολή.",
    sent_points: "Εστάλη (+{points} πόντοι)",
    end_msg_excellent: "Απίστευτο! Μιλάτε ακριβώς σαν Γερμανός! 🏆",
    end_msg_good: "Εξαιρετική απόδοση και έκφραση! 👏",
    end_msg_poor: "Καλά! Εξασκηθείτε περισσότερο για να βελτιώσετε τη ροή 💪",
    result_score_details: "Πόντοι που κερδήθηκαν: {score} από {max} πόντους {stars}",
    result_scenario: "Σενάριο: {title}",
    restart_btn: "🔄 Επανεκκίνηση συνομιλίας",
    scenarios_menu_btn: "← Λίστα σεναρίων",
    active_conversation: "Ενεργή συνομιλία",
    exit_conversation: "← Τέλος συνομιλίας",
  }
};

// ── Get Localized Scenario Text Helper ────────────────────────
function getLocalizedScenarioText(scId, turnIndex, field, optionIndex = -1) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  
  const sc = CONVERSATION_SCENARIOS.find(s => s.id === scId);
  if (!sc) return '';
  
  if (lang === 'ar') {
    if (turnIndex === -1) {
      return sc.titleAr || sc.title;
    }
    const turn = sc.turns[turnIndex];
    if (!turn) return '';
    if (field === 'text') {
      return turn.textAr || '';
    } else if (field === 'prompt') {
      return turn.prompt || '';
    } else if (field === 'option') {
      const opt = turn.options[optionIndex];
      return opt ? opt.textAr : '';
    }
    return '';
  }
  
  if (typeof CONVERSATION_TRANSLATIONS !== 'undefined' && CONVERSATION_TRANSLATIONS[lang] && CONVERSATION_TRANSLATIONS[lang][scId]) {
    const trSc = CONVERSATION_TRANSLATIONS[lang][scId];
    if (turnIndex === -1) {
      return trSc.title || (lang === 'ar' ? sc.titleAr : sc.titleEn) || sc.title;
    }
    const trTurn = trSc.turns[turnIndex];
    if (trTurn) {
      if (field === 'text') {
        return trTurn.text || '';
      } else if (field === 'prompt') {
        return trTurn.prompt || '';
      } else if (field === 'option') {
        return trTurn.options && trTurn.options[optionIndex] !== undefined ? trTurn.options[optionIndex] : '';
      }
    }
  }
  
  if (turnIndex === -1) {
    return lang === 'ar' ? (sc.titleAr || sc.title) : sc.title;
  }
  const turn = sc.turns[turnIndex];
  if (!turn) return '';
  if (field === 'text') {
    return lang === 'ar' ? (turn.textAr || '') : (turn.textEn || turn.textDe || '');
  } else if (field === 'prompt') {
    return lang === 'ar' ? (turn.prompt || '') : (turn.promptEn || turn.prompt || '');
  } else if (field === 'option') {
    const opt = turn.options[optionIndex];
    return opt ? (lang === 'ar' ? opt.textAr : (opt.textEn || opt.textDe || '')) : '';
  }
  return '';
}

// ── Conversation State ──────────────────────────────────────
let convState = {
  scenario: null,
  currentTurnIndex: 0,
  score: 0,
  history: [],
  selectedOptionIndex: -1,
  isRecording: false
};

// ── Build Scenario List ─────────────────────────────────────
function buildConversationSelection() {
  const container = document.getElementById('convSelection');
  if (!container) return;

  const saved = getSavedProgress();
  const convScores = saved.convScores || {};
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  const list = CONVERSATION_SCENARIOS.filter(sc => {
    return currentLevel === 'A2' ? sc.ch >= 13 : sc.ch <= 12;
  });

  container.innerHTML = list.map(sc => {
    const bestScore = convScores[sc.id] || 0;
    const localizedTitle = getLocalizedScenarioText(sc.id, -1, 'title');
    const unitText = TRANSLATIONS[lang] && TRANSLATIONS[lang]['unit'] ? TRANSLATIONS[lang]['unit'] : 'وحدة';
    const bestScoreText = TRANSLATIONS[lang] && TRANSLATIONS[lang]['quiz_status_score'] ? TRANSLATIONS[lang]['quiz_status_score'] : 'أفضل نتيجة: ';
    return `
    <div class="conv-scenario-card" onclick="startConversation(${sc.id})">
      <div class="conv-card-emoji">${sc.emoji}</div>
      <div class="conv-card-title">${sc.title}</div>
      <div class="conv-card-sub">${localizedTitle}</div>
      <div class="conv-card-meta">
        <span class="topic-tag">${unitText} ${sc.ch}</span>
        <span class="topic-tag" style="background:rgba(245,158,11,0.1);color:var(--accent-gold)">${sc.difficulty}</span>
        ${bestScore > 0 ? `<span class="topic-tag" style="background:rgba(52,211,153,0.1);color:var(--accent-success)">${bestScoreText}${bestScore} ${ui.points_suffix}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Start Scenario ──────────────────────────────────────────
function startConversation(scenarioId) {
  const sc = CONVERSATION_SCENARIOS.find(s => s.id === scenarioId);
  if (!sc) return;

  convState = {
    scenario: sc,
    currentTurnIndex: 0,
    score: 0,
    history: [],
    selectedOptionIndex: -1,
    isRecording: false
  };

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  document.getElementById('convSelection').style.display = 'none';
  document.getElementById('convActive').style.display = 'flex';
  document.getElementById('convResults').style.display = 'none';

  const localizedTitle = getLocalizedScenarioText(sc.id, -1, 'title');
  document.getElementById('convScenarioTitle').textContent = `${sc.emoji} ${sc.title} (${localizedTitle})`;
  document.getElementById('convScore').textContent = `${ui.points_label}: 0`;

  const chat = document.getElementById('chatContainer');
  if (chat) chat.innerHTML = '';

  progressConversation();
}

// ── Progress Conversation ───────────────────────────────────
function progressConversation() {
  const sc = convState.scenario;
  const idx = convState.currentTurnIndex;

  if (idx >= sc.turns.length) {
    endConversation();
    return;
  }

  const turn = sc.turns[idx];

  if (turn.speaker === 'partner') {
    // Partner Turn
    const localizedText = getLocalizedScenarioText(sc.id, idx, 'text');
    addConvMessage('partner', turn.textDe, localizedText);
    speakConvPartner(turn.textDe);
    
    // Auto advance to next user turn after a short delay
    setTimeout(() => {
      convState.currentTurnIndex++;
      progressConversation();
    }, 1800);
  } else {
    // User Turn
    renderUserOptions(turn);
  }
}

// ── Add Chat Bubble ─────────────────────────────────────────
function addConvMessage(speaker, textDe, textAr, scoreGlow = false) {
  const container = document.getElementById('chatContainer');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = `chat-message ${speaker} ${scoreGlow ? 'score-glow' : ''}`;
  msg.innerHTML = `
    <div class="msg-de">
      <span>${textDe}</span>
      <button class="tts-btn" style="padding: 2px 8px; font-size:10px" onclick="speakGerman('${textDe.replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="msg-ar">${textAr}</div>
  `;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

// ── Render User Options ─────────────────────────────────────
function renderUserOptions(turn) {
  const area = document.getElementById('userInputArea');
  if (!area) return;

  convState.selectedOptionIndex = -1;

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];
  const localizedPrompt = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'prompt');

  area.innerHTML = `
    <div class="conv-prompt-banner">${ui.task_label} ${localizedPrompt}</div>
    <div class="conv-options-list">
      ${turn.options.map((opt, i) => {
        const localizedOptionText = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'option', i);
        return `
        <div class="conv-option-card" id="convOpt-${i}" onclick="selectConvOption(${i})">
          <div>
            <div style="font-weight:700;color:var(--text-german);font-family:'Inter',sans-serif">${opt.textDe}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">${localizedOptionText}</div>
          </div>
          <span style="font-size:12px;color:var(--accent-gold)">+${opt.points} ${ui.points_suffix}</span>
        </div>`;
      }).join('')}
    </div>
    <div id="convVoiceArea" style="display:none" class="conv-voice-practice-area">
      <div class="conv-mic-status" id="convMicStatus">${ui.mic_instructions}</div>
      <button class="mic-btn" id="convMicBtn" onclick="startConvSpeech()">🎤</button>
      <div class="conv-action-row">
        <button class="btn btn-primary" onclick="skipConvSpeech()">${ui.send_without_voice}</button>
      </div>
    </div>
  `;
}

// ── Select Response Option ──────────────────────────────────
function selectConvOption(idx) {
  convState.selectedOptionIndex = idx;
  document.querySelectorAll('.conv-option-card').forEach((card, i) => {
    card.classList.toggle('selected', i === idx);
  });

  const voiceArea = document.getElementById('convVoiceArea');
  if (voiceArea) voiceArea.style.display = 'flex';

  const chat = document.getElementById('chatContainer');
  if (chat) {
    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
    }, 50);
  }
}

// ── Speech Synthesis for Partner ────────────────────────────
function speakConvPartner(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'de-DE';
  utter.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang.startsWith('de') && v.name.includes('Google'));
  if (deVoice) utter.voice = deVoice;

  window.speechSynthesis.speak(utter);
}

// ── Speech Recognition for User ──────────────────────────────
function startConvSpeech() {
  const idx = convState.selectedOptionIndex;
  if (idx === -1) return;

  const turn = convState.scenario.turns[convState.currentTurnIndex];
  const option = turn.options[idx];
  const phrase = option.textDe;

  const btn = document.getElementById('convMicBtn');
  const status = document.getElementById('convMicStatus');
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  if (convState.isRecording) {
    stopSpeechRecognition();
    if (btn) btn.classList.remove('recording');
    return;
  }

  if (btn) btn.classList.add('recording');
  if (status) status.textContent = ui.listening_status;

  startSpeechRecognition(
    (transcript) => {
      if (btn) btn.classList.remove('recording');
      
      const similarity = calculateSimilarity(transcript.toLowerCase(), phrase.toLowerCase());
      console.log('Similarity score:', similarity);

      if (similarity > 0.65) {
        if (status) status.textContent = `${ui.great_pronunciation} (${Math.round(similarity*100)}%)`;
        
        const successMsg = lang === 'ar' ? 'نطق ممتاز! 🎉' : (lang === 'bs' ? 'Odličan izgovor! 🎉' : (lang === 'tr' ? 'Harika telaffuz! 🎉' : (lang === 'ro' ? 'Pronunție excelentă! 🎉' : 'Excellent pronunciation! 🎉')));
        showToast(successMsg, 'success');
        
        // Award full points
        convState.score += option.points;
        document.getElementById('convScore').textContent = `${ui.points_label}: ${convState.score}`;

        setTimeout(() => {
          advanceAfterUserSelection(option, true);
        }, 1200);
      } else {
        if (status) status.textContent = `${ui.imprecise_pronunciation} (${Math.round(similarity*100)}%)`;
        const warnMsg = lang === 'ar' ? 'النطق غير واضح، حاول مجدداً' : (lang === 'bs' ? 'Izgovor nejasan, pokušajte ponovo' : (lang === 'tr' ? 'Telaffuz anlaşılmadı, tekrar deneyin' : (lang === 'ro' ? 'Pronunție neclară, încercați din nou' : 'Pronunciation unclear, try again')));
        showToast(warnMsg, 'warning');
      }
    },
    () => {
      if (btn) btn.classList.remove('recording');
      if (status) status.textContent = ui.voice_error;
    }
  );
}

// ── Proceed without Voice (Skip) ─────────────────────────────
function skipConvSpeech() {
  const idx = convState.selectedOptionIndex;
  if (idx === -1) return;

  const turn = convState.scenario.turns[convState.currentTurnIndex];
  const option = turn.options[idx];
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  // Award half points for skipped voice practice
  const halfPoints = Math.round(option.points / 2);
  convState.score += halfPoints;
  document.getElementById('convScore').textContent = `${ui.points_label}: ${convState.score}`;
  
  const toastMsg = ui.sent_points.replace('{points}', halfPoints);
  showToast(toastMsg, 'info');

  advanceAfterUserSelection(option, false);
}

// ── Advance Dialogue ─────────────────────────────────────────
function advanceAfterUserSelection(option, spokenSuccess) {
  const localizedOptionText = getLocalizedScenarioText(convState.scenario.id, convState.currentTurnIndex, 'option', convState.selectedOptionIndex);
  addConvMessage('user', option.textDe, localizedOptionText, spokenSuccess);
  
  convState.currentTurnIndex++;
  
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  // Clean user area temporarily
  const area = document.getElementById('userInputArea');
  if (area) area.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-muted)">${ui.partner_typing}</div>`;

  setTimeout(() => {
    progressConversation();
  }, 1000);
}

// ── End Scenario & Show Results ──────────────────────────────
function endConversation() {
  document.getElementById('convActive').style.display = 'none';
  const res = document.getElementById('convResults');
  res.style.display = 'block';

  // Calculate maximum score
  const maxScore = convState.scenario.turns
    .filter(t => t.speaker === 'user')
    .reduce((a, t) => a + Math.max(...t.options.map(o => o.points)), 0);

  const saved = getSavedProgress();
  if (!saved.convScores) saved.convScores = {};
  
  const previousBest = saved.convScores[convState.scenario.id] || 0;
  if (convState.score > previousBest) {
    saved.convScores[convState.scenario.id] = convState.score;
  }
  saved.totalScore = (saved.totalScore || 0) + convState.score;
  saveProgress(saved);
  updateDashboardStats();

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ar';
  const ui = CONV_LOCALIZED_UI[lang] || CONV_LOCALIZED_UI['ar'];

  const pct = Math.round((convState.score / maxScore) * 100);
  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 65 ? '⭐⭐' : pct >= 40 ? '⭐' : '';
  const grade = pct >= 80 ? 'excellent' : pct >= 55 ? 'good' : 'poor';
  const msg = pct >= 90 ? ui.end_msg_excellent : pct >= 70 ? ui.end_msg_good : ui.end_msg_poor;

  const scoreDetails = ui.result_score_details
    .replace('{score}', convState.score)
    .replace('{max}', maxScore)
    .replace('{stars}', stars);
  const scenarioTitleText = getLocalizedScenarioText(convState.scenario.id, -1, 'title');
  const scenarioDetails = ui.result_scenario.replace('{title}', scenarioTitleText);

  res.innerHTML = `
    <div class="result-score ${grade}">${pct}%</div>
    <div class="result-message">${msg}</div>
    <div class="result-details">
      ${scoreDetails}<br>
      ${scenarioDetails}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="startConversation(${convState.scenario.id})">${ui.restart_btn}</button>
      <button class="btn btn-ghost" onclick="backToConvMenu()">${ui.scenarios_menu_btn}</button>
    </div>
  `;
}

// ── Exit Conversation ───────────────────────────────────────
function backToConvMenu() {
  document.getElementById('convSelection').style.display = 'grid';
  document.getElementById('convActive').style.display = 'none';
  document.getElementById('convResults').style.display = 'none';
  buildConversationSelection();
}
