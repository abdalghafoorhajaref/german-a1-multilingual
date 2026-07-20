// ============================================================
// CURRICULUM DATABASE - Complete A1 & A2 Syllabus (Multilingual)
// Berliner Platz 1 & 2 Neu - All 24 Chapters
// ============================================================

const CURRICULUM = [
  {
    "id": 1,
    "titleDe": "Hallo! Wie heißen Sie?",
    "titleAr": "مرحباً! ما اسمك؟",
    "emoji": "👋",
    "color": "#4f8ef7",
    "titleEn": "Welcome! What is your name",
    "titleTr": "Hoş geldin! Adın ne",
    "titleRo": "Bun venit! Cum te numești",
    "titleBs": "Dobrodošli! kako se zoveš",
    "titleEs": "¡Bienvenido! Cómo te llamas",
    "titleBg": "Добре дошли! как се казваш",
    "titleEl": "Καλωσόρισμα! Πως σε λένε",
    "topics": [
      "التعريف بالنفس",
      "التحية",
      "الأبجدية"
    ],
    "topicsEn": [
      "Introducing oneself",
      "Greetings",
      "alphabet"
    ],
    "topicsTr": [
      "Kendini tanıtma",
      "Selamlar",
      "alfabe"
    ],
    "topicsRo": [
      "Prezentându-se",
      "Salutări",
      "alfabet"
    ],
    "topicsBs": [
      "Predstavljajući se",
      "Pozdrav",
      "abeceda"
    ],
    "topicsEs": [
      "Presentarse",
      "Saludos",
      "alfabeto"
    ],
    "topicsBg": [
      "Представяне на себе си",
      "поздрави",
      "азбука"
    ],
    "topicsEl": [
      "Παρουσίαση του εαυτού του",
      "Χαιρετίσματα",
      "αλφάβητο"
    ],
    "canDo": "أستطيع أن أقدم نفسي وأتهجى اسمي",
    "canDoDe": "Ich kann mich vorstellen und meinen Namen buchstabieren",
    "canDoEn": "I can introduce myself and spell my name",
    "canDoTr": "Kendimi tanıtabilirim ve adımı yazabilirim",
    "canDoRo": "Pot să mă prezint și să îmi scriu numele",
    "canDoBs": "Mogu se predstaviti i spelovati svoje ime",
    "canDoEs": "Puedo presentarme y deletrear mi nombre",
    "canDoBg": "Мога да се представя и да напиша името си",
    "canDoEl": "Μπορώ να συστηθώ και να γράψω το όνομά μου",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/02_langenschidt_-_1.1b_-_die_kursliste.mp3",
        "label": "1.1b - Die Kursliste",
        "labelAr": "قائمة الطلاب",
        "labelEn": "List of students",
        "labelTr": "Öğrenci listesi",
        "labelRo": "Lista elevilor",
        "labelBs": "Spisak studenata",
        "labelEs": "Lista de estudiantes",
        "labelBg": "Списък на учениците",
        "labelEl": "Κατάλογος μαθητών"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/03_langenschidt_-_1.2a_-_sie_und_du.mp3",
        "label": "1.2a - Sie und du",
        "labelAr": "أنتَ الرسمي وغير الرسمي",
        "labelEn": "You are the formal and the informal",
        "labelTr": "Siz resmi ve gayri resmisiniz",
        "labelRo": "Tu ești cel formal și cel informal",
        "labelBs": "Vi ste formalni i neformalni",
        "labelEs": "Eres el formal y el informal.",
        "labelBg": "Вие сте формалното и неформалното",
        "labelEl": "Είσαι ο επίσημος και ο άτυπος"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/04_langenschidt_-_1.3a_-_melodie_und_akzent.mp3",
        "label": "1.3a - Melodie und Akzent",
        "labelAr": "لحن اللغة ونبرها",
        "labelEn": "The melody and tone of the language",
        "labelTr": "Dilin melodisi ve tonu",
        "labelRo": "Melodia și tonul limbii",
        "labelBs": "Melodija i ton jezika",
        "labelEs": "La melodía y el tono del idioma.",
        "labelBg": "Мелодията и тонът на езика",
        "labelEl": "Η μελωδία και ο τόνος της γλώσσας"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/06_langenschidt_-_1.4a_-_sich_vorstellen.mp3",
        "label": "1.4a - Sich vorstellen",
        "labelAr": "التعريف بالنفس",
        "labelEn": "Introducing oneself",
        "labelTr": "Kendini tanıtma",
        "labelRo": "Prezentându-se",
        "labelBs": "Predstavljajući se",
        "labelEs": "Presentarse",
        "labelBg": "Представяне на себе си",
        "labelEl": "Παρουσίαση του εαυτού του"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/09_langenschidt_-_1.6b_-_steckbriefe.mp3",
        "label": "1.6b - Steckbriefe",
        "labelAr": "البطاقات الشخصية",
        "labelEn": "Personal cards",
        "labelTr": "Kişisel kartlar",
        "labelRo": "Carduri personale",
        "labelBs": "Lične karte",
        "labelEs": "Tarjetas personales",
        "labelBg": "Лични карти",
        "labelEl": "Προσωπικές κάρτες"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/11_langenschidt_-_1.9a_-_buchstabieren.mp3",
        "label": "1.9a - Buchstabieren",
        "labelAr": "التهجئة",
        "labelEn": "Spelling",
        "labelTr": "Yazım",
        "labelRo": "Ortografie",
        "labelBs": "Pravopis",
        "labelEs": "Ortografía",
        "labelBg": "Правопис",
        "labelEl": "Ορθογραφία"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/12_langenschidt_-_1.9b_-_alphabet_und_rhythmus_lernen.mp3",
        "label": "1.9b - Alphabet lernen",
        "labelAr": "تعلم الأبجدية",
        "labelEn": "Learn the alphabet",
        "labelTr": "Alfabeyi öğrenin",
        "labelRo": "Învață alfabetul",
        "labelBs": "Naučite abecedu",
        "labelEs": "aprende el alfabeto",
        "labelBg": "Научете азбуката",
        "labelEl": "Μάθετε το αλφάβητο"
      }
    ],
    "dialogs": [
      {
        "title": "Guten Tag! Sich vorstellen",
        "titleAr": "مرحباً! التعريف بالنفس",
        "titleEn": "Welcome! Introducing oneself",
        "titleTr": "Hoş geldin! Kendini tanıtma",
        "titleRo": "Bun venit! Prezentându-se",
        "titleBs": "Dobrodošli! Predstavljajući se",
        "titleEs": "¡Bienvenido! Presentarse",
        "titleBg": "Добре дошли! Представяне на себе си",
        "titleEl": "Καλωσόρισμα! Παρουσίαση του εαυτού του",
        "lines": [
          {
            "speaker": "Anna",
            "de": "Guten Tag! Ich heiße Anna Müller.",
            "ar": "مرحباً! اسمي آنا مولر.",
            "en": "Welcome! My name is Anna Mueller.",
            "tr": "Hoş geldin! Benim adım Anna Mueller.",
            "ro": "Bun venit! Numele meu este Anna Mueller.",
            "bs": "Dobrodošli! Moje ime je Anna Mueller.",
            "es": "¡Bienvenido! Mi nombre es Anna Mueller.",
            "bg": "Добре дошли! Казвам се Анна Мюлер.",
            "el": "Καλωσόρισμα! Το όνομά μου είναι Anna Mueller."
          },
          {
            "speaker": "Carlos",
            "de": "Guten Tag! Ich bin Carlos Vera. Und Sie?",
            "ar": "مرحباً! أنا كارلوس فيرا. وأنتِ؟",
            "en": "Welcome! I'm Carlos Vera. And you?",
            "tr": "Hoş geldin! Ben Carlos Vera'yım. Ve sen?",
            "ro": "Bun venit! Eu sunt Carlos Vera. Și tu?",
            "bs": "Dobrodošli! Ja sam Carlos Vera. A ti?",
            "es": "¡Bienvenido! Soy Carlos Vera. ¿Y tú?",
            "bg": "Добре дошли! Аз съм Карлос Вера. а ти",
            "el": "Καλωσόρισμα! Είμαι ο Κάρλος Βέρα. Και εσύ;"
          },
          {
            "speaker": "Anna",
            "de": "Mein Name ist Anna Müller. Woher kommen Sie?",
            "ar": "اسمي آنا مولر. من أين أنتَ؟",
            "en": "My name is Anna Mueller. Where are you from?",
            "tr": "Benim adım Anna Mueller. Nerelisin",
            "ro": "Numele meu este Anna Mueller. De unde ești?",
            "bs": "Moje ime je Anna Mueller. odakle si",
            "es": "Mi nombre es Anna Mueller. ¿De dónde eres?",
            "bg": "Казвам се Анна Мюлер. ти откъде си",
            "el": "Το όνομά μου είναι Anna Mueller. Από πού είστε;"
          },
          {
            "speaker": "Carlos",
            "de": "Ich komme aus Spanien. Und Sie?",
            "ar": "أنا من إسبانيا. وأنتِ؟",
            "en": "I am from Spain. And you?",
            "tr": "Ben İspanya'dan geliyorum. Ve sen?",
            "ro": "Sunt din Spania. Și tu?",
            "bs": "Ja sam iz Spanije. A ti?",
            "es": "Yo soy de España. ¿Y tú?",
            "bg": "Аз съм от Испания. а ти",
            "el": "Είμαι από την Ισπανία. Και εσύ;"
          },
          {
            "speaker": "Anna",
            "de": "Ich komme aus Deutschland.",
            "ar": "أنا من ألمانيا.",
            "en": "I am from Germany.",
            "tr": "Ben Almanyalıyım.",
            "ro": "Sunt din Germania.",
            "bs": "Ja sam iz Njemačke.",
            "es": "Soy de Alemania.",
            "bg": "Аз съм от Германия.",
            "el": "Είμαι από τη Γερμανία."
          }
        ]
      },
      {
        "title": "Wie schreibt man das?",
        "titleAr": "كيف تكتبها؟",
        "titleEn": "How do you write it?",
        "titleTr": "Bunu nasıl yazarsın?",
        "titleRo": "Cum o scrii?",
        "titleBs": "Kako to pišete?",
        "titleEs": "¿Cómo lo escribes?",
        "titleBg": "Как го пишеш?",
        "titleEl": "Πώς το γράφεις;",
        "lines": [
          {
            "speaker": "Lehrerin",
            "de": "Buchstabieren Sie bitte Ihren Namen.",
            "ar": "تهجّ اسمك من فضلك.",
            "en": "Spell your name please.",
            "tr": "İsminizi heceleyin lütfen.",
            "ro": "Scrie-ți numele te rog.",
            "bs": "Spelujte svoje ime molim.",
            "es": "Deletrea tu nombre por favor.",
            "bg": "Напишете името си, моля.",
            "el": "Γράψε το όνομά σου σε παρακαλώ."
          },
          {
            "speaker": "Student",
            "de": "M-A-R-I-A.",
            "ar": "م-ا-ر-ي-ا.",
            "en": "Maria.",
            "tr": "Maria.",
            "ro": "Maria.",
            "bs": "Maria.",
            "es": "María.",
            "bg": "Мария.",
            "el": "Μαρία."
          },
          {
            "speaker": "Lehrerin",
            "de": "Danke. Wie ist Ihre Telefonnummer?",
            "ar": "شكراً. ما هو رقم هاتفك؟",
            "en": "Thanks. What is your phone number?",
            "tr": "Teşekkürler. Telefon numaran nedir?",
            "ro": "Mulţumesc. Care este numărul tău de telefon?",
            "bs": "Hvala. Koji je tvoj broj telefona?",
            "es": "Gracias. ¿Cuál es tu número de teléfono?",
            "bg": "благодаря Кой е вашият телефонен номер?",
            "el": "Ευχαριστώ. Ποιος είναι ο αριθμός τηλεφώνου σας;"
          },
          {
            "speaker": "Student",
            "de": "0171 – 23 45 67.",
            "ar": "صفر-واحد-سبعة-واحد – ثلاثة وعشرون-خمسة وأربعون-سبعة وستون.",
            "en": "Zero-one-seven-one - twenty-three - forty-five - sixty-seven.",
            "tr": "Sıfır-bir-yedi-bir - yirmi üç - kırk beş - altmış yedi.",
            "ro": "Zero-unu-șapte-unu - douăzeci și trei - patruzeci și cinci - șaizeci și șapte.",
            "bs": "Nula-jedan-sedam-jedan - dvadeset tri - četrdeset pet - šezdeset sedam.",
            "es": "Cero uno-siete-uno - veintitrés - cuarenta y cinco - sesenta y siete.",
            "bg": "Нула-едно-седем-едно - двадесет и три - четиридесет и пет - шестдесет и седем.",
            "el": "Μηδέν-ένα-επτά-ένα - είκοσι τρία - σαράντα πέντε - εξήντα επτά."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Deutsch lernen in Berlin",
        "titleAr": "تعلم الألمانية في برلين",
        "titleEn": "Learn German in Berlin",
        "titleTr": "Berlin'de Almanca öğrenin",
        "titleRo": "Învață germană la Berlin",
        "titleBs": "Učite njemački u Berlinu",
        "titleEs": "Aprende alemán en Berlín",
        "titleBg": "Научете немски в Берлин",
        "titleEl": "Μάθετε γερμανικά στο Βερολίνο",
        "text": [
          {
            "de": "Das ist der Deutschkurs.",
            "ar": "هذا هو درس الألمانية.",
            "en": "This is a German lesson.",
            "tr": "Bu bir Almanca dersidir.",
            "ro": "Aceasta este o lecție de germană.",
            "bs": "Ovo je lekcija njemačkog.",
            "es": "Esta es una lección de alemán.",
            "bg": "Това е урок по немски.",
            "el": "Αυτό είναι μάθημα γερμανικών."
          },
          {
            "de": "Die Kursleiterin heißt Frau Kohl.",
            "ar": "اسم المعلمة السيدة كول.",
            "en": "The teacher's name is Mrs. Cole.",
            "tr": "Öğretmenin adı Bayan Cole.",
            "ro": "Numele profesorului este doamna Cole.",
            "bs": "Učiteljica se zove gđa Cole.",
            "es": "El nombre de la maestra es Sra. Cole.",
            "bg": "Името на учителката е г-жа Коул.",
            "el": "Το όνομα της δασκάλας είναι κυρία Κόουλ."
          },
          {
            "de": "Im Kurs sind 15 Personen.",
            "ar": "في الدرس 15 شخصاً.",
            "en": "There are 15 people in the lesson.",
            "tr": "Derste 15 kişi var.",
            "ro": "Sunt 15 persoane la lecție.",
            "bs": "U lekciji je 15 ljudi.",
            "es": "Hay 15 personas en la lección.",
            "bg": "В урока участват 15 души.",
            "el": "Στο μάθημα συμμετέχουν 15 άτομα."
          },
          {
            "de": "Sie kommen aus vielen Ländern.",
            "ar": "يأتون من دول كثيرة.",
            "en": "They come from many countries.",
            "tr": "Birçok ülkeden geliyorlar.",
            "ro": "Ei vin din multe țări.",
            "bs": "Dolaze iz mnogih zemalja.",
            "es": "Vienen de muchos países.",
            "bg": "Те идват от много страни.",
            "el": "Προέρχονται από πολλές χώρες."
          },
          {
            "de": "Carlos kommt aus Spanien. Maria kommt aus Brasilien.",
            "ar": "كارلوس من إسبانيا. ماريا من البرازيل.",
            "en": "Carlos from Spain. Maria from Brazil.",
            "tr": "İspanya'dan Carlos. Brezilya'dan Maria.",
            "ro": "Carlos din Spania. Maria din Brazilia.",
            "bs": "Carlos iz Španije. Maria iz Brazila.",
            "es": "Carlos de España. María de Brasil.",
            "bg": "Карлос от Испания. Мария от Бразилия.",
            "el": "Carlos από την Ισπανία. Μαρία από τη Βραζιλία."
          }
        ],
        "questions": [
          {
            "q": "Wie heißt die Kursleiterin?",
            "qAr": "ما اسم المعلمة؟",
            "answer": "Frau Kohl",
            "answerAr": "السيدة كول",
            "qEn": "What is the name of the parameter?",
            "answerEn": "Mrs Cole",
            "qTr": "Parametrenin adı nedir?",
            "answerTr": "Bayan Cole",
            "qRo": "Care este numele parametrului?",
            "answerRo": "doamna Cole",
            "qBs": "Kako se zove parametar?",
            "answerBs": "Mrs Cole",
            "qEs": "¿Cuál es el nombre del parámetro?",
            "answerEs": "señora cole",
            "qBg": "Какво е името на параметъра?",
            "answerBg": "г-жа Коул",
            "qEl": "Ποιο είναι το όνομα της παραμέτρου;",
            "answerEl": "Κυρία Κόουλ"
          },
          {
            "q": "Wie viele Personen sind im Kurs?",
            "qAr": "كم شخصاً في الدرس؟",
            "answer": "15 Personen",
            "answerAr": "15 شخصاً",
            "qEn": "How many people are in the lesson?",
            "answerEn": "15 people",
            "qTr": "Derste kaç kişi var?",
            "answerTr": "15 kişi",
            "qRo": "Câți oameni sunt la lecție?",
            "answerRo": "15 persoane",
            "qBs": "Koliko je ljudi u lekciji?",
            "answerBs": "15 ljudi",
            "qEs": "¿Cuántas personas hay en la lección?",
            "answerEs": "15 personas",
            "qBg": "Колко души са в урока?",
            "answerBg": "15 души",
            "qEl": "Πόσα άτομα συμμετέχουν στο μάθημα;",
            "answerEl": "15 άτομα"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "verb-sein",
        "title": "فعل الكون - sein (يكون/هو)",
        "titleDe": "Das Verb 'sein'",
        "explanation": "فعل sein هو من أهم الأفعال في الألمانية. يُستخدم للتعريف بالنفس والوصف.",
        "titleEn": "Verb to be - sein (to be/is)",
        "explanationEn": "Sein is one of the most important verbs in German. It is used to introduce oneself and describe oneself.",
        "titleTr": "Olmak Fiil - sein (olmak/olmak)",
        "explanationTr": "Sein Almancanın en önemli fiillerinden biridir. Kendini tanıtmak ve anlatmak için kullanılır.",
        "titleRo": "Verbul a fi - sein (a fi/este)",
        "explanationRo": "Sein este unul dintre cele mai importante verbe din germană. Este folosit pentru a te prezenta și a te descrie.",
        "titleBs": "Glagol biti - sein (biti/je)",
        "explanationBs": "Sein je jedan od najvažnijih glagola u njemačkom jeziku. Koristi se da se predstavi i opiše.",
        "titleEs": "Verbo to be - sein (ser/es)",
        "explanationEs": "Sein es uno de los verbos más importantes del alemán. Se utiliza para presentarse y describirse.",
        "titleBg": "Глагол да бъде - sein (да бъде/е)",
        "explanationBg": "Sein е един от най-важните глаголи в немския език. Използва се за представяне и описание на себе си.",
        "titleEl": "Ρήμα to be - sein (να είσαι/είναι)",
        "explanationEl": "Το Sein είναι ένα από τα πιο σημαντικά ρήματα στα γερμανικά. Χρησιμοποιείται για να εισαγάγει τον εαυτό του και να περιγράψει τον εαυτό του.",
        "rules": [
          {
            "example": "Ich bin Carlos.",
            "translation": "أنا كارلوس.",
            "note": "مع ضمير ich نستخدم bin",
            "translationEn": "I'm Carlos.",
            "noteEn": "With the pronoun ich we use bin",
            "translationTr": "Ben Carlos'um.",
            "noteTr": "Zamir ich ile birlikte bin kullanıyoruz",
            "translationRo": "Eu sunt Carlos.",
            "noteRo": "Cu pronumele ich folosim bin",
            "translationBs": "Ja sam Carlos.",
            "noteBs": "Uz zamjenicu ich koristimo bin",
            "translationEs": "Soy carlos.",
            "noteEs": "Con el pronombre ich usamos bin",
            "translationBg": "Аз съм Карлос.",
            "noteBg": "С местоимението ich използваме bin",
            "translationEl": "Είμαι ο Κάρλος.",
            "noteEl": "Με την αντωνυμία ich χρησιμοποιούμε bin"
          },
          {
            "example": "Du bist Maria.",
            "translation": "أنتَ ماريا.",
            "note": "مع ضمير du نستخدم bist",
            "translationEn": "You are Maria.",
            "noteEn": "With the pronoun du we use bist",
            "translationTr": "Sen Maria'sın.",
            "noteTr": "Zamir du ile birlikte bist kullanıyoruz",
            "translationRo": "Tu esti Maria.",
            "noteRo": "Cu pronumele du folosim bist",
            "translationBs": "Ti si Marija.",
            "noteBs": "Uz zamjenicu du koristimo bist",
            "translationEs": "Eres María.",
            "noteEs": "Con el pronombre du usamos bist",
            "translationBg": "Ти си Мария.",
            "noteBg": "С местоимението du използваме bist",
            "translationEl": "Είσαι η Μαρία.",
            "noteEl": "Με την αντωνυμία du χρησιμοποιούμε bist"
          },
          {
            "example": "Er/Sie ist Lehrer.",
            "translation": "هو/هي معلم.",
            "note": "مع er/sie نستخدم ist",
            "translationEn": "He/she is a teacher.",
            "noteEn": "With er/sie we use ist",
            "translationTr": "O bir öğretmendir.",
            "noteTr": "Er/sie ile ist'i kullanırız",
            "translationRo": "El/ea este profesor.",
            "noteRo": "Cu er/sie folosim ist",
            "translationBs": "On/ona je nastavnik.",
            "noteBs": "Sa er/sie koristimo ist",
            "translationEs": "Él/ella es profesor.",
            "noteEs": "Con er/sie usamos ist",
            "translationBg": "Той/тя е учител.",
            "noteBg": "С er/sie използваме ist",
            "translationEl": "Είναι δάσκαλος/α.",
            "noteEl": "Με er/sie χρησιμοποιούμε ist"
          },
          {
            "example": "Wir sind hier.",
            "translation": "نحن هنا.",
            "note": "مع wir نستخدم sind",
            "translationEn": "We are here.",
            "noteEn": "With wir we use sind",
            "translationTr": "Biz buradayız.",
            "noteTr": "Kabloyla sind kullanıyoruz",
            "translationRo": "Suntem aici.",
            "noteRo": "Cu wir folosim sind",
            "translationBs": "Mi smo ovdje.",
            "noteBs": "Sa wirom koristimo sind",
            "translationEs": "Estamos aquí.",
            "noteEs": "Con wir usamos sind",
            "translationBg": "Ние сме тук.",
            "noteBg": "С wir използваме sind",
            "translationEl": "Είμαστε εδώ.",
            "noteEl": "Με το σύρμα χρησιμοποιούμε άμμο"
          }
        ],
        "table": {
          "headers": [
            "الضمير",
            "التصريف",
            "المعنى"
          ],
          "headersEn": [
            "Pronoun",
            "Conjugation",
            "Meaning"
          ],
          "headersTr": [
            "Zamir",
            "Çekim",
            "Anlam"
          ],
          "headersRo": [
            "Pronume",
            "Conjugare",
            "Sens"
          ],
          "headersBs": [
            "Zamjenica",
            "Konjugacija",
            "Značenje"
          ],
          "headersEs": [
            "Pronombre",
            "Conjugación",
            "Significado"
          ],
          "headersBg": [
            "Местоимение",
            "Спрежение",
            "Значение"
          ],
          "headersEl": [
            "Αντωνυμία",
            "Κλίση",
            "Σημασία"
          ],
          "rows": [
            [
              "ich",
              "bin",
              "أنا / I / ben / eu / ja / yo / аз / εγώ"
            ],
            [
              "du",
              "bist",
              "أنتَ / you / sen / tu / ti / tú / ти / εσύ"
            ],
            [
              "er/sie/es",
              "ist",
              "هو/هي/إنه / he/she/it / o / el/ea / on/ona/ono / él/ella/ello / той/тя/то / αυτός/αυτή/αυτό"
            ],
            [
              "wir",
              "sind",
              "نحن / we / biz / noi / mi / nosotros / ние / εμείς"
            ],
            [
              "ihr",
              "seid",
              "أنتم / you (plural) / siz / voi / vi / vosotros / ви / εσείς"
            ],
            [
              "sie/Sie",
              "sind",
              "هم/حضرتك / they/You (formal) / onlar/Siz / ei/ele/Dvs. / oni/Vi / ellos/Usted / те/Вие / αυτοί/Εσείς"
            ]
          ]
        }
      },
      {
        "id": "verb-heissen",
        "title": "فعل heißen (يُدعى/اسمه)",
        "titleDe": "Das Verb 'heißen'",
        "explanation": "نستخدم heißen للتعريف بالاسم. الفعل يتصرف بشكل منتظم.",
        "titleEn": "verb heißen (to be called/his name)",
        "explanationEn": "We use heißen to identify a noun. The verb behaves regularly.",
        "titleTr": "fiil heißen (adı/adı ile anılmak)",
        "explanationTr": "Bir ismi tanımlamak için heißen kullanırız. Fiil düzenli davranır.",
        "titleRo": "verbul heißen (a fi numit/numele lui)",
        "explanationRo": "Folosim heißen pentru a identifica un substantiv. Verbul se comportă regulat.",
        "titleBs": "glagol heißen (zvati se/njegovo ime)",
        "explanationBs": "Koristimo heißen za identifikaciju imenice. Glagol se ponaša redovno.",
        "titleEs": "verbo heißen (ser llamado/su nombre)",
        "explanationEs": "Usamos heißen para identificar un sustantivo. El verbo se comporta con regularidad.",
        "titleBg": "глагол heißen (да се нарича/името му)",
        "explanationBg": "Използваме heißen, за да идентифицираме съществително. Глаголът се държи редовно.",
        "titleEl": "ρήμα heißen (να λέγεται/το όνομά του)",
        "explanationEl": "Χρησιμοποιούμε το heißen για να προσδιορίσουμε ένα ουσιαστικό. Το ρήμα συμπεριφέρεται τακτικά.",
        "rules": [
          {
            "example": "Ich heiße Maria.",
            "translation": "اسمي ماريا.",
            "note": "الأول",
            "translationEn": "My name is Maria.",
            "noteEn": "the first",
            "translationTr": "Benim adım Maria.",
            "noteTr": "ilk",
            "translationRo": "Numele meu este Maria.",
            "noteRo": "primul",
            "translationBs": "Moje ime je Marija.",
            "noteBs": "prvi",
            "translationEs": "Mi nombre es María.",
            "noteEs": "la primera",
            "translationBg": "Казвам се Мария.",
            "noteBg": "първият",
            "translationEl": "Με λένε Μαρία.",
            "noteEl": "το πρώτο"
          },
          {
            "example": "Du heißt Carlos.",
            "translation": "اسمك كارلوس.",
            "note": "للمخاطب",
            "translationEn": "Your name is Carlos.",
            "noteEn": "To the addressee",
            "translationTr": "Adın Carlos.",
            "noteTr": "muhatabına",
            "translationRo": "Numele tău este Carlos.",
            "noteRo": "Către destinatar",
            "translationBs": "Vaše ime je Carlos.",
            "noteBs": "Primatelju",
            "translationEs": "Tu nombre es Carlos.",
            "noteEs": "al destinatario",
            "translationBg": "Името ти е Карлос.",
            "noteBg": "Към адресата",
            "translationEl": "Το όνομά σου είναι Κάρλος.",
            "noteEl": "Προς τον παραλήπτη"
          },
          {
            "example": "Er heißt Thomas.",
            "translation": "اسمه توماس.",
            "note": "للغائب",
            "translationEn": "His name is Thomas.",
            "noteEn": "For the absent",
            "translationTr": "Adı Thomas.",
            "noteTr": "Yok olanlar için",
            "translationRo": "Numele lui este Thomas.",
            "noteRo": "Pentru cei absenți",
            "translationBs": "Njegovo ime je Thomas.",
            "noteBs": "Za odsutne",
            "translationEs": "Su nombre es Tomás.",
            "noteEs": "para los ausentes",
            "translationBg": "Името му е Томас.",
            "noteBg": "За отсъстващите",
            "translationEl": "Το όνομά του είναι Θωμάς.",
            "noteEl": "Για τους απόντες"
          }
        ],
        "table": {
          "headers": [
            "الضمير",
            "التصريف"
          ],
          "headersEn": [
            "Pronoun",
            "Conjugation"
          ],
          "headersTr": [
            "Zamir",
            "Çekim"
          ],
          "headersRo": [
            "Pronume",
            "Conjugare"
          ],
          "headersBs": [
            "Zamjenica",
            "Konjugacija"
          ],
          "headersEs": [
            "Pronombre",
            "Conjugación"
          ],
          "headersBg": [
            "Местоимение",
            "Спрежение"
          ],
          "headersEl": [
            "Αντωνυμία",
            "Κλίση"
          ],
          "rows": [
            [
              "ich",
              "heiße"
            ],
            [
              "du",
              "heißt"
            ],
            [
              "er/sie/es",
              "heißt"
            ],
            [
              "wir",
              "heißen"
            ],
            [
              "ihr",
              "heißt"
            ],
            [
              "sie/Sie",
              "heißen"
            ]
          ]
        }
      },
      {
        "id": "formal-informal",
        "title": "الخطاب الرسمي وغير الرسمي - Sie / du",
        "titleDe": "Sie und du",
        "explanation": "في الألمانية هناك فرق مهم بين الخطاب الرسمي والمألوف.",
        "titleEn": "Formal and informal speech - Sie/du",
        "explanationEn": "In German there is an important difference between formal and familiar speech.",
        "titleTr": "Resmi ve resmi olmayan konuşma - Sie/du",
        "explanationTr": "Almanca'da resmi konuşma ile tanıdık konuşma arasında önemli bir fark vardır.",
        "titleRo": "Discurs formal și informal - Sie/du",
        "explanationRo": "În germană există o diferență importantă între vorbirea formală și cea familiară.",
        "titleBs": "Formalni i neformalni govor - Sie/du",
        "explanationBs": "U njemačkom postoji bitna razlika između formalnog i poznatog govora.",
        "titleEs": "Discurso formal e informal - Sie/du",
        "explanationEs": "En alemán existe una diferencia importante entre el habla formal y el familiar.",
        "titleBg": "Официална и неофициална реч - Sie/du",
        "explanationBg": "В немския език има важна разлика между официалната и познатата реч.",
        "titleEl": "Επίσημος και άτυπος λόγος - Sie/du",
        "explanationEl": "Στα γερμανικά υπάρχει μια σημαντική διαφορά μεταξύ επίσημης και οικείας ομιλίας.",
        "rules": [
          {
            "example": "Wie heißen Sie?",
            "translation": "ما اسمك؟ (رسمي)",
            "note": "مع الغرباء والأكبر سناً",
            "translationEn": "What is your name (official)",
            "noteEn": "With strangers and older people",
            "translationTr": "Adınız nedir (resmi)",
            "noteTr": "Yabancılarla ve yaşlı insanlarla",
            "translationRo": "Care este numele tău (oficial)",
            "noteRo": "Cu străini și bătrâni",
            "translationBs": "kako se zoveš (zvanično)",
            "noteBs": "Sa strancima i starijim ljudima",
            "translationEs": "¿Cuál es tu nombre (oficial)?",
            "noteEs": "Con extraños y personas mayores",
            "translationBg": "Как се казваш (официално)",
            "noteBg": "С непознати и по-възрастни хора",
            "translationEl": "Πώς σε λένε (επίσημο)",
            "noteEl": "Με αγνώστους και ηλικιωμένους"
          },
          {
            "example": "Wie heißt du?",
            "translation": "ما اسمك؟ (غير رسمي)",
            "note": "مع الأصدقاء والأطفال",
            "translationEn": "What is your name (informal)",
            "noteEn": "With friends and children",
            "translationTr": "Adınız nedir (gayri resmi)",
            "noteTr": "Arkadaşlarla ve çocuklarla",
            "translationRo": "Care este numele tău (informal)",
            "noteRo": "Cu prieteni și copii",
            "translationBs": "kako se zoves (neformalno)",
            "noteBs": "Sa prijateljima i decom",
            "translationEs": "¿Cuál es tu nombre? (informal)",
            "noteEs": "Con amigos y niños",
            "translationBg": "Как се казваш (неофициално)",
            "noteBg": "С приятели и деца",
            "translationEl": "Πώς σε λένε (ανεπίσημο)",
            "noteEl": "Με φίλους και παιδιά"
          },
          {
            "example": "Woher kommen Sie?",
            "translation": "من أين حضرتك؟ (رسمي)",
            "note": "",
            "translationEn": "Where are you from? (official)",
            "noteEn": "",
            "translationTr": "Nerelisin (resmi)",
            "noteTr": "",
            "translationRo": "De unde ești? (oficial)",
            "noteRo": "",
            "translationBs": "odakle si (zvanično)",
            "noteBs": "",
            "translationEs": "¿De dónde eres? (oficial)",
            "noteEs": "",
            "translationBg": "ти откъде си (официален)",
            "noteBg": "",
            "translationEl": "Από πού είστε; (επίσημος ανώτερος υπάλληλος)",
            "noteEl": ""
          },
          {
            "example": "Woher kommst du?",
            "translation": "من أين أنت؟ (غير رسمي)",
            "note": "",
            "translationEn": "Where are you from? (informal)",
            "noteEn": "",
            "translationTr": "Nerelisin (gayri resmi)",
            "noteTr": "",
            "translationRo": "De unde ești? (informal)",
            "noteRo": "",
            "translationBs": "odakle si (neformalno)",
            "noteBs": "",
            "translationEs": "¿De dónde eres? (informal)",
            "noteEs": "",
            "translationBg": "ти откъде си (неформално)",
            "noteBg": "",
            "translationEl": "Από πού είστε; (άτυπος)",
            "noteEl": ""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "fillblank",
        "question": "Ich _____ Maria. (heißen)",
        "questionAr": "أكمل الفراغ بالتصريف الصحيح",
        "answer": "heiße",
        "hint": "تصريف heißen مع ich",
        "questionEn": "Fill in the blank with the correct conjugation",
        "questionTr": "Boşluğu doğru çekimle doldurun",
        "questionRo": "Completați spațiul liber cu conjugarea corectă",
        "questionBs": "Popunite prazno mjesto pravilnom konjugacijom",
        "questionEs": "Completa el espacio en blanco con la conjugación correcta.",
        "questionBg": "Попълнете празното поле с правилното спрежение",
        "questionEl": "Συμπλήρωσε το κενό με τη σωστή σύζευξη"
      },
      {
        "type": "fillblank",
        "question": "Woher _____ du? (kommen)",
        "questionAr": "أكمل الفراغ",
        "answer": "kommst",
        "hint": "تصريف kommen مع du",
        "questionEn": "Fill in the blank",
        "questionTr": "Boşluğu doldurun",
        "questionRo": "Completați spațiul liber",
        "questionBs": "Popunite prazninu",
        "questionEs": "Completa el espacio en blanco",
        "questionBg": "Попълнете празното поле",
        "questionEl": "Συμπληρώστε το κενό"
      },
      {
        "type": "mcq",
        "question": "Wie sagt man 'Wie heißen Sie?' auf Arabisch?",
        "questionAr": "ما معنى هذه الجملة بالعربية؟",
        "options": [
          "ما لغتك؟",
          "ما اسم حضرتك؟",
          "من أين أنت؟",
          "كم عمرك؟"
        ],
        "answer": 1,
        "questionEn": "What does this sentence mean in Arabic?",
        "questionTr": "Bu cümle Arapçada ne anlama geliyor?",
        "questionRo": "Ce înseamnă această propoziție în arabă?",
        "questionBs": "Šta ova rečenica znači na arapskom?",
        "questionEs": "¿Qué significa esta frase en árabe?",
        "questionBg": "Какво означава това изречение на арабски?",
        "questionEl": "Τι σημαίνει αυτή η πρόταση στα Αραβικά;"
      },
      {
        "type": "order",
        "question": "رتب الكلمات لتكون جملة صحيحة:",
        "questionAr": "رتب الكلمات لتكون جملة صحيحة:",
        "words": [
          "aus",
          "Ich",
          "komme",
          "Deutschland"
        ],
        "answer": "Ich komme aus Deutschland.",
        "questionEn": "Arrange the words to form a correct sentence:",
        "questionTr": "Kelimeleri doğru bir cümle oluşturacak şekilde düzenleyin:",
        "questionRo": "Aranjați cuvintele pentru a forma o propoziție corectă:",
        "questionBs": "Rasporedite riječi tako da formirate ispravnu rečenicu:",
        "questionEs": "Ordena las palabras para formar una oración correcta:",
        "questionBg": "Подредете думите така, че да образуват правилно изречение:",
        "questionEl": "Τακτοποίησε τις λέξεις ώστε να σχηματίσουν μια σωστή πρόταση:"
      },
      {
        "type": "matching",
        "question": "طابق بين الألمانية والعربية:",
        "questionAr": "طابق بين الألمانية والعربية:",
        "pairs": [
          {
            "de": "Guten Tag",
            "ar": "مرحباً/صباح الخير",
            "en": "Good day",
            "tr": "İyi günler",
            "ro": "Bună ziua",
            "bs": "Dobar dan",
            "es": "Buen día",
            "bg": "Добър ден",
            "el": "Καλημέρα"
          },
          {
            "de": "Danke",
            "ar": "شكراً",
            "en": "Thanks",
            "tr": "Teşekkürler",
            "ro": "Mulţumesc",
            "bs": "Hvala",
            "es": "Gracias",
            "bg": "благодаря",
            "el": "Ευχαριστώ"
          },
          {
            "de": "Bitte",
            "ar": "من فضلك / عفواً",
            "en": "Please",
            "tr": "Lütfen",
            "ro": "Vă rog",
            "bs": "Molim te",
            "es": "Por favor",
            "bg": "моля",
            "el": "Παρακαλώ"
          },
          {
            "de": "Tschüss",
            "ar": "مع السلامة",
            "en": "Bye",
            "tr": "Güle güle",
            "ro": "la revedere",
            "bs": "ćao",
            "es": "Adiós",
            "bg": "чао",
            "el": "Αντίο"
          }
        ],
        "questionEn": "Match German and Arabic:",
        "questionTr": "Almanca ve Arapçayı eşleştirin:",
        "questionRo": "Potriviți germană și arabă:",
        "questionBs": "Uskladite njemački i arapski:",
        "questionEs": "Combina alemán y árabe:",
        "questionBg": "Съвпадение на немски и арабски:",
        "questionEl": "Ταίριασμα Γερμανικών και Αραβικών:"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Guten Tag! Ich heiße ...",
        "ar": "مرحباً! اسمي ...",
        "en": "Good day! My name is ...",
        "tr": "İyi günler! Benim adım...",
        "ro": "Bună ziua! Numele meu este ...",
        "bs": "Dobar dan! moje ime je...",
        "es": "¡Buen día! Mi nombre es ...",
        "bg": "Добър ден! името ми е...",
        "el": "Καλημέρα! Το όνομά μου είναι..."
      },
      {
        "de": "Ich komme aus ...",
        "ar": "أنا من ...",
        "en": "I come from...",
        "tr": "geliyorum...",
        "ro": "eu vin din...",
        "bs": "dolazim iz...",
        "es": "Yo vengo de...",
        "bg": "идвам от...",
        "el": "προέρχομαι από..."
      },
      {
        "de": "Wie heißen Sie?",
        "ar": "ما اسم حضرتك؟",
        "en": "What's your name?",
        "tr": "Adınız ne?",
        "ro": "Care e numele tău?",
        "bs": "kako se zoveš?",
        "es": "¿Cómo te llamas?",
        "bg": "как се казваш",
        "el": "Πώς σε λένε;"
      },
      {
        "de": "Woher kommen Sie?",
        "ar": "من أين حضرتك؟",
        "en": "Where are you from?",
        "tr": "Nerelisin",
        "ro": "De unde ești?",
        "bs": "odakle si",
        "es": "¿De dónde eres?",
        "bg": "ти откъде си",
        "el": "Από πού είστε;"
      },
      {
        "de": "Ich buchstabiere: M-A-R-I-A",
        "ar": "أتهجى: م-ا-ر-ي-ا",
        "en": "I spell: M-A-R-I-A",
        "tr": "Yazıyorum: M-A-R-I-A",
        "ro": "Scriu: M-A-R-I-A",
        "bs": "Spelujem: M-A-R-I-A",
        "es": "Deletreo: M-A-R-I-A",
        "bg": "Изписвам: M-A-R-I-A",
        "el": "συλλαβίζω: Μ-Α-Ρ-Ι-Α"
      }
    ]
  },
  {
    "id": 2,
    "titleDe": "Wie geht's?",
    "titleAr": "كيف حالك؟",
    "emoji": "😊",
    "color": "#34d399",
    "titleEn": "How are you?",
    "titleTr": "Nasılsın?",
    "titleRo": "Ce mai faci?",
    "titleBs": "Kako si?",
    "titleEs": "¿Cómo estás?",
    "titleBg": "как си",
    "titleEl": "Τι κάνετε;",
    "topics": [
      "أحوال الصحة",
      "الأرقام 0-200",
      "المشروبات"
    ],
    "topicsEn": [
      "Health conditions",
      "Numbers 0-200",
      "Drinks"
    ],
    "topicsTr": [
      "Sağlık koşulları",
      "0-200 arasındaki sayılar",
      "İçecekler"
    ],
    "topicsRo": [
      "Condiții de sănătate",
      "Numerele 0-200",
      "Băuturi"
    ],
    "topicsBs": [
      "Zdravstvena stanja",
      "Brojevi 0-200",
      "Piće"
    ],
    "topicsEs": [
      "Condiciones de salud",
      "Números 0-200",
      "Bebidas"
    ],
    "topicsBg": [
      "Здравословни условия",
      "Числа 0-200",
      "Напитки"
    ],
    "topicsEl": [
      "Συνθήκες υγείας",
      "Αριθμοί 0-200",
      "Αναψυκτικά"
    ],
    "canDo": "أستطيع أن أسأل عن الحال وأعطي رقم هاتفي",
    "canDoDe": "Ich kann nach dem Befinden fragen und meine Telefonnummer angeben",
    "canDoEn": "I can ask how it is and give my phone number",
    "canDoTr": "Nasıl olduğunu sorabilir ve telefon numaramı verebilirim",
    "canDoRo": "Pot să întreb cum este și să-mi dau numărul de telefon",
    "canDoBs": "Mogu pitati kako je i dati broj telefona",
    "canDoEs": "Puedo preguntar cómo es y dar mi número de teléfono.",
    "canDoBg": "Мога да попитам как е и да си дам телефона",
    "canDoEl": "Μπορώ να ρωτήσω πώς είναι και να δώσω τον αριθμό τηλεφώνου μου",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/15_langenschidt_-_2.2a_-_wie_geht's.mp3",
        "label": "2.2a - Wie geht's?",
        "labelAr": "كيف حالك؟",
        "labelEn": "How are you?",
        "labelTr": "Nasılsın?",
        "labelRo": "Ce mai faci?",
        "labelBs": "Kako si?",
        "labelEs": "¿Cómo estás?",
        "labelBg": "как си",
        "labelEl": "Τι κάνετε;"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/16_langenschidt_-_2.3a_-_dialoge.mp3",
        "label": "2.3a - Dialoge",
        "labelAr": "حوارات",
        "labelEn": "Dialogues",
        "labelTr": "Diyaloglar",
        "labelRo": "Dialoguri",
        "labelBs": "Dijalozi",
        "labelEs": "Diálogos",
        "labelBg": "Диалози",
        "labelEl": "Διαλόγους"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/19_langenschidt_-_2.5b_-_in_der_cafeteria.mp3",
        "label": "2.5b - In der Cafeteria",
        "labelAr": "في الكافيتيريا",
        "labelEn": "In the cafeteria",
        "labelTr": "Kafeteryada",
        "labelRo": "În cantină",
        "labelBs": "U kafeteriji",
        "labelEs": "en la cafeteria",
        "labelBg": "В кафенето",
        "labelEl": "Στην καφετέρια"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/20_langenschidt_-_2.8a_-_null_bis_zwolf.mp3",
        "label": "2.8a - Null bis zwölf",
        "labelAr": "الأرقام 0-12",
        "labelEn": "Numbers 0-12",
        "labelTr": "0-12 arasındaki sayılar",
        "labelRo": "Numerele 0-12",
        "labelBs": "Brojevi 0-12",
        "labelEs": "Números 0-12",
        "labelBg": "Числа 0-12",
        "labelEl": "Αριθμοί 0-12"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/22_langenschidt_-_2.10_-_zahlen_von_13_bis_200.mp3",
        "label": "2.10 - Zahlen 13-200",
        "labelAr": "الأرقام 13-200",
        "labelEn": "Numbers 13-200",
        "labelTr": "13-200 arası sayılar",
        "labelRo": "Numerele 13-200",
        "labelBs": "Brojevi 13-200",
        "labelEs": "Números 13-200",
        "labelBg": "Номера 13-200",
        "labelEl": "Αριθμοί 13-200"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/21_langenschidt_-_2.8c_-_handynummern.mp3",
        "label": "2.8c - Handynummern",
        "labelAr": "أرقام الهاتف",
        "labelEn": "Phone numbers",
        "labelTr": "Telefon numaraları",
        "labelRo": "numere de telefon",
        "labelBs": "Brojevi telefona",
        "labelEs": "Números de teléfono",
        "labelBg": "телефонни номера",
        "labelEl": "Αριθμοί τηλεφώνου"
      }
    ],
    "dialogs": [
      {
        "title": "Wie geht es Ihnen?",
        "titleAr": "كيف حالك؟ (حوار)",
        "titleEn": "How are you? (a dialogue)",
        "titleTr": "Nasılsın? (bir diyalog)",
        "titleRo": "Ce mai faci? (un dialog)",
        "titleBs": "Kako si? (a dialogue)",
        "titleEs": "¿Cómo estás? (un diálogo)",
        "titleBg": "как си (диалог)",
        "titleEl": "Τι κάνετε; (ένας διάλογος)",
        "lines": [
          {
            "speaker": "Kurt",
            "de": "Guten Morgen, Frau Kohl! Wie geht es Ihnen?",
            "ar": "صباح الخير يا سيدة كول! كيف حالك؟",
            "en": "Good morning, Mrs. Cole! How are you?",
            "tr": "Günaydın Bayan Cole! Nasılsın?",
            "ro": "Bună dimineața, doamnă Cole! Ce mai faci?",
            "bs": "Dobro jutro, gospođo Cole! Kako si?",
            "es": "¡Buenos días, señora Cole! ¿Cómo estás?",
            "bg": "Добро утро, г-жо Коул! как си",
            "el": "Καλημέρα, κυρία Κόουλ! Τι κάνετε;"
          },
          {
            "speaker": "Frau Kohl",
            "de": "Danke, gut. Und Ihnen?",
            "ar": "شكراً، بخير. وأنت؟",
            "en": "Thanks, fine. And you?",
            "tr": "Teşekkürler, iyi. Ve sen?",
            "ro": "Mulțumesc, bine. Și tu?",
            "bs": "Hvala, dobro. A ti?",
            "es": "Gracias, bien. ¿Y tú?",
            "bg": "Благодаря, добре. а ти",
            "el": "Ευχαριστώ, εντάξει. Και εσύ;"
          },
          {
            "speaker": "Kurt",
            "de": "Es geht. Ich bin müde.",
            "ar": "لا بأس. أنا متعب.",
            "en": "decent. I'm tired.",
            "tr": "düzgün. Yorgunum.",
            "ro": "decent. Sunt obosit.",
            "bs": "pristojan. Umoran sam.",
            "es": "decente. Estoy cansado.",
            "bg": "приличен. уморен съм",
            "el": "κόσμιος. Είμαι κουρασμένος."
          },
          {
            "speaker": "Frau Kohl",
            "de": "Oh! Das ist nicht gut.",
            "ar": "أوه! هذا ليس جيداً.",
            "en": "Oh! This is not good.",
            "tr": "Ah! Bu iyi değil.",
            "ro": "Oh! Asta nu este bine.",
            "bs": "Oh! Ovo nije dobro.",
            "es": "¡Oh! Esto no es bueno.",
            "bg": "о! Това не е добре.",
            "el": "Ω! Αυτό δεν είναι καλό."
          }
        ]
      },
      {
        "title": "In der Cafeteria",
        "titleAr": "في الكافيتيريا",
        "titleEn": "In the cafeteria",
        "titleTr": "Kafeteryada",
        "titleRo": "În cantină",
        "titleBs": "U kafeteriji",
        "titleEs": "en la cafeteria",
        "titleBg": "В кафенето",
        "titleEl": "Στην καφετέρια",
        "lines": [
          {
            "speaker": "Kellnerin",
            "de": "Was möchten Sie trinken?",
            "ar": "ماذا تريد أن تشرب؟",
            "en": "What do you want to drink?",
            "tr": "Ne içmek istersin?",
            "ro": "Ce vrei să bei?",
            "bs": "Šta želiš da popiješ?",
            "es": "¿Qué quieres beber?",
            "bg": "какво искаш да пиеш",
            "el": "Τι θέλετε να πιείτε;"
          },
          {
            "speaker": "Kunde",
            "de": "Einen Kaffee, bitte.",
            "ar": "قهوة من فضلك.",
            "en": "Coffee please.",
            "tr": "Kahve lütfen.",
            "ro": "Cafea te rog.",
            "bs": "Kafu molim.",
            "es": "Café por favor.",
            "bg": "Кафе моля.",
            "el": "Καφέ παρακαλώ."
          },
          {
            "speaker": "Kellnerin",
            "de": "Mit Milch?",
            "ar": "مع حليب؟",
            "en": "With milk?",
            "tr": "Sütlü?",
            "ro": "Cu lapte?",
            "bs": "Sa mlekom?",
            "es": "¿Con leche?",
            "bg": "С мляко?",
            "el": "Με γάλα;"
          },
          {
            "speaker": "Kunde",
            "de": "Ja, und ein Wasser.",
            "ar": "نعم، وماء.",
            "en": "Yes, and water.",
            "tr": "Evet ve su.",
            "ro": "Da, și apă.",
            "bs": "Da, i vodu.",
            "es": "Sí, y agua.",
            "bg": "Да, и вода.",
            "el": "Ναι και νερό."
          },
          {
            "speaker": "Kellnerin",
            "de": "Das macht 3 Euro 50.",
            "ar": "المجموع ثلاثة يورو وخمسون سنتاً.",
            "en": "The total is three euros and fifty cents.",
            "tr": "Toplam üç avro elli sent.",
            "ro": "Totalul este de trei euro și cincizeci de cenți.",
            "bs": "Ukupno je tri eura i pedeset centi.",
            "es": "El total son tres euros con cincuenta céntimos.",
            "bg": "Общата сума е три евро и петдесет цента.",
            "el": "Το σύνολο είναι τρία ευρώ και πενήντα λεπτά."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Telefonnummern",
        "titleAr": "أرقام الهاتف",
        "titleEn": "Phone numbers",
        "titleTr": "Telefon numaraları",
        "titleRo": "numere de telefon",
        "titleBs": "Brojevi telefona",
        "titleEs": "Números de teléfono",
        "titleBg": "телефонни номера",
        "titleEl": "Αριθμοί τηλεφώνου",
        "text": [
          {
            "de": "Die Telefonnummer von Carlos ist: 0171 – 34 56 78.",
            "ar": "رقم هاتف كارلوس: 0171 – 34 56 78.",
            "en": "Carlos phone number: 0171 – 34 56 78.",
            "tr": "Carlos'un telefon numarası: 0171 – 34 56 78.",
            "ro": "Telefon Carlos: 0171 – 34 56 78.",
            "bs": "Carlos broj telefona: 0171 – 34 56 78.",
            "es": "Número de teléfono de Carlos: 0171 – 34 56 78.",
            "bg": "Телефонен номер на Карлос: 0171 – 34 56 78.",
            "el": "Τηλέφωνο Carlos: 0171 – 34 56 78."
          },
          {
            "de": "Die Handynummer von Maria ist: 0152 – 45 67 89.",
            "ar": "رقم الجوال لماريا: 0152 – 45 67 89.",
            "en": "Maria's mobile number: 0152 – 45 67 89.",
            "tr": "Maria'nın cep telefonu numarası: 0152 – 45 67 89.",
            "ro": "Numărul de mobil al Mariei: 0152 – 45 67 89.",
            "bs": "Marijin broj mobilnog telefona: 0152 – 45 67 89.",
            "es": "Número de móvil de María: 0152 – 45 67 89.",
            "bg": "Мобилен номер на Мария: 0152 – 45 67 89.",
            "el": "Τηλέφωνο κινητού Μαρίας: 0152 – 45 67 89."
          },
          {
            "de": "Die Kursnummer ist: 030 – 12 34 56.",
            "ar": "رقم الدورة: 030 – 12 34 56.",
            "en": "Course number: 030 – 12 34 56.",
            "tr": "Kurs numarası: 030 – 12 34 56.",
            "ro": "Număr curs: 030 – 12 34 56.",
            "bs": "Broj predmeta: 030 – 12 34 56.",
            "es": "Número de curso: 030 – 12 34 56.",
            "bg": "Номер на курса: 030 – 12 34 56.",
            "el": "Αριθμός μαθήματος: 030 – 12 34 56."
          }
        ],
        "questions": [
          {
            "q": "Wie ist die Telefonnummer von Carlos?",
            "qAr": "ما هو رقم هاتف كارلوس؟",
            "answer": "0171 – 34 56 78",
            "answerAr": "0171 – 34 56 78",
            "qEn": "What is Carlos' phone number?",
            "answerEn": "0171 – 34 56 78",
            "qTr": "Carlos'un telefon numarası nedir?",
            "answerTr": "0171 – 34 56 78",
            "qRo": "Care este numărul de telefon al lui Carlos?",
            "answerRo": "0171 – 34 56 78",
            "qBs": "Koji je Carlosov broj telefona?",
            "answerBs": "0171 – 34 56 78",
            "qEs": "¿Cuál es el número de teléfono de Carlos?",
            "answerEs": "0171 – 34 56 78",
            "qBg": "Какъв е телефонният номер на Карлос?",
            "answerBg": "0171 – 34 56 78",
            "qEl": "Ποιος είναι ο αριθμός τηλεφώνου του Carlos;",
            "answerEl": "0171 – 34 56 78"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "verb-conjugation",
        "title": "تصريف الأفعال في الحاضر",
        "titleDe": "Verben im Präsens",
        "explanation": "الأفعال الألمانية تتصرف حسب الضمير. معظم الأفعال تتبع نمطاً منتظماً.",
        "titleEn": "Conjugation of verbs in the present",
        "explanationEn": "German verbs act according to the pronoun. Most verbs follow a regular pattern.",
        "titleTr": "Fiillerin şimdiki zamanda çekimi",
        "explanationTr": "Almanca fiiller zamire göre hareket eder. Çoğu fiil düzenli bir kalıp izler.",
        "titleRo": "Conjugarea verbelor în prezent",
        "explanationRo": "Verbele germane acționează în funcție de pronume. Majoritatea verbelor urmează un model obișnuit.",
        "titleBs": "Konjugacija glagola u prezentu",
        "explanationBs": "Njemački glagoli djeluju prema zamjenici. Većina glagola prati pravilan obrazac.",
        "titleEs": "Conjugación de verbos en presente.",
        "explanationEs": "Los verbos alemanes actúan según el pronombre. La mayoría de los verbos siguen un patrón regular.",
        "titleBg": "Спрежение на глаголите в настоящето",
        "explanationBg": "Немските глаголи действат според местоимението. Повечето глаголи следват редовен модел.",
        "titleEl": "Σύζευξη ρημάτων στο παρόν",
        "explanationEl": "Τα γερμανικά ρήματα ενεργούν σύμφωνα με την αντωνυμία. Τα περισσότερα ρήματα ακολουθούν κανονικό μοτίβο.",
        "rules": [
          {
            "example": "kommen → ich komme, du kommst",
            "translation": "يأتي",
            "note": "فعل منتظم",
            "translationEn": "Come",
            "noteEn": "Regular verb",
            "translationTr": "Gelmek",
            "noteTr": "Düzenli fiil",
            "translationRo": "Vino",
            "noteRo": "Verb regulat",
            "translationBs": "Dođi",
            "noteBs": "Regularni glagol",
            "translationEs": "Venir",
            "noteEs": "verbo regular",
            "translationBg": "ела",
            "noteBg": "Правилен глагол",
            "translationEl": "Ελα",
            "noteEl": "Κανονικό ρήμα"
          },
          {
            "example": "arbeiten → ich arbeite, du arbeitest",
            "translation": "يعمل",
            "note": "تُضاف حرف e قبل اللاحقة",
            "translationEn": "He works",
            "noteEn": "The letter e is added before the suffix",
            "translationTr": "Çalışıyor",
            "noteTr": "E harfi son ekin önüne eklenir",
            "translationRo": "El lucrează",
            "noteRo": "Litera e se adaugă înaintea sufixului",
            "translationBs": "On radi",
            "noteBs": "Slovo e se dodaje ispred sufiksa",
            "translationEs": "el trabaja",
            "noteEs": "La letra e se añade antes del sufijo.",
            "translationBg": "Той работи",
            "noteBg": "Буквата e се добавя преди наставката",
            "translationEl": "Δουλεύει",
            "noteEl": "Το γράμμα ε προστίθεται πριν από το επίθημα"
          },
          {
            "example": "trinken → ich trinke, du trinkst",
            "translation": "يشرب",
            "note": "فعل منتظم",
            "translationEn": "He drinks",
            "noteEn": "Regular verb",
            "translationTr": "O içer",
            "noteTr": "Düzenli fiil",
            "translationRo": "El bea",
            "noteRo": "Verb regulat",
            "translationBs": "On pije",
            "noteBs": "Regularni glagol",
            "translationEs": "el bebe",
            "noteEs": "verbo regular",
            "translationBg": "Той пие",
            "noteBg": "Правилен глагол",
            "translationEl": "Πίνει",
            "noteEl": "Κανονικό ρήμα"
          }
        ],
        "table": {
          "headers": [
            "الضمير",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersEn": [
            "Pronoun",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersTr": [
            "Zamir",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersRo": [
            "Pronume",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersBs": [
            "Zamjenica",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersEs": [
            "Pronombre",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersBg": [
            "Местоимение",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "headersEl": [
            "Αντωνυμία",
            "kommen",
            "arbeiten",
            "trinken"
          ],
          "rows": [
            [
              "ich",
              "komme",
              "arbeite",
              "trinke"
            ],
            [
              "du",
              "kommst",
              "arbeitest",
              "trinkst"
            ],
            [
              "er/sie/es",
              "kommt",
              "arbeitet",
              "trinkt"
            ],
            [
              "wir",
              "kommen",
              "arbeiten",
              "trinken"
            ],
            [
              "ihr",
              "kommt",
              "arbeitet",
              "trinkt"
            ],
            [
              "sie/Sie",
              "kommen",
              "arbeiten",
              "trinken"
            ]
          ]
        }
      },
      {
        "id": "numbers",
        "title": "الأرقام من 0 إلى 200",
        "titleDe": "Zahlen 0-200",
        "explanation": "الأرقام في الألمانية ضرورية جداً للحياة اليومية.",
        "titleEn": "Numbers from 0 to 200",
        "explanationEn": "Numbers in German are very essential for daily life.",
        "titleTr": "0'dan 200'e kadar sayılar",
        "explanationTr": "Almanca'da sayılar günlük yaşam için çok önemlidir.",
        "titleRo": "Numerele de la 0 la 200",
        "explanationRo": "Cifrele în germană sunt foarte esențiale pentru viața de zi cu zi.",
        "titleBs": "Brojevi od 0 do 200",
        "explanationBs": "Brojevi na njemačkom su veoma bitni za svakodnevni život.",
        "titleEs": "Números del 0 al 200",
        "explanationEs": "Los números en alemán son muy esenciales para la vida diaria.",
        "titleBg": "Числа от 0 до 200",
        "explanationBg": "Числата на немски са много важни за ежедневието.",
        "titleEl": "Αριθμοί από το 0 έως το 200",
        "explanationEl": "Οι αριθμοί στα γερμανικά είναι πολύ σημαντικοί για την καθημερινή ζωή.",
        "rules": [
          {
            "example": "0 = null, 1 = eins, 2 = zwei, 3 = drei",
            "translation": "الأرقام 0-3",
            "note": "",
            "translationEn": "Numbers 0-3",
            "noteEn": "",
            "translationTr": "0-3 arası sayılar",
            "noteTr": "",
            "translationRo": "Numerele 0-3",
            "noteRo": "",
            "translationBs": "Brojevi 0-3",
            "noteBs": "",
            "translationEs": "Números 0-3",
            "noteEs": "",
            "translationBg": "Числа 0-3",
            "noteBg": "",
            "translationEl": "Αριθμοί 0-3",
            "noteEl": ""
          },
          {
            "example": "4 = vier, 5 = fünf, 6 = sechs, 7 = sieben",
            "translation": "الأرقام 4-7",
            "note": "",
            "translationEn": "Numbers 4-7",
            "noteEn": "",
            "translationTr": "Sayılar 4-7",
            "noteTr": "",
            "translationRo": "Numerele 4-7",
            "noteRo": "",
            "translationBs": "Brojevi 4-7",
            "noteBs": "",
            "translationEs": "Números 4-7",
            "noteEs": "",
            "translationBg": "Числа 4-7",
            "noteBg": "",
            "translationEl": "Αριθμοί 4-7",
            "noteEl": ""
          },
          {
            "example": "8 = acht, 9 = neun, 10 = zehn",
            "translation": "الأرقام 8-10",
            "note": "",
            "translationEn": "Numbers 8-10",
            "noteEn": "",
            "translationTr": "8-10 arası sayılar",
            "noteTr": "",
            "translationRo": "Numerele 8-10",
            "noteRo": "",
            "translationBs": "Brojevi 8-10",
            "noteBs": "",
            "translationEs": "Números 8-10",
            "noteEs": "",
            "translationBg": "Числа 8-10",
            "noteBg": "",
            "translationEl": "Αριθμοί 8-10",
            "noteEl": ""
          },
          {
            "example": "11 = elf, 12 = zwölf, 13 = dreizehn",
            "translation": "الأرقام 11-13",
            "note": "",
            "translationEn": "Numbers 11-13",
            "noteEn": "",
            "translationTr": "Sayılar 11-13",
            "noteTr": "",
            "translationRo": "Numerele 11-13",
            "noteRo": "",
            "translationBs": "Brojevi 11-13",
            "noteBs": "",
            "translationEs": "Números 11-13",
            "noteEs": "",
            "translationBg": "Числа 11-13",
            "noteBg": "",
            "translationEl": "Αριθμοί 11-13",
            "noteEl": ""
          },
          {
            "example": "20 = zwanzig, 30 = dreißig, 100 = hundert",
            "translation": "العشرات",
            "note": "",
            "translationEn": "Dozens",
            "noteEn": "",
            "translationTr": "Düzinelerce",
            "noteTr": "",
            "translationRo": "Zeci",
            "noteRo": "",
            "translationBs": "Desetine",
            "noteBs": "",
            "translationEs": "Docenas",
            "noteEs": "",
            "translationBg": "Десетки",
            "noteBg": "",
            "translationEl": "Δεκάδες",
            "noteEl": ""
          },
          {
            "example": "21 = einundzwanzig (واحد وعشرون)",
            "translation": "الأرقام المركبة تبدأ بالآحاد",
            "note": "الفرق مع العربية!",
            "translationEn": "Complex numbers start with ones",
            "noteEn": "The difference with Arabic!",
            "translationTr": "Karmaşık sayılar birlerle başlar",
            "noteTr": "Arapça'nın farkı!",
            "translationRo": "Numerele complexe încep cu unu",
            "noteRo": "Diferența cu araba!",
            "translationBs": "Kompleksni brojevi počinju jedinicama",
            "noteBs": "Razlika sa arapskim!",
            "translationEs": "Los números complejos comienzan con unos.",
            "noteEs": "¡La diferencia con el árabe!",
            "translationBg": "Комплексните числа започват с единици",
            "noteBg": "Разликата с арабския!",
            "translationEl": "Οι μιγαδικοί αριθμοί ξεκινούν με ένα",
            "noteEl": "Η διαφορά με τα αραβικά!"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Wie sagt man 'Wie geht es Ihnen?' auf Arabisch?",
        "questionAr": "ما معنى هذه الجملة؟",
        "options": [
          "ما اسمك؟",
          "من أين أنت؟",
          "كيف حالك؟ (رسمي)",
          "كم عمرك؟"
        ],
        "answer": 2,
        "questionEn": "What is the meaning of this sentence?",
        "questionTr": "Bu cümlenin anlamı nedir?",
        "questionRo": "Care este sensul acestei propoziții?",
        "questionBs": "Šta znači ova rečenica?",
        "questionEs": "¿Cuál es el significado de esta frase?",
        "questionBg": "Какво е значението на това изречение?",
        "questionEl": "Ποιο είναι το νόημα αυτής της πρότασης;"
      },
      {
        "type": "fillblank",
        "question": "Ich _____ Kaffee. (trinken)",
        "questionAr": "أكمل بالتصريف الصحيح",
        "answer": "trinke",
        "hint": "تصريف trinken مع ich",
        "questionEn": "Complete with correct conjugation",
        "questionTr": "Doğru çekimle tamamlayın",
        "questionRo": "Completează cu conjugarea corectă",
        "questionBs": "Kompletno sa pravilnom konjugacijom",
        "questionEs": "Completa con la conjugación correcta.",
        "questionBg": "Пълно с правилно спрежение",
        "questionEl": "Συμπληρώστε με σωστή σύζευξη"
      },
      {
        "type": "mcq",
        "question": "Was ist 'dreizehn' auf Arabisch?",
        "questionAr": "ما معنى dreizehn؟",
        "options": [
          "30",
          "13",
          "3",
          "31"
        ],
        "answer": 1,
        "questionEn": "What does dreizehn mean?",
        "questionTr": "Dreizehn ne demek?",
        "questionRo": "Ce înseamnă dreizehn?",
        "questionBs": "Šta znači dreizehn?",
        "questionEs": "¿Qué significa dreizehn?",
        "questionBg": "Какво означава dreizehn?",
        "questionEl": "Τι σημαίνει η λέξη dreizehn;"
      },
      {
        "type": "order",
        "question": "رتب الكلمات:",
        "questionAr": "رتب الكلمات:",
        "words": [
          "geht",
          "Wie",
          "es",
          "Ihnen"
        ],
        "answer": "Wie geht es Ihnen?",
        "questionEn": "Arrange the words:",
        "questionTr": "Kelimeleri düzenleyin:",
        "questionRo": "Aranjați cuvintele:",
        "questionBs": "Rasporedite riječi:",
        "questionEs": "Ordena las palabras:",
        "questionBg": "Подредете думите:",
        "questionEl": "Τακτοποίησε τις λέξεις:"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Wie geht es Ihnen?",
        "ar": "كيف حالك؟ (رسمي)",
        "en": "How are you doing?",
        "tr": "Nasılsın?",
        "ro": "Ce mai faci?",
        "bs": "kako si?",
        "es": "¿Cómo estás?",
        "bg": "как си",
        "el": "Τι κάνετε;"
      },
      {
        "de": "Wie geht's?",
        "ar": "كيف حالك؟ (غير رسمي)",
        "en": "How are you?",
        "tr": "Nasılsın?",
        "ro": "Ce mai faci?",
        "bs": "Kako si?",
        "es": "¿Cómo estás?",
        "bg": "как си",
        "el": "Τι κάνετε;"
      },
      {
        "de": "Gut, danke!",
        "ar": "بخير، شكراً!",
        "en": "Good, thanks!",
        "tr": "Güzel, teşekkürler!",
        "ro": "Bun, multumesc!",
        "bs": "Dobro, hvala!",
        "es": "¡Bien, gracias!",
        "bg": "Добре, благодаря!",
        "el": "Ωραία, ευχαριστώ!"
      },
      {
        "de": "Es geht.",
        "ar": "لا بأس.",
        "en": "It works.",
        "tr": "İşe yarıyor.",
        "ro": "Funcționează.",
        "bs": "Radi.",
        "es": "Funciona.",
        "bg": "Работи.",
        "el": "Λειτουργεί."
      },
      {
        "de": "Nicht so gut.",
        "ar": "ليس جيداً.",
        "en": "Not so good.",
        "tr": "O kadar iyi değil.",
        "ro": "Nu atât de bine.",
        "bs": "Nije tako dobro.",
        "es": "No tan bien.",
        "bg": "Не толкова добре.",
        "el": "Όχι και τόσο καλό."
      },
      {
        "de": "Ich bin müde.",
        "ar": "أنا متعب.",
        "en": "I'm tired.",
        "tr": "Yorgunum.",
        "ro": "Sunt obosit.",
        "bs": "Umoran sam.",
        "es": "Estoy cansado.",
        "bg": "уморен съм",
        "el": "Είμαι κουρασμένος."
      },
      {
        "de": "Einen Kaffee, bitte.",
        "ar": "قهوة من فضلك.",
        "en": "A coffee, please.",
        "tr": "Bir kahve lütfen.",
        "ro": "O cafea, te rog.",
        "bs": "Kafu, molim.",
        "es": "Un café, por favor.",
        "bg": "Едно кафе, моля.",
        "el": "Ένας καφές, παρακαλώ."
      }
    ]
  },
  {
    "id": 3,
    "titleDe": "Was kostet das?",
    "titleAr": "بكم هذا؟",
    "emoji": "🛍️",
    "color": "#f59e0b",
    "titleEn": "How much is this?",
    "titleTr": "Bu ne kadar?",
    "titleRo": "Cât de mult costă aceasta?",
    "titleBs": "Koliko je ovo?",
    "titleEs": "¿Cuánto cuesta este?",
    "titleBg": "колко е това",
    "titleEl": "Πόσο είναι αυτό;",
    "topics": [
      "التسوق",
      "الأسعار",
      "الأشياء",
      "الأداة والنكرة"
    ],
    "topicsEn": [
      "shopping",
      "Prices",
      "Things",
      "The tool and the indefinite article"
    ],
    "topicsTr": [
      "alışveriş",
      "Fiyatlar",
      "Şeyler",
      "Araç ve belirsiz artikel"
    ],
    "topicsRo": [
      "cumpărături",
      "Preturi",
      "Lucruri",
      "Instrumentul și articolul nehotărât"
    ],
    "topicsBs": [
      "shopping",
      "Cijene",
      "Stvari",
      "Alat i neodređeni član"
    ],
    "topicsEs": [
      "compras",
      "Precios",
      "Cosas",
      "La herramienta y el artículo indefinido."
    ],
    "topicsBg": [
      "пазаруване",
      "цени",
      "неща",
      "Инструментът и неопределителният член"
    ],
    "topicsEl": [
      "ψώνια",
      "Τιμές",
      "Πράγματα",
      "Το εργαλείο και το αόριστο άρθρο"
    ],
    "canDo": "أستطيع أن أسأل عن الأسعار وأشتري أشياء",
    "canDoDe": "Ich kann nach Preisen fragen und Dinge kaufen",
    "canDoEn": "I can ask about prices and buy things",
    "canDoTr": "Fiyatları sorabilir ve bir şeyler satın alabilirim",
    "canDoRo": "Pot să întreb despre prețuri și să cumpăr lucruri",
    "canDoBs": "Mogu pitati za cijene i kupiti stvari",
    "canDoEs": "Puedo preguntar precios y comprar cosas.",
    "canDoBg": "Мога да попитам за цени и да купя неща",
    "canDoEl": "Μπορώ να ρωτήσω για τιμές και να αγοράσω πράγματα",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/26_langenschidt_-_3.1b_-_gegenstande.mp3",
        "label": "3.1b - Gegenstände",
        "labelAr": "الأشياء",
        "labelEn": "Things",
        "labelTr": "Şeyler",
        "labelRo": "Lucruri",
        "labelBs": "Stvari",
        "labelEs": "Cosas",
        "labelBg": "неща",
        "labelEl": "Πράγματα"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/27_langenschidt_-_3.2a_-_was_kostet_....mp3",
        "label": "3.2a - Was kostet...?",
        "labelAr": "بكم يكلف؟",
        "labelEn": "How much does it cost?",
        "labelTr": "Fiyatı ne kadar?",
        "labelRo": "Cât costã?",
        "labelBs": "Koliko košta?",
        "labelEs": "¿Cuánto cuesta?",
        "labelBg": "Колко струва?",
        "labelEl": "Πόσο κοστίζει;"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/29_langenschidt_-_3.4c_-_sechs_dialoge.mp3",
        "label": "3.4c - Sechs Dialoge",
        "labelAr": "ستة حوارات",
        "labelEn": "Six dialogues",
        "labelTr": "Altı diyalog",
        "labelRo": "Șase dialoguri",
        "labelBs": "Šest dijaloga",
        "labelEs": "Seis diálogos",
        "labelBg": "Шест диалога",
        "labelEl": "Έξι διάλογοι"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/35_langenschidt_-_3.12_-_zwei_gesprache.mp3",
        "label": "3.12 - Zwei Gespräche",
        "labelAr": "محادثتان",
        "labelEn": "Two conversations",
        "labelTr": "İki konuşma",
        "labelRo": "Două conversații",
        "labelBs": "Dva razgovora",
        "labelEs": "Dos conversaciones",
        "labelBg": "Два разговора",
        "labelEl": "Δύο κουβέντες"
      }
    ],
    "dialogs": [
      {
        "title": "Was kostet das?",
        "titleAr": "حوار في المتجر",
        "titleEn": "Conversation in the store",
        "titleTr": "Mağazadaki konuşma",
        "titleRo": "Conversație în magazin",
        "titleBs": "Razgovor u prodavnici",
        "titleEs": "Conversación en la tienda.",
        "titleBg": "Разговор в магазина",
        "titleEl": "Συζήτηση στο κατάστημα",
        "lines": [
          {
            "speaker": "Kunde",
            "de": "Entschuldigung! Was kostet der Laptop?",
            "ar": "عذراً! بكم الحاسوب المحمول؟",
            "en": "Sorry! How much is a laptop?",
            "tr": "Üzgünüm! Bir dizüstü bilgisayar ne kadar?",
            "ro": "Îmi pare rău! Cât costă un laptop?",
            "bs": "Izvinite! Koliko košta laptop?",
            "es": "¡Lo siento! ¿Cuánto cuesta una computadora portátil?",
            "bg": "Съжалявам! Колко струва един лаптоп?",
            "el": "Συγνώμη! Πόσο είναι ένα laptop;"
          },
          {
            "speaker": "Verkäufer",
            "de": "Der Laptop kostet 599 Euro.",
            "ar": "الحاسوب يكلف 599 يورو.",
            "en": "The computer costs 599 euros.",
            "tr": "Bilgisayarın fiyatı 599 euro.",
            "ro": "Calculatorul costă 599 de euro.",
            "bs": "Računar košta 599 eura.",
            "es": "El ordenador cuesta 599 euros.",
            "bg": "Компютърът струва 599 евро.",
            "el": "Ο υπολογιστής κοστίζει 599 ευρώ."
          },
          {
            "speaker": "Kunde",
            "de": "Und die Maus?",
            "ar": "وبكم الفأرة؟",
            "en": "How much is the mouse?",
            "tr": "Fare ne kadar?",
            "ro": "Cât costă mouse-ul?",
            "bs": "Koliko je miš?",
            "es": "¿Cuánto cuesta el ratón?",
            "bg": "Колко струва мишката?",
            "el": "Πόσο είναι το ποντίκι;"
          },
          {
            "speaker": "Verkäufer",
            "de": "Die Maus kostet 15 Euro 99.",
            "ar": "الفأرة تكلف 15 يورو و99 سنتاً.",
            "en": "The mouse costs 15 euros and 99 cents.",
            "tr": "Farenin fiyatı 15 euro 99 sent.",
            "ro": "Mouse-ul costă 15 euro și 99 de cenți.",
            "bs": "Miš košta 15 eura i 99 centi.",
            "es": "El ratón cuesta 15 euros con 99 céntimos.",
            "bg": "Мишката струва 15 евро и 99 цента.",
            "el": "Το ποντίκι κοστίζει 15 ευρώ και 99 λεπτά."
          },
          {
            "speaker": "Kunde",
            "de": "Ich nehme den Laptop. Bitte.",
            "ar": "سآخذ الحاسوب. من فضلك.",
            "en": "I'll take the computer. please.",
            "tr": "Bilgisayarı alacağım. Lütfen.",
            "ro": "O să iau computerul. Vă rog.",
            "bs": "Ja ću uzeti kompjuter. molim te.",
            "es": "Tomaré la computadora. por favor.",
            "bg": "Ще взема компютъра. моля",
            "el": "Θα πάρω τον υπολογιστή. παρακαλώ."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Der Flohmarkt",
        "titleAr": "سوق البضاعة المستعملة",
        "titleEn": "Used goods market",
        "titleTr": "Kullanılmış eşya pazarı",
        "titleRo": "Piata de bunuri second hand",
        "titleBs": "Tržište rabljene robe",
        "titleEs": "mercado de bienes usados",
        "titleBg": "Пазар на употребявани стоки",
        "titleEl": "Αγορά μεταχειρισμένων προϊόντων",
        "text": [
          {
            "de": "Heute ist Flohmarkt in Berlin.",
            "ar": "اليوم يوجد سوق مستعمل في برلين.",
            "en": "Today there is a used market in Berlin.",
            "tr": "Bugün Berlin'de ikinci el bir pazar var.",
            "ro": "Astăzi există o piață de second hand în Berlin.",
            "bs": "Danas u Berlinu postoji pijaca polovnih.",
            "es": "Hoy en día hay un mercado de segunda mano en Berlín.",
            "bg": "Днес в Берлин има пазар за използвани стоки.",
            "el": "Σήμερα υπάρχει μια αγορά μεταχειρισμένων στο Βερολίνο."
          },
          {
            "de": "Carlos kauft eine Uhr für 5 Euro.",
            "ar": "كارلوس يشتري ساعة بـ 5 يورو.",
            "en": "Carlos buys a watch for 5 euros.",
            "tr": "Carlos 5 avroya bir saat satın alıyor.",
            "ro": "Carlos cumpără un ceas cu 5 euro.",
            "bs": "Carlos kupuje sat za 5 eura.",
            "es": "Carlos compra un reloj por 5 euros.",
            "bg": "Карлос купува часовник за 5 евро.",
            "el": "Ο Carlos αγοράζει ένα ρολόι 5 ευρώ."
          },
          {
            "de": "Maria kauft ein Buch für 2 Euro.",
            "ar": "ماريا تشتري كتاباً بـ 2 يورو.",
            "en": "Maria buys a book for 2 euros.",
            "tr": "Maria 2 avroya bir kitap satın alıyor.",
            "ro": "Maria cumpără o carte cu 2 euro.",
            "bs": "Marija kupuje knjigu za 2 eura.",
            "es": "María compra un libro por 2 euros.",
            "bg": "Мария купува книга за 2 евро.",
            "el": "Η Μαρία αγοράζει ένα βιβλίο με 2 ευρώ."
          },
          {
            "de": "Das ist billig!",
            "ar": "هذا رخيص!",
            "en": "This is cheap!",
            "tr": "Bu ucuz!",
            "ro": "Acesta este ieftin!",
            "bs": "Ovo je jeftino!",
            "es": "¡Esto es barato!",
            "bg": "Това е евтино!",
            "el": "Αυτό είναι φθηνό!"
          }
        ],
        "questions": [
          {
            "q": "Was kauft Carlos?",
            "qAr": "ماذا اشترى كارلوس؟",
            "answer": "Eine Uhr",
            "answerAr": "ساعة",
            "qEn": "What did Carlos buy?",
            "answerEn": "hour",
            "qTr": "Carlos ne satın aldı?",
            "answerTr": "saat",
            "qRo": "Ce a cumpărat Carlos?",
            "answerRo": "oră",
            "qBs": "Šta je Carlos kupio?",
            "answerBs": "sat",
            "qEs": "¿Qué compró Carlos?",
            "answerEs": "hora",
            "qBg": "Какво купи Карлос?",
            "answerBg": "час",
            "qEl": "Τι αγόρασε ο Κάρλος;",
            "answerEl": "ώρα"
          },
          {
            "q": "Wie viel kostet das Buch?",
            "qAr": "بكم الكتاب؟",
            "answer": "2 Euro",
            "answerAr": "2 يورو",
            "qEn": "How much is the book?",
            "answerEn": "2 euros",
            "qTr": "Kitap ne kadar?",
            "answerTr": "2 euro",
            "qRo": "Cât costă cartea?",
            "answerRo": "2 euro",
            "qBs": "Koliko je knjiga?",
            "answerBs": "2 eura",
            "qEs": "¿Cuanto cuesta el libro?",
            "answerEs": "2euros",
            "qBg": "Колко струва книгата?",
            "answerBg": "2 евро",
            "qEl": "Πόσο είναι το βιβλίο;",
            "answerEl": "2 ευρώ"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "artikel",
        "title": "أداة التعريف والتنكير - der/die/das/ein/eine",
        "titleDe": "Bestimmter und unbestimmter Artikel",
        "explanation": "في الألمانية لكل اسم جنس نحوي: مذكر (der)، مؤنث (die)، محايد (das). وهذا مهم جداً!",
        "titleEn": "The definite article - der/die/das/ein/eine",
        "explanationEn": "In German, every noun has a grammatical gender: masculine (der), feminine (die), and neuter (das). This is very important!",
        "titleTr": "Kesin artikel - der/die/das/ein/eine",
        "explanationTr": "Almanca'da her ismin dilbilgisel bir cinsiyeti vardır: eril (der), dişil (die) ve nötr (das). Bu çok önemli!",
        "titleRo": "Articolul hotărât - der/die/das/ein/eine",
        "explanationRo": "În germană, fiecare substantiv are un gen gramatical: masculin (der), feminin (die) și neutru (das). Acest lucru este foarte important!",
        "titleBs": "Određeni član - der/die/das/ein/eine",
        "explanationBs": "U njemačkom jeziku svaka imenica ima gramatički rod: muški (der), ženski (die) i srednji (das). Ovo je veoma važno!",
        "titleEs": "El artículo definido - der/die/das/ein/eine",
        "explanationEs": "En alemán, cada sustantivo tiene un género gramatical: masculino (der), femenino (die) y neutro (das). ¡Esto es muy importante!",
        "titleBg": "Определителният член - der/die/das/ein/eine",
        "explanationBg": "На немски език всяко съществително име има граматически род: мъжки (der), женски (die) и среден род (das). Това е много важно!",
        "titleEl": "Το οριστικό άρθρο - der/die/das/ein/eine",
        "explanationEl": "Στα γερμανικά, κάθε ουσιαστικό έχει ένα γραμματικό γένος: αρσενικό (der), θηλυκό (die) και ουδέτερο (das). Αυτό είναι πολύ σημαντικό!",
        "rules": [
          {
            "example": "der Tisch (مذكر) - ein Tisch",
            "translation": "الطاولة - طاولة",
            "note": "مذكر: der/ein",
            "translationEn": "Table - table",
            "noteEn": "Masculine: der/ein",
            "translationTr": "Tablo - tablo",
            "noteTr": "Eril: der/ein",
            "translationRo": "Masa - masa",
            "noteRo": "Masculin: der/ein",
            "translationBs": "Sto - sto",
            "noteBs": "Muški rod: der/ein",
            "translationEs": "Mesa - mesa",
            "noteEs": "Masculino: der/ein",
            "translationBg": "Маса - маса",
            "noteBg": "Мъжки род: der/ein",
            "translationEl": "Τραπέζι – τραπέζι",
            "noteEl": "Αρσενικά: der/ein"
          },
          {
            "example": "die Lampe (مؤنث) - eine Lampe",
            "translation": "المصباح - مصباح",
            "note": "مؤنث: die/eine",
            "translationEn": "Lamp - lamp",
            "noteEn": "Feminine: die/eine",
            "translationTr": "Lamba - lamba",
            "noteTr": "Dişil: ölmek / eine",
            "translationRo": "Lampă - lampă",
            "noteRo": "Feminin: die/eine",
            "translationBs": "Lampa - lampa",
            "noteBs": "Ženski rod: die/eine",
            "translationEs": "Lámpara - lámpara",
            "noteEs": "Femenino: die/eine",
            "translationBg": "المصباح - مصباح",
            "noteBg": "مؤنث: die/eine",
            "translationEl": "Φωτιστικό - λυχνάρι",
            "noteEl": "Θηλυκό: die/eine"
          },
          {
            "example": "das Buch (محايد) - ein Buch",
            "translation": "الكتاب - كتاب",
            "note": "محايد: das/ein",
            "translationEn": "The book - a book",
            "noteEn": "Neutral: das/ein",
            "translationTr": "Kitap - bir kitap",
            "noteTr": "Nötr: das/ein",
            "translationRo": "الكتاب - كتاب",
            "noteRo": "محايد: das/ein",
            "translationBs": "Knjiga - knjiga",
            "noteBs": "Neutralno: das/ein",
            "translationEs": "El libro - un libro",
            "noteEs": "Neutro: das/ein",
            "translationBg": "Книгата – книга",
            "noteBg": "Неутрално: das/ein",
            "translationEl": "Το βιβλίο - ένα βιβλίο",
            "noteEl": "Ουδέτερο: das/ein"
          },
          {
            "example": "kein/keine/kein",
            "translation": "النفي: لا يوجد",
            "note": "النفي يتبع نفس نمط ein",
            "translationEn": "Negation: none",
            "noteEn": "Negation follows the same pattern as ein",
            "translationTr": "Olumsuzluk: yok",
            "noteTr": "Olumsuzluk ein ile aynı modeli izler",
            "translationRo": "Negație: niciuna",
            "noteRo": "Negația urmează același model ca ein",
            "translationBs": "Negacija: nema",
            "noteBs": "Negacija slijedi isti obrazac kao ein",
            "translationEs": "Negación: ninguna",
            "noteEs": "La negación sigue el mismo patrón que ein.",
            "translationBg": "Отрицание: няма",
            "noteBg": "Отрицанието следва същия модел като ein",
            "translationEl": "Άρνηση: καμία",
            "noteEl": "Η άρνηση ακολουθεί το ίδιο μοτίβο με το ein"
          }
        ],
        "table": {
          "headers": [
            "الجنس",
            "التعريف",
            "التنكير",
            "النفي"
          ],
          "headersEn": [
            "Gender",
            "Definite",
            "Indefinite",
            "Negative"
          ],
          "headersTr": [
            "Cinsiyet",
            "Belirli",
            "Belirsiz",
            "Olumsuz"
          ],
          "headersRo": [
            "Gen",
            "Hotărât",
            "Nedefinit",
            "Negativ"
          ],
          "headersBs": [
            "Rod",
            "Određeni",
            "Neodređeni",
            "Negativni"
          ],
          "headersEs": [
            "Género",
            "Definido",
            "Indefinido",
            "Negativo"
          ],
          "headersBg": [
            "Род",
            "Определителен",
            "Неопределителен",
            "Отрицателен"
          ],
          "headersEl": [
            "Γένος",
            "Οριστικό",
            "Αόριστο",
            "Αρνητικό"
          ],
          "rows": [
            [
              "مذكر (Maskulinum) / Masculine (Maskulinum) / Eril (Maskulinum) / Masculin / Muški rod / Masculino / Мъжки род / Αρσενικό",
              "der",
              "ein",
              "kein"
            ],
            [
              "مؤنث (Femininum) / Feminine (Femininum) / Dişil (Femininum) / Feminin / Ženski rod / Femenino / Женски род / Θηλυκό",
              "die",
              "eine",
              "keine"
            ],
            [
              "محايد (Neutrum) / Neuter (Neutrum) / Nötr (Neutrum) / Neutru / Srednji rod / Neutro / Среден род / Ουδέτερο",
              "das",
              "ein",
              "kein"
            ],
            [
              "جمع (Plural) / Plural / Çoğul (Plural) / Plural / Množina / Plural / Множествено число / Πληθυντικός",
              "die",
              "–",
              "keine"
            ]
          ]
        }
      },
      {
        "id": "akkusativ",
        "title": "حالة المفعول به - Akkusativ",
        "titleDe": "Der Akkusativ",
        "explanation": "المفعول به في الألمانية يغير أداة التعريف للمذكر فقط!",
        "titleEn": "Object case - Akkusativ",
        "explanationEn": "The object in German changes the definite article for the masculine only!",
        "titleTr": "Nesne durumu - Akkusativ",
        "explanationTr": "Almanca'da nesne yalnızca eril için belirli artikel değiştirir!",
        "titleRo": "Caz obiect - Akkusativ",
        "explanationRo": "Obiectul în germană schimbă articolul hotărât numai pentru masculin!",
        "titleBs": "Predmet - Akkusativ",
        "explanationBs": "Objekat na njemačkom mijenja određeni član samo za muški rod!",
        "titleEs": "Caso de objeto - Akkusativ",
        "explanationEs": "¡El objeto en alemán cambia el artículo definido sólo por el masculino!",
        "titleBg": "Обектна каса - Аккусатив",
        "explanationBg": "Обектът в немски променя определителния член само за мъжки!",
        "titleEl": "Περίπτωση αντικειμένου - Akkusativ",
        "explanationEl": "Το αντικείμενο στα γερμανικά αλλάζει το οριστικό άρθρο μόνο για τα αρσενικά!",
        "rules": [
          {
            "example": "Ich kaufe der Laptop → den Laptop.",
            "translation": "أشتري الحاسوب.",
            "note": "der → den في المذكر",
            "translationEn": "I buy the computer.",
            "noteEn": "der → den in the masculine",
            "translationTr": "Bilgisayarı satın alıyorum.",
            "noteTr": "der → eril olarak den",
            "translationRo": "Cumpăr computerul.",
            "noteRo": "der → den la masculin",
            "translationBs": "Kupujem kompjuter.",
            "noteBs": "der → den u muškom rodu",
            "translationEs": "Compro la computadora.",
            "noteEs": "der → guarida en masculino",
            "translationBg": "Купувам компютъра.",
            "noteBg": "der → den в мъжки род",
            "translationEl": "Αγοράζω τον υπολογιστή.",
            "noteEl": "der → den στα αρσενικά"
          },
          {
            "example": "Ich kaufe die Lampe.",
            "translation": "أشتري المصباح.",
            "note": "die تبقى die",
            "translationEn": "I buy the lamp.",
            "noteEn": "die remains die",
            "translationTr": "Lambayı satın alıyorum.",
            "noteTr": "ölmek kalır",
            "translationRo": "Cumpar lampa.",
            "noteRo": "mor rămâne mor",
            "translationBs": "Kupujem lampu.",
            "noteBs": "umrijeti ostaje umrijeti",
            "translationEs": "Compro la lámpara.",
            "noteEs": "morir permanece morir",
            "translationBg": "Купувам лампата.",
            "noteBg": "умират остава умират",
            "translationEl": "Αγοράζω τη λάμπα.",
            "noteEl": "πεθαίνεις παραμένει πεθαίνει"
          },
          {
            "example": "Ich kaufe das Buch.",
            "translation": "أشتري الكتاب.",
            "note": "das يبقى das",
            "translationEn": "I buy the book.",
            "noteEn": "das remains das",
            "translationTr": "Kitabı satın alıyorum.",
            "noteTr": "das das olarak kalıyor",
            "translationRo": "أشتري الكتاب.",
            "noteRo": "das ramane das",
            "translationBs": "Ja kupujem knjigu.",
            "noteBs": "das ostaje das",
            "translationEs": "Compro el libro.",
            "noteEs": "das sigue siendo das",
            "translationBg": "Купувам книгата.",
            "noteBg": "das си остава das",
            "translationEl": "Αγοράζω το βιβλίο.",
            "noteEl": "das παραμένει das"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Was ist der Artikel für 'Buch'?",
        "questionAr": "ما هي أداة التعريف لكلمة Buch (كتاب)؟",
        "options": [
          "der",
          "die",
          "das",
          "ein"
        ],
        "answer": 2,
        "questionEn": "What is the definite article for Buch (book)?",
        "questionTr": "Buch (kitap) için kesin makale nedir?",
        "questionRo": "Care este articolul hotărât pentru Buch (carte)?",
        "questionBs": "Koji je definitivni članak za Buch (knjiga)?",
        "questionEs": "¿Cuál es el artículo definido de Buch (libro)?",
        "questionBg": "Какъв е определителният член за Бух (книга)?",
        "questionEl": "Ποιο είναι το οριστικό άρθρο για το Buch (βιβλίο);"
      },
      {
        "type": "fillblank",
        "question": "Was kostet _____ Laptop? (der/die/das)",
        "questionAr": "اختر الأداة الصحيحة",
        "answer": "der",
        "hint": "Laptop مذكر في الألمانية",
        "questionEn": "Choose the right tool",
        "questionTr": "Doğru aracı seçin",
        "questionRo": "Alegeți instrumentul potrivit",
        "questionBs": "Odaberite pravi alat",
        "questionEs": "Elija la herramienta adecuada",
        "questionBg": "Изберете правилния инструмент",
        "questionEl": "Επιλέξτε το σωστό εργαλείο"
      },
      {
        "type": "mcq",
        "question": "Was bedeutet 'billig'?",
        "questionAr": "ما معنى billig؟",
        "options": [
          "غالي",
          "رخيص",
          "جميل",
          "كبير"
        ],
        "answer": 1,
        "questionEn": "What does billig mean?",
        "questionTr": "billig ne demek?",
        "questionRo": "Ce înseamnă billig?",
        "questionBs": "Šta znači naplata?",
        "questionEs": "¿Qué significa billig?",
        "questionBg": "Какво означава billig?",
        "questionEl": "Τι σημαίνει billig;"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Was kostet das?",
        "ar": "بكم هذا؟",
        "en": "What does this cost?",
        "tr": "Bunun maliyeti nedir?",
        "ro": "Cât costă asta?",
        "bs": "Koliko ovo košta?",
        "es": "¿Cuánto cuesta esto?",
        "bg": "Какво струва това?",
        "el": "Τι κοστίζει αυτό;"
      },
      {
        "de": "Das kostet ... Euro.",
        "ar": "هذا يكلف ... يورو.",
        "en": "That costs... euros.",
        "tr": "Bu... avroya mal oluyor.",
        "ro": "Asta costa... euro.",
        "bs": "To košta... evra.",
        "es": "Eso cuesta... euros.",
        "bg": "Това струва... евро.",
        "el": "Αυτό κοστίζει... ευρώ."
      },
      {
        "de": "Das ist (zu) teuer!",
        "ar": "هذا (جداً) غالي!",
        "en": "That's too expensive!",
        "tr": "Bu çok pahalı!",
        "ro": "E prea scump!",
        "bs": "To je preskupo!",
        "es": "¡Eso es demasiado caro!",
        "bg": "Това е твърде скъпо!",
        "el": "Αυτό είναι πολύ ακριβό!"
      },
      {
        "de": "Das ist billig.",
        "ar": "هذا رخيص.",
        "en": "That's cheap.",
        "tr": "Bu ucuz.",
        "ro": "Asta e ieftin.",
        "bs": "To je jeftino.",
        "es": "Eso es barato.",
        "bg": "Това е евтино.",
        "el": "Αυτό είναι φτηνό."
      },
      {
        "de": "Ich nehme das.",
        "ar": "سآخذ هذا.",
        "en": "I'll take this.",
        "tr": "Bunu alıyorum.",
        "ro": "O să iau asta.",
        "bs": "Ja ću uzeti ovo.",
        "es": "Me llevaré esto.",
        "bg": "Ще взема това.",
        "el": "Θα πάρω αυτό."
      },
      {
        "de": "Haben Sie ...?",
        "ar": "هل عندكم ...؟",
        "en": "Do you have...?",
        "tr": "Sende var mı...?",
        "ro": "Aveți...?",
        "bs": "Da li imate...?",
        "es": "Tiene...?",
        "bg": "Имате ли...?",
        "el": "Έχετε...;"
      }
    ]
  },
  {
    "id": 4,
    "titleDe": "Wie spät ist es?",
    "titleAr": "كم الساعة؟",
    "emoji": "⏰",
    "color": "#a78bfa",
    "titleEn": "What's the time?",
    "titleTr": "Saat kaç?",
    "titleRo": "Care este ora?",
    "titleBs": "koliko je sati?",
    "titleEs": "¿Cuál es la hora?",
    "titleBg": "колко е часът",
    "titleEl": "Τι ώρα είναι;",
    "topics": [
      "الوقت",
      "المواعيد",
      "أيام الأسبوع",
      "الأنشطة اليومية"
    ],
    "topicsEn": [
      "the time",
      "Appointments",
      "Days of the week",
      "Daily activities"
    ],
    "topicsTr": [
      "zaman",
      "Randevular",
      "Haftanın günleri",
      "Günlük aktiviteler"
    ],
    "topicsRo": [
      "timpul",
      "Numiri",
      "Zilele săptămânii",
      "Activități zilnice"
    ],
    "topicsBs": [
      "vrijeme",
      "Sastanci",
      "Dani u sedmici",
      "Dnevne aktivnosti"
    ],
    "topicsEs": [
      "el tiempo",
      "Equipo",
      "Días de la semana",
      "Actividades diarias"
    ],
    "topicsBg": [
      "времето",
      "Назначавания",
      "Дни от седмицата",
      "Ежедневни дейности"
    ],
    "topicsEl": [
      "ο χρόνος",
      "Εφόδια",
      "Μέρες της εβδομάδας",
      "Καθημερινές δραστηριότητες"
    ],
    "canDo": "أستطيع أن أسأل عن الوقت وأحدد مواعيد",
    "canDoDe": "Ich kann nach der Uhrzeit fragen und Termine machen",
    "canDoEn": "I can ask for time and make appointments",
    "canDoTr": "Zaman isteyebilir ve randevu alabilirim",
    "canDoRo": "Pot cere timp și pot face programări",
    "canDoBs": "Mogu tražiti vrijeme i zakazati termine",
    "canDoEs": "Puedo pedir hora y concertar citas.",
    "canDoBg": "Мога да поискам време и да уговоря срещи",
    "canDoEl": "Μπορώ να ζητήσω χρόνο και να κλείσω ραντεβού",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/37_langenschidt_-_4.2a_-_wie_spat_ist_es.mp3",
        "label": "4.2a - Wie spät ist es?",
        "labelAr": "كم الساعة؟",
        "labelEn": "What's the time?",
        "labelTr": "Saat kaç?",
        "labelRo": "Care este ora?",
        "labelBs": "koliko je sati?",
        "labelEs": "¿Cuál es la hora?",
        "labelBg": "колко е часът",
        "labelEl": "Τι ώρα είναι;"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/38_langenschidt_-_4.5_-_wortakzent_und_rhythmus.mp3",
        "label": "4.5 - Wortakzent",
        "labelAr": "نبرة الكلمة",
        "labelEn": "The tone of the word",
        "labelTr": "Kelimenin tonu",
        "labelRo": "Tonul cuvântului",
        "labelBs": "Ton riječi",
        "labelEs": "El tono de la palabra.",
        "labelBg": "Тонът на думата",
        "labelEl": "Ο τόνος της λέξης"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/40_langenschidt_-_4.9b_-_kommst_du_mit_....mp3",
        "label": "4.9b - Kommst du mit?",
        "labelAr": "هل تأتي معي؟",
        "labelEn": "Will you come with me?",
        "labelTr": "Benimle gelecek misin?",
        "labelRo": "vei veni cu mine?",
        "labelBs": "Hoćeš li poći sa mnom?",
        "labelEs": "¿Vendrás conmigo?",
        "labelBg": "ще дойдеш ли с мен",
        "labelEl": "Θα έρθεις μαζί μου;"
      }
    ],
    "dialogs": [
      {
        "title": "Wie spät ist es?",
        "titleAr": "كم الساعة الآن؟",
        "titleEn": "What time is it now?",
        "titleTr": "Şimdi saat kaç?",
        "titleRo": "Cât e ceasul acum?",
        "titleBs": "Koliko je sati sada?",
        "titleEs": "¿Qué hora es ahora?",
        "titleBg": "колко е часът сега",
        "titleEl": "Τι ώρα είναι τώρα;",
        "lines": [
          {
            "speaker": "Maria",
            "de": "Entschuldigung, wie spät ist es?",
            "ar": "عذراً، كم الساعة؟",
            "en": "Sorry, what time is it?",
            "tr": "Pardon, saat kaç?",
            "ro": "Scuze, cât este ceasul?",
            "bs": "Izvini, koliko je sati?",
            "es": "Perdón, ¿qué hora es?",
            "bg": "Съжалявам, колко е часът?",
            "el": "Συγγνώμη, τι ώρα είναι;"
          },
          {
            "speaker": "Thomas",
            "de": "Es ist halb drei.",
            "ar": "الساعة الثانية والنصف.",
            "en": "It is half past two.",
            "tr": "Saat iki buçuk.",
            "ro": "Este două și jumătate.",
            "bs": "Pola je dva.",
            "es": "Son las dos y media.",
            "bg": "Два и половина е.",
            "el": "Η ώρα είναι δύο και μισή."
          },
          {
            "speaker": "Maria",
            "de": "Oh! Ich habe einen Termin um 3 Uhr.",
            "ar": "أوه! عندي موعد في الساعة الثالثة.",
            "en": "Oh! I have an appointment at three o'clock.",
            "tr": "Ah! Saat üçte randevum var.",
            "ro": "Oh! Am o programare la ora trei.",
            "bs": "Oh! Imam termin u tri sata.",
            "es": "¡Oh! Tengo una cita a las tres.",
            "bg": "о! Имам среща в три часа.",
            "el": "Ω! Έχω ραντεβού στις τρεις."
          },
          {
            "speaker": "Thomas",
            "de": "Beeilen Sie sich!",
            "ar": "أسرعي!",
            "en": "Hurry!",
            "tr": "Acele etmek!",
            "ro": "Grabă!",
            "bs": "Požuri!",
            "es": "¡Apurarse!",
            "bg": "побързайте!",
            "el": "Βιασύνη!"
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Mein Tagesablauf",
        "titleAr": "روتيني اليومي",
        "titleEn": "My daily routine",
        "titleTr": "Günlük rutinim",
        "titleRo": "Rutina mea zilnică",
        "titleBs": "Moja dnevna rutina",
        "titleEs": "mi rutina diaria",
        "titleBg": "Моето ежедневие",
        "titleEl": "Η καθημερινότητά μου",
        "text": [
          {
            "de": "Ich stehe um 7 Uhr auf.",
            "ar": "أستيقظ في الساعة السابعة.",
            "en": "I wake up at seven o'clock.",
            "tr": "Saat yedide uyanıyorum.",
            "ro": "Mă trezesc la ora șapte.",
            "bs": "Budim se u sedam sati.",
            "es": "Me despierto a las siete.",
            "bg": "Събуждам се в седем часа.",
            "el": "Ξυπνάω στις επτά."
          },
          {
            "de": "Um 8 Uhr frühstücke ich.",
            "ar": "في الساعة الثامنة أتناول الفطور.",
            "en": "At eight o'clock I eat breakfast.",
            "tr": "Saat sekizde kahvaltı yapıyorum.",
            "ro": "La ora opt iau micul dejun.",
            "bs": "U osam sati doručkujem.",
            "es": "A las ocho desayuno.",
            "bg": "В осем часа закусвам.",
            "el": "Στις οκτώ τρώω πρωινό."
          },
          {
            "de": "Der Deutschkurs beginnt um 9 Uhr.",
            "ar": "درس الألمانية يبدأ في الساعة التاسعة.",
            "en": "German lesson starts at nine o'clock.",
            "tr": "Almanca dersi saat dokuzda başlıyor.",
            "ro": "Lecția de germană începe la ora nouă.",
            "bs": "Čas njemačkog počinje u devet sati.",
            "es": "La lección de alemán comienza a las nueve.",
            "bg": "Часът по немски започва в девет часа.",
            "el": "Το μάθημα γερμανικών ξεκινά στις εννιά."
          },
          {
            "de": "Um 12 Uhr esse ich zu Mittag.",
            "ar": "في الساعة الثانية عشرة أتناول الغداء.",
            "en": "At twelve o'clock I have lunch.",
            "tr": "Saat on ikide öğle yemeği yerim.",
            "ro": "La ora douăsprezece iau prânzul.",
            "bs": "U 12 sati ručam.",
            "es": "A las doce almuerzo.",
            "bg": "В дванадесет часа обядвам.",
            "el": "Στις δώδεκα τρώω μεσημεριανό."
          },
          {
            "de": "Am Abend lerne ich Vokabeln.",
            "ar": "في المساء أحفظ المفردات.",
            "en": "In the evening I memorize vocabulary.",
            "tr": "Akşamları kelimeleri ezberliyorum.",
            "ro": "Seara memorez vocabularul.",
            "bs": "Uveče učim napamet vokabular.",
            "es": "Por la noche memorizo ​​vocabulario.",
            "bg": "Вечер наизустявам лексика.",
            "el": "Το βράδυ απομνημονεύω λεξιλόγιο."
          }
        ],
        "questions": [
          {
            "q": "Um wie viel Uhr beginnt der Kurs?",
            "qAr": "متى يبدأ الدرس؟",
            "answer": "Um 9 Uhr",
            "answerAr": "في الساعة التاسعة",
            "qEn": "When does the lesson start?",
            "answerEn": "At nine o'clock",
            "qTr": "Ders ne zaman başlıyor?",
            "answerTr": "saat dokuzda",
            "qRo": "Când începe lecția?",
            "answerRo": "La ora nouă",
            "qBs": "Kada počinje lekcija?",
            "answerBs": "U devet sati",
            "qEs": "¿Cuándo comienza la lección?",
            "answerEs": "a las nueve en punto",
            "qBg": "Кога започва урокът?",
            "answerBg": "В девет часа",
            "qEl": "Πότε ξεκινά το μάθημα;",
            "answerEl": "Στις εννιά η ώρα"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "uhrzeit",
        "title": "قراءة الساعة",
        "titleDe": "Die Uhrzeit",
        "explanation": "هناك طريقتان لقراءة الساعة: الرسمية وغير الرسمية.",
        "titleEn": "Reading the clock",
        "explanationEn": "There are two ways to read a watch: formal and informal.",
        "titleTr": "Saati okumak",
        "explanationTr": "Bir saati okumanın iki yolu vardır: resmi ve resmi olmayan.",
        "titleRo": "Citind ceasul",
        "explanationRo": "Există două moduri de a citi un ceas: formal și informal.",
        "titleBs": "Čitanje sata",
        "explanationBs": "Postoje dva načina čitanja sata: formalni i neformalni.",
        "titleEs": "leyendo el reloj",
        "explanationEs": "Hay dos formas de leer un reloj: formal e informal.",
        "titleBg": "Четене на часовника",
        "explanationBg": "Има два начина за четене на часовник: официален и неофициален.",
        "titleEl": "Διαβάζοντας το ρολόι",
        "explanationEl": "Υπάρχουν δύο τρόποι για να διαβάσετε ένα ρολόι: επίσημος και ανεπίσημος.",
        "rules": [
          {
            "example": "Es ist 9 Uhr. / Es ist neun Uhr.",
            "translation": "الساعة التاسعة.",
            "note": "تماماً",
            "translationEn": "Nine o'clock.",
            "noteEn": "completely",
            "translationTr": "Saat dokuz.",
            "noteTr": "tamamen",
            "translationRo": "Ora nouă.",
            "noteRo": "complet",
            "translationBs": "Devet sati.",
            "noteBs": "potpuno",
            "translationEs": "Las nueve en punto.",
            "noteEs": "completamente",
            "translationBg": "Девет часа.",
            "noteBg": "напълно",
            "translationEl": "Εννιά η ώρα.",
            "noteEl": "εντελώς"
          },
          {
            "example": "Es ist 9:15 / Viertel nach neun.",
            "translation": "الساعة التاسعة والربع.",
            "note": "",
            "translationEn": "It's a quarter past nine.",
            "noteEn": "",
            "translationTr": "Saat dokuzu çeyrek geçiyor.",
            "noteTr": "",
            "translationRo": "E nouă și un sfert.",
            "noteRo": "",
            "translationBs": "Devet i pet je.",
            "noteBs": "",
            "translationEs": "Son las nueve y cuarto.",
            "noteEs": "",
            "translationBg": "Девет без четвърт е.",
            "noteBg": "",
            "translationEl": "Η ώρα είναι εννιά και τέταρτο.",
            "noteEl": ""
          },
          {
            "example": "Es ist 9:30 / halb zehn.",
            "translation": "الساعة التاسعة والنصف.",
            "note": "halb = نصف قبل الساعة التالية!",
            "translationEn": "It's half past nine.",
            "noteEn": "halb = half before the next hour!",
            "translationTr": "Saat dokuz buçuk.",
            "noteTr": "halb = bir sonraki saatten yarım!",
            "translationRo": "E nouă și jumătate.",
            "noteRo": "halb = jumătate înainte de ora următoare!",
            "translationBs": "Pola je devet.",
            "noteBs": "halb = pola prije sljedećeg sata!",
            "translationEs": "Son las nueve y media.",
            "noteEs": "halb = ¡la mitad antes de la próxima hora!",
            "translationBg": "Девет и половина е.",
            "noteBg": "halb = половината преди следващия час!",
            "translationEl": "Η ώρα είναι εννιά και μισή.",
            "noteEl": "halb = μισό πριν την επόμενη ώρα!"
          },
          {
            "example": "Es ist 9:45 / Viertel vor zehn.",
            "translation": "الساعة العاشرة إلا الربع.",
            "note": "",
            "translationEn": "It's a quarter to ten.",
            "noteEn": "",
            "translationTr": "Saat ona çeyrek var.",
            "noteTr": "",
            "translationRo": "E zece fără un sfert.",
            "noteRo": "",
            "translationBs": "Pet je do deset.",
            "noteBs": "",
            "translationEs": "Son las diez menos cuarto.",
            "noteEs": "",
            "translationBg": "Десет без четвърт е.",
            "noteBg": "",
            "translationEl": "Είναι δέκα παρά τέταρτο.",
            "noteEl": ""
          }
        ]
      },
      {
        "id": "trennbare-verben",
        "title": "الأفعال المنفصلة - Trennbare Verben",
        "titleDe": "Trennbare Verben",
        "explanation": "بعض الأفعال لها بادئة تنفصل وتنتقل إلى نهاية الجملة.",
        "titleEn": "Separate verbs - Trennbare Verben",
        "explanationEn": "Some verbs have a prefix that breaks off and moves to the end of the sentence.",
        "titleTr": "Ayrı fiiller - Trennbare Verben",
        "explanationTr": "Bazı fiillerin, kesilen ve cümlenin sonuna doğru giden bir öneki vardır.",
        "titleRo": "Verbe separate - Trennbare Verben",
        "explanationRo": "Unele verbe au un prefix care se întrerupe și se deplasează la sfârșitul propoziției.",
        "titleBs": "Odvojeni glagoli - Trennbare Verben",
        "explanationBs": "Neki glagoli imaju prefiks koji se prekida i prelazi na kraj rečenice.",
        "titleEs": "Verbos separados - Trennbare Verben",
        "explanationEs": "Algunos verbos tienen un prefijo que se interrumpe y llega al final de la oración.",
        "titleBg": "Разделни глаголи - Trennbare Verben",
        "explanationBg": "Някои глаголи имат префикс, който се прекъсва и се премества в края на изречението.",
        "titleEl": "Ξεχωριστά ρήματα - Trennbare Verben",
        "explanationEl": "Ορισμένα ρήματα έχουν ένα πρόθεμα που διακόπτεται και μετακινείται στο τέλος της πρότασης.",
        "rules": [
          {
            "example": "aufstehen → Ich stehe um 7 Uhr auf.",
            "translation": "أستيقظ في السابعة.",
            "note": "auf ينتقل للنهاية",
            "translationEn": "I wake up at seven.",
            "noteEn": "auf Moves to the end",
            "translationTr": "Yedide uyanıyorum.",
            "noteTr": "auf Sona doğru gider",
            "translationRo": "Mă trezesc la șapte.",
            "noteRo": "auf Se mută până la capăt",
            "translationBs": "Budim se u sedam.",
            "noteBs": "auf Prelazi na kraj",
            "translationEs": "Me despierto a las siete.",
            "noteEs": "auf Se mueve hasta el final",
            "translationBg": "Събуждам се в седем.",
            "noteBg": "auf Преминава към края",
            "translationEl": "Ξυπνάω στις επτά.",
            "noteEl": "auf Μετακινείται μέχρι το τέλος"
          },
          {
            "example": "anfangen → Der Kurs fängt um 9 an.",
            "translation": "الدرس يبدأ في التاسعة.",
            "note": "an ينتقل للنهاية",
            "translationEn": "Lesson starts at nine.",
            "noteEn": "an moves to the end",
            "translationTr": "Ders dokuzda başlıyor.",
            "noteTr": "bir sona doğru hareket eder",
            "translationRo": "Lecția începe la nouă.",
            "noteRo": "an se deplasează până la capăt",
            "translationBs": "Lekcija počinje u devet.",
            "noteBs": "a kreće se do kraja",
            "translationEs": "La lección empieza a las nueve.",
            "noteEs": "un se mueve hasta el final",
            "translationBg": "Урокът започва в девет.",
            "noteBg": "an се движи до края",
            "translationEl": "Το μάθημα ξεκινά στις εννιά.",
            "noteEl": "ένα κινείται μέχρι το τέλος"
          },
          {
            "example": "einkaufen → Ich kaufe im Supermarkt ein.",
            "translation": "أتسوق في السوبرماركت.",
            "note": "ein ينتقل للنهاية",
            "translationEn": "I shop at the supermarket.",
            "noteEn": "ein moves to the end",
            "translationTr": "Süpermarketten alışveriş yapıyorum.",
            "noteTr": "ein sonuna doğru ilerliyor",
            "translationRo": "Fac cumpărături la supermarket.",
            "noteRo": "ein se mută până la capăt",
            "translationBs": "Kupujem u supermarketu.",
            "noteBs": "ein se kreće do kraja",
            "translationEs": "Hago compras en el supermercado.",
            "noteEs": "ein se mueve hasta el final",
            "translationBg": "Пазарувам от супермаркета.",
            "noteBg": "ein се движи до края",
            "translationEl": "Ψωνίζω στο σούπερ μάρκετ.",
            "noteEl": "Το ein προχωρά μέχρι το τέλος"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Es ist 'halb zehn'. Was bedeutet das?",
        "questionAr": "ماذا تعني halb zehn؟",
        "options": [
          "العاشرة والنصف",
          "التاسعة والنصف",
          "العاشرة",
          "العاشرة إلا الربع"
        ],
        "answer": 1,
        "questionEn": "What does halb zehn mean?",
        "questionTr": "halb zehn ne demek?",
        "questionRo": "Ce înseamnă halb zehn?",
        "questionBs": "Šta znači halb zehn?",
        "questionEs": "¿Qué significa halb zehn?",
        "questionBg": "Какво означава halb zehn?",
        "questionEl": "Τι σημαίνει η λέξη halb zehn;"
      },
      {
        "type": "fillblank",
        "question": "Ich _____ um 7 Uhr _____. (aufstehen)",
        "questionAr": "أكمل الفراغ",
        "answer": "stehe / auf",
        "hint": "فعل منفصل: stehe...auf",
        "questionEn": "Fill in the blank",
        "questionTr": "Boşluğu doldurun",
        "questionRo": "Completați spațiul liber",
        "questionBs": "Popunite prazninu",
        "questionEs": "Completa el espacio en blanco",
        "questionBg": "Попълнете празното поле",
        "questionEl": "Συμπληρώστε το κενό"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Wie spät ist es?",
        "ar": "كم الساعة؟",
        "en": "What time is it?",
        "tr": "Saat kaç?",
        "ro": "Cât este ceasul?",
        "bs": "Koliko je sati?",
        "es": "¿Qué hora es?",
        "bg": "колко е часът",
        "el": "Τι ώρα είναι;"
      },
      {
        "de": "Es ist drei Uhr.",
        "ar": "الساعة الثالثة.",
        "en": "It's three o'clock.",
        "tr": "Saat üç.",
        "ro": "Este ora trei.",
        "bs": "Tri je sata.",
        "es": "Son las tres en punto.",
        "bg": "Три часа е.",
        "el": "Η ώρα είναι τρεις."
      },
      {
        "de": "Es ist halb vier.",
        "ar": "الساعة الثالثة والنصف.",
        "en": "It's half past three.",
        "tr": "Saat üç buçuk.",
        "ro": "E trei și jumătate.",
        "bs": "Pola je tri.",
        "es": "Son las tres y media.",
        "bg": "Часът е три и половина.",
        "el": "Η ώρα είναι τρεις και μισή."
      },
      {
        "de": "Wann beginnt der Kurs?",
        "ar": "متى يبدأ الدرس؟",
        "en": "When does the course start?",
        "tr": "Kurs ne zaman başlıyor?",
        "ro": "Când începe cursul?",
        "bs": "Kada počinje kurs?",
        "es": "¿Cuándo empieza el curso?",
        "bg": "Кога започва курсът?",
        "el": "Πότε ξεκινά το μάθημα;"
      },
      {
        "de": "Hast du Zeit?",
        "ar": "هل لديك وقت؟",
        "en": "Do you have time?",
        "tr": "Zamanın var mı?",
        "ro": "ai timp?",
        "bs": "Imate li vremena?",
        "es": "¿Tienes tiempo?",
        "bg": "имаш ли време",
        "el": "Έχεις χρόνο;"
      }
    ]
  },
  {
    "id": 5,
    "titleDe": "Einkaufen",
    "titleAr": "التسوق والطعام",
    "emoji": "🛒",
    "color": "#f87171",
    "titleEn": "Shopping and food",
    "titleTr": "Alışveriş ve yemek",
    "titleRo": "Cumpărături și mâncare",
    "titleBs": "Kupovina i hrana",
    "titleEs": "Compras y comida",
    "titleBg": "Пазаруване и храна",
    "titleEl": "Ψώνια και φαγητό",
    "topics": [
      "التسوق للطعام",
      "الكميات",
      "الطبخ",
      "الأوزان"
    ],
    "topicsEn": [
      "Shopping for food",
      "Quantities",
      "Cooking",
      "Weights"
    ],
    "topicsTr": [
      "Yiyecek için alışveriş",
      "Miktarlar",
      "Yemek pişirmek",
      "Ağırlıklar"
    ],
    "topicsRo": [
      "Cumpărături pentru mâncare",
      "Cantitati",
      "Gătit",
      "Greutăți"
    ],
    "topicsBs": [
      "Kupovina hrane",
      "Količine",
      "Kuvanje",
      "Utezi"
    ],
    "topicsEs": [
      "Comprando comida",
      "Cantidades",
      "Cocinando",
      "Pesos"
    ],
    "topicsBg": [
      "Пазаруване на храна",
      "Количества",
      "готвене",
      "Тежести"
    ],
    "topicsEl": [
      "Ψώνια για φαγητό",
      "Ποσότητες",
      "Μαγείρεμα",
      "Βάρη"
    ],
    "canDo": "أستطيع أن أتسوق وأتحدث عن الطعام",
    "canDoDe": "Ich kann einkaufen und über Essen sprechen",
    "canDoEn": "I can shop and talk about food",
    "canDoTr": "Alışveriş yapabilirim ve yemek hakkında konuşabilirim",
    "canDoRo": "Pot să fac cumpărături și să vorbesc despre mâncare",
    "canDoBs": "Mogu kupovati i razgovarati o hrani",
    "canDoEs": "Puedo comprar y hablar sobre comida.",
    "canDoBg": "Мога да пазарувам и да говоря за храна",
    "canDoEl": "Μπορώ να ψωνίσω και να μιλήσω για φαγητό",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/41_langenschidt_-_5.2b_-_einkaufen.mp3",
        "label": "5.2b - Einkaufen",
        "labelAr": "التسوق",
        "labelEn": "shopping",
        "labelTr": "alışveriş",
        "labelRo": "cumpărături",
        "labelBs": "shopping",
        "labelEs": "compras",
        "labelBg": "пазаруване",
        "labelEl": "ψώνια"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/45_langenschidt_-_5.8_-_matis_laden.mp3",
        "label": "5.8 - Matis Laden",
        "labelAr": "متجر ماتي",
        "labelEn": "Shop mate",
        "labelTr": "Alışveriş arkadaşı",
        "labelRo": "Magazin prietene",
        "labelBs": "Shop mate",
        "labelEs": "Compañero de tienda",
        "labelBg": "Колега от магазина",
        "labelEl": "Μαγαζί φίλε"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/46_langenschidt_-_5.10a_-_was_kochen_wir.mp3",
        "label": "5.10a - Was kochen wir?",
        "labelAr": "ماذا نطبخ؟",
        "labelEn": "What do we cook?",
        "labelTr": "Ne pişireceğiz?",
        "labelRo": "Ce gătim?",
        "labelBs": "Šta kuvamo?",
        "labelEs": "¿Qué cocinamos?",
        "labelBg": "Какво готвим?",
        "labelEl": "Τι μαγειρεύουμε;"
      }
    ],
    "dialogs": [
      {
        "title": "Im Supermarkt",
        "titleAr": "في السوبرماركت",
        "titleEn": "In the supermarket",
        "titleTr": "Süpermarkette",
        "titleRo": "În supermarket",
        "titleBs": "U supermarketu",
        "titleEs": "en el supermercado",
        "titleBg": "В супермаркета",
        "titleEl": "Στο σούπερ μάρκετ",
        "lines": [
          {
            "speaker": "Kunde",
            "de": "Haben Sie frische Tomaten?",
            "ar": "هل عندكم طماطم طازجة؟",
            "en": "Do you have fresh tomatoes?",
            "tr": "Taze domatesiniz var mı?",
            "ro": "Aveți roșii proaspete?",
            "bs": "Imate li svježeg paradajza?",
            "es": "¿Tienes tomates frescos?",
            "bg": "Имате ли пресни домати?",
            "el": "Έχετε φρέσκια ντομάτα;"
          },
          {
            "speaker": "Verkäufer",
            "de": "Ja, natürlich. Wie viel möchten Sie?",
            "ar": "نعم بالطبع. كم تريد؟",
            "en": "Yes, of course. How much do you want?",
            "tr": "Evet elbette. Ne kadar istiyorsun?",
            "ro": "Da, desigur. Cât vrei?",
            "bs": "Da, naravno. Koliko želiš?",
            "es": "Sí, claro. ¿Cuanto quieres?",
            "bg": "да разбира се колко искаш",
            "el": "Ναι, φυσικά. Πόσο θέλεις;"
          },
          {
            "speaker": "Kunde",
            "de": "Ein Kilo, bitte. Und 500 Gramm Käse.",
            "ar": "كيلو من فضلك. و500 غرام جبن.",
            "en": "Kilo please. And 500 grams of cheese.",
            "tr": "Kilo lütfen. Ve 500 gram peynir.",
            "ro": "Kilo va rog. Și 500 de grame de brânză.",
            "bs": "Kilo molim. I 500 grama sira.",
            "es": "Kilo por favor. Y 500 gramos de queso.",
            "bg": "Кило моля. И 500 грама сирене.",
            "el": "Κιλό παρακαλώ. Και 500 γραμμάρια τυρί."
          },
          {
            "speaker": "Verkäufer",
            "de": "Gerne. Das macht 6 Euro 80.",
            "ar": "بكل سرور. المجموع 6 يورو و80 سنتاً.",
            "en": "gladly. The total is 6 euros and 80 cents.",
            "tr": "memnuniyetle. Toplam 6 euro 80 sent.",
            "ro": "bucuros. Totalul este de 6 euro și 80 de cenți.",
            "bs": "rado. Ukupno je 6 eura i 80 centi.",
            "es": "con alegría. El total son 6 euros con 80 céntimos.",
            "bg": "с радост. Общата сума е 6 евро и 80 цента.",
            "el": "ευχαρίστως. Το σύνολο είναι 6 ευρώ και 80 λεπτά."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Rezept: Tomatensalat",
        "titleAr": "وصفة: سلطة الطماطم",
        "titleEn": "Recipe: tomato salad",
        "titleTr": "Tarif: domates salatası",
        "titleRo": "Reteta: salata de rosii",
        "titleBs": "Recept: paradajz salata",
        "titleEs": "Receta: ensalada de tomate",
        "titleBg": "Рецепта: доматена салата",
        "titleEl": "Συνταγή: ντοματοσαλάτα",
        "text": [
          {
            "de": "Zutaten: 500 g Tomaten, 1 Gurke, 1 Zwiebel, Öl, Salz.",
            "ar": "المكونات: 500 غ طماطم، خيارة، بصلة، زيت، ملح.",
            "en": "Ingredients: 500 g tomatoes, cucumber, onion, oil, salt.",
            "tr": "Malzemeler: 500 gr domates, salatalık, soğan, yağ, tuz.",
            "ro": "Ingrediente: 500 g rosii, castraveti, ceapa, ulei, sare.",
            "bs": "Sastojci: 500 g paradajza, krastavac, crni luk, ulje, so.",
            "es": "Ingredientes: 500 g de tomate, pepino, cebolla, aceite, sal.",
            "bg": "Продукти: 500 г домати, краставица, лук, олио, сол.",
            "el": "Υλικά: 500 γρ ντομάτες, αγγούρι, κρεμμύδι, λάδι, αλάτι."
          },
          {
            "de": "Zubereitung: Die Tomaten schneiden.",
            "ar": "طريقة التحضير: تقطيع الطماطم.",
            "en": "Preparation method: Chop the tomatoes.",
            "tr": "Hazırlama yöntemi: Domatesleri doğrayın.",
            "ro": "Mod de preparare: Tocați roșiile.",
            "bs": "Način pripreme: Isjeckajte paradajz.",
            "es": "Método de preparación: Picar los tomates.",
            "bg": "Начин на приготвяне: Нарежете доматите.",
            "el": "Τρόπος παρασκευής: Ψιλοκόβουμε τις ντομάτες."
          },
          {
            "de": "Dann die Gurke und die Zwiebel schneiden.",
            "ar": "ثم تقطيع الخيار والبصل.",
            "en": "Then chop the cucumber and onion.",
            "tr": "Daha sonra salatalık ve soğanı doğrayın.",
            "ro": "Apoi toaca castravetele si ceapa.",
            "bs": "Zatim nasjeckajte krastavac i luk.",
            "es": "Luego pica el pepino y la cebolla.",
            "bg": "След това нарежете краставицата и лука.",
            "el": "Στη συνέχεια ψιλοκόψτε το αγγούρι και το κρεμμύδι."
          },
          {
            "de": "Alles mischen. Öl und Salz dazu.",
            "ar": "خلط الكل. إضافة الزيت والملح.",
            "en": "Mix it all. Add oil and salt.",
            "tr": "Hepsini karıştırın. Yağ ve tuz ekleyin.",
            "ro": "Amestecă totul. Adăugați ulei și sare.",
            "bs": "Pomiješajte sve. Dodajte ulje i sol.",
            "es": "Mézclalo todo. Agrega aceite y sal.",
            "bg": "Смесете всичко. Добавете олио и сол.",
            "el": "Ανακατέψτε τα όλα. Προσθέστε λάδι και αλάτι."
          },
          {
            "de": "Fertig! Guten Appetit!",
            "ar": "جاهز! بالهناء والشفاء!",
            "en": "ready! Congratulations and recovery!",
            "tr": "hazır! Tebrikler ve iyileşme!",
            "ro": "gata! Felicitări și recuperare!",
            "bs": "spreman! Čestitke i oporavak!",
            "es": "¡listo! ¡Felicidades y recuperación!",
            "bg": "готов! Честито и оздравяване!",
            "el": "έτοιμος! Συγχαρητήρια και ανάρρωση!"
          }
        ],
        "questions": [
          {
            "q": "Was braucht man für den Salat?",
            "qAr": "ماذا نحتاج للسلطة؟",
            "answer": "Tomaten, Gurke, Zwiebel, Öl, Salz",
            "answerAr": "طماطم، خيار، بصل، زيت، ملح",
            "qEn": "What do we need for power?",
            "answerEn": "Tomatoes, cucumbers, onions, oil, salt",
            "qTr": "Güç için neye ihtiyacımız var?",
            "answerTr": "Domates, salatalık, soğan, yağ, tuz",
            "qRo": "De ce avem nevoie pentru putere?",
            "answerRo": "Roșii, castraveți, ceapă, ulei, sare",
            "qBs": "Šta nam je potrebno za moć?",
            "answerBs": "Paradajz, krastavci, luk, ulje, so",
            "qEs": "¿Qué necesitamos para tener poder?",
            "answerEs": "Tomates, pepinos, cebollas, aceite, sal.",
            "qBg": "Какво ни трябва за власт?",
            "answerBg": "Домати, краставици, лук, олио, сол",
            "qEl": "Τι χρειαζόμαστε για την εξουσία;",
            "answerEl": "Ντομάτες, αγγούρια, κρεμμύδια, λάδι, αλάτι"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "mengen",
        "title": "الكميات والأوزان",
        "titleDe": "Mengenangaben",
        "explanation": "عند التسوق تحتاج إلى كلمات الكميات.",
        "titleEn": "Quantities and weights",
        "explanationEn": "When shopping you need words and quantities.",
        "titleTr": "Miktarlar ve ağırlıklar",
        "explanationTr": "Alışveriş yaparken kelimelere ve miktarlara ihtiyacınız var.",
        "titleRo": "Cantități și greutăți",
        "explanationRo": "La cumpărături ai nevoie de cuvinte și cantități.",
        "titleBs": "Količine i težine",
        "explanationBs": "Prilikom kupovine potrebne su vam riječi i količine.",
        "titleEs": "Cantidades y pesos",
        "explanationEs": "Al comprar necesitas palabras y cantidades.",
        "titleBg": "Количества и грамажи",
        "explanationBg": "Когато пазарувате, имате нужда от думи и количества.",
        "titleEl": "Ποσότητες και βάρη",
        "explanationEl": "Όταν ψωνίζετε χρειάζεστε λέξεις και ποσότητες.",
        "rules": [
          {
            "example": "ein Kilo Tomaten",
            "translation": "كيلو طماطم",
            "note": "",
            "translationEn": "A kilo of tomatoes",
            "noteEn": "",
            "translationTr": "Bir kilo domates",
            "noteTr": "",
            "translationRo": "Un kilogram de roșii",
            "noteRo": "",
            "translationBs": "Kilogram paradajza",
            "noteBs": "",
            "translationEs": "un kilo de tomates",
            "noteEs": "",
            "translationBg": "Килограм домати",
            "noteBg": "",
            "translationEl": "Ένα κιλό ντομάτες",
            "noteEl": ""
          },
          {
            "example": "500 Gramm Käse",
            "translation": "500 غرام جبن",
            "note": "",
            "translationEn": "500 grams of cheese",
            "noteEn": "",
            "translationTr": "500 gram peynir",
            "noteTr": "",
            "translationRo": "500 de grame de brânză",
            "noteRo": "",
            "translationBs": "500 grama sira",
            "noteBs": "",
            "translationEs": "500 gramos de queso",
            "noteEs": "",
            "translationBg": "500 грама сирене",
            "noteBg": "",
            "translationEl": "500 γραμμάρια τυρί",
            "noteEl": ""
          },
          {
            "example": "ein Liter Milch",
            "translation": "لتر حليب",
            "note": "",
            "translationEn": "A liter of milk",
            "noteEn": "",
            "translationTr": "Bir litre süt",
            "noteTr": "",
            "translationRo": "Un litru de lapte",
            "noteRo": "",
            "translationBs": "Litar mleka",
            "noteBs": "",
            "translationEs": "un litro de leche",
            "noteEs": "",
            "translationBg": "Литър мляко",
            "noteBg": "",
            "translationEl": "Ένα λίτρο γάλα",
            "noteEl": ""
          },
          {
            "example": "eine Flasche Wasser",
            "translation": "زجاجة ماء",
            "note": "",
            "translationEn": "water bottle",
            "noteEn": "",
            "translationTr": "su şişesi",
            "noteTr": "",
            "translationRo": "sticla de apa",
            "noteRo": "",
            "translationBs": "flaša vode",
            "noteBs": "",
            "translationEs": "botella de agua",
            "noteEs": "",
            "translationBg": "бутилка вода",
            "noteBg": "",
            "translationEl": "μπουκάλι νερό",
            "noteEl": ""
          },
          {
            "example": "ein Paket Nudeln",
            "translation": "علبة معكرونة",
            "note": "",
            "translationEn": "A box of pasta",
            "noteEn": "",
            "translationTr": "Bir kutu makarna",
            "noteTr": "",
            "translationRo": "O cutie de paste",
            "noteRo": "",
            "translationBs": "Kutija tjestenine",
            "noteBs": "",
            "translationEs": "una caja de pasta",
            "noteEs": "",
            "translationBg": "Кутия паста",
            "noteBg": "",
            "translationEl": "Ένα κουτί ζυμαρικά",
            "noteEl": ""
          }
        ]
      },
      {
        "id": "imperativ",
        "title": "صيغة الأمر - Imperativ",
        "titleDe": "Der Imperativ",
        "explanation": "نستخدم الأمر في الوصفات والتعليمات.",
        "titleEn": "Imperativ",
        "explanationEn": "We use the imperative in recipes and instructions.",
        "titleTr": "Emir",
        "explanationTr": "Tariflerde ve talimatlarda emir kipini kullanırız.",
        "titleRo": "Imperativ",
        "explanationRo": "Folosim imperativul în rețete și instrucțiuni.",
        "titleBs": "Imperativ",
        "explanationBs": "Koristimo imperativ u receptima i uputstvima.",
        "titleEs": "Imperativo",
        "explanationEs": "Usamos el imperativo en recetas e instrucciones.",
        "titleBg": "Императив",
        "explanationBg": "Ние използваме императив в рецепти и инструкции.",
        "titleEl": "Imperativ",
        "explanationEl": "Χρησιμοποιούμε την επιταγή σε συνταγές και οδηγίες.",
        "rules": [
          {
            "example": "schneiden → Schneiden Sie die Tomaten!",
            "translation": "اقطع/ي الطماطم! (رسمي)",
            "note": "",
            "translationEn": "Chop the tomatoes! (official)",
            "noteEn": "",
            "translationTr": "Domatesleri doğrayın! (resmi)",
            "noteTr": "",
            "translationRo": "Tăiați roșiile! (oficial)",
            "noteRo": "",
            "translationBs": "Nasjeckajte paradajz! (zvanično)",
            "noteBs": "",
            "translationEs": "¡Pica los tomates! (oficial)",
            "noteEs": "",
            "translationBg": "Нарежете доматите! (официален)",
            "noteBg": "",
            "translationEl": "Ψιλοκόψτε τις ντομάτες! (επίσημος ανώτερος υπάλληλος)",
            "noteEl": ""
          },
          {
            "example": "mischen → Mischen Sie alles!",
            "translation": "اخلط/ي كل شيء! (رسمي)",
            "note": "",
            "translationEn": "Mix everything! (official)",
            "noteEn": "",
            "translationTr": "Her şeyi karıştırın! (resmi)",
            "noteTr": "",
            "translationRo": "Amesteca totul! (oficial)",
            "noteRo": "",
            "translationBs": "Sve pomiješajte! (zvanično)",
            "noteBs": "",
            "translationEs": "¡Mezcla todo! (oficial)",
            "noteEs": "",
            "translationBg": "Смесете всичко! (официален)",
            "noteBg": "",
            "translationEl": "Ανακατέψτε τα πάντα! (επίσημος ανώτερος υπάλληλος)",
            "noteEl": ""
          },
          {
            "example": "kochen → Koch die Suppe! (غير رسمي)",
            "translation": "اطبخ الشوربة!",
            "note": "",
            "translationEn": "Cook soup!",
            "noteEn": "",
            "translationTr": "Çorba pişir!",
            "noteTr": "",
            "translationRo": "Gatiti supa!",
            "noteRo": "",
            "translationBs": "Kuhajte supu!",
            "noteBs": "",
            "translationEs": "¡Cocina sopa!",
            "noteEs": "",
            "translationBg": "Гответе супа!",
            "noteBg": "",
            "translationEl": "Μαγειρέψτε σούπα!",
            "noteEl": ""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Was bedeutet 'Guten Appetit'?",
        "questionAr": "ما معنى Guten Appetit؟",
        "options": [
          "تناول جيداً / بالهناء",
          "شكراً على الطعام",
          "الطعام لذيذ",
          "أنا جائع"
        ],
        "answer": 0,
        "questionEn": "What does Guten Appetit mean?",
        "questionTr": "Guten İştahı ne anlama geliyor?",
        "questionRo": "Ce înseamnă Guten Appet?",
        "questionBs": "Šta znači Guten Appetit?",
        "questionEs": "¿Qué significa Guten Appetit?",
        "questionBg": "Какво означава Guten Appetit?",
        "questionEl": "Τι σημαίνει το Guten Appetit;"
      },
      {
        "type": "fillblank",
        "question": "Ich möchte ein _____ Milch. (لتر)",
        "questionAr": "أكمل الفراغ",
        "answer": "Liter",
        "hint": "وحدة قياس السوائل",
        "questionEn": "Fill in the blank",
        "questionTr": "Boşluğu doldurun",
        "questionRo": "Completați spațiul liber",
        "questionBs": "Popunite prazninu",
        "questionEs": "Completa el espacio en blanco",
        "questionBg": "Попълнете празното поле",
        "questionEl": "Συμπληρώστε το κενό"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Haben Sie ...?",
        "ar": "هل عندكم ...؟",
        "en": "Do you have...?",
        "tr": "Sende var mı...?",
        "ro": "Aveți...?",
        "bs": "Da li imate...?",
        "es": "Tiene...?",
        "bg": "Имате ли...?",
        "el": "Έχετε...;"
      },
      {
        "de": "Ich möchte ... kaufen.",
        "ar": "أريد أن أشتري ...",
        "en": "I want to buy...",
        "tr": "Satın almak istiyorum...",
        "ro": "vreau sa cumpar...",
        "bs": "želim da kupim...",
        "es": "quiero comprar...",
        "bg": "Искам да купя...",
        "el": "Θέλω να αγοράσω..."
      },
      {
        "de": "Ein Kilo, bitte.",
        "ar": "كيلو من فضلك.",
        "en": "One kilo, please.",
        "tr": "Bir kilo lütfen.",
        "ro": "Un kilogram, te rog.",
        "bs": "Jedan kilogram, molim.",
        "es": "Un kilo, por favor.",
        "bg": "Един килограм, моля.",
        "el": "Ένα κιλό παρακαλώ."
      },
      {
        "de": "Was kostet das?",
        "ar": "بكم هذا؟",
        "en": "What does this cost?",
        "tr": "Bunun maliyeti nedir?",
        "ro": "Cât costă asta?",
        "bs": "Koliko ovo košta?",
        "es": "¿Cuánto cuesta esto?",
        "bg": "Какво струва това?",
        "el": "Τι κοστίζει αυτό;"
      },
      {
        "de": "Guten Appetit!",
        "ar": "بالهناء والشفاء!",
        "en": "Bon appetit!",
        "tr": "Afiyet olsun!",
        "ro": "Poftă bună!",
        "bs": "Bon appetit!",
        "es": "¡Buen provecho!",
        "bg": "Добър апетит!",
        "el": "Καλή όρεξη!"
      }
    ]
  },
  {
    "id": 6,
    "titleDe": "Meine Familie",
    "titleAr": "عائلتي",
    "emoji": "👨‍👩‍👧‍👦",
    "color": "#34d399",
    "titleEn": "my family",
    "titleTr": "ailem",
    "titleRo": "familia mea",
    "titleBs": "moja porodica",
    "titleEs": "Mi familia",
    "titleBg": "моето семейство",
    "titleEl": "την οικογένειά μου",
    "topics": [
      "أفراد العائلة",
      "أعياد الميلاد",
      "التهاني",
      "الصفات"
    ],
    "topicsEn": [
      "Family members",
      "birthdays",
      "Congratulations",
      "Attributes"
    ],
    "topicsTr": [
      "Aile üyeleri",
      "doğum günleri",
      "Tebrikler",
      "Nitelikler"
    ],
    "topicsRo": [
      "Membrii familiei",
      "zile de naștere",
      "Felicitări",
      "Atribute"
    ],
    "topicsBs": [
      "Članovi porodice",
      "rođendane",
      "Čestitam",
      "Atributi"
    ],
    "topicsEs": [
      "Miembros de la familia",
      "cumpleaños",
      "Felicidades",
      "Atributos"
    ],
    "topicsBg": [
      "Членове на семейството",
      "рождени дни",
      "честито",
      "Атрибути"
    ],
    "topicsEl": [
      "Μέλη της οικογένειας",
      "γενέθλια",
      "Συγχαρητήρια",
      "Γνωρίσματα"
    ],
    "canDo": "أستطيع أن أتحدث عن عائلتي وأهنئ في المناسبات",
    "canDoDe": "Ich kann über meine Familie sprechen und gratulieren",
    "canDoEn": "I can talk about my family and congratulate them on occasions",
    "canDoTr": "Bazen ailem hakkında konuşup onları tebrik edebilirim",
    "canDoRo": "Pot să vorbesc despre familia mea și să-i felicit din când în când",
    "canDoBs": "Mogu pričati o svojoj porodici i povremeno im čestitati",
    "canDoEs": "Puedo hablar de mi familia y felicitarlos en ocasiones.",
    "canDoBg": "Мога да говоря за семейството си и да ги поздравявам понякога",
    "canDoEl": "Μπορώ να μιλήσω για την οικογένειά μου και να τους συγχαρώ με περιστάσεις",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/49_langenschidt_-_6.1a_-_familienfotos.mp3",
        "label": "6.1a - Familienfotos",
        "labelAr": "صور العائلة",
        "labelEn": "Family photos",
        "labelTr": "Aile fotoğrafları",
        "labelRo": "Fotografii de familie",
        "labelBs": "Porodične fotografije",
        "labelEs": "Fotos familiares",
        "labelBg": "Семейни снимки",
        "labelEl": "Οικογενειακές φωτογραφίες"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/50_langenschidt_-_6.2a_-_wie_gross_ist_ihre_familie.mp3",
        "label": "6.2a - Wie groß ist Ihre Familie?",
        "labelAr": "كم عدد أفراد عائلتك؟",
        "labelEn": "How many members are there in your family?",
        "labelTr": "Ailenizde kaç üye var?",
        "labelRo": "Câți membri sunt în familia ta?",
        "labelBs": "Koliko članova ima vaša porodica?",
        "labelEs": "¿Cuántos miembros hay en tu familia?",
        "labelBg": "Колко членове има вашето семейство?",
        "labelEl": "Πόσα μέλη έχετε στην οικογένειά σας;"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/52_langenschidt_-_6.7a-b_-_bens_geburtstag.mp3",
        "label": "6.7 - Bens Geburtstag",
        "labelAr": "عيد ميلاد بن",
        "labelEn": "Ben's birthday",
        "labelTr": "Ben'in doğum günü",
        "labelRo": "ziua lui Ben",
        "labelBs": "Benov rođendan",
        "labelEs": "el cumpleaños de ben",
        "labelBg": "Рожден ден на Бен",
        "labelEl": "Τα γενέθλια του Μπεν"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD1/53_langenschidt_-_6.7d_-_gluckwunsche.mp3",
        "label": "6.7d - Glückwünsche",
        "labelAr": "التهاني",
        "labelEn": "Congratulations",
        "labelTr": "Tebrikler",
        "labelRo": "Felicitări",
        "labelBs": "Čestitam",
        "labelEs": "Felicidades",
        "labelBg": "честито",
        "labelEl": "Συγχαρητήρια"
      }
    ],
    "dialogs": [
      {
        "title": "Meine Familie",
        "titleAr": "التحدث عن العائلة",
        "titleEn": "Talk about family",
        "titleTr": "Aile hakkında konuşun",
        "titleRo": "Vorbește despre familie",
        "titleBs": "Pričaj o porodici",
        "titleEs": "hablar de familia",
        "titleBg": "Говорете за семейството",
        "titleEl": "Μιλήστε για οικογένεια",
        "lines": [
          {
            "speaker": "Anna",
            "de": "Haben Sie Kinder?",
            "ar": "هل لديك أطفال؟",
            "en": "Do you have children?",
            "tr": "Çocuklarınız var mı?",
            "ro": "Aveţi copii?",
            "bs": "Imate li djece?",
            "es": "¿Tienes hijos?",
            "bg": "имаш ли деца",
            "el": "Έχετε παιδιά;"
          },
          {
            "speaker": "Carlos",
            "de": "Ja, ich habe zwei Kinder. Eine Tochter und einen Sohn.",
            "ar": "نعم، عندي طفلان. بنت وولد.",
            "en": "Yes, I have two children. A girl and a boy.",
            "tr": "Evet, iki çocuğum var. Bir kız ve bir oğlan.",
            "ro": "Da, am doi copii. O fată și un băiat.",
            "bs": "Da, imam dvoje djece. Devojčica i dečak.",
            "es": "Sí, tengo dos hijos. Una niña y un niño.",
            "bg": "Да, имам две деца. Момиче и момче.",
            "el": "Ναι, έχω δύο παιδιά. Ένα κορίτσι και ένα αγόρι."
          },
          {
            "speaker": "Anna",
            "de": "Wie alt sind sie?",
            "ar": "كم أعمارهم؟",
            "en": "How old are they?",
            "tr": "Kaç yaşındalar?",
            "ro": "Câți ani au?",
            "bs": "Koliko su stari?",
            "es": "¿Cuántos años tienen?",
            "bg": "На колко години са?",
            "el": "Πόσο χρονών είναι;"
          },
          {
            "speaker": "Carlos",
            "de": "Meine Tochter ist 8 und mein Sohn ist 5 Jahre alt.",
            "ar": "ابنتي عمرها 8 وابني عمره 5 سنوات.",
            "en": "My daughter is 8 and my son is 5.",
            "tr": "Kızım 8, oğlum 5 yaşında.",
            "ro": "Fiica mea are 8 ani și fiul meu 5.",
            "bs": "Moja ćerka ima 8, a sin 5.",
            "es": "Mi hija tiene 8 años y mi hijo 5.",
            "bg": "Дъщеря ми е на 8, а синът ми е на 5.",
            "el": "Η κόρη μου είναι 8 και ο γιος μου 5."
          }
        ]
      },
      {
        "title": "Herzlichen Glückwunsch!",
        "titleAr": "كل عام وأنت بخير!",
        "titleEn": "Season's greetings!",
        "titleTr": "Sezonun selamları!",
        "titleRo": "Salutări de sezon!",
        "titleBs": "Pozdrav za sezonu!",
        "titleEs": "¡Saludos de temporada!",
        "titleBg": "Поздрави за сезона!",
        "titleEl": "Χαιρετισμούς σεζόν!",
        "lines": [
          {
            "speaker": "Maria",
            "de": "Heute ist mein Geburtstag!",
            "ar": "اليوم عيد ميلادي!",
            "en": "Today is my birthday!",
            "tr": "Bugün benim doğum günüm!",
            "ro": "Astăzi este ziua mea de naștere!",
            "bs": "Danas mi je rođendan!",
            "es": "¡Hoy es mi cumpleaños!",
            "bg": "Днес имам рожден ден!",
            "el": "Σήμερα είναι τα γενέθλιά μου!"
          },
          {
            "speaker": "Thomas",
            "de": "Herzlichen Glückwunsch zum Geburtstag!",
            "ar": "كل عام وأنت بخير!",
            "en": "Season's greetings!",
            "tr": "Sezonun selamları!",
            "ro": "Salutări de sezon!",
            "bs": "Pozdrav za sezonu!",
            "es": "¡Saludos de temporada!",
            "bg": "Поздрави за сезона!",
            "el": "Χαιρετισμούς σεζόν!"
          },
          {
            "speaker": "Maria",
            "de": "Danke schön!",
            "ar": "شكراً جزيلاً!",
            "en": "Thank you very much!",
            "tr": "Çok teşekkür ederim!",
            "ro": "Mulțumesc foarte mult!",
            "bs": "Hvala vam puno!",
            "es": "¡Muchas gracias!",
            "bg": "Благодаря много!",
            "el": "Σας ευχαριστώ πολύ!"
          },
          {
            "speaker": "Thomas",
            "de": "Wie alt bist du jetzt?",
            "ar": "كم عمرك الآن؟",
            "en": "How old are you now?",
            "tr": "Şimdi kaç yaşındasın?",
            "ro": "Câți ani ai acum?",
            "bs": "Koliko sada imaš godina?",
            "es": "¿Cuántos años tienes ahora?",
            "bg": "на колко години си сега",
            "el": "Πόσο χρονών είσαι τώρα;"
          },
          {
            "speaker": "Maria",
            "de": "Ich bin 30 Jahre alt.",
            "ar": "عمري 30 سنة.",
            "en": "I am 30 years old.",
            "tr": "30 yaşındayım.",
            "ro": "am 30 de ani.",
            "bs": "Imam 30 godina.",
            "es": "Tengo 30 años.",
            "bg": "Аз съм на 30 години.",
            "el": "Είμαι 30 χρονών."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Familie Wagner",
        "titleAr": "عائلة فاغنر",
        "titleEn": "Wagner family",
        "titleTr": "Wagner ailesi",
        "titleRo": "familia Wagner",
        "titleBs": "Porodica Wagner",
        "titleEs": "familia wagner",
        "titleBg": "Семейство Вагнер",
        "titleEl": "οικογένεια Βάγκνερ",
        "text": [
          {
            "de": "Das ist Familie Wagner.",
            "ar": "هذه عائلة فاغنر.",
            "en": "This is the Wagner family.",
            "tr": "Bu Wagner ailesi.",
            "ro": "Aceasta este familia Wagner.",
            "bs": "Ovo je porodica Wagner.",
            "es": "Esta es la familia Wagner.",
            "bg": "Това е семейство Вагнер.",
            "el": "Αυτή είναι η οικογένεια Βάγκνερ."
          },
          {
            "de": "Der Vater heißt Peter. Er ist 42 Jahre alt.",
            "ar": "اسم الأب بيتر. عمره 42 سنة.",
            "en": "Father's name is Peter. He is 42 years old.",
            "tr": "Babanın adı Peter. 42 yaşındadır.",
            "ro": "Numele tatălui este Peter. Are 42 de ani.",
            "bs": "Otac se zove Petar. Ima 42 godine.",
            "es": "El nombre del padre es Pedro. Tiene 42 años.",
            "bg": "Бащата се казва Петър. Той е на 42 години.",
            "el": "Το όνομα του πατέρα είναι Πέτρος. Είναι 42 ετών."
          },
          {
            "de": "Die Mutter heißt Sabine. Sie ist 40 Jahre alt.",
            "ar": "اسم الأم زابينه. عمرها 40 سنة.",
            "en": "Mother's name is Zabineh. She is 40 years old.",
            "tr": "Annenin adı Zabineh. 40 yaşında.",
            "ro": "Numele mamei este Zabineh. Ea are 40 de ani.",
            "bs": "Ime majke je Zabineh. Ona ima 40 godina.",
            "es": "El nombre de la madre es Zabineh. Ella tiene 40 años.",
            "bg": "Името на майката е Забине. Тя е на 40 години.",
            "el": "Το όνομα της μητέρας είναι Zabineh. Είναι 40 ετών."
          },
          {
            "de": "Sie haben zwei Kinder: Tim (15) und Lisa (12).",
            "ar": "لديهم طفلان: تيم (15) وليزا (12).",
            "en": "They have two children: Tim (15) and Lisa (12).",
            "tr": "لديهم طفلان: تيم (15) وليزا (12).",
            "ro": "Au doi copii: Tim (15) și Lisa (12).",
            "bs": "Imaju dvoje djece: Tima (15) i Lizu (12).",
            "es": "Tienen dos hijos: Tim (15) y Lisa (12).",
            "bg": "Двамата имат две деца: Тим (15) и Лиза (12).",
            "el": "Έχουν δύο παιδιά: τον Tim (15) και τη Lisa (12)."
          },
          {
            "de": "Die Familie wohnt in München.",
            "ar": "العائلة تسكن في ميونيخ.",
            "en": "The family lives in Munich.",
            "tr": "Aile Münih'te yaşıyor.",
            "ro": "Familia locuiește în Munchen.",
            "bs": "Porodica živi u Minhenu.",
            "es": "La familia vive en Munich.",
            "bg": "Семейството живее в Мюнхен.",
            "el": "Η οικογένεια ζει στο Μόναχο."
          }
        ],
        "questions": [
          {
            "q": "Wie alt ist der Vater?",
            "qAr": "كم عمر الأب؟",
            "answer": "42 Jahre alt",
            "answerAr": "42 سنة",
            "qEn": "How old is the father?",
            "answerEn": "42 years old",
            "qTr": "Baba kaç yaşında?",
            "answerTr": "42 yaşında",
            "qRo": "Câți ani are tatăl?",
            "answerRo": "42 de ani",
            "qBs": "Koliko godina ima otac?",
            "answerBs": "42 godine",
            "qEs": "¿Cuántos años tiene el padre?",
            "answerEs": "42 años",
            "qBg": "На колко години е бащата?",
            "answerBg": "42 години",
            "qEl": "Πόσο χρονών είναι ο πατέρας;",
            "answerEl": "42 χρονών"
          },
          {
            "q": "Wo wohnt die Familie?",
            "qAr": "أين تسكن العائلة؟",
            "answer": "In München",
            "answerAr": "في ميونيخ",
            "qEn": "Where does the family live?",
            "answerEn": "In Munich",
            "qTr": "Aile nerede yaşıyor?",
            "answerTr": "Münih'te",
            "qRo": "Unde locuiește familia?",
            "answerRo": "La Munchen",
            "qBs": "Gdje porodica živi?",
            "answerBs": "U Minhenu",
            "qEs": "¿Dónde vive la familia?",
            "answerEs": "En Múnich",
            "qBg": "Къде живее семейството?",
            "answerBg": "В Мюнхен",
            "qEl": "Πού μένει η οικογένεια;",
            "answerEl": "Στο Μόναχο"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "possessive",
        "title": "أدوات الملكية - Possessivartikel",
        "titleDe": "Possessivartikel",
        "explanation": "لإظهار الملكية نستخدم أدوات الملكية.",
        "titleEn": "Property Tools - Possessivartikel",
        "explanationEn": "To show ownership we use possessive articles.",
        "titleTr": "Emlak Araçları - Possessivartikel",
        "explanationTr": "Sahipliği göstermek için iyelik artikelleri kullanırız.",
        "titleRo": "Instrumente de proprietate - Possessiartikel",
        "explanationRo": "Pentru a arăta proprietatea folosim articole posesive.",
        "titleBs": "Alati za nekretnine - Possessivartikel",
        "explanationBs": "Da pokažemo vlasništvo koristimo posesivne članke.",
        "titleEs": "Herramientas inmobiliarias - Possessivartikel",
        "explanationEs": "Para demostrar propiedad utilizamos artículos posesivos.",
        "titleBg": "Инструменти за собственост - Possessivartikel",
        "explanationBg": "За да покажем собственост, използваме притежателни членове.",
        "titleEl": "Εργαλεία Ακινήτων - Possessivartikel",
        "explanationEl": "Για να δείξουμε ιδιοκτησία χρησιμοποιούμε κτητικά άρθρα.",
        "rules": [
          {
            "example": "mein Vater / meine Mutter / mein Kind",
            "translation": "أبي / أمي / طفلي",
            "note": "mein للمذكر والمحايد، meine للمؤنث",
            "translationEn": "My father/mom/my child",
            "noteEn": "mein for masculine and neuter, meine for feminine",
            "translationTr": "Babam/annem/çocuğum",
            "noteTr": "erkeksi ve nötr için mein, kadınsı için meine",
            "translationRo": "Tatăl meu/mama/copilul meu",
            "noteRo": "mein pentru masculin și neutru, meine pentru feminin",
            "translationBs": "Moj otac/mama/moje dijete",
            "noteBs": "mein za muški i srednji rod, meine za ženski rod",
            "translationEs": "Mi padre/mamá/mi hijo",
            "noteEs": "mein para masculino y neutro, meine para femenino",
            "translationBg": "Моят баща/майка/моето дете",
            "noteBg": "mein за мъжки и среден род, meine за женски род",
            "translationEl": "Ο πατέρας/μαμά/το παιδί μου",
            "noteEl": "mein για αρσενικό και ουδέτερο, meine για θηλυκό"
          },
          {
            "example": "dein Bruder / deine Schwester",
            "translation": "أخوك / أختك",
            "note": "dein لـ du",
            "translationEn": "Your brother/sister",
            "noteEn": "dein for du",
            "translationTr": "Erkek kardeşin/kız kardeşin",
            "noteTr": "kesinlikle senin için",
            "translationRo": "Fratele/sora ta",
            "noteRo": "dein pentru du",
            "translationBs": "Vaš brat/sestra",
            "noteBs": "dein za du",
            "translationEs": "Tu hermano/hermana",
            "noteEs": "dein para du",
            "translationBg": "Вашият брат/сестра",
            "noteBg": "dein за du",
            "translationEl": "Ο αδερφός/η αδερφή σου",
            "noteEl": "dein for du"
          },
          {
            "example": "sein Sohn (لـ er) / ihr Sohn (لـ sie)",
            "translation": "ابنه / ابنها",
            "note": "",
            "translationEn": "His/her son",
            "noteEn": "",
            "translationTr": "Oğlu",
            "noteTr": "",
            "translationRo": "Fiul lui/ei",
            "noteRo": "",
            "translationBs": "Njegov/njen sin",
            "noteBs": "",
            "translationEs": "su hijo",
            "noteEs": "",
            "translationBg": "Неговият/нейният син",
            "noteBg": "",
            "translationEl": "Ο γιος του/της",
            "noteEl": ""
          }
        ],
        "table": {
          "headers": [
            "الضمير",
            "مذكر",
            "مؤنث",
            "محايد"
          ],
          "headersEn": [
            "Pronoun",
            "Masculine",
            "Feminine",
            "Neutral"
          ],
          "headersTr": [
            "Zamir",
            "Eril",
            "Dişil",
            "Nötr"
          ],
          "headersRo": [
            "Pronume",
            "Masculin",
            "Feminin",
            "Neutru"
          ],
          "headersBs": [
            "Zamjenica",
            "Muški rod",
            "Ženski rod",
            "Srednji rod"
          ],
          "headersEs": [
            "Pronombre",
            "Masculino",
            "Femenino",
            "Neutro"
          ],
          "headersBg": [
            "Местоимение",
            "Мъжки род",
            "Женски род",
            "Среден род"
          ],
          "headersEl": [
            "Αντωνυμία",
            "Αρσενικό",
            "Θηλυκό",
            "Ουδέτερο"
          ],
          "rows": [
            [
              "ich",
              "mein",
              "meine",
              "mein"
            ],
            [
              "du",
              "dein",
              "deine",
              "dein"
            ],
            [
              "er",
              "sein",
              "seine",
              "sein"
            ],
            [
              "sie",
              "ihr",
              "ihre",
              "ihr"
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Herzlichen Glückwunsch! Was bedeutet das?",
        "questionAr": "ما معنى Herzlichen Glückwunsch؟",
        "options": [
          "مرحباً",
          "شكراً",
          "كل عام وأنت بخير / مبروك",
          "مع السلامة"
        ],
        "answer": 2,
        "questionEn": "What is the meaning of Herzlichen Glückwunsch?",
        "questionTr": "Herzlichen Glückwunsch'un anlamı nedir?",
        "questionRo": "Ce înseamnă Herzlichen Glückwunsch?",
        "questionBs": "Šta znači Herzlichen Glückwunsch?",
        "questionEs": "¿Cuál es el significado de Herzlichen Glückwunsch?",
        "questionBg": "Какво е значението на Herzlichen Glückwunsch?",
        "questionEl": "Ποια είναι η έννοια του Herzlichen Glückwunsch;"
      },
      {
        "type": "fillblank",
        "question": "Das ist _____ Mutter. (mein/meine)",
        "questionAr": "أكمل بأداة الملكية الصحيحة",
        "answer": "meine",
        "hint": "Mutter مؤنث → meine",
        "questionEn": "Complete with the correct possessive",
        "questionTr": "Doğru iyelik ekiyle tamamlayın",
        "questionRo": "Completați cu posesivul corect",
        "questionBs": "Upotpunjeno ispravnim posesivom",
        "questionEs": "Completa con el posesivo correcto.",
        "questionBg": "Завършено с правилното притежателно",
        "questionEl": "Συμπληρώστε με τη σωστή κτητική"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich habe ... Kinder/Geschwister.",
        "ar": "عندي ... أطفال/إخوة.",
        "en": "I have... children/siblings.",
        "tr": "Benim... çocuklarım/kardeşlerim var.",
        "ro": "Am... copii/frați.",
        "bs": "Imam... djecu/braću i sestre.",
        "es": "Tengo... hijos/hermanos.",
        "bg": "Имам... деца/братя и сестри.",
        "el": "Έχω... παιδιά/αδέρφια."
      },
      {
        "de": "Mein Vater/Mutter heißt ...",
        "ar": "اسم أبي/أمي ...",
        "en": "My father/mother's name is...",
        "tr": "Babamın/annemin adı...",
        "ro": "Numele tatălui/mamei mele este...",
        "bs": "Ime mog oca/majke je...",
        "es": "El nombre de mi padre/madre es...",
        "bg": "Баща/майка ми се казват...",
        "el": "Το όνομα του πατέρα μου/της μητέρας μου είναι..."
      },
      {
        "de": "Herzlichen Glückwunsch!",
        "ar": "كل عام وأنت بخير!",
        "en": "Congratulations!",
        "tr": "Tebrikler!",
        "ro": "Felicitări!",
        "bs": "Čestitamo!",
        "es": "¡Felicidades!",
        "bg": "честито!",
        "el": "Συγχαρητήρια!"
      },
      {
        "de": "Alles Gute zum Geburtstag!",
        "ar": "كل عام وأنت بخير! (في عيد الميلاد)",
        "en": "Happy Birthday!",
        "tr": "Doğum günün kutlu olsun!",
        "ro": "La mulți ani!",
        "bs": "Sretan rođendan!",
        "es": "¡Feliz cumpleaños!",
        "bg": "честит рожден ден",
        "el": "Χρόνια Πολλά!"
      },
      {
        "de": "Wie alt bist du?",
        "ar": "كم عمرك؟",
        "en": "How old are you?",
        "tr": "Kaç yaşındasın?",
        "ro": "Câți ani ai?",
        "bs": "koliko imaš godina?",
        "es": "¿Cuántos años tiene?",
        "bg": "на колко си години",
        "el": "Πόσων χρονών είστε;"
      }
    ]
  },
  {
    "id": 7,
    "titleDe": "Wohnen in Deutschland",
    "titleAr": "السكن في ألمانيا",
    "emoji": "🏠",
    "color": "#60a5fa",
    "titleEn": "Residence in Germany",
    "titleTr": "Almanya'da ikamet",
    "titleRo": "Reședința în Germania",
    "titleBs": "Prebivalište u Njemačkoj",
    "titleEs": "Residencia en Alemania",
    "titleBg": "Пребиваване в Германия",
    "titleEl": "Κατοικία στη Γερμανία",
    "topics": [
      "المسكن",
      "الغرف",
      "الأثاث",
      "البحث عن شقة"
    ],
    "topicsEn": [
      "The dwelling",
      "Rooms",
      "Furniture",
      "Search for an apartment"
    ],
    "topicsTr": [
      "Konut",
      "Odalar",
      "Mobilya",
      "Bir daire arayın"
    ],
    "topicsRo": [
      "Locuința",
      "Camerele",
      "Mobilier",
      "Caută un apartament"
    ],
    "topicsBs": [
      "Stan",
      "Sobe",
      "Namještaj",
      "Potražite stan"
    ],
    "topicsEs": [
      "la vivienda",
      "Alojamiento",
      "Muebles",
      "buscar un apartamento"
    ],
    "topicsBg": [
      "Жилището",
      "Стаи",
      "Мебели",
      "Търсене на апартамент"
    ],
    "topicsEl": [
      "Η κατοικία",
      "Δωμάτια",
      "Επιπλα",
      "Αναζήτηση για διαμέρισμα"
    ],
    "canDo": "أستطيع أن أصف مسكني وأبحث عن شقة",
    "canDoDe": "Ich kann meine Wohnung beschreiben und eine Wohnung suchen",
    "canDoEn": "I can describe my residence and search for an apartment",
    "canDoTr": "Yaşadığım yeri tarif edebilir ve bir daire arayabilirim",
    "canDoRo": "Pot să-mi descriu reședința și să caut un apartament",
    "canDoBs": "Mogu opisati svoje prebivalište i tražiti stan",
    "canDoEs": "Puedo describir mi residencia y buscar un apartamento.",
    "canDoBg": "Мога да опиша жилището си и да търся апартамент",
    "canDoEl": "Μπορώ να περιγράψω την κατοικία μου και να ψάξω για διαμέρισμα",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/16_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_1.mp3",
        "label": "8.2 - Wohnungssuche (1)",
        "labelAr": "البحث عن شقة 1",
        "labelEn": "Searching for an apartment 1",
        "labelTr": "Bir daire arıyorum 1",
        "labelRo": "Caut apartament 1",
        "labelBs": "Trazim stan 1",
        "labelEs": "Buscando apartamento 1",
        "labelBg": "Търся апартамент 1",
        "labelEl": "Αναζήτηση για διαμέρισμα 1"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/17_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_2.mp3",
        "label": "8.2 - Wohnungssuche (2)",
        "labelAr": "البحث عن شقة 2",
        "labelEn": "Find an apartment 2",
        "labelTr": "Bir daire bul 2",
        "labelRo": "Găsiți un apartament 2",
        "labelBs": "Pronađite stan 2",
        "labelEs": "Encuentra un apartamento 2",
        "labelBg": "Намерете апартамент 2",
        "labelEl": "Βρείτε ένα διαμέρισμα 2"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/18_langenschidt_-_8.2_-_ich_suche_eine_wohnung.,_dialog_3.mp3",
        "label": "8.2 - Wohnungssuche (3)",
        "labelAr": "البحث عن شقة 3",
        "labelEn": "Find an apartment 3",
        "labelTr": "Bir daire bul 3",
        "labelRo": "Găsiți un apartament 3",
        "labelBs": "Pronađite stan 3",
        "labelEs": "Encuentra un apartamento 3",
        "labelBg": "Намерете апартамент 3",
        "labelEl": "Βρείτε ένα διαμέρισμα 3"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/19_langenschidt_-_8.7_-_magdas_wohnung.mp3",
        "label": "8.7 - Magdas Wohnung",
        "labelAr": "شقة ماغدا",
        "labelEn": "Magda's apartment",
        "labelTr": "Magda'nın dairesi",
        "labelRo": "apartamentul Magdei",
        "labelBs": "Magdin stan",
        "labelEs": "El apartamento de Magda.",
        "labelBg": "Апартаментът на Магда",
        "labelEl": "Το διαμέρισμα της Μάγδας"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/22_langenschidt_-_8.12_-_der_umzug.mp3",
        "label": "8.12 - Der Umzug",
        "labelAr": "الانتقال للسكن الجديد",
        "labelEn": "Moving to new housing",
        "labelTr": "Yeni konuta taşınmak",
        "labelRo": "Mutarea în locuințe noi",
        "labelBs": "Useljenje u novo stanovanje",
        "labelEs": "Mudarse a una nueva vivienda",
        "labelBg": "Преместване в ново жилище",
        "labelEl": "Μετακίνηση σε νέα κατοικία"
      }
    ],
    "dialogs": [
      {
        "title": "Die Wohnung",
        "titleAr": "الشقة",
        "titleEn": "The apartment",
        "titleTr": "Daire",
        "titleRo": "Apartamentul",
        "titleBs": "Stan",
        "titleEs": "el apartamento",
        "titleBg": "Апартаментът",
        "titleEl": "Το διαμέρισμα",
        "lines": [
          {
            "speaker": "Makler",
            "de": "Die Wohnung hat 3 Zimmer, eine Küche und ein Bad.",
            "ar": "الشقة بها 3 غرف ومطبخ وحمام.",
            "en": "The apartment has 3 rooms, a kitchen and a bathroom.",
            "tr": "Dairede 3 oda, mutfak ve banyo bulunmaktadır.",
            "ro": "Apartamentul are 3 camere, o bucatarie si o baie.",
            "bs": "Stan ima 3 sobe, kuhinju i kupatilo.",
            "es": "El apartamento tiene 3 habitaciones, una cocina y un baño.",
            "bg": "Апартаментът се състои от 3 стаи, кухня и баня.",
            "el": "Το διαμέρισμα διαθέτει 3 δωμάτια, κουζίνα και μπάνιο."
          },
          {
            "speaker": "Kunde",
            "de": "Wie groß ist die Wohnung?",
            "ar": "كم مساحة الشقة؟",
            "en": "How big is the apartment?",
            "tr": "Daire ne kadar büyük?",
            "ro": "Cât de mare este apartamentul?",
            "bs": "Koliki je stan?",
            "es": "¿Qué tamaño tiene el apartamento?",
            "bg": "Колко голям е апартамента?",
            "el": "Πόσο μεγάλο είναι το διαμέρισμα;"
          },
          {
            "speaker": "Makler",
            "de": "Sie ist 75 Quadratmeter groß.",
            "ar": "مساحتها 75 متراً مربعاً.",
            "en": "Its area is 75 square meters.",
            "tr": "Alanı 75 metrekaredir.",
            "ro": "Suprafata sa este de 75 de metri patrati.",
            "bs": "Njegova površina je 75 kvadratnih metara.",
            "es": "Su superficie es de 75 metros cuadrados.",
            "bg": "Площта му е 75 квадратни метра.",
            "el": "Η έκτασή του είναι 75 τετραγωνικά μέτρα."
          },
          {
            "speaker": "Kunde",
            "de": "Was kostet die Miete?",
            "ar": "كم الإيجار؟",
            "en": "How much is the rent?",
            "tr": "Kira ne kadar?",
            "ro": "Cât este chiria?",
            "bs": "Koliko je kirija?",
            "es": "¿A cuánto asciende el alquiler?",
            "bg": "Колко е наемът?",
            "el": "Πόσο είναι το ενοίκιο;"
          },
          {
            "speaker": "Makler",
            "de": "Die Miete ist 800 Euro im Monat.",
            "ar": "الإيجار 800 يورو في الشهر.",
            "en": "Rent is 800 euros per month.",
            "tr": "Kira aylık 800 Euro'dur.",
            "ro": "Chiria este de 800 euro pe luna.",
            "bs": "Najam je 800 eura mjesečno.",
            "es": "El alquiler es de 800 euros al mes.",
            "bg": "Наемът е 800 евро на месец.",
            "el": "Το ενοίκιο είναι 800 ευρώ το μήνα."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Meine Wohnung",
        "titleAr": "شقتي",
        "titleEn": "My apartment",
        "titleTr": "Benim dairem",
        "titleRo": "Apartamentul meu",
        "titleBs": "Moj stan",
        "titleEs": "mi apartamento",
        "titleBg": "Моят апартамент",
        "titleEl": "Το διαμέρισμά μου",
        "text": [
          {
            "de": "Ich wohne in einer 2-Zimmer-Wohnung.",
            "ar": "أسكن في شقة بغرفتين.",
            "en": "I live in a two-room apartment.",
            "tr": "İki odalı bir dairede yaşıyorum.",
            "ro": "Locuiesc intr-un apartament cu doua camere.",
            "bs": "Živim u dvosobnom stanu.",
            "es": "Vivo en un apartamento de dos habitaciones.",
            "bg": "Живея в двустаен апартамент.",
            "el": "Μένω σε ένα διαμέρισμα δύο δωματίων."
          },
          {
            "de": "Meine Wohnung hat ein Wohnzimmer, ein Schlafzimmer, eine Küche und ein Bad.",
            "ar": "شقتي بها غرفة معيشة وغرفة نوم ومطبخ وحمام.",
            "en": "My apartment has a living room, bedroom, kitchen and bathroom.",
            "tr": "Dairemde oturma odası, yatak odası, mutfak ve banyo bulunmaktadır.",
            "ro": "Apartamentul meu are living, dormitor, bucatarie si baie.",
            "bs": "Moj stan ima dnevni boravak, spavaću sobu, kuhinju i kupatilo.",
            "es": "Mi apartamento tiene salón, dormitorio, cocina y baño.",
            "bg": "Апартаментът ми има всекидневна, спалня, кухня и баня.",
            "el": "Το διαμέρισμά μου διαθέτει σαλόνι, υπνοδωμάτιο, κουζίνα και μπάνιο."
          },
          {
            "de": "Die Wohnung ist im 3. Stock.",
            "ar": "الشقة في الطابق الثالث.",
            "en": "The apartment is on the third floor.",
            "tr": "Daire üçüncü kattadır.",
            "ro": "Apartamentul este la etajul trei.",
            "bs": "Stan se nalazi na trećem spratu.",
            "es": "El apartamento está en el tercer piso.",
            "bg": "Апартаментът се намира на трети етаж.",
            "el": "Το διαμέρισμα βρίσκεται στον τρίτο όροφο."
          },
          {
            "de": "Ich zahle 650 Euro Miete.",
            "ar": "أدفع 650 يورو إيجاراً.",
            "en": "I pay 650 euros in rent.",
            "tr": "650 euro kira ödüyorum.",
            "ro": "Platesc 650 euro chirie.",
            "bs": "Plaćam 650 eura za kiriju.",
            "es": "Pago 650 euros de alquiler.",
            "bg": "Плащам 650 евро наем.",
            "el": "Πληρώνω 650 ευρώ ενοίκιο."
          }
        ],
        "questions": [
          {
            "q": "Wie viele Zimmer hat die Wohnung?",
            "qAr": "كم غرفة في الشقة؟",
            "answer": "2 Zimmer",
            "answerAr": "غرفتان",
            "qEn": "How many rooms are in the apartment?",
            "answerEn": "Two rooms",
            "qTr": "Dairede kaç oda var?",
            "answerTr": "İki oda",
            "qRo": "Câte camere sunt în apartament?",
            "answerRo": "Două camere",
            "qBs": "Koliko soba ima u stanu?",
            "answerBs": "Dvije sobe",
            "qEs": "¿Cuántas habitaciones hay en el apartamento?",
            "answerEs": "dos habitaciones",
            "qBg": "Колко стаи има в апартамента?",
            "answerBg": "Две стаи",
            "qEl": "Πόσα δωμάτια υπάρχουν στο διαμέρισμα;",
            "answerEl": "Δύο δωμάτια"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "praepositionen-ort",
        "title": "حروف الجر للمكان",
        "titleDe": "Präpositionen des Ortes",
        "explanation": "نستخدم حروف الجر لوصف مكان الأشياء.",
        "titleEn": "Prepositions of place",
        "explanationEn": "We use prepositions to describe the location of things.",
        "titleTr": "Yer edatları",
        "explanationTr": "Nesnelerin yerlerini anlatmak için edatları kullanırız.",
        "titleRo": "Prepoziții de loc",
        "explanationRo": "Folosim prepoziții pentru a descrie locația lucrurilor.",
        "titleBs": "Prijedlozi mjesta",
        "explanationBs": "Koristimo prijedloge da opišemo lokaciju stvari.",
        "titleEs": "Preposiciones de lugar",
        "explanationEs": "Usamos preposiciones para describir la ubicación de las cosas.",
        "titleBg": "Предлози за място",
        "explanationBg": "Използваме предлози, за да опишем местоположението на нещата.",
        "titleEl": "Προθέσεις τόπου",
        "explanationEl": "Χρησιμοποιούμε προθέσεις για να περιγράψουμε τη θέση των πραγμάτων.",
        "rules": [
          {
            "example": "Das Buch ist auf dem Tisch.",
            "translation": "الكتاب على الطاولة.",
            "note": "auf = على",
            "translationEn": "The book is on the table.",
            "noteEn": "auf = on",
            "translationTr": "Kitap masanın üstünde.",
            "noteTr": "auf = açık",
            "translationRo": "Cartea este pe masă.",
            "noteRo": "auf = on",
            "translationBs": "Knjiga je na stolu.",
            "noteBs": "auf = uključeno",
            "translationEs": "El libro está sobre la mesa.",
            "noteEs": "auf = en",
            "translationBg": "Книгата е на масата.",
            "noteBg": "auf = включено",
            "translationEl": "Το βιβλίο είναι στο τραπέζι.",
            "noteEl": "auf = επάνω"
          },
          {
            "example": "Die Lampe ist neben dem Sofa.",
            "translation": "المصباح بجانب الأريكة.",
            "note": "neben = بجانب",
            "translationEn": "The lamp next to the sofa.",
            "noteEn": "neben = beside",
            "translationTr": "Kanepenin yanındaki lamba.",
            "noteTr": "neben = yanında",
            "translationRo": "Lampa de lângă canapea.",
            "noteRo": "neben = lângă",
            "translationBs": "Lampa pored sofe.",
            "noteBs": "neben = pored",
            "translationEs": "La lámpara al lado del sofá.",
            "noteEs": "neben = al lado",
            "translationBg": "Лампата до дивана.",
            "noteBg": "neben = до",
            "translationEl": "Το φωτιστικό δίπλα στον καναπέ.",
            "noteEl": "δενμπεν = δίπλα"
          },
          {
            "example": "Das Bett ist im Schlafzimmer.",
            "translation": "السرير في غرفة النوم.",
            "note": "in = في",
            "translationEn": "The bed is in the bedroom.",
            "noteEn": "in = in",
            "translationTr": "Yatak yatak odasındadır.",
            "noteTr": "içinde = içinde",
            "translationRo": "Patul este în dormitor.",
            "noteRo": "in = in",
            "translationBs": "Krevet je u spavaćoj sobi.",
            "noteBs": "u = u",
            "translationEs": "La cama está en el dormitorio.",
            "noteEs": "en = en",
            "translationBg": "Леглото е в спалнята.",
            "noteBg": "в = в",
            "translationEl": "Το κρεβάτι είναι στο υπνοδωμάτιο.",
            "noteEl": "σε = μέσα"
          },
          {
            "example": "Der Schrank steht vor dem Fenster.",
            "translation": "الخزانة أمام النافذة.",
            "note": "vor = أمام",
            "translationEn": "The cupboard is in front of the window.",
            "noteEn": "vor = in front of",
            "translationTr": "Dolap pencerenin önündedir.",
            "noteTr": "vor = önünde",
            "translationRo": "Dulapul este în fața ferestrei.",
            "noteRo": "vor = in front of",
            "translationBs": "Ormar je ispred prozora.",
            "noteBs": "vor = ispred",
            "translationEs": "El armario está delante de la ventana.",
            "noteEs": "vor = delante de",
            "translationBg": "Шкафът е пред прозореца.",
            "noteBg": "vor = пред",
            "translationEl": "Το ντουλάπι είναι μπροστά στο παράθυρο.",
            "noteEl": "vor = μπροστά από"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Was bedeutet 'Wohnzimmer'?",
        "questionAr": "ما معنى Wohnzimmer؟",
        "options": [
          "غرفة النوم",
          "المطبخ",
          "غرفة المعيشة",
          "الحمام"
        ],
        "answer": 2,
        "questionEn": "What does Wohnzimmer mean?",
        "questionTr": "Wohnzimmer ne anlama geliyor?",
        "questionRo": "Ce înseamnă Wohnzimmer?",
        "questionBs": "Šta znači Wohnzimmer?",
        "questionEs": "¿Qué significa Wohnzimmer?",
        "questionBg": "Какво означава Wohnzimmer?",
        "questionEl": "Τι σημαίνει η λέξη Wohnzimmer;"
      },
      {
        "type": "fillblank",
        "question": "Das Buch ist _____ dem Tisch. (على)",
        "questionAr": "أكمل بحرف الجر المناسب",
        "answer": "auf",
        "hint": "auf = على",
        "questionEn": "Complete with the appropriate preposition",
        "questionTr": "Uygun edatla tamamlayın",
        "questionRo": "Completați cu prepoziția corespunzătoare",
        "questionBs": "Dopuni odgovarajućim prijedlogom",
        "questionEs": "Completa con la preposición adecuada.",
        "questionBg": "Допълнете с подходящия предлог",
        "questionEl": "Συμπληρώστε με την κατάλληλη πρόθεση"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich wohne in einer Wohnung/einem Haus.",
        "ar": "أسكن في شقة/بيت.",
        "en": "I live in an apartment/house.",
        "tr": "Bir apartman dairesinde/evde yaşıyorum.",
        "ro": "Locuiesc intr-un apartament/casa.",
        "bs": "Živim u stanu/kući.",
        "es": "Vivo en un apartamento/casa.",
        "bg": "Живея в апартамент/къща.",
        "el": "Μένω σε διαμέρισμα/σπίτι."
      },
      {
        "de": "Meine Wohnung hat ... Zimmer.",
        "ar": "شقتي بها ... غرف.",
        "en": "My apartment has... rooms.",
        "tr": "Dairemde... odalar var.",
        "ro": "Apartamentul meu are... camere.",
        "bs": "Moj stan ima... sobe.",
        "es": "Mi apartamento tiene... habitaciones.",
        "bg": "Моят апартамент има... стаи.",
        "el": "Το διαμέρισμά μου έχει... δωμάτια."
      },
      {
        "de": "Was kostet die Miete?",
        "ar": "كم الإيجار؟",
        "en": "How much does the rent cost?",
        "tr": "Kiranın maliyeti ne kadar?",
        "ro": "Cât costă chiria?",
        "bs": "Koliko košta najam?",
        "es": "¿Cuánto cuesta el alquiler?",
        "bg": "Колко струва наемът?",
        "el": "Πόσο κοστίζει το ενοίκιο;"
      },
      {
        "de": "Wo ist ...?",
        "ar": "أين ...؟",
        "en": "Where is ...?",
        "tr": "Nerede...?",
        "ro": "Unde este...?",
        "bs": "Gdje je...?",
        "es": "Dónde es ...?",
        "bg": "Къде е ...?",
        "el": "Πού είναι…;"
      }
    ]
  },
  {
    "id": 8,
    "titleDe": "Gesundheit und Körper",
    "titleAr": "الصحة والجسم",
    "emoji": "🏥",
    "color": "#f87171",
    "titleEn": "Health and body",
    "titleTr": "Sağlık ve vücut",
    "titleRo": "Sănătate și corp",
    "titleBs": "Zdravlje i tijelo",
    "titleEs": "Salud y cuerpo",
    "titleBg": "Здраве и тяло",
    "titleEl": "Υγεία και σώμα",
    "topics": [
      "أجزاء الجسم",
      "الشكاوى الصحية",
      "عند الطبيب"
    ],
    "topicsEn": [
      "Body parts",
      "Health complaints",
      "At the doctor's office"
    ],
    "topicsTr": [
      "Vücut parçaları",
      "Sağlık şikayetleri",
      "Doktorun ofisinde"
    ],
    "topicsRo": [
      "Părți ale corpului",
      "Plângeri de sănătate",
      "La cabinetul medicului"
    ],
    "topicsBs": [
      "Dijelovi tijela",
      "Zdravstvene pritužbe",
      "U ordinaciji"
    ],
    "topicsEs": [
      "Partes del cuerpo",
      "Quejas de salud",
      "En el consultorio del doctor"
    ],
    "topicsBg": [
      "Части на тялото",
      "Здравни оплаквания",
      "В лекарския кабинет"
    ],
    "topicsEl": [
      "Μέρη του σώματος",
      "Παράπονα υγείας",
      "Στο ιατρείο"
    ],
    "canDo": "أستطيع أن أتحدث عن أعراض المرض عند الطبيب",
    "canDoDe": "Ich kann beim Arzt über Beschwerden sprechen",
    "canDoEn": "I can talk about the symptoms of the disease to the doctor",
    "canDoTr": "Doktora hastalığın belirtilerini anlatabilirim",
    "canDoRo": "Despre simptomele bolii pot vorbi medicului",
    "canDoBs": "O simptomima bolesti mogu razgovarati sa doktorom",
    "canDoEs": "Puedo hablar sobre los síntomas de la enfermedad con el médico.",
    "canDoBg": "Мога да говоря за симптомите на заболяването на лекаря",
    "canDoEl": "Μπορώ να μιλήσω για τα συμπτώματα της νόσου στον γιατρό",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/38_langenschidt_-_11.1b_-_der_korper.mp3",
        "label": "11.1b - Der Körper",
        "labelAr": "أجزاء الجسم",
        "labelEn": "Body parts",
        "labelTr": "Vücut parçaları",
        "labelRo": "Părți ale corpului",
        "labelBs": "Dijelovi tijela",
        "labelEs": "Partes del cuerpo",
        "labelBg": "Части на тялото",
        "labelEl": "Μέρη του σώματος"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/41_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_1.mp3",
        "label": "11.5 - Bei der Hausärztin (1)",
        "labelAr": "عند الطبيبة 1",
        "labelEn": "At the doctor 1",
        "labelTr": "Doktorda 1",
        "labelRo": "La medic 1",
        "labelBs": "Kod doktora 1",
        "labelEs": "en el medico 1",
        "labelBg": "При лекаря 1",
        "labelEl": "Στο γιατρό 1"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/42_langenschidt_-_11.5_-_bei_der_hausarztin,_dialog_2.mp3",
        "label": "11.5 - Bei der Hausärztin (2)",
        "labelAr": "عند الطبيبة 2",
        "labelEn": "At the doctor's 2",
        "labelTr": "Doktorun 2'sinde",
        "labelRo": "La doctor 2",
        "labelBs": "Kod doktora 2",
        "labelEs": "En el doctor 2",
        "labelBg": "При лекаря 2",
        "labelEl": "Στο γιατρό 2"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/43_langenschidt_-_11.6_-_fragen_und_antworten_beim_arzt.mp3",
        "label": "11.6 - Fragen beim Arzt",
        "labelAr": "أسئلة وأجوبة عند الطبيب",
        "labelEn": "Questions and answers from the doctor",
        "labelTr": "Doktordan sorular ve cevaplar",
        "labelRo": "Întrebări și răspunsuri de la medic",
        "labelBs": "Pitanja i odgovori od doktora",
        "labelEs": "Preguntas y respuestas del médico.",
        "labelBg": "Въпроси и отговори от лекаря",
        "labelEl": "Ερωτήσεις και απαντήσεις από τον γιατρό"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/45_langenschidt_-_11.9_-_termine_machen,_absagen,_verschieben.mp3",
        "label": "11.9 - Termine machen",
        "labelAr": "تحديد وإلغاء المواعيد",
        "labelEn": "Make and cancel appointments",
        "labelTr": "Randevu alma ve iptal etme",
        "labelRo": "Faceți și anulați întâlniri",
        "labelBs": "Zakažite i otkažite termine",
        "labelEs": "Hacer y cancelar citas",
        "labelBg": "Правете и отменяйте срещи",
        "labelEl": "Κλείστε και ακυρώστε ραντεβού"
      }
    ],
    "dialogs": [
      {
        "title": "Beim Arzt",
        "titleAr": "عند الطبيب",
        "titleEn": "At the doctor's office",
        "titleTr": "Doktorun ofisinde",
        "titleRo": "La cabinetul medicului",
        "titleBs": "U ordinaciji",
        "titleEs": "En el consultorio del doctor",
        "titleBg": "В лекарския кабинет",
        "titleEl": "Στο ιατρείο",
        "lines": [
          {
            "speaker": "Arzt",
            "de": "Guten Tag! Was fehlt Ihnen?",
            "ar": "مرحباً! ما الذي يؤلمك؟",
            "en": "Welcome! What hurts you?",
            "tr": "Hoş geldin! Seni ne üzüyor?",
            "ro": "Bun venit! Ce te doare?",
            "bs": "Dobrodošli! šta te boli?",
            "es": "¡Bienvenido! ¿Qué te duele?",
            "bg": "Добре дошли! Какво те боли?",
            "el": "Καλωσόρισμα! Τι σε πληγώνει;"
          },
          {
            "speaker": "Patient",
            "de": "Ich habe Kopfschmerzen und Fieber.",
            "ar": "عندي صداع وحمى.",
            "en": "I have a headache and fever.",
            "tr": "Başım ağrıyor ve ateşim var.",
            "ro": "Am o durere de cap și febră.",
            "bs": "Imam glavobolju i temperaturu.",
            "es": "Tengo dolor de cabeza y fiebre.",
            "bg": "Имам главоболие и температура.",
            "el": "Έχω πονοκέφαλο και πυρετό."
          },
          {
            "speaker": "Arzt",
            "de": "Seit wann?",
            "ar": "منذ متى؟",
            "en": "since when?",
            "tr": "ne zamandan beri?",
            "ro": "De când?",
            "bs": "od kada?",
            "es": "¿desde cuando?",
            "bg": "откога?",
            "el": "απο ποτε?"
          },
          {
            "speaker": "Patient",
            "de": "Seit zwei Tagen.",
            "ar": "منذ يومين.",
            "en": "Two days ago.",
            "tr": "İki gün önce.",
            "ro": "Acum două zile.",
            "bs": "Prije dva dana.",
            "es": "Hace dos días.",
            "bg": "Преди два дни.",
            "el": "Πριν από δύο μέρες."
          },
          {
            "speaker": "Arzt",
            "de": "Öffnen Sie bitte den Mund. Sagen Sie: Ah!",
            "ar": "افتح فمك من فضلك. قل: آه!",
            "en": "Open your mouth, please. Say: Ah!",
            "tr": "Ağzınızı açın lütfen. De ki: Ah!",
            "ro": "Deschideți gura, vă rog. Spune: Ah!",
            "bs": "Otvori usta, molim te. Reci: Ah!",
            "es": "Abra la boca, por favor. Di: ¡Ah!",
            "bg": "Отворете си устата, моля. Кажете: Ах!",
            "el": "Άνοιξε το στόμα σου, σε παρακαλώ. Πες: Α!"
          },
          {
            "speaker": "Patient",
            "de": "Aaah.",
            "ar": "آه.",
            "en": "Yes.",
            "tr": "Evet.",
            "ro": "Da.",
            "bs": "Da.",
            "es": "Sí.",
            "bg": "да",
            "el": "Ναί."
          },
          {
            "speaker": "Arzt",
            "de": "Sie haben eine Erkältung. Ich verschreibe Ihnen Medikamente.",
            "ar": "عندك رشح/برد. سأكتب لك دواء.",
            "en": "You have a runny nose/cold. I will write you a medicine.",
            "tr": "Burun akıntınız/soğuk algınlığınız var. Sana bir ilaç yazacağım.",
            "ro": "Ai nasul care curge/raceala. Îți voi scrie un medicament.",
            "bs": "Imate curenje iz nosa/prehladu. Napisaću ti lek.",
            "es": "Tiene secreción nasal/resfriado. Te escribiré un medicamento.",
            "bg": "Имате хрема/настинка. Ще ти напиша лекарство.",
            "el": "Έχετε καταρροή/κρύωμα. Θα σου γράψω ένα φάρμακο."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Gesund bleiben",
        "titleAr": "البقاء بصحة جيدة",
        "titleEn": "Stay healthy",
        "titleTr": "Sağlıklı kalın",
        "titleRo": "Rămâi sănătos",
        "titleBs": "Ostanite zdravi",
        "titleEs": "mantente saludable",
        "titleBg": "Бъдете здрави",
        "titleEl": "Μείνετε υγιείς",
        "text": [
          {
            "de": "Sport ist gesund.",
            "ar": "الرياضة مفيدة للصحة.",
            "en": "Sports are good for health.",
            "tr": "Spor sağlığa faydalıdır.",
            "ro": "Sportul este bun pentru sănătate.",
            "bs": "Sport je dobar za zdravlje.",
            "es": "Los deportes son buenos para la salud.",
            "bg": "Спортът е полезен за здравето.",
            "el": "Ο αθλητισμός κάνει καλό στην υγεία."
          },
          {
            "de": "Man soll viel Wasser trinken.",
            "ar": "يجب شرب الكثير من الماء.",
            "en": "You should drink plenty of water.",
            "tr": "Bol su içmelisiniz.",
            "ro": "Ar trebui să bei multă apă.",
            "bs": "Trebalo bi da pijete dosta vode.",
            "es": "Debes beber mucha agua.",
            "bg": "Трябва да пиете много вода.",
            "el": "Θα πρέπει να πίνετε άφθονο νερό."
          },
          {
            "de": "Obst und Gemüse sind wichtig.",
            "ar": "الفواكه والخضروات مهمة.",
            "en": "Fruits and vegetables are important.",
            "tr": "Meyve ve sebzeler önemlidir.",
            "ro": "Fructele și legumele sunt importante.",
            "bs": "Voće i povrće su važni.",
            "es": "Las frutas y verduras son importantes.",
            "bg": "Плодовете и зеленчуците са важни.",
            "el": "Τα φρούτα και τα λαχανικά είναι σημαντικά."
          },
          {
            "de": "Man soll nicht rauchen.",
            "ar": "لا يجب التدخين.",
            "en": "You should not smoke.",
            "tr": "Sigara içmemelisiniz.",
            "ro": "Nu ar trebui să fumezi.",
            "bs": "Ne bi trebalo da pušite.",
            "es": "No deberías fumar.",
            "bg": "Не бива да пушите.",
            "el": "Δεν πρέπει να καπνίζετε."
          },
          {
            "de": "Viel schlafen ist auch wichtig.",
            "ar": "النوم الكافي مهم أيضاً.",
            "en": "Adequate sleep is also important.",
            "tr": "Yeterli uyku da önemlidir.",
            "ro": "Somnul adecvat este, de asemenea, important.",
            "bs": "Odgovarajući san je takođe važan.",
            "es": "Dormir lo suficiente también es importante.",
            "bg": "Адекватният сън също е важен.",
            "el": "Ο επαρκής ύπνος είναι επίσης σημαντικός."
          }
        ],
        "questions": [
          {
            "q": "Was ist gesund?",
            "qAr": "ما المفيد للصحة؟",
            "answer": "Sport, Wasser, Obst und Gemüse, Schlafen",
            "answerAr": "الرياضة، الماء، الفواكه والخضروات، النوم",
            "qEn": "What is good for health?",
            "answerEn": "Exercise, water, fruits and vegetables, sleep",
            "qTr": "Sağlık için iyi olan nedir?",
            "answerTr": "Egzersiz, su, meyve ve sebzeler, uyku",
            "qRo": "Ce este bun pentru sănătate?",
            "answerRo": "Exerciții fizice, apă, fructe și legume, somn",
            "qBs": "Šta je dobro za zdravlje?",
            "answerBs": "Vježbanje, voda, voće i povrće, san",
            "qEs": "¿Qué es bueno para la salud?",
            "answerEs": "Ejercicio, agua, frutas y verduras, dormir.",
            "qBg": "Какво е полезно за здравето?",
            "answerBg": "Упражнение, вода, плодове и зеленчуци, сън",
            "qEl": "Τι είναι καλό για την υγεία;",
            "answerEl": "Άσκηση, νερό, φρούτα και λαχανικά, ύπνος"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "modalverben",
        "title": "أفعال الوجوب والإمكانية - Modalverben",
        "titleDe": "Modalverben",
        "explanation": "الأفعال الشكلية تُعبّر عن الوجوب والإمكانية والرغبة.",
        "titleEn": "Verbs of necessity and possibility - Modalverben",
        "explanationEn": "Modal verbs express obligation, possibility, and desire.",
        "titleTr": "Gereklilik ve olasılık fiilleri - Modalverben",
        "explanationTr": "Modal fiiller yükümlülüğü, olasılığı ve arzuyu ifade eder.",
        "titleRo": "Verbe de necesitate și posibilitate - Modalverben",
        "explanationRo": "Verbele modale exprimă obligația, posibilitatea și dorința.",
        "titleBs": "Glagoli nužnosti i mogućnosti - Modalverben",
        "explanationBs": "Modalni glagoli izražavaju obavezu, mogućnost i želju.",
        "titleEs": "Verbos de necesidad y posibilidad - Modalverben",
        "explanationEs": "Los verbos modales expresan obligación, posibilidad y deseo.",
        "titleBg": "Глаголи за необходимост и възможност - Modalverben",
        "explanationBg": "Модалните глаголи изразяват задължение, възможност и желание.",
        "titleEl": "Ρήματα αναγκαιότητας και δυνατότητας - Modalverben",
        "explanationEl": "Τα τροπικά ρήματα εκφράζουν υποχρέωση, δυνατότητα και επιθυμία.",
        "rules": [
          {
            "example": "Ich muss Medikamente nehmen.",
            "translation": "يجب أن آخذ الدواء.",
            "note": "müssen = يجب",
            "translationEn": "I have to take medicine.",
            "noteEn": "müssen = must",
            "translationTr": "İlaç almam gerekiyor.",
            "noteTr": "müssen = zorunluluk",
            "translationRo": "Trebuie să iau medicamente.",
            "noteRo": "müssen = must",
            "translationBs": "Moram da uzmem lekove.",
            "noteBs": "müssen = obavezno",
            "translationEs": "Tengo que tomar medicina.",
            "noteEs": "müssen = debe",
            "translationBg": "Трябва да пия лекарство.",
            "noteBg": "müssen = трябва",
            "translationEl": "Πρέπει να πάρω φάρμακα.",
            "noteEl": "müssen = πρέπει"
          },
          {
            "example": "Du kannst Sport machen.",
            "translation": "يمكنك ممارسة الرياضة.",
            "note": "können = يمكن",
            "translationEn": "You can exercise.",
            "noteEn": "können = can",
            "translationTr": "Egzersiz yapabilirsiniz.",
            "noteTr": "können = yapabilir",
            "translationRo": "Puteți face exerciții.",
            "noteRo": "können = can",
            "translationBs": "Možete vježbati.",
            "noteBs": "können = može",
            "translationEs": "Puedes hacer ejercicio.",
            "noteEs": "können = puede",
            "translationBg": "Можете да тренирате.",
            "noteBg": "können = консерва",
            "translationEl": "Μπορείτε να ασκηθείτε.",
            "noteEl": "können = κονσέρβα"
          },
          {
            "example": "Sie sollen viel trinken.",
            "translation": "عليك أن تشرب كثيراً.",
            "note": "sollen = عليك",
            "translationEn": "You have to drink a lot.",
            "noteEn": "sollen = on you",
            "translationTr": "Çok içmelisin.",
            "noteTr": "sollen = sana",
            "translationRo": "Trebuie să bei mult.",
            "noteRo": "sollen = pe tine",
            "translationBs": "Morate puno piti.",
            "noteBs": "sollen = na tebi",
            "translationEs": "Tienes que beber mucho.",
            "noteEs": "sollen = en ti",
            "translationBg": "Трябва да пиете много.",
            "noteBg": "sollen = върху теб",
            "translationEl": "Πρέπει να πίνετε πολύ.",
            "noteEl": "sollen = πάνω σου"
          },
          {
            "example": "Ich darf nicht rauchen.",
            "translation": "لا يجوز لي التدخين.",
            "note": "dürfen = يجوز/لا يجوز",
            "translationEn": "I may not smoke.",
            "noteEn": "dürfen = permissible/not permissible",
            "translationTr": "Sigara içmeyebilirim.",
            "noteTr": "dürfen = izin verilir/izin verilmez",
            "translationRo": "S-ar putea să nu fumez.",
            "noteRo": "dürfen = permis/nepermis",
            "translationBs": "Možda neću pušiti.",
            "noteBs": "dürfen = dozvoljeno/nije dozvoljeno",
            "translationEs": "No puedo fumar.",
            "noteEs": "dürfen = permitido/no permitido",
            "translationBg": "Може и да не пуша.",
            "noteBg": "dürfen = допустимо/недопустимо",
            "translationEl": "Μπορεί να μην καπνίζω.",
            "noteEl": "dürfen = επιτρεπτό/μη επιτρεπτό"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Ich habe _____. (صداع)",
        "questionAr": "كيف تقول 'عندي صداع' بالألمانية؟",
        "options": [
          "Bauchschmerzen",
          "Kopfschmerzen",
          "Halsschmerzen",
          "Fieber"
        ],
        "answer": 1,
        "questionEn": "How do you say 'I have a headache' in German?",
        "questionTr": "Almanca'da 'Başım ağrıyor' nasıl denir?",
        "questionRo": "Cum se spune „Mă doare capul” în germană?",
        "questionBs": "Kako se kaže 'Imam glavobolju' na njemačkom?",
        "questionEs": "¿Cómo se dice \"me duele la cabeza\" en alemán?",
        "questionBg": "Как се казва „имам главоболие“ на немски?",
        "questionEl": "Πώς λέτε \"Έχω πονοκέφαλο\" στα Γερμανικά;"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich habe Kopfschmerzen.",
        "ar": "عندي صداع.",
        "en": "I have a headache.",
        "tr": "Başım ağrıyor.",
        "ro": "Mă doare capul.",
        "bs": "Boli me glava.",
        "es": "Me duele la cabeza.",
        "bg": "имам главоболие",
        "el": "έχω πονοκέφαλο."
      },
      {
        "de": "Mir ist schlecht.",
        "ar": "أشعر بالغثيان.",
        "en": "I feel sick.",
        "tr": "Kötü hissediyorum.",
        "ro": "Mi-e rău.",
        "bs": "Muka mi je.",
        "es": "Me siento enferma.",
        "bg": "прилошава ми",
        "el": "Δεν νοιώθω καλά."
      },
      {
        "de": "Ich habe Fieber.",
        "ar": "عندي حمى/سخونة.",
        "en": "I have a fever.",
        "tr": "Ateşim var.",
        "ro": "Am febră.",
        "bs": "Imam groznicu.",
        "es": "Tengo fiebre.",
        "bg": "Имам треска.",
        "el": "Έχω πυρετό."
      },
      {
        "de": "Was fehlt Ihnen?",
        "ar": "ما الذي يؤلمك؟",
        "en": "What are you missing?",
        "tr": "Neyi kaçırıyorsun?",
        "ro": "Ce iti lipseste?",
        "bs": "šta ti nedostaje?",
        "es": "¿Qué te falta?",
        "bg": "какво ти липсва",
        "el": "Τι σου λείπει;"
      },
      {
        "de": "Ich muss zum Arzt gehen.",
        "ar": "يجب أن أذهب للطبيب.",
        "en": "I have to go to the doctor.",
        "tr": "Doktora gitmeliyim.",
        "ro": "Trebuie să merg la doctor.",
        "bs": "Moram kod doktora.",
        "es": "Tengo que ir al médico.",
        "bg": "Трябва да отида на лекар.",
        "el": "Πρέπει να πάω στο γιατρό."
      }
    ]
  },
  {
    "id": 9,
    "titleDe": "Unterwegs",
    "titleAr": "التنقل والسفر",
    "emoji": "🚂",
    "color": "#a78bfa",
    "titleEn": "Mobility and travel",
    "titleTr": "Hareketlilik ve seyahat",
    "titleRo": "Mobilitate și călătorie",
    "titleBs": "Mobilnost i putovanja",
    "titleEs": "Movilidad y viajes",
    "titleBg": "Мобилност и пътуване",
    "titleEl": "Κινητικότητα και ταξίδια",
    "topics": [
      "وسائل النقل",
      "محطة القطار",
      "الاتجاهات"
    ],
    "topicsEn": [
      "Means of transportation",
      "Train station",
      "Directions"
    ],
    "topicsTr": [
      "Ulaşım araçları",
      "Tren istasyonu",
      "Yol Tarifi"
    ],
    "topicsRo": [
      "Mijloace de transport",
      "Gară",
      "Direcții"
    ],
    "topicsBs": [
      "Prevozna sredstva",
      "Željeznička stanica",
      "Upute"
    ],
    "topicsEs": [
      "Medios de transporte",
      "Estación de tren",
      "Instrucciones"
    ],
    "topicsBg": [
      "Транспортни средства",
      "ЖП гара",
      "Упътвания"
    ],
    "topicsEl": [
      "Μέσα μεταφοράς",
      "σιδηροδρομικός σταθμός",
      "Οδηγίες"
    ],
    "canDo": "أستطيع أن أسأل عن الطريق وأشتري تذكرة قطار",
    "canDoDe": "Ich kann nach dem Weg fragen und eine Fahrkarte kaufen",
    "canDoEn": "I can ask the route and buy a train ticket",
    "canDoTr": "Rotayı sorup tren bileti alabilirim",
    "canDoRo": "Pot să întreb traseul și să cumpăr un bilet de tren",
    "canDoBs": "Mogu pitati za rutu i kupiti kartu za voz",
    "canDoEs": "Puedo preguntar la ruta y comprar un billete de tren.",
    "canDoBg": "Мога да попитам за маршрута и да купя билет за влак",
    "canDoEl": "Μπορώ να ρωτήσω τη διαδρομή και να αγοράσω εισιτήριο τρένου",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/02_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_1.mp3",
        "label": "7.2 - Berlin kennenlernen (1)",
        "labelAr": "التعرف على برلين 1",
        "labelEn": "Getting to know Berlin 1",
        "labelTr": "Berlin'i tanımak 1",
        "labelRo": "Cunoașterea Berlinului 1",
        "labelBs": "Upoznavanje Berlina 1",
        "labelEs": "Conociendo Berlín 1",
        "labelBg": "Запознаване с Берлин 1",
        "labelEl": "Γνωριμία με το Βερολίνο 1"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/03_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_2.mp3",
        "label": "7.2 - Berlin kennenlernen (2)",
        "labelAr": "التعرف على برلين 2",
        "labelEn": "Getting to know Berlin 2",
        "labelTr": "Berlin'i tanımak 2",
        "labelRo": "Cunoașterea Berlinului 2",
        "labelBs": "Upoznavanje Berlina 2",
        "labelEs": "Conociendo Berlín 2",
        "labelBg": "Запознаване с Берлин 2",
        "labelEl": "Γνωριμία με το Βερολίνο 2"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/04_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_3.mp3",
        "label": "7.2 - Berlin kennenlernen (3)",
        "labelAr": "التعرف على برلين 3",
        "labelEn": "Getting to know Berlin 3",
        "labelTr": "Berlin'i Tanıma 3",
        "labelRo": "Cunoașterea Berlinului 3",
        "labelBs": "Upoznavanje Berlina 3",
        "labelEs": "Conociendo Berlín 3",
        "labelBg": "Запознаване с Берлин 3",
        "labelEl": "Γνωριμία με το Βερολίνο 3"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/05_langenschidt_-_7.2_-_berlin_kennenlernen,_dialog_4.mp3",
        "label": "7.2 - Berlin kennenlernen (4)",
        "labelAr": "التعرف على برلين 4",
        "labelEn": "Getting to know Berlin 4",
        "labelTr": "Berlin'i Tanıma 4",
        "labelRo": "Cunoașterea Berlinului 4",
        "labelBs": "Upoznavanje Berlina 4",
        "labelEs": "Conociendo Berlín 4",
        "labelBg": "Запознаване с Берлин 4",
        "labelEl": "Γνωριμία με το Βερολίνο 4"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/06_langenschidt_-_7.3_-_wo_ist_bitte_..._wie_komme_ich_..._ich_suche_....mp3",
        "label": "7.3 - Wegbeschreibung",
        "labelAr": "وصف الطريق",
        "labelEn": "Route description",
        "labelTr": "Rota açıklaması",
        "labelRo": "Descrierea traseului",
        "labelBs": "Opis rute",
        "labelEs": "Descripción de la ruta",
        "labelBg": "Описание на маршрута",
        "labelEl": "Περιγραφή διαδρομής"
      }
    ],
    "dialogs": [
      {
        "title": "Am Bahnhof",
        "titleAr": "في محطة القطار",
        "titleEn": "At the train station",
        "titleTr": "Tren istasyonunda",
        "titleRo": "La gară",
        "titleBs": "Na željezničkoj stanici",
        "titleEs": "en la estacion de tren",
        "titleBg": "На гарата",
        "titleEl": "Στο σιδηροδρομικό σταθμό",
        "lines": [
          {
            "speaker": "Kunde",
            "de": "Eine Fahrkarte nach München, bitte.",
            "ar": "تذكرة إلى ميونيخ من فضلك.",
            "en": "Ticket to Munich please.",
            "tr": "Münih'e bilet lütfen.",
            "ro": "Te rog bilet la Munchen.",
            "bs": "Kartu za Minhen, molim.",
            "es": "Billete a Munich por favor.",
            "bg": "Билет до Мюнхен, моля.",
            "el": "Εισιτήριο για Μόναχο παρακαλώ."
          },
          {
            "speaker": "Beamter",
            "de": "Einfach oder hin und zurück?",
            "ar": "ذهاب فقط أم ذهاباً وعودة؟",
            "en": "One-way or round-trip?",
            "tr": "Tek yön mü, gidiş-dönüş mü?",
            "ro": "Dus-întors sau dus-întors?",
            "bs": "Jednosmjerno ili povratno?",
            "es": "¿Solo ida o ida y vuelta?",
            "bg": "Еднопосочно или отиване и връщане?",
            "el": "Απλή διαδρομή ή μετ' επιστροφής;"
          },
          {
            "speaker": "Kunde",
            "de": "Hin und zurück, bitte.",
            "ar": "ذهاباً وعودة من فضلك.",
            "en": "Back and forth please.",
            "tr": "İleri geri lütfen.",
            "ro": "Te rog înainte și înapoi.",
            "bs": "Naprijed i naprijed molim.",
            "es": "De ida y vuelta por favor.",
            "bg": "Напред и назад, моля.",
            "el": "Εμπρός και πίσω παρακαλώ."
          },
          {
            "speaker": "Beamter",
            "de": "Das macht 89 Euro.",
            "ar": "المجموع 89 يورو.",
            "en": "Total 89 euros.",
            "tr": "Toplam 89 euro.",
            "ro": "Total 89 euro.",
            "bs": "Ukupno 89 eura.",
            "es": "Total 89 euros.",
            "bg": "Общо 89 евро.",
            "el": "Σύνολο 89 ευρώ."
          },
          {
            "speaker": "Kunde",
            "de": "Von welchem Gleis fährt der Zug ab?",
            "ar": "من أي رصيف يغادر القطار؟",
            "en": "From which platform does the train leave?",
            "tr": "Tren hangi perondan kalkıyor?",
            "ro": "De pe ce peron pleacă trenul?",
            "bs": "Sa kojeg perona polazi voz?",
            "es": "¿Desde qué andén sale el tren?",
            "bg": "От коя платформа тръгва влакът?",
            "el": "Από ποια πλατφόρμα φεύγει το τρένο;"
          },
          {
            "speaker": "Beamter",
            "de": "Gleis 7.",
            "ar": "الرصيف 7.",
            "en": "Pier 7.",
            "tr": "İskele 7.",
            "ro": "Pier 7.",
            "bs": "Pristanište 7.",
            "es": "Muelle 7.",
            "bg": "Кей 7.",
            "el": "Προβλήτα 7."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Der Fahrplan",
        "titleAr": "جدول المواعيد",
        "titleEn": "schedule",
        "titleTr": "takvim",
        "titleRo": "programa",
        "titleBs": "raspored",
        "titleEs": "cronograma",
        "titleBg": "график",
        "titleEl": "πρόγραμμα",
        "text": [
          {
            "de": "Der Zug nach Berlin fährt um 10:30 Uhr ab.",
            "ar": "القطار إلى برلين يغادر في الساعة 10:30.",
            "en": "The train to Berlin leaves at 10:30.",
            "tr": "Berlin'e giden tren 10:30'da kalkıyor.",
            "ro": "Trenul spre Berlin pleacă la 10:30.",
            "bs": "Voz za Berlin polazi u 10:30.",
            "es": "El tren a Berlín sale a las 10:30.",
            "bg": "Влакът за Берлин тръгва в 10:30.",
            "el": "Το τρένο για το Βερολίνο φεύγει στις 10:30."
          },
          {
            "de": "Er kommt um 14:15 Uhr an.",
            "ar": "يصل في الساعة 14:15.",
            "en": "Arrives at 14:15.",
            "tr": "14:15'te varır.",
            "ro": "Sosește la 14:15.",
            "bs": "Dolazi u 14:15.",
            "es": "Llegada a las 14:15.",
            "bg": "Пристига в 14:15ч.",
            "el": "Άφιξη στις 14:15."
          },
          {
            "de": "Die Fahrt dauert etwa 4 Stunden.",
            "ar": "الرحلة تستغرق حوالي 4 ساعات.",
            "en": "The flight takes about 4 hours.",
            "tr": "Uçuş yaklaşık 4 saat sürüyor.",
            "ro": "Zborul durează aproximativ 4 ore.",
            "bs": "Let traje oko 4 sata.",
            "es": "El vuelo dura unas 4 horas.",
            "bg": "Полетът отнема около 4 часа.",
            "el": "Η πτήση διαρκεί περίπου 4 ώρες."
          }
        ],
        "questions": [
          {
            "q": "Wann fährt der Zug ab?",
            "qAr": "متى يغادر القطار؟",
            "answer": "Um 10:30 Uhr",
            "answerAr": "في الساعة 10:30",
            "qEn": "When does the train leave?",
            "answerEn": "At 10:30",
            "qTr": "Tren ne zaman kalkıyor?",
            "answerTr": "10:30'da",
            "qRo": "Când pleacă trenul?",
            "answerRo": "La 10:30",
            "qBs": "Kada polazi voz?",
            "answerBs": "U 10:30",
            "qEs": "¿Cuándo sale el tren?",
            "answerEs": "A las 10:30",
            "qBg": "Кога тръгва влакът?",
            "answerBg": "В 10:30ч",
            "qEl": "Πότε φεύγει το τρένο;",
            "answerEl": "Στις 10:30"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "wegbeschreibung",
        "title": "وصف الطريق",
        "titleDe": "Wegbeschreibung",
        "explanation": "كلمات مهمة لوصف الطريق.",
        "titleEn": "Route description",
        "explanationEn": "Important words to describe the road.",
        "titleTr": "Rota açıklaması",
        "explanationTr": "Yolu tanımlayan önemli kelimeler.",
        "titleRo": "Descrierea traseului",
        "explanationRo": "Cuvinte importante pentru a descrie drumul.",
        "titleBs": "Opis rute",
        "explanationBs": "Važne riječi za opis puta.",
        "titleEs": "Descripción de la ruta",
        "explanationEs": "Palabras importantes para describir el camino.",
        "titleBg": "Описание на маршрута",
        "explanationBg": "Важни думи за описание на пътя.",
        "titleEl": "Περιγραφή διαδρομής",
        "explanationEl": "Σημαντικές λέξεις για να περιγράψεις τον δρόμο.",
        "rules": [
          {
            "example": "Gehen Sie geradeaus.",
            "translation": "اذهب إلى الأمام مباشرة.",
            "note": "",
            "translationEn": "Go straight ahead.",
            "noteEn": "",
            "translationTr": "Dümdüz ilerleyin.",
            "noteTr": "",
            "translationRo": "Mergeți drept înainte.",
            "noteRo": "",
            "translationBs": "Samo napred.",
            "noteBs": "",
            "translationEs": "Siga recto.",
            "noteEs": "",
            "translationBg": "Давай направо напред.",
            "noteBg": "",
            "translationEl": "Προχώρα ευθεία.",
            "noteEl": ""
          },
          {
            "example": "Biegen Sie rechts/links ab.",
            "translation": "انعطف يميناً/يساراً.",
            "note": "",
            "translationEn": "Turn right/left.",
            "noteEn": "",
            "translationTr": "Sağa/sola dönün.",
            "noteTr": "",
            "translationRo": "Virați la dreapta/la stânga.",
            "noteRo": "",
            "translationBs": "Skrenite desno/lijevo.",
            "noteBs": "",
            "translationEs": "Gire a la derecha/izquierda.",
            "noteEs": "",
            "translationBg": "Завийте надясно/наляво.",
            "noteBg": "",
            "translationEl": "Στρίψτε δεξιά/αριστερά.",
            "noteEl": ""
          },
          {
            "example": "Die nächste Straße links.",
            "translation": "الشارع التالي على اليسار.",
            "note": "",
            "translationEn": "Next street on the left.",
            "noteEn": "",
            "translationTr": "Soldaki sonraki sokak.",
            "noteTr": "",
            "translationRo": "Următoarea stradă pe stânga.",
            "noteRo": "",
            "translationBs": "Sljedeća ulica lijevo.",
            "noteBs": "",
            "translationEs": "Siguiente calle a la izquierda.",
            "noteEs": "",
            "translationBg": "Следващата улица вляво.",
            "noteBg": "",
            "translationEl": "Επόμενος δρόμος στα αριστερά.",
            "noteEl": ""
          },
          {
            "example": "Nehmen Sie die U-Bahn.",
            "translation": "خذ مترو الأنفاق.",
            "note": "",
            "translationEn": "Take the subway.",
            "noteEn": "",
            "translationTr": "Metroya binin.",
            "noteTr": "",
            "translationRo": "Luați metroul.",
            "noteRo": "",
            "translationBs": "Idite podzemnom.",
            "noteBs": "",
            "translationEs": "Toma el metro.",
            "noteEs": "",
            "translationBg": "Вземете метрото.",
            "noteBg": "",
            "translationEl": "Πάρτε το μετρό.",
            "noteEl": ""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Was bedeutet 'hin und zurück'?",
        "questionAr": "ما معنى hin und zurück؟",
        "options": [
          "ذهاب فقط",
          "عودة فقط",
          "ذهاباً وعودة",
          "بدون تذكرة"
        ],
        "answer": 2,
        "questionEn": "What is the meaning of hin and zurück?",
        "questionTr": "Hin ve zurück'ün anlamı nedir?",
        "questionRo": "Ce înseamnă hin și zurück?",
        "questionBs": "Šta znači hin i zurück?",
        "questionEs": "¿Cuál es el significado de hin y zurück?",
        "questionBg": "Какво е значението на hin и zurück?",
        "questionEl": "Τι σημαίνει το hin και το zurück;"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Entschuldigung, wie komme ich zum Bahnhof?",
        "ar": "عذراً، كيف أصل إلى محطة القطار؟",
        "en": "Excuse me, how do I get to the train station?",
        "tr": "Affedersiniz, tren istasyonuna nasıl gidebilirim?",
        "ro": "Scuzați-mă, cum ajung la gară?",
        "bs": "Izvinite, kako da dođem do železničke stanice?",
        "es": "Disculpe, ¿cómo llego a la estación de tren?",
        "bg": "Извинете, как да стигна до гарата?",
        "el": "Με συγχωρείτε, πώς θα πάω στο σιδηροδρομικό σταθμό;"
      },
      {
        "de": "Gehen Sie geradeaus.",
        "ar": "اذهب إلى الأمام.",
        "en": "Go straight ahead.",
        "tr": "Dümdüz ilerleyin.",
        "ro": "Mergeți drept înainte.",
        "bs": "Samo napred.",
        "es": "Siga recto.",
        "bg": "Давай направо напред.",
        "el": "Προχώρα ευθεία."
      },
      {
        "de": "Eine Fahrkarte nach ... bitte.",
        "ar": "تذكرة إلى ... من فضلك.",
        "en": "A ticket to...please.",
        "tr": "İçin bir bilet lütfen.",
        "ro": "Un bilet la ..., vă rog.",
        "bs": "Karta za...molim.",
        "es": "Un boleto para ..., por favor.",
        "bg": "Билет до... моля.",
        "el": "Ένα εισιτήριο για...παρακαλώ."
      },
      {
        "de": "Von welchem Gleis?",
        "ar": "من أي رصيف؟",
        "en": "Which track?",
        "tr": "Hangi parça?",
        "ro": "Care piesa?",
        "bs": "Koja staza?",
        "es": "¿Qué pista?",
        "bg": "Коя песен?",
        "el": "Ποιο κομμάτι;"
      }
    ]
  },
  {
    "id": 10,
    "titleDe": "Freizeit und Hobbys",
    "titleAr": "وقت الفراغ والهوايات",
    "emoji": "⚽",
    "color": "#fbbf24",
    "titleEn": "Free time and hobbies",
    "titleTr": "Boş zaman ve hobiler",
    "titleRo": "Timp liber și hobby-uri",
    "titleBs": "Slobodno vrijeme i hobiji",
    "titleEs": "Tiempo libre y pasatiempos",
    "titleBg": "Свободно време и хобита",
    "titleEl": "Ελεύθερος χρόνος και χόμπι",
    "topics": [
      "الهوايات",
      "الرياضة",
      "الترفيه",
      "الدعوة"
    ],
    "topicsEn": [
      "Hobbies",
      "Sports",
      "Entertainment",
      "Invitation"
    ],
    "topicsTr": [
      "Hobiler",
      "Spor",
      "Eğlence",
      "Davet"
    ],
    "topicsRo": [
      "Hobby-uri",
      "Sport",
      "Divertisment",
      "Invitaţie"
    ],
    "topicsBs": [
      "Hobiji",
      "Sports",
      "Zabava",
      "Poziv"
    ],
    "topicsEs": [
      "Pasatiempos",
      "Deportes",
      "Entretenimiento",
      "Invitación"
    ],
    "topicsBg": [
      "Хоби",
      "Спорт",
      "Развлечение",
      "Покана"
    ],
    "topicsEl": [
      "Χόμπι",
      "Αθλητισμός",
      "Ψυχαγωγία",
      "Πρόσκληση"
    ],
    "canDo": "أستطيع أن أتحدث عن هواياتي وأدعو شخصاً",
    "canDoDe": "Ich kann über Hobbys sprechen und jemanden einladen",
    "canDoEn": "I can talk about my hobbies and invite someone",
    "canDoTr": "Hobilerim hakkında konuşabilir ve birini davet edebilirim",
    "canDoRo": "Pot să vorbesc despre hobby-urile mele și să invit pe cineva",
    "canDoBs": "Mogu pričati o svojim hobijima i pozvati nekoga",
    "canDoEs": "Puedo hablar de mis aficiones e invitar a alguien.",
    "canDoBg": "Мога да говоря за моите хобита и да поканя някого",
    "canDoEl": "Μπορώ να μιλήσω για τα χόμπι μου και να προσκαλέσω κάποιον",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/23_langenschidt_-_9.1_-_das_wochenende.mp3",
        "label": "9.1 - Das Wochenende",
        "labelAr": "عطلة نهاية الأسبوع",
        "labelEn": "Weekend",
        "labelTr": "Hafta sonu",
        "labelRo": "Weekend",
        "labelBs": "Vikend",
        "labelEs": "Fin de semana",
        "labelBg": "Уикенд",
        "labelEl": "Σαββατοκύριακο"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/26_langenschidt_-_9.7_-_das_fotoalbum_von_swetlana_riesen.mp3",
        "label": "9.7 - Das Fotoalbum",
        "labelAr": "ألبوم الصور",
        "labelEn": "Photo album",
        "labelTr": "Fotoğraf albümü",
        "labelRo": "Album foto",
        "labelBs": "Foto album",
        "labelEs": "Álbum de fotos",
        "labelBg": "Албум за снимки",
        "labelEl": "Φωτογραφικό άλμπουμ"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/27_langenschidt_-_9.10c_-_wiener_geschichten.mp3",
        "label": "9.10c - Wiener Geschichten",
        "labelAr": "قصص فيينا",
        "labelEn": "Vienna Stories",
        "labelTr": "Viyana Hikayeleri",
        "labelRo": "Povești de la Viena",
        "labelBs": "Vienna Stories",
        "labelEs": "Historias de Viena",
        "labelBg": "Виенски истории",
        "labelEl": "Ιστορίες της Βιέννης"
      }
    ],
    "dialogs": [
      {
        "title": "Was machst du in der Freizeit?",
        "titleAr": "ماذا تفعل في وقت فراغك؟",
        "titleEn": "What do you do in your free time?",
        "titleTr": "Boş zamanlarında ne yaparsın?",
        "titleRo": "Ce faci în timpul liber?",
        "titleBs": "Šta radiš u slobodno vrijeme?",
        "titleEs": "¿Qué haces en tu tiempo libre?",
        "titleBg": "Какво правиш в свободното си време?",
        "titleEl": "Τι κάνεις στον ελεύθερο χρόνο σου;",
        "lines": [
          {
            "speaker": "Thomas",
            "de": "Was machst du in der Freizeit?",
            "ar": "ماذا تفعل في وقت فراغك؟",
            "en": "What do you do in your free time?",
            "tr": "Boş zamanlarında ne yaparsın?",
            "ro": "Ce faci în timpul liber?",
            "bs": "Šta radiš u slobodno vrijeme?",
            "es": "¿Qué haces en tu tiempo libre?",
            "bg": "Какво правиш в свободното си време?",
            "el": "Τι κάνεις στον ελεύθερο χρόνο σου;"
          },
          {
            "speaker": "Maria",
            "de": "Ich spiele gern Fußball. Und du?",
            "ar": "أحب لعب كرة القدم. وأنت؟",
            "en": "I love playing football. And you?",
            "tr": "Futbol oynamayı seviyorum. Ve sen?",
            "ro": "Îmi place să joc fotbal. Și tu?",
            "bs": "Volim da igram fudbal. A ti?",
            "es": "Me encanta jugar al fútbol. ¿Y tú?",
            "bg": "Обичам да играя футбол. а ти",
            "el": "Μου αρέσει να παίζω ποδόσφαιρο. Και εσύ;"
          },
          {
            "speaker": "Thomas",
            "de": "Ich lese gern Bücher und höre Musik.",
            "ar": "أحب قراءة الكتب وسماع الموسيقى.",
            "en": "I love reading books and listening to music.",
            "tr": "Kitap okumayı ve müzik dinlemeyi seviyorum.",
            "ro": "Îmi place să citesc cărți și să ascult muzică.",
            "bs": "Volim da čitam knjige i slušam muziku.",
            "es": "Me encanta leer libros y escuchar música.",
            "bg": "Обичам да чета книги и да слушам музика.",
            "el": "Μου αρέσει να διαβάζω βιβλία και να ακούω μουσική."
          },
          {
            "speaker": "Maria",
            "de": "Spielst du Fußball? Wir brauchen einen Spieler.",
            "ar": "هل تلعب كرة القدم؟ نحتاج لاعباً.",
            "en": "Do you play football? We need a player.",
            "tr": "Futbol oynar mısın? Bir oyuncuya ihtiyacımız var.",
            "ro": "joci fotbal? Avem nevoie de un jucător.",
            "bs": "Igraš li fudbal? Treba nam igrač.",
            "es": "¿Juegas al fútbol? Necesitamos un jugador.",
            "bg": "играеш ли футбол Имаме нужда от играч.",
            "el": "Παίζεις ποδόσφαιρο; Χρειαζόμαστε έναν παίκτη."
          },
          {
            "speaker": "Thomas",
            "de": "Ja, ich komme!",
            "ar": "نعم، سأتي!",
            "en": "Yes, I will come!",
            "tr": "Evet, geleceğim!",
            "ro": "Da, voi veni!",
            "bs": "Da, doći ću!",
            "es": "¡Sí, iré!",
            "bg": "Да, ще дойда!",
            "el": "Ναι, θα έρθω!"
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Mein Hobby",
        "titleAr": "هوايتي",
        "titleEn": "My hobby",
        "titleTr": "benim hobim",
        "titleRo": "Hobby-ul meu",
        "titleBs": "Moj hobi",
        "titleEs": "mi pasatiempo",
        "titleBg": "Моето хоби",
        "titleEl": "Το χόμπι μου",
        "text": [
          {
            "de": "Ich heiße Sarah. Mein Hobby ist Fotografieren.",
            "ar": "اسمي سارة. هوايتي التصوير.",
            "en": "My name is Sarah. My hobby is photography.",
            "tr": "Benim adım Sarah. Hobim fotoğrafçılıktır.",
            "ro": "Numele meu este Sarah. Hobby-ul meu este fotografia.",
            "bs": "Moje ime je Sarah. Moj hobi je fotografija.",
            "es": "Mi nombre es Sara. Mi hobby es la fotografía.",
            "bg": "Казвам се Сара. Моето хоби е фотографията.",
            "el": "My name is Sarah. Το χόμπι μου είναι η φωτογραφία."
          },
          {
            "de": "Ich fotografiere gern Menschen und Landschaften.",
            "ar": "أحب تصوير الناس والمناظر الطبيعية.",
            "en": "I love photographing people and landscapes.",
            "tr": "İnsanları ve manzaraları fotoğraflamayı seviyorum.",
            "ro": "أحب تصوير الناس والمناظر الطبيعية.",
            "bs": "Volim da fotografišem ljude i pejzaže.",
            "es": "Me encanta fotografiar personas y paisajes.",
            "bg": "Обичам да снимам хора и пейзажи.",
            "el": "Μου αρέσει να φωτογραφίζω ανθρώπους και τοπία."
          },
          {
            "de": "Am Wochenende gehe ich in den Park.",
            "ar": "في عطلة الأسبوع أذهب إلى الحديقة.",
            "en": "On the weekend I go to the park.",
            "tr": "في عطلة الأسبوع أذهب إلى الحديقة.",
            "ro": "In weekend merg in parc.",
            "bs": "Za vikend idem u park.",
            "es": "El fin de semana voy al parque.",
            "bg": "През уикенда ходя в парка.",
            "el": "Το Σαββατοκύριακο πηγαίνω στο πάρκο."
          },
          {
            "de": "Das macht mir viel Spaß!",
            "ar": "هذا يسعدني كثيراً!",
            "en": "This makes me very happy!",
            "tr": "Bu beni çok mutlu ediyor!",
            "ro": "Acest lucru mă face foarte fericit!",
            "bs": "Ovo me čini veoma srećnim!",
            "es": "¡Esto me hace muy feliz!",
            "bg": "Това много ме радва!",
            "el": "Αυτό με κάνει πολύ χαρούμενο!"
          }
        ],
        "questions": [
          {
            "q": "Was ist Sarahs Hobby?",
            "qAr": "ما هواية سارة؟",
            "answer": "Fotografieren",
            "answerAr": "التصوير",
            "qEn": "What is Sarah's hobby?",
            "answerEn": "Photography",
            "qTr": "Sarah'nın hobisi nedir?",
            "answerTr": "Fotoğrafçılık",
            "qRo": "Care este hobby-ul lui Sarah?",
            "answerRo": "Fotografie",
            "qBs": "Šta je Sarin hobi?",
            "answerBs": "Fotografija",
            "qEs": "¿Cuál es el pasatiempo de Sarah?",
            "answerEs": "Fotografía",
            "qBg": "Какво е хобито на Сара?",
            "answerBg": "Фотография",
            "qEl": "Ποιο είναι το χόμπι της Σάρα;",
            "answerEl": "Φωτογραφία"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "gern",
        "title": "التعبير عن الإعجاب - gern / nicht gern",
        "titleDe": "Gern und nicht gern",
        "explanation": "نستخدم gern للتعبير عن شيء نحبه.",
        "titleEn": "Expression of admiration - gern / nicht gern",
        "explanationEn": "We use gern to express something we like.",
        "titleTr": "Hayranlık ifadesi - gern / nicht gern",
        "explanationTr": "Hoşumuza giden bir şeyi ifade etmek için gern kullanırız.",
        "titleRo": "Exprimarea admirației - gern / nicht gern",
        "explanationRo": "Folosim gern pentru a exprima ceva ce ne place.",
        "titleBs": "Izraz divljenja - gern / nicht gern",
        "explanationBs": "Koristimo gern da izrazimo nešto što nam se sviđa.",
        "titleEs": "Expresión de admiración - gern / nicht gern",
        "explanationEs": "Usamos germen para expresar algo que nos gusta.",
        "titleBg": "Израз на възхищение - gern / nicht gern",
        "explanationBg": "Използваме gern, за да изразим нещо, което харесваме.",
        "titleEl": "Έκφραση θαυμασμού - gern / nicht gern",
        "explanationEl": "Χρησιμοποιούμε το gern για να εκφράσουμε κάτι που μας αρέσει.",
        "rules": [
          {
            "example": "Ich spiele gern Tennis.",
            "translation": "أحب لعب التنس.",
            "note": "gern بعد الفعل",
            "translationEn": "I like to play tennis.",
            "noteEn": "gern after the verb",
            "translationTr": "Tenis oynamayı severim.",
            "noteTr": "fiilden sonra gern",
            "translationRo": "Îmi place să joc tenis.",
            "noteRo": "gern după verb",
            "translationBs": "Volim da igram tenis.",
            "noteBs": "gern iza glagola",
            "translationEs": "Me gusta jugar tenis.",
            "noteEs": "gern después del verbo",
            "translationBg": "Обичам да играя тенис.",
            "noteBg": "gern след глагола",
            "translationEl": "Μου αρέσει να παίζω τένις.",
            "noteEl": "γερν μετά το ρήμα"
          },
          {
            "example": "Ich lese nicht gern.",
            "translation": "لا أحب القراءة.",
            "note": "nicht gern = لا أحب",
            "translationEn": "I don't like reading.",
            "noteEn": "nicht gern = I don't like",
            "translationTr": "Okumayı sevmiyorum.",
            "noteTr": "nicht gern = sevmiyorum",
            "translationRo": "Nu-mi place să citesc.",
            "noteRo": "nicht gern = nu-mi place",
            "translationBs": "Ne volim čitati.",
            "noteBs": "nicht gern = Ne sviđa mi se",
            "translationEs": "No me gusta leer.",
            "noteEs": "nicht gern = no me gusta",
            "translationBg": "Не обичам да чета.",
            "noteBg": "nicht gern = не ми харесва",
            "translationEl": "Δεν μου αρέσει να διαβάζω.",
            "noteEl": "nicht gern = δεν μου αρέσει"
          },
          {
            "example": "Ich schwimme sehr gern.",
            "translation": "أحب السباحة كثيراً.",
            "note": "sehr gern = أحب جداً",
            "translationEn": "I like swimming very much.",
            "noteEn": "sehr gern = I love very much",
            "translationTr": "Yüzmeyi çok seviyorum.",
            "noteTr": "sehr gern = çok seviyorum",
            "translationRo": "Îmi place foarte mult să înot.",
            "noteRo": "sehr gern = Iubesc foarte mult",
            "translationBs": "Jako volim plivanje.",
            "noteBs": "sehr gern = Mnogo volim",
            "translationEs": "Me gusta mucho nadar.",
            "noteEs": "sehr gern = te amo mucho",
            "translationBg": "Много обичам да плувам.",
            "noteBg": "sehr gern = много обичам",
            "translationEl": "Μου αρέσει πολύ το κολύμπι.",
            "noteEl": "σεχρ γερν = αγαπώ πολύ"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Ich spiele gern Fußball. Was bedeutet 'gern'?",
        "questionAr": "ما معنى gern هنا؟",
        "options": [
          "لا أحب",
          "أحب/يعجبني",
          "أستطيع",
          "يجب"
        ],
        "answer": 1,
        "questionEn": "What does gern mean here?",
        "questionTr": "Gern burada ne anlama geliyor?",
        "questionRo": "Ce înseamnă gern aici?",
        "questionBs": "Šta gern znači ovdje?",
        "questionEs": "¿Qué significa gern aquí?",
        "questionBg": "Какво означава gern тук?",
        "questionEl": "Τι σημαίνει εδώ το Gern;"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Was machst du gern?",
        "ar": "ماذا تحب أن تفعل؟",
        "en": "What do you like to do?",
        "tr": "Ne yapmayı seversin?",
        "ro": "Ce îţi place să faci?",
        "bs": "šta voliš da radiš?",
        "es": "¿Qué te gusta hacer?",
        "bg": "какво обичаш да правиш",
        "el": "Τι σου αρέσει να κάνεις;"
      },
      {
        "de": "Ich spiele gern ...",
        "ar": "أحب لعب ...",
        "en": "I like to play...",
        "tr": "oynamayı severim...",
        "ro": "imi place sa ma joc...",
        "bs": "volim da se igram...",
        "es": "me gusta jugar...",
        "bg": "обичам да играя...",
        "el": "Μου αρέσει να παίζω..."
      },
      {
        "de": "Ich lese/höre/sehe gern ...",
        "ar": "أحب قراءة/سماع/مشاهدة ...",
        "en": "I like reading/listening/watching...",
        "tr": "Okumayı/dinlemeyi/izlemeyi severim...",
        "ro": "Îmi place să citesc/ascult/văd...",
        "bs": "Volim da čitam/slušam/gledam...",
        "es": "Me gusta leer/escuchar/mirar...",
        "bg": "Обичам да чета/слушам/гледам...",
        "el": "Μου αρέσει να διαβάζω/ακούω/βλέπω…"
      },
      {
        "de": "Das macht mir Spaß!",
        "ar": "هذا يسعدني!",
        "en": "I find that fun!",
        "tr": "Bunu eğlenceli buluyorum!",
        "ro": "Mi se pare distractiv!",
        "bs": "To mi je zabavno!",
        "es": "¡Me parece divertido!",
        "bg": "Намирам това за забавно!",
        "el": "Το βρίσκω διασκεδαστικό!"
      },
      {
        "de": "Hast du Lust, ...?",
        "ar": "هل تريد ...؟",
        "en": "Do you feel like, ...?",
        "tr": "Şöyle mi hissediyorsun...?",
        "ro": "Ai chef,...?",
        "bs": "Da li se osjećate kao, ...?",
        "es": "¿Sientes que...?",
        "bg": "Чувствате ли се...?",
        "el": "Νιώθεις ότι...;"
      }
    ]
  },
  {
    "id": 11,
    "titleDe": "Arbeit und Beruf",
    "titleAr": "العمل والمهنة",
    "emoji": "💼",
    "color": "#34d399",
    "titleEn": "Work and profession",
    "titleTr": "İş ve meslek",
    "titleRo": "Munca si profesie",
    "titleBs": "Posao i profesija",
    "titleEs": "Trabajo y profesión",
    "titleBg": "Работа и професия",
    "titleEl": "Εργασία και επάγγελμα",
    "topics": [
      "المهن",
      "بيئة العمل",
      "البحث عن عمل"
    ],
    "topicsEn": [
      "Professions",
      "Work environment",
      "Search for work"
    ],
    "topicsTr": [
      "Meslekler",
      "Çalışma ortamı",
      "İş ara"
    ],
    "topicsRo": [
      "Profesii",
      "Mediul de lucru",
      "Caută de lucru"
    ],
    "topicsBs": [
      "Profesije",
      "Radno okruženje",
      "Traži posao"
    ],
    "topicsEs": [
      "Profesiones",
      "Ambiente de trabajo",
      "buscar trabajo"
    ],
    "topicsBg": [
      "Професии",
      "Работна среда",
      "Търсене на работа"
    ],
    "topicsEl": [
      "Επαγγέλματα",
      "Εργασιακό περιβάλλον",
      "Αναζήτηση για δουλειά"
    ],
    "canDo": "أستطيع أن أتحدث عن عملي وأفهم إعلانات الوظائف",
    "canDoDe": "Ich kann über meinen Beruf sprechen und Stellenanzeigen verstehen",
    "canDoEn": "I can talk about my work and understand job advertisements",
    "canDoTr": "İşim hakkında konuşabiliyorum ve iş ilanlarını anlayabiliyorum",
    "canDoRo": "Pot să vorbesc despre munca mea și să înțeleg anunțurile de angajare",
    "canDoBs": "Mogu pričati o svom poslu i razumjeti oglase za posao",
    "canDoEs": "Puedo hablar sobre mi trabajo y entender los anuncios de empleo.",
    "canDoBg": "Мога да говоря за работата си и да разбирам обявите за работа",
    "canDoEl": "Μπορώ να μιλήσω για τη δουλειά μου και να κατανοήσω τις αγγελίες εργασίας",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/32_langenschidt_-_10.2_-_arbeitsalltag.mp3",
        "label": "10.2 - Arbeitsalltag",
        "labelAr": "روتين العمل اليومي",
        "labelEn": "Daily work routine",
        "labelTr": "Günlük çalışma rutini",
        "labelRo": "Rutina zilnică de lucru",
        "labelBs": "Dnevna radna rutina",
        "labelEs": "Rutina de trabajo diaria",
        "labelBg": "Ежедневна работа",
        "labelEl": "Καθημερινή ρουτίνα εργασίας"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/33_langenschidt_-_10.5_-_im_personalburo.mp3",
        "label": "10.5 - Im Personalbüro",
        "labelAr": "في مكتب شؤون الموظفين",
        "labelEn": "In the Personnel Office",
        "labelTr": "Personel Dairesi'nde",
        "labelRo": "În Biroul de Personal",
        "labelBs": "U Uredu za kadrove",
        "labelEs": "En la oficina de personal",
        "labelBg": "В службата за персонал",
        "labelEl": "Στο Γραφείο Προσωπικού"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/36_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_1.mp3",
        "label": "10.10 - Telefongespräch (1)",
        "labelAr": "مكالمة هاتفية 1",
        "labelEn": "Phone call 1",
        "labelTr": "Telefon görüşmesi 1",
        "labelRo": "Apel telefonic 1",
        "labelBs": "Telefonski poziv 1",
        "labelEs": "llamada telefónica 1",
        "labelBg": "Телефонно обаждане 1",
        "labelEl": "Τηλεφωνική κλήση 1"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/37_langenschidt_-_10.10_-_zwei_telefongesprache,_gesprach_2.mp3",
        "label": "10.10 - Telefongespräch (2)",
        "labelAr": "مكالمة هاتفية 2",
        "labelEn": "Phone call 2",
        "labelTr": "Telefon görüşmesi 2",
        "labelRo": "Apel telefonic 2",
        "labelBs": "Telefonski poziv 2",
        "labelEs": "llamada telefónica 2",
        "labelBg": "Телефонно обаждане 2",
        "labelEl": "Τηλεφωνική κλήση 2"
      }
    ],
    "dialogs": [
      {
        "title": "Was sind Sie von Beruf?",
        "titleAr": "ما مهنتك؟",
        "titleEn": "What is your profession?",
        "titleTr": "Mesleğiniz nedir?",
        "titleRo": "Care este profesia ta?",
        "titleBs": "Koja je tvoja profesija?",
        "titleEs": "¿Cuál es tu profesión?",
        "titleBg": "каква си професия",
        "titleEl": "Ποιο είναι το επάγγελμά σας;",
        "lines": [
          {
            "speaker": "A",
            "de": "Was sind Sie von Beruf?",
            "ar": "ما مهنتك؟",
            "en": "What is your profession?",
            "tr": "Mesleğiniz nedir?",
            "ro": "Care este profesia ta?",
            "bs": "Koja je tvoja profesija?",
            "es": "¿Cuál es tu profesión?",
            "bg": "каква си професия",
            "el": "Ποιο είναι το επάγγελμά σας;"
          },
          {
            "speaker": "B",
            "de": "Ich bin Ärztin. Und Sie?",
            "ar": "أنا طبيبة. وأنتَ؟",
            "en": "I am a doctor. And you?",
            "tr": "Ben doktorum. Ve sen?",
            "ro": "Sunt doctor. Și tu?",
            "bs": "Ja sam doktor. A ti?",
            "es": "Soy médico. ¿Y tú?",
            "bg": "Аз съм лекар. а ти",
            "el": "Είμαι γιατρός. Και εσύ;"
          },
          {
            "speaker": "A",
            "de": "Ich bin Ingenieur. Ich arbeite bei einer Computerfirma.",
            "ar": "أنا مهندس. أعمل في شركة حاسوب.",
            "en": "I am an engineer. I work in a computer company.",
            "tr": "Mühendisim. Bir bilgisayar şirketinde çalışıyorum.",
            "ro": "Sunt inginer. Lucrez într-o companie de calculatoare.",
            "bs": "Ja sam inžinjer. Radim u kompjuterskoj kompaniji.",
            "es": "Soy un ingeniero. Trabajo en una empresa de informática.",
            "bg": "Аз съм инженер. Работя в компютърна фирма.",
            "el": "Είμαι μηχανικός. Δουλεύω σε εταιρεία υπολογιστών."
          },
          {
            "speaker": "B",
            "de": "Das ist interessant! Ich arbeite im Krankenhaus.",
            "ar": "هذا مثير للاهتمام! أنا أعمل في المستشفى.",
            "en": "This is interesting! I work in a hospital.",
            "tr": "Bu ilginç! Bir hastanede çalışıyorum.",
            "ro": "Acest lucru este interesant! Lucrez într-un spital.",
            "bs": "Ovo je zanimljivo! Radim u bolnici.",
            "es": "¡Esto es interesante! Trabajo en un hospital.",
            "bg": "Това е интересно! Работя в болница.",
            "el": "Αυτό είναι ενδιαφέρον! Δουλεύω σε νοσοκομείο."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Stellenanzeige",
        "titleAr": "إعلان وظيفة",
        "titleEn": "Job advertisement",
        "titleTr": "İş ilanı",
        "titleRo": "Anunț de angajare",
        "titleBs": "Oglas za posao",
        "titleEs": "anuncio de trabajo",
        "titleBg": "Обява за работа",
        "titleEl": "αγγελία εργασίας",
        "text": [
          {
            "de": "Gesucht: Koch/Köchin",
            "ar": "مطلوب: طباخ/طباخة",
            "en": "Wanted: Chef/cook",
            "tr": "Aranan: Şef/aşçı",
            "ro": "Caut: Bucătar/bucătar",
            "bs": "Traže se: kuhar/kuhar",
            "es": "Se busca: Chef/cocinero",
            "bg": "Търси се: Главен готвач/готвач",
            "el": "Ζητείται: Σεφ/μάγειρας"
          },
          {
            "de": "Wir suchen einen erfahrenen Koch.",
            "ar": "نبحث عن طباخ ذي خبرة.",
            "en": "We are looking for an experienced chef.",
            "tr": "Tecrübeli aşçı arıyoruz.",
            "ro": "Cautam un bucatar cu experienta.",
            "bs": "Tražimo iskusnog kuhara.",
            "es": "Buscamos cocinero con experiencia.",
            "bg": "Търсим готвач с опит.",
            "el": "Αναζητούμε έμπειρο σεφ."
          },
          {
            "de": "Arbeitszeit: 40 Stunden pro Woche.",
            "ar": "ساعات العمل: 40 ساعة في الأسبوع.",
            "en": "Working hours: 40 hours per week.",
            "tr": "Çalışma saatleri: Haftada 40 saat.",
            "ro": "Program de lucru: 40 de ore pe săptămână.",
            "bs": "Radno vrijeme: 40 sati sedmično.",
            "es": "Jornada laboral: 40 horas semanales.",
            "bg": "Работно време: 40 часа седмично.",
            "el": "Ώρες εργασίας: 40 ώρες την εβδομάδα."
          },
          {
            "de": "Gehalt: 2500 Euro pro Monat.",
            "ar": "الراتب: 2500 يورو في الشهر.",
            "en": "Salary: 2,500 euros per month.",
            "tr": "Maaş: Aylık 2.500 Euro.",
            "ro": "Salariu: 2.500 euro pe luna.",
            "bs": "Plata: 2.500 eura mjesečno.",
            "es": "Salario: 2.500 euros al mes.",
            "bg": "Заплата: 2500 евро на месец.",
            "el": "Μισθός: 2.500 ευρώ το μήνα."
          },
          {
            "de": "Bitte bewerben Sie sich per E-Mail.",
            "ar": "يرجى التقدم عبر البريد الإلكتروني.",
            "en": "Please apply via email.",
            "tr": "Lütfen e-posta yoluyla başvurunuz.",
            "ro": "Vă rugăm să aplicați prin e-mail.",
            "bs": "Molimo prijavite se putem e-pošte.",
            "es": "Por favor presente su solicitud por correo electrónico.",
            "bg": "Моля, кандидатствайте по имейл.",
            "el": "Παρακαλούμε υποβάλετε αίτηση μέσω email."
          }
        ],
        "questions": [
          {
            "q": "Wie viel Stunden arbeitet man pro Woche?",
            "qAr": "كم ساعة في الأسبوع؟",
            "answer": "40 Stunden",
            "answerAr": "40 ساعة",
            "qEn": "How many hours a week?",
            "answerEn": "40 hours",
            "qTr": "Haftada kaç saat?",
            "answerTr": "40 saat",
            "qRo": "Câte ore pe săptămână?",
            "answerRo": "40 de ore",
            "qBs": "Koliko sati sedmično?",
            "answerBs": "40 sati",
            "qEs": "¿Cuántas horas a la semana?",
            "answerEs": "40 horas",
            "qBg": "Колко часа седмично?",
            "answerBg": "40 часа",
            "qEl": "Πόσες ώρες την εβδομάδα;",
            "answerEl": "40 ώρες"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "berufe-genus",
        "title": "المهن - المذكر والمؤنث",
        "titleDe": "Berufe: maskulin und feminin",
        "explanation": "في الألمانية المهن لها صيغة مذكر ومؤنث.",
        "titleEn": "Professions - masculine and feminine",
        "explanationEn": "In German, professions have a masculine and feminine form.",
        "titleTr": "Meslekler - eril ve dişil",
        "explanationTr": "Almanca'da mesleklerin eril ve dişil biçimleri vardır.",
        "titleRo": "Profesii - masculine și feminine",
        "explanationRo": "În germană, profesiile au o formă masculină și feminină.",
        "titleBs": "Profesije - muške i ženske",
        "explanationBs": "U njemačkom jeziku profesije imaju muški i ženski rod.",
        "titleEs": "Profesiones: masculinas y femeninas.",
        "explanationEs": "En alemán las profesiones tienen forma masculina y femenina.",
        "titleBg": "Професии - мъжки и женски",
        "explanationBg": "На немски език професиите имат мъжка и женска форма.",
        "titleEl": "Επαγγέλματα - αρσενικά και θηλυκά",
        "explanationEl": "Στα γερμανικά, τα επαγγέλματα έχουν ανδρική και γυναικεία μορφή.",
        "rules": [
          {
            "example": "der Arzt → die Ärztin",
            "translation": "الطبيب → الطبيبة",
            "note": "نضيف -in للمؤنث",
            "translationEn": "Doctor → female doctor",
            "noteEn": "We add -in to the feminine",
            "translationTr": "Doktor → kadın doktor",
            "noteTr": "Dişil sözcüğüne -in ekliyoruz",
            "translationRo": "Doctor → femeie doctor",
            "noteRo": "Adăugăm -in la feminin",
            "translationBs": "Doktor → doktorica",
            "noteBs": "Mi dodajemo ženskom",
            "translationEs": "Doctor → doctora",
            "noteEs": "Agregamos -in al femenino",
            "translationBg": "Лекар → жена лекар",
            "noteBg": "Добавяме -in към женския род",
            "translationEl": "Γιατρός → γυναίκα γιατρός",
            "noteEl": "Προσθέτουμε -in στο θηλυκό"
          },
          {
            "example": "der Lehrer → die Lehrerin",
            "translation": "المعلم → المعلمة",
            "note": "",
            "translationEn": "Teacher → parameter",
            "noteEn": "",
            "translationTr": "Öğretmen → parametre",
            "noteTr": "",
            "translationRo": "Profesor → parametru",
            "noteRo": "",
            "translationBs": "Nastavnik → parametar",
            "noteBs": "",
            "translationEs": "Profesor → parámetro",
            "noteEs": "",
            "translationBg": "Учител → параметър",
            "noteBg": "",
            "translationEl": "Δάσκαλος → παράμετρος",
            "noteEl": ""
          },
          {
            "example": "der Koch → die Köchin",
            "translation": "الطباخ → الطباخة",
            "note": "",
            "translationEn": "Chef → cook",
            "noteEn": "",
            "translationTr": "şef → aşçı",
            "noteTr": "",
            "translationRo": "Bucătar → bucătar",
            "noteRo": "",
            "translationBs": "Kuvar → kuhar",
            "noteBs": "",
            "translationEs": "cocinero → cocinar",
            "noteEs": "",
            "translationBg": "Главен готвач → готвач",
            "noteBg": "",
            "translationEl": "Σεφ → μάγειρας",
            "noteEl": ""
          },
          {
            "example": "der Ingenieur → die Ingenieurin",
            "translation": "المهندس → المهندسة",
            "note": "",
            "translationEn": "Engineer → Engineered",
            "noteEn": "",
            "translationTr": "Mühendis → Mühendislik",
            "noteTr": "",
            "translationRo": "Inginer → Proiectat",
            "noteRo": "",
            "translationBs": "Inženjer → Inženjer",
            "noteBs": "",
            "translationEs": "Ingeniero → Diseñado",
            "noteEs": "",
            "translationBg": "Инженер → Проектиран",
            "noteBg": "",
            "translationEl": "Μηχανικός → Μηχανικός",
            "noteEl": ""
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Was ist die weibliche Form von 'Arzt'?",
        "questionAr": "ما صيغة المؤنث لـ Arzt (طبيب)؟",
        "options": [
          "Artzt",
          "Ärztin",
          "Arzterin",
          "Ärzten"
        ],
        "answer": 1,
        "questionEn": "What is the feminine form of Arzt (doctor)?",
        "questionTr": "Arzt'ın (doktor) dişil formu nedir?",
        "questionRo": "Care este forma feminină a lui Arzt (medic)?",
        "questionBs": "Koji je ženski oblik Arzt (doktor)?",
        "questionEs": "¿Cuál es la forma femenina de Arzt (médico)?",
        "questionBg": "Каква е женската форма на Arzt (лекар)?",
        "questionEl": "Ποια είναι η γυναικεία μορφή του Arzt (γιατρός);"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich bin ... von Beruf.",
        "ar": "مهنتي ...",
        "en": "I am... by profession.",
        "tr": "Ben... mesleğim gereği.",
        "ro": "Sunt... de profesie.",
        "bs": "Ja sam... po profesiji.",
        "es": "Lo soy... de profesión.",
        "bg": "Аз съм... по професия.",
        "el": "Είμαι... στο επάγγελμα."
      },
      {
        "de": "Ich arbeite bei/in ...",
        "ar": "أعمل في ...",
        "en": "I work at/in...",
        "tr": "Şurada çalışıyorum:",
        "ro": "Lucrez la/în...",
        "bs": "radim u/u...",
        "es": "Trabajo en/en...",
        "bg": "Работя в/в...",
        "el": "Δουλεύω σε/στο..."
      },
      {
        "de": "Was sind Sie von Beruf?",
        "ar": "ما مهنتك؟",
        "en": "What is your occupation?",
        "tr": "Mesleğiniz nedir?",
        "ro": "Care este ocupația ta?",
        "bs": "Koje je tvoje zanimanje?",
        "es": "¿Cuál es tu ocupación?",
        "bg": "каква е вашата професия",
        "el": "Ποιο είναι το επάγγελμά σας;"
      },
      {
        "de": "Ich suche Arbeit.",
        "ar": "أبحث عن عمل.",
        "en": "I'm looking for work.",
        "tr": "İş arıyorum.",
        "ro": "Caut de lucru.",
        "bs": "Tražim posao.",
        "es": "Estoy buscando trabajo.",
        "bg": "търся си работа.",
        "el": "Ψάχνω για δουλειά."
      }
    ]
  },
  {
    "id": 12,
    "titleDe": "Essen und Trinken",
    "titleAr": "الأكل والشرب",
    "emoji": "🍽️",
    "color": "#fb923c",
    "titleEn": "Eating and drinking",
    "titleTr": "Yeme ve içme",
    "titleRo": "Mănâncă și bea",
    "titleBs": "Jelo i piće",
    "titleEs": "Comer y beber",
    "titleBg": "Ядене и пиене",
    "titleEl": "Φαγοπότι",
    "topics": [
      "المطعم",
      "الطلب",
      "تفضيلات الطعام",
      "الدفع"
    ],
    "topicsEn": [
      "The restaurant",
      "demand",
      "Food preferences",
      "Payment"
    ],
    "topicsTr": [
      "Restoran",
      "talep etmek",
      "Yemek tercihleri",
      "Ödeme"
    ],
    "topicsRo": [
      "Restaurantul",
      "cerere",
      "Preferințe alimentare",
      "Plată"
    ],
    "topicsBs": [
      "Restoran",
      "potražnja",
      "Preference u hrani",
      "Plaćanje"
    ],
    "topicsEs": [
      "el restaurante",
      "demanda",
      "Preferencias alimentarias",
      "Pago"
    ],
    "topicsBg": [
      "Ресторантът",
      "търсене",
      "Хранителни предпочитания",
      "Плащане"
    ],
    "topicsEl": [
      "Το εστιατόριο",
      "ζήτηση",
      "Διατροφικές προτιμήσεις",
      "Πληρωμή"
    ],
    "canDo": "أستطيع أن أطلب في مطعم وأدفع الحساب",
    "canDoDe": "Ich kann im Restaurant bestellen und bezahlen",
    "canDoEn": "I can order at a restaurant and pay the bill",
    "canDoTr": "Bir restoranda sipariş verebilirim ve faturayı ödeyebilirim",
    "canDoRo": "Pot să comand la un restaurant și să plătesc factura",
    "canDoBs": "Mogu naručiti u restoranu i platiti račun",
    "canDoEs": "Puedo ordenar en un restaurante y pagar la cuenta.",
    "canDoBg": "Мога да поръчам в ресторант и да платя сметката",
    "canDoEl": "Μπορώ να παραγγείλω σε ένα εστιατόριο και να πληρώσω τον λογαριασμό",
    "audioFiles": [
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/51_langenschidt_-_12.3_-_eine_reise_buchen.mp3",
        "label": "12.3 - Eine Reise buchen",
        "labelAr": "حجز رحلة سفر",
        "labelEn": "Book a travel trip",
        "labelTr": "Seyahat rezervasyonu yapın",
        "labelRo": "Rezervați o călătorie",
        "labelBs": "Rezervirajte putovanje",
        "labelEs": "Reservar un viaje de viaje",
        "labelBg": "Резервирайте пътуване",
        "labelEl": "Κλείστε ένα ταξιδιωτικό ταξίδι"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/52_langenschidt_-_12.6_-_fahrkarten_kaufen.mp3",
        "label": "12.6 - Fahrkarten kaufen",
        "labelAr": "شراء التذاكر",
        "labelEn": "Buy tickets",
        "labelTr": "Bilet satın al",
        "labelRo": "Cumpărați bilete",
        "labelBs": "Kupite karte",
        "labelEs": "comprar entradas",
        "labelBg": "Купете билети",
        "labelEl": "Αγορά εισιτηρίων"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/53_langenschidt_-_12.7_-_an_der_rezeption.mp3",
        "label": "12.7 - An der Rezeption",
        "labelAr": "في الاستقبال",
        "labelEn": "At the reception",
        "labelTr": "Resepsiyonda",
        "labelRo": "La receptie",
        "labelBs": "Na recepciji",
        "labelEs": "en la recepcion",
        "labelBg": "На рецепцията",
        "labelEl": "Στη ρεσεψιόν"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/54_langenschidt_-_12.8_-_das_wetter.mp3",
        "label": "12.8 - Das Wetter",
        "labelAr": "الطقس",
        "labelEn": "the weather",
        "labelTr": "hava",
        "labelRo": "vremea",
        "labelBs": "vrijeme",
        "labelEs": "El clima",
        "labelBg": "времето",
        "labelEl": "ο καιρός"
      },
      {
        "file": "Berliner Platz 1 neu/Audio/Berliner Platz 1 neu - A1 Lernbuch/CD2/56_langenschidt_-_12.12_-_ein_kursausflug,_dialog_1.mp3",
        "label": "12.12 - Exkursion (1)",
        "labelAr": "رحلة الصف 1",
        "labelEn": "Class trip 1",
        "labelTr": "Sınıf gezisi 1",
        "labelRo": "Călătoria de clasă 1",
        "labelBs": "Razredni izlet 1",
        "labelEs": "viaje de clase 1",
        "labelBg": "Класно пътуване 1",
        "labelEl": "Εκδρομή στην τάξη 1"
      }
    ],
    "dialogs": [
      {
        "title": "Im Restaurant",
        "titleAr": "في المطعم",
        "titleEn": "In the restaurant",
        "titleTr": "Restoranda",
        "titleRo": "În restaurant",
        "titleBs": "U restoranu",
        "titleEs": "en el restaurante",
        "titleBg": "В ресторанта",
        "titleEl": "Στο εστιατόριο",
        "lines": [
          {
            "speaker": "Kellner",
            "de": "Was darf es sein?",
            "ar": "ماذا تتفضل؟",
            "en": "What would you like?",
            "tr": "Ne alırsınız?",
            "ro": "Ce ai dori?",
            "bs": "sta bi zeleo?",
            "es": "¿Qué le gustaría?",
            "bg": "Какво бихте искали?",
            "el": "Τι θα θέλατε;"
          },
          {
            "speaker": "Gast",
            "de": "Ich möchte die Suppe und dann das Schnitzel.",
            "ar": "أريد الشوربة ثم الشنيتزل.",
            "en": "I want soup and then schnitzel.",
            "tr": "Çorba ve ardından şnitzel istiyorum.",
            "ro": "Vreau supă și apoi șnițel.",
            "bs": "Hoću supu i onda šniclu.",
            "es": "Quiero sopa y luego schnitzel.",
            "bg": "Искам супа и после шницел.",
            "el": "Θέλω σούπα και μετά σνίτσελ."
          },
          {
            "speaker": "Kellner",
            "de": "Was möchten Sie trinken?",
            "ar": "ماذا تريد أن تشرب؟",
            "en": "What do you want to drink?",
            "tr": "Ne içmek istersin?",
            "ro": "Ce vrei să bei?",
            "bs": "Šta želiš da popiješ?",
            "es": "¿Qué quieres beber?",
            "bg": "какво искаш да пиеш",
            "el": "Τι θέλετε να πιείτε;"
          },
          {
            "speaker": "Gast",
            "de": "Ein Wasser, bitte.",
            "ar": "ماء من فضلك.",
            "en": "Water please.",
            "tr": "Su lütfen.",
            "ro": "Apă, vă rog.",
            "bs": "Voda molim.",
            "es": "Puede traerme agua.",
            "bg": "Вода, моля.",
            "el": "Θα ήθελα νερό, παρακαλώ."
          },
          {
            "speaker": "Gast",
            "de": "Entschuldigung! Zahlen, bitte!",
            "ar": "عذراً! الحساب من فضلك!",
            "en": "Sorry! Account please!",
            "tr": "Üzgünüm! Hesap lütfen!",
            "ro": "Îmi pare rău! Vă rog cont!",
            "bs": "Izvinite! Račun molim!",
            "es": "¡Lo siento! ¡Cuenta por favor!",
            "bg": "Съжалявам! Сметка моля!",
            "el": "Συγνώμη! Λογαριασμός παρακαλώ!"
          },
          {
            "speaker": "Kellner",
            "de": "Das macht 18 Euro 50, bitte.",
            "ar": "المجموع 18 يورو و50 سنتاً.",
            "en": "The total is 18 euros and 50 cents.",
            "tr": "Toplam 18 euro 50 sent.",
            "ro": "Totalul este de 18 euro și 50 de cenți.",
            "bs": "Ukupno je 18 eura i 50 centi.",
            "es": "El total son 18 euros con 50 céntimos.",
            "bg": "Общата сума е 18 евро и 50 цента.",
            "el": "Το σύνολο είναι 18 ευρώ και 50 λεπτά."
          },
          {
            "speaker": "Gast",
            "de": "Stimmt so. Das ist für Sie.",
            "ar": "احتفظ بالباقي. هذا لك.",
            "en": "Keep the change. This is for you.",
            "tr": "Üstü kalsın. Bu sizin için.",
            "ro": "Păstrați restul. Este pentru dumneavoastră.",
            "bs": "Zadrži kusur. Ovo je za tebe.",
            "es": "Quédese con el cambio. Esto es para ti.",
            "bg": "Запазете рестото. това е за вас",
            "el": "Κρατήστε τα ρέστα. Αυτά είναι για σάς."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Die Speisekarte",
        "titleAr": "قائمة الطعام",
        "titleEn": "menu",
        "titleTr": "menü",
        "titleRo": "meniu",
        "titleBs": "meni",
        "titleEs": "menú",
        "titleBg": "меню",
        "titleEl": "μενού",
        "text": [
          {
            "de": "Vorspeisen: Suppe 4,50 € / Salat 5,00 €",
            "ar": "المقبلات: شوربة 4.50 يورو / سلطة 5 يورو",
            "en": "Appetizers: soup 4.50 euros / salad 5 euros",
            "tr": "Mezeler: çorba 4,50 euro / salata 5 euro",
            "ro": "Aperitive: supa 4,50 euro / salata 5 euro",
            "bs": "Predjela: supa 4,50 eura / salata 5 eura",
            "es": "Aperitivos: sopa 4,50 euros / ensalada 5 euros",
            "bg": "Предястия: супа 4,50 евро / салата 5 евро",
            "el": "Ορεκτικά: σούπα 4,50 ευρώ / σαλάτα 5 ευρώ"
          },
          {
            "de": "Hauptspeisen: Schnitzel 13,00 € / Pizza 10,50 €",
            "ar": "الأطباق الرئيسية: شنيتزل 13 يورو / بيتزا 10.50 يورو",
            "en": "Main dishes: Schnitzel €13 / Pizza €10.50",
            "tr": "Ana yemekler: Schnitzel 13 € / Pizza 10,50 €",
            "ro": "Feluri principale: Schnitzel 13 € / Pizza 10,50 €",
            "bs": "Glavna jela: Šnicla 13 € / Pizza 10,50 €",
            "es": "Platos principales: Schnitzel 13 € / Pizza 10,50 €",
            "bg": "Основни ястия: Шницел 13 € / Пица 10,50 €",
            "el": "Κύρια πιάτα: Σνίτσελ 13 € / Πίτσα 10,50 €"
          },
          {
            "de": "Dessert: Eis 3,50 € / Kuchen 4,00 €",
            "ar": "الحلوى: آيس كريم 3.50 يورو / كيك 4 يورو",
            "en": "Dessert: Ice cream €3.50 / Cake €4",
            "tr": "Tatlı: Dondurma 3,50 € / Kek 4 €",
            "ro": "Desert: Inghetata 3,50€ / Tort 4€",
            "bs": "Desert: Sladoled 3,50 € / Kolač 4 €",
            "es": "Postre: Helado 3,50€ / Tarta 4€",
            "bg": "Десерт: Сладолед 3,50 € / Торта 4 €",
            "el": "Επιδόρπιο: Παγωτό 3,50€ / Κέικ 4€"
          },
          {
            "de": "Getränke: Wasser 2,00 € / Bier 3,50 €",
            "ar": "المشروبات: ماء 2 يورو / بيرة 3.50 يورو",
            "en": "Drinks: water 2 euros / beer 3.50 euros",
            "tr": "İçecekler: su 2 euro / bira 3,50 euro",
            "ro": "Băuturi: apă 2 euro / bere 3,50 euro",
            "bs": "Piće: voda 2 eura / pivo 3,50 eura",
            "es": "Bebidas: agua 2 euros / cerveza 3,50 euros",
            "bg": "Напитки: вода 2 евро / бира 3,50 евро",
            "el": "Ποτά: νερό 2 ευρώ / μπύρα 3,50 ευρώ"
          }
        ],
        "questions": [
          {
            "q": "Was kostet das Schnitzel?",
            "qAr": "بكم الشنيتزل؟",
            "answer": "13,00 Euro",
            "answerAr": "13 يورو",
            "qEn": "How much is schnitzel?",
            "answerEn": "13 euros",
            "qTr": "Şnitzel ne kadar?",
            "answerTr": "13 euro",
            "qRo": "Cât costă șnițelul?",
            "answerRo": "13 euro",
            "qBs": "Koliko košta šnicle?",
            "answerBs": "13 eura",
            "qEs": "¿Cuánto cuesta el escalope?",
            "answerEs": "13euros",
            "qBg": "Колко струва шницел?",
            "answerBg": "13 евро",
            "qEl": "Πόσο είναι το σνίτσελ;",
            "answerEl": "13 ευρώ"
          }
        ]
      }
    ],
    "grammar": [
      {
        "id": "indefinitpronomen",
        "title": "الضمائر غير المحددة - man / es gibt",
        "titleDe": "man und es gibt",
        "explanation": "",
        "titleEn": "Indefinite pronouns - man/es gibt",
        "explanationEn": "",
        "titleTr": "Belirsiz zamirler - man/es gibt",
        "explanationTr": "",
        "titleRo": "Pronume nehotărât - man/es gibt",
        "explanationRo": "",
        "titleBs": "Neodređene zamjenice - man/es gibt",
        "explanationBs": "",
        "titleEs": "Pronombres indefinidos - man/es gibt",
        "explanationEs": "",
        "titleBg": "Неопределителни местоимения - man/es gibt",
        "explanationBg": "",
        "titleEl": "Αόριστες αντωνυμίες - man/es gibt",
        "explanationEl": "",
        "rules": [
          {
            "example": "Man isst in Deutschland viel Brot.",
            "translation": "يأكل الناس في ألمانيا الكثير من الخبز.",
            "note": "man = الناس/أحد",
            "translationEn": "People in Germany eat a lot of bread.",
            "noteEn": "man = people/one",
            "translationTr": "Almanya'da insanlar çok fazla ekmek yiyor.",
            "noteTr": "adam = insanlar/bir",
            "translationRo": "Oamenii din Germania mănâncă multă pâine.",
            "noteRo": "om = oameni/unul",
            "translationBs": "Ljudi u Nemačkoj jedu mnogo hleba.",
            "noteBs": "čovjek = ljudi/jedan",
            "translationEs": "La gente en Alemania come mucho pan.",
            "noteEs": "hombre = gente/uno",
            "translationBg": "Хората в Германия ядат много хляб.",
            "noteBg": "човек = хора/един",
            "translationEl": "Οι άνθρωποι στη Γερμανία τρώνε πολύ ψωμί.",
            "noteEl": "άνθρωπος = άνθρωποι/ένας"
          },
          {
            "example": "Es gibt heute Schnitzel.",
            "translation": "اليوم يوجد شنيتزل.",
            "note": "es gibt = يوجد",
            "translationEn": "Today there is schnitzel.",
            "noteEn": "es gibt = there is",
            "translationTr": "Bugün şnitzel var.",
            "noteTr": "es gibt = var",
            "translationRo": "Astăzi există șnițel.",
            "noteRo": "es gibt = există",
            "translationBs": "Danas je tu šnicle.",
            "noteBs": "es gibt = postoji",
            "translationEs": "Hoy hay escalope.",
            "noteEs": "es gibt = hay",
            "translationBg": "Днес има шницел.",
            "noteBg": "es gibt = има",
            "translationEl": "Σήμερα υπάρχει σνίτσελ.",
            "noteEl": "es gibt = υπάρχει"
          },
          {
            "example": "Es gibt keine Pizza heute.",
            "translation": "لا يوجد بيتزا اليوم.",
            "note": "es gibt + kein = لا يوجد",
            "translationEn": "No pizza today.",
            "noteEn": "es gibt + kein = none",
            "translationTr": "Bugün pizza yok.",
            "noteTr": "es gibt + kein = yok",
            "translationRo": "Fara pizza azi.",
            "noteRo": "es gibt + kein = none",
            "translationBs": "Nema pice danas.",
            "noteBs": "es gibt + kein = nijedan",
            "translationEs": "Hoy no hay pizza.",
            "noteEs": "es gibt + kein = ninguno",
            "translationBg": "Без пица днес.",
            "noteBg": "es gibt + kein = няма",
            "translationEl": "Χωρίς πίτσα σήμερα.",
            "noteEl": "es gibt + kein = κανένας"
          }
        ]
      }
    ],
    "exercises": [
      {
        "type": "mcq",
        "question": "Zahlen, bitte! Was möchte der Gast?",
        "questionAr": "ماذا يريد الضيف؟",
        "options": [
          "يريد طعاماً إضافياً",
          "يريد الحساب",
          "يريد مشروباً",
          "يريد القائمة"
        ],
        "answer": 1,
        "questionEn": "What does the guest want?",
        "questionTr": "Misafir ne istiyor?",
        "questionRo": "Ce vrea oaspete?",
        "questionBs": "Šta gost želi?",
        "questionEs": "¿Qué quiere el invitado?",
        "questionBg": "Какво иска гостът?",
        "questionEl": "Τι θέλει ο καλεσμένος;"
      },
      {
        "type": "fillblank",
        "question": "_____ gibt heute Schnitzel.",
        "questionAr": "أكمل الجملة",
        "answer": "Es",
        "hint": "es gibt = يوجد",
        "questionEn": "Complete the sentence",
        "questionTr": "Cümleyi tamamla",
        "questionRo": "Completează propoziția",
        "questionBs": "Dopuni rečenicu",
        "questionEs": "Completa la frase",
        "questionBg": "Довърши изречението",
        "questionEl": "Συμπλήρωσε την πρόταση"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Was darf es sein?",
        "ar": "ماذا تتفضل؟",
        "en": "What it may be?",
        "tr": "Ne olabilir?",
        "ro": "Ce poate fi?",
        "bs": "šta bi to moglo biti?",
        "es": "¿Qué puede ser?",
        "bg": "Какво може да бъде?",
        "el": "Τι μπορεί να είναι;"
      },
      {
        "de": "Ich möchte ..., bitte.",
        "ar": "أريد ... من فضلك.",
        "en": "I want..., please.",
        "tr": "Ben... lütfen.",
        "ro": "Vreau..., te rog.",
        "bs": "Želim... molim te.",
        "es": "Quiero..., por favor.",
        "bg": "Искам... моля.",
        "el": "Θέλω... παρακαλώ."
      },
      {
        "de": "Zahlen, bitte!",
        "ar": "الحساب من فضلك!",
        "en": "Please pay!",
        "tr": "Lütfen ödeyin!",
        "ro": "Vă rugăm să plătiți!",
        "bs": "Molimo platite!",
        "es": "¡Por favor paga!",
        "bg": "Моля, платете!",
        "el": "Παρακαλώ πληρώστε!"
      },
      {
        "de": "Stimmt so.",
        "ar": "احتفظ بالباقي.",
        "en": "Keep the change.",
        "tr": "Üstü kalsın.",
        "ro": "Păstrați restul.",
        "bs": "Zadrži kusur.",
        "es": "Quédese con el cambio.",
        "bg": "Запазете рестото.",
        "el": "Κρατήστε τα ρέστα."
      },
      {
        "de": "Das Essen war lecker!",
        "ar": "الطعام كان لذيذاً!",
        "en": "The food was delicious!",
        "tr": "Yemek çok lezzetliydi!",
        "ro": "Mâncarea a fost delicioasă!",
        "bs": "Hrana je bila ukusna!",
        "es": "¡La comida estuvo deliciosa!",
        "bg": "Храната беше вкусна!",
        "el": "Το φαγητό ήταν νόστιμο!"
      }
    ]
  }
];

const CURRICULUM_A2 = [
  {
    "id": 13,
    "emoji": "👕",
    "titleDe": "Das steht dir gut!",
    "color": "#10b981",
    "titleEn": "That suits you well!",
    "titleAr": "هذا يناسبك جيدا!",
    "titleTr": "Bu sana çok yakışıyor!",
    "titleRo": "Asta ți se potrivește bine!",
    "titleBs": "To ti dobro stoji!",
    "titleEs": "¡Eso te queda bien!",
    "titleBg": "Това много ти отива!",
    "titleEl": "Αυτό σου πάει πολύ!",
    "topicsEn": [
      "Clothes and Fashion",
      "Colors",
      "Shopping for clothes"
    ],
    "topics": [
      "الملابس والموضة",
      "الألوان",
      "التسوق للملابس"
    ],
    "topicsTr": [
      "Giyim ve Moda",
      "Renkler",
      "Kıyafet alışverişi"
    ],
    "topicsRo": [
      "Haine și modă",
      "Culori",
      "Cumpărături pentru haine"
    ],
    "topicsBs": [
      "Odjeća i moda",
      "Boje",
      "Kupovina odjeće"
    ],
    "topicsEs": [
      "Ropa y Moda",
      "Bandera",
      "comprando ropa"
    ],
    "topicsBg": [
      "Дрехи и мода",
      "Цветове",
      "Пазаруване на дрехи"
    ],
    "topicsEl": [
      "Ρούχα και μόδα",
      "Χρωματιστά",
      "Αγορές για ρούχα"
    ],
    "canDoEn": "I can talk about clothes and colors, shop for clothing, and give fashion advice.",
    "canDo": "يمكنني التحدث عن الملابس والألوان، وتسوق الملابس، وتقديم النصائح حول الموضة.",
    "canDoDe": "Ich kann über Kleidung und Farben sprechen, Kleidung kaufen und Modetipps geben.",
    "canDoTr": "Kıyafetler ve renkler hakkında konuşabilirim, kıyafet alışverişi yapabilirim ve moda tavsiyeleri verebilirim.",
    "canDoRo": "Pot vorbi despre haine și culori, pot face cumpărături pentru îmbrăcăminte și pot oferi sfaturi despre modă.",
    "canDoBs": "Mogu pričati o odjeći i bojama, kupovati odjeću i davati modne savjete.",
    "canDoEs": "Puedo hablar sobre ropa y colores, comprar ropa y dar consejos de moda.",
    "canDoBg": "Мога да говоря за дрехи и цветове, да пазарувам дрехи и да давам модни съвети.",
    "canDoEl": "Μπορώ να μιλήσω για ρούχα και χρώματα, να ψωνίσω ρούχα και να δώσω συμβουλές μόδας.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track01.mp3",
        "label": "13.1 - Fit sein",
        "labelEn": "13.1 - Being fit",
        "labelAr": "13.1 - اللياقة البدنية",
        "labelTr": "13.1 - Formda olmak",
        "labelRo": "13.1 - A fi în formă",
        "labelBs": "13.1 - Biti u formi",
        "labelEs": "13.1 - Estar en forma",
        "labelBg": "13.1 - Да бъдеш във форма",
        "labelEl": "13.1 - Να είσαι σε φόρμα"
      },
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track02.mp3",
        "label": "13.2 - Kleidung einkaufen",
        "labelEn": "13.2 - Shopping for clothes",
        "labelAr": "13.2 - تسوق الملابس",
        "labelTr": "13.2 - Kıyafet alışverişi",
        "labelRo": "13.2 - Cumpărături pentru haine",
        "labelBs": "13.2 - Kupovina odjeće",
        "labelEs": "13.2 - Compra de ropa",
        "labelBg": "13.2 - Пазаруване на дрехи",
        "labelEl": "13.2 - Αγορές για ρούχα"
      }
    ],
    "dialogs": [
      {
        "title": "In der Kleiderboutique",
        "titleEn": "In the clothing boutique",
        "titleAr": "في بوتيك الملابس",
        "titleTr": "Giyim butiğinde",
        "titleRo": "În magazinul de îmbrăcăminte",
        "titleBs": "U butiku odeće",
        "titleEs": "en la boutique de ropa",
        "titleBg": "В бутика за дрехи",
        "titleEl": "Στην μπουτίκ ρούχων",
        "lines": [
          {
            "speaker": "Kunde",
            "de": "Guten Tag, ich suche eine blaue Jacke.",
            "en": "Good day, I am looking for a blue jacket.",
            "ar": "يوم جيد، أنا أبحث عن سترة زرقاء.",
            "tr": "İyi günler, mavi bir ceket arıyorum.",
            "ro": "Buna ziua, caut o jacheta albastra.",
            "bs": "Dobar dan, tražim plavu jaknu.",
            "es": "Buen día, busco una chaqueta azul.",
            "bg": "Добър ден, търся синьо яке.",
            "el": "Καλημέρα, ψάχνω για μπλε σακάκι."
          },
          {
            "speaker": "Verkäufer",
            "de": "Guten Tag! Welche Größe tragen Sie denn?",
            "en": "Good day! What size do you wear?",
            "ar": "يوم جيد! ما الحجم الذي ترتديه؟",
            "tr": "İyi günler! Kaç beden giyiyorsun?",
            "ro": "Bună ziua! Ce marime porti?",
            "bs": "Dobar dan! Koju veličinu nosiš?",
            "es": "¡Buen día! ¿Qué talla usas?",
            "bg": "Добър ден! какъв размер носиш",
            "el": "Καλημέρα! Τι νούμερο φοράς;"
          },
          {
            "speaker": "Kunde",
            "de": "Ich trage Größe M. Kann ich diese hier anprobieren?",
            "en": "I wear size M. Can I try this one on?",
            "ar": "أرتدي مقاس M. هل يمكنني تجربة هذا المقاس؟",
            "tr": "M beden giyiyorum. Bunu deneyebilir miyim?",
            "ro": "Port mărimea M. Pot să-l încerc pe acesta?",
            "bs": "Nosim veličinu M. Mogu li probati ovu?",
            "es": "Uso talla M. ¿Puedo probarme este?",
            "bg": "Нося размер M. Мога ли да пробвам този?",
            "el": "Φοράω νούμερο M. Μπορώ να το δοκιμάσω;"
          },
          {
            "speaker": "Verkäufer",
            "de": "Ja, natürlich. Die Umkleidekabine ist dort drüben.",
            "en": "Yes, of course. The changing room is over there.",
            "ar": "نعم بالطبع. غرفة تغيير الملابس هناك.",
            "tr": "Evet elbette. Soyunma odası orada.",
            "ro": "Da, desigur. Vestiarul este acolo.",
            "bs": "Da, naravno. Svlačionica je tamo.",
            "es": "Sí, claro. El vestuario está por allí.",
            "bg": "да разбира се Съблекалнята е там.",
            "el": "Ναι, φυσικά. Τα αποδυτήρια είναι εκεί."
          },
          {
            "speaker": "Kunde",
            "de": "Die Jacke passt perfekt. Steht sie mir?",
            "en": "The jacket fits perfectly. Does it suit me?",
            "ar": "السترة تناسب تماما. هل يناسبني؟",
            "tr": "Ceket mükemmel uyum sağlar. Bana uygun mu?",
            "ro": "Jacheta se potrivește perfect. imi convine?",
            "bs": "Jakna savršeno stoji. Da li mi odgovara?",
            "es": "La chaqueta encaja perfectamente. ¿Me conviene?",
            "bg": "Якето стои идеално. подхожда ли ми",
            "el": "Το σακάκι ταιριάζει τέλεια. Μου ταιριάζει;"
          },
          {
            "speaker": "Verkäufer",
            "de": "Ja, die Farbe steht Ihnen hervorragend!",
            "en": "Yes, the color suits you excellently!",
            "ar": "نعم اللون يناسبك بشكل ممتاز!",
            "tr": "Evet, renk sana çok yakışıyor!",
            "ro": "Da, culoarea ți se potrivește de minune!",
            "bs": "Da, boja vam odlično stoji!",
            "es": "¡Sí, el color te sienta genial!",
            "bg": "Да, цветът ти стои страхотно!",
            "el": "Ναι, το χρώμα σου ταιριάζει εξαιρετικά!"
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Kleidung im Alltag",
        "titleEn": "Clothing in Daily Life",
        "titleAr": "الملابس في الحياة اليومية",
        "titleTr": "Günlük Yaşamda Giyim",
        "titleRo": "Îmbrăcămintea în viața de zi cu zi",
        "titleBs": "Odjeća u svakodnevnom životu",
        "titleEs": "Ropa en la vida diaria",
        "titleBg": "Облекло в ежедневието",
        "titleEl": "Τα ρούχα στην καθημερινή ζωή",
        "text": [
          {
            "de": "In Deutschland tragen die Menschen im Alltag meistens praktische Kleidung. Jeans und T-Shirts sind sehr beliebt.",
            "en": "In Germany, people mostly wear practical clothes in daily life. Jeans and T-shirts are very popular.",
            "ar": "في ألمانيا، يرتدي الناس في الغالب ملابس عملية في الحياة اليومية. الجينز والقمصان تحظى بشعبية كبيرة.",
            "tr": "Almanya'da insanlar günlük hayatta çoğunlukla pratik kıyafetler giyiyor. Kot pantolonlar ve tişörtler çok popüler.",
            "ro": "În Germania, oamenii poartă cea mai mare parte haine practice în viața de zi cu zi. Blugii și tricourile sunt foarte populare.",
            "bs": "U Njemačkoj ljudi uglavnom nose praktičnu odjeću u svakodnevnom životu. Traperice i majice su veoma popularne.",
            "es": "En Alemania, la mayoría de la gente usa ropa práctica en la vida diaria. Los jeans y las camisetas son muy populares.",
            "bg": "В Германия хората носят предимно практични дрехи в ежедневието. Дънките и тениските са много популярни.",
            "el": "Στη Γερμανία, οι άνθρωποι φορούν κυρίως πρακτικά ρούχα στην καθημερινή ζωή. Τα τζιν και τα μπλουζάκια είναι πολύ δημοφιλή."
          },
          {
            "de": "Bei der Arbeit tragen viele Männer Hemden und Anzüge, während Frauen Blusen und Kleider bevorzugen.",
            "en": "At work, many men wear shirts and suits, while women prefer blouses and dresses.",
            "ar": "في العمل، يرتدي العديد من الرجال القمصان والبدلات، بينما تفضل النساء البلوزات والفساتين.",
            "tr": "İşyerinde pek çok erkek gömlek ve takım elbise giyerken, kadınlar ise bluz ve elbiseyi tercih ediyor.",
            "ro": "La serviciu, mulți bărbați poartă cămăși și costume, în timp ce femeile preferă bluzele și rochiile.",
            "bs": "Na poslu mnogi muškarci nose košulje i odijela, dok žene više vole bluze i haljine.",
            "es": "En el trabajo, muchos hombres usan camisas y trajes, mientras que las mujeres prefieren blusas y vestidos.",
            "bg": "На работа много мъже носят ризи и костюми, докато жените предпочитат блузи и рокли.",
            "el": "Στη δουλειά πολλοί άνδρες φορούν πουκάμισα και κοστούμια, ενώ οι γυναίκες προτιμούν μπλούζες και φορέματα."
          }
        ],
        "questions": [
          {
            "q": "Was tragen viele Männer bei der Arbeit?",
            "qDe": "Was tragen viele Männer bei der Arbeit?",
            "qEn": "What do many men wear at work?",
            "qAr": "ماذا يرتدي الكثير من الرجال في العمل؟",
            "qTr": "Birçok erkek iş yerinde ne giyiyor?",
            "qRo": "Ce poartă mulți bărbați la serviciu?",
            "qBs": "Šta mnogi muškarci nose na poslu?",
            "qEs": "¿Qué visten muchos hombres en el trabajo?",
            "qBg": "Какво носят много мъже на работа?",
            "qEl": "Τι φοράνε πολλοί άντρες στη δουλειά;",
            "answer": "Sie tragen Hemden und Anzüge.",
            "answerDe": "Sie tragen Hemden und Anzüge.",
            "answerEn": "They wear shirts and suits.",
            "answerAr": "يرتدون القمصان والبدلات.",
            "answerTr": "Gömlek ve takım elbise giyerler.",
            "answerRo": "They wear shirts and suits.",
            "answerBs": "Nose košulje i odijela.",
            "answerEs": "Llevan camisas y trajes.",
            "answerBg": "Те носят ризи и костюми.",
            "answerEl": "Φορούν πουκάμισα και κοστούμια."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Adjektivdeklination mit unbestimmtem Artikel",
        "titleEn": "Adjective Declension with Indefinite Article",
        "titleAr": "تصريف الصفة مع أداة النكرة",
        "titleTr": "Belirsiz Artikel İle Sıfat Çekimi",
        "titleRo": "Declinarea adjectivă cu articol nedefinit",
        "titleBs": "Deklinacija pridjeva s neodređenim članom",
        "titleEs": "Declinación de adjetivos con artículo indefinido",
        "titleBg": "Прилагателно склонение с неопределителен член",
        "titleEl": "Κλίση επιθέτου με αόριστο άρθρο",
        "explanationEn": "Adjectives after indefinite articles take endings based on gender and case (e.g. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationAr": "الصفات بعد أدوات التنكير تأخذ نهايات تعتمد على الجنس والحالة (على سبيل المثال، ein blauer Rock، eine rote Hose، ein grünes Hemd).",
        "explanationTr": "Belirsiz artikellerden sonra gelen sıfatlar cinsiyete ve büyük/küçük harfe göre ek alır (örn. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationRo": "Adjectivele după articolele nedefinite au terminații bazate pe gen și caz (de exemplu, ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationBs": "Pridjevi iza neodređenih članova imaju nastavke na osnovu roda i padeža (npr. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationEs": "Los adjetivos después de artículos indefinidos toman terminaciones según el género y el caso (p. ej. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationBg": "Прилагателните след неопределени членове имат окончания въз основа на род и падеж (напр. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "explanationEl": "Τα επίθετα μετά από αόριστα άρθρα παίρνουν καταλήξεις με βάση το γένος και την πεζογραφία (π.χ. ein blauer Rock, eine rote Hose, ein grünes Hemd).",
        "rules": [
          {
            "example": "Ich trage einen blauen Anzug.",
            "translationEn": "I am wearing a blue suit.",
            "translationAr": "أنا أرتدي بدلة زرقاء.",
            "translationTr": "Mavi bir takım elbise giyiyorum.",
            "translationRo": "Eu port un costum albastru.",
            "translationBs": "Nosim plavo odijelo.",
            "translationEs": "Llevo un traje azul.",
            "translationBg": "Нося син костюм.",
            "translationEl": "Φοράω ένα μπλε κοστούμι.",
            "noteEn": "Masculine Accusative takes -en.",
            "noteAr": "صيغة النصب المذكر تأخذ -en.",
            "noteTr": "Eril Suçlayıcı -en'yi alır.",
            "noteRo": "Acuzativ masculin ia -en.",
            "noteBs": "Muški akuzativ uzima -en.",
            "noteEs": "Acusativo masculino toma -en.",
            "noteBg": "Мъжки винителен падеж приема -en.",
            "noteEl": "Αρσενικό Κατηγορούμενο παίρνει -en."
          }
        ],
        "table": {
          "headers": [
            "الحالة / الجنس",
            "مذكر (Maskulin)",
            "محايد (Neutral)",
            "مؤنث (Feminin)",
            "الجمع (Plural)"
          ],
          "headersEn": [
            "Case / Gender",
            "Masculine (Maskulin)",
            "Neuter (Neutral)",
            "Feminine (Feminin)",
            "Plural"
          ],
          "headersTr": [
            "Durum / Cinsiyet",
            "Eril (Maskulin)",
            "Nötr (Neutral)",
            "Dişil (Feminin)",
            "Çoğul (Plural)"
          ],
          "headersRo": [
            "Caz / Gen",
            "Masculin",
            "Neutru",
            "Feminin",
            "Plural"
          ],
          "headersBs": [
            "Padež / Rod",
            "Muški",
            "Srednji",
            "Ženski",
            "Množina"
          ],
          "headersEs": [
            "Caso / Género",
            "Masculino",
            "Neutro",
            "Femenino",
            "Plural"
          ],
          "headersBg": [
            "Падеж / Род",
            "Мъжки род",
            "Среден род",
            "Женски род",
            "Множествено число"
          ],
          "headersEl": [
            "Πτώση / Γένος",
            "Αρσενικό",
            "Ουδέτερο",
            "Θηλυκό",
            "Πληθυντικός"
          ],
          "rows": [
            [
              "الرفع (Nominativ) / Nominative / Yalın (Nominativ) / Nominativ / Nominativ / Nominativo / Именителен падеж / Ονομαστική",
              "ein blauer Rock",
              "ein grünes Hemd",
              "eine rote Hose",
              "keine neuen Schuhe"
            ],
            [
              "النصب (Akkusativ) / Accusative / -i Hali (Akkusativ) / Acuzativ / Akuzativ / Acusativo / Винителен падеж / Αιτιατική",
              "einen blauen Rock",
              "ein grünes Hemd",
              "eine rote Hose",
              "keine neuen Schuhe"
            ],
            [
              "الجر (Dativ) / Dative / -e Hali (Dativ) / Dativ / Dativ / Dativo / Дателен падеж / Доτική",
              "einem blauen Rock",
              "einem grünen Hemd",
              "einer roten Hose",
              "keinen neuen Schuhen"
            ]
          ]
        }
      },
      {
        "id": "adjektivdeklination-bestimmt",
        "titleDe": "Adjektivdeklination mit bestimmtem Artikel",
        "title": "صفة الانحراف مع المادة المحددة",
        "titleEn": "Adjective Declension with Definite Article",
        "explanation": "الصفات بعد أدوات التعريف (der، die، das) تأخذ نهايات بسيطة (عادة -e أو -en) حسب الحالة.",
        "explanationEn": "Adjectives after definite articles (der, die, das) take simple endings (usually -e or -en) depending on the case.",
        "titleTr": "Belirli Artikellerle Sıfat Çekimi",
        "explanationTr": "Belirli artikellerden (der, die, das) sonra gelen sıfatlar duruma göre basit sonlar (genellikle -e veya -en) alır.",
        "titleRo": "Declinarea adjectivă cu articol hotărât",
        "explanationRo": "Adjectivele după articole hotărâte (der, die, das) au terminații simple (de obicei -e sau -en), în funcție de caz.",
        "titleBs": "Deklinacija pridjeva s određenim članom",
        "explanationBs": "Pridjevi iza određenih članova (der, die, das) imaju jednostavne nastavke (obično -e ili -en) ovisno o padežu.",
        "titleEs": "Declinación de adjetivos con artículo definido",
        "explanationEs": "Los adjetivos después de artículos definidos (der, die, das) toman terminaciones simples (normalmente -e o -en) según el caso.",
        "titleBg": "Прилагателно склонение с определителен член",
        "explanationBg": "Прилагателните след определителни членове (der, die, das) имат прости окончания (обикновено -e или -en) в зависимост от случая.",
        "titleEl": "Κλίση επιθέτου με οριστικό άρθρο",
        "explanationEl": "Τα επίθετα μετά από οριστικά άρθρα (der, die, das) παίρνουν απλές καταλήξεις (συνήθως -e ή -en) ανάλογα με την περίπτωση.",
        "rules": [
          {
            "example": "Der blaue Mantel gefällt mir gut.",
            "translation": "أنا أحب المعطف الأزرق.",
            "translationEn": "I like the blue coat.",
            "note": "الاسم المذكر مع أداة التعريف يأخذ -e.",
            "noteEn": "Nominative masculine with definite article takes -e.",
            "translationTr": "Mavi ceketi severim.",
            "noteTr": "Belirli artikeller içeren yalın eril -e alır.",
            "translationRo": "Îmi place haina albastră.",
            "noteRo": "Nominativ masculin cu articol hotărât ia -e.",
            "translationBs": "Sviđa mi se plavi kaput.",
            "noteBs": "Nominativ muškog roda s određenim članom uzima -e.",
            "translationEs": "Me gusta el abrigo azul.",
            "noteEs": "Nominativo masculino con artículo definido lleva -e.",
            "translationBg": "Харесвам синьото палто.",
            "noteBg": "Именителен падеж от мъжки род с определителен член приема -е.",
            "translationEl": "Μου αρέσει το μπλε παλτό.",
            "noteEl": "Ονομαστική αρσενική με οριστικό άρθρο παίρνει -ε."
          }
        ],
        "table": {
          "headers": [
            "الحالة / الجنس",
            "مذكر (Maskulin)",
            "محايد (Neutral)",
            "مؤنث (Feminin)",
            "الجمع (Plural)"
          ],
          "headersEn": [
            "Case / Gender",
            "Masculine (Maskulin)",
            "Neuter (Neutral)",
            "Feminine (Feminin)",
            "Plural"
          ],
          "headersTr": [
            "Durum / Cinsiyet",
            "Eril (Maskulin)",
            "Nötr (Neutral)",
            "Dişil (Feminin)",
            "Çoğul (Plural)"
          ],
          "headersRo": [
            "Caz / Gen",
            "Masculin",
            "Neutru",
            "Feminin",
            "Plural"
          ],
          "headersBs": [
            "Padež / Rod",
            "Muški",
            "Srednji",
            "Ženski",
            "Množina"
          ],
          "headersEs": [
            "Caso / Género",
            "Masculino",
            "Neutro",
            "Femenino",
            "Plural"
          ],
          "headersBg": [
            "Падеж / Род",
            "Мъжки род",
            "Среден род",
            "Женски род",
            "Множествено число"
          ],
          "headersEl": [
            "Πτώση / Γένος",
            "Αρσενικό",
            "Ουδέτερο",
            "Θηλυκό",
            "Πληθυντικός"
          ],
          "rows": [
            [
              "الرفع (Nominativ) / Nominative / Yalın (Nominativ) / Nominativ / Nominativ / Nominativo / Именителен падеж / Ονομαστική",
              "der blaue Rock",
              "das grüne Hemd",
              "die rote Hose",
              "die neuen Schuhe"
            ],
            [
              "النصب (Akkusativ) / Accusative / -i Hali (Akkusativ) / Acuzativ / Akuzativ / Acusativo / Винителен падеж / Αιτιατική",
              "den blauen Rock",
              "das grüne Hemd",
              "die rote Hose",
              "die neuen Schuhe"
            ],
            [
              "الجر (Dativ) / Dative / -e Hali (Dativ) / Dativ / Dativ / Dativo / Дателен падеж / Доτική",
              "dem blauen Rock",
              "dem grünen Hemd",
              "der roten Hose",
              "den neuen Schuhen"
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 1301,
        "type": "mcq",
        "question": "Sie trägt ein ___ Kleid. (rot)",
        "questionDe": "Sie trägt ein ___ Kleid. (rot)",
        "questionEn": "She is wearing a ___ dress. (red)",
        "questionAr": "إنها ترتدي فستان ___. (أحمر)",
        "questionTr": "___ bir elbise giyiyor. (kırmızı)",
        "questionRo": "Ea poartă o rochie ___. (roşu)",
        "questionBs": "Ona nosi ___ haljinu. (crveno)",
        "questionEs": "Lleva un vestido ___. (rojo)",
        "questionBg": "Тя носи рокля ___. (червен)",
        "questionEl": "Φοράει ένα ___ φόρεμα. (κόκκινος)",
        "options": [
          {
            "de": "rotes",
            "en": "red (neut. ending)",
            "ar": "أحمر (نهاية محايدة)",
            "tr": "kırmızı (nötr. son)",
            "ro": "roșu (termină neutră)",
            "bs": "crvena (neutralni završetak)",
            "es": "rojo (finalización neutra)",
            "bg": "червено (неут. окончание)",
            "el": "κόκκινο (ουδέτερο τέλος)"
          },
          {
            "de": "roten",
            "en": "red (masc. ending)",
            "ar": "أحمر (masc.إنهاء)",
            "tr": "kırmızı (masc. bitiş)",
            "ro": "roșu (termină masc.)",
            "bs": "crveno (masc. završetak)",
            "es": "rojo (finalización masc.)",
            "bg": "червено (маск. край)",
            "el": "κόκκινο (αρσ. κατάληξη)"
          },
          {
            "de": "rote",
            "en": "red (fem. ending)",
            "ar": "أحمر (فيم. النهاية)",
            "tr": "kırmızı (dişi sonu)",
            "ro": "roșu (termină feminină)",
            "bs": "crvena (ženski završetak)",
            "es": "rojo (finalización fem.)",
            "bg": "червено (женско окончание)",
            "el": "κόκκινο (θηλ. κατάληξη)"
          }
        ],
        "answer": 0,
        "hintDe": "neutrum, Akkusativ, unbestimmter Artikel",
        "hintEn": "neuter, accusative, indefinite article",
        "hintAr": "مقالة محايدة، في حالة النصب، لأجل غير مسمى",
        "hintTr": "nötr, suçlayıcı, belirsiz artikel",
        "hintRo": "articol neutru, acuzativ, nehotărât",
        "hintBs": "srednji, akuzativ, neodređeni član",
        "hintEs": "Artículo neutro, acusativo, indefinido.",
        "hintBg": "среден род, винителен падеж, неопределителен член",
        "hintEl": "ουδέτερο, κατηγορούμενο, αόριστο άρθρο"
      },
      {
        "id": 1302,
        "type": "fillblank",
        "question": "Das ___ Kleid gefällt mir. (rot)",
        "questionDe": "Das ___ Kleid gefällt mir. (rot)",
        "questionEn": "I like the red dress.",
        "questionAr": "أنا أحب اللباس الأحمر.",
        "answer": "rote",
        "questionTr": "Kırmızı elbiseyi beğendim.",
        "questionRo": "Îmi place rochia roșie.",
        "questionBs": "Sviđa mi se crvena haljina.",
        "questionEs": "Me gusta el vestido rojo.",
        "questionBg": "Харесвам червената рокля.",
        "questionEl": "Μου αρέσει το κόκκινο φόρεμα.",
        "hintDe": "bestimmter Artikel, Neutrum, Nominativ",
        "hintEn": "definite article, neuter, nominative",
        "hintAr": "أداة تعريفية، محايدة، اسمية",
        "hintTr": "kesin artikel, nötr, yalın",
        "hintRo": "articol hotărât, neutru, nominativ",
        "hintBs": "određeni član, srednji rod, nominativ",
        "hintEs": "artículo definido, neutro, nominativo",
        "hintBg": "определителен член, среден род, именителен падеж",
        "hintEl": "οριστικό άρθρο, ουδέτερο, ονομαστική"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Lieblingskleidung beschreiben",
        "titleEn": "Describe favorite clothes",
        "titleAr": "وصف الملابس المفضلة",
        "titleTr": "En sevdiğin kıyafetleri anlat",
        "titleRo": "Descrie hainele preferate",
        "titleBs": "Opišite omiljenu odjeću",
        "titleEs": "Describe tu ropa favorita",
        "titleBg": "Опишете любимите дрехи",
        "titleEl": "Περιγράψτε τα αγαπημένα σας ρούχα",
        "promptEn": "Write about your favorite clothes. What do you like to wear, in which color, and why?",
        "promptAr": "اكتب عن ملابسك المفضلة. ماذا تحب أن ترتدي، وبأي لون، ولماذا؟",
        "promptTr": "En sevdiğiniz kıyafetlerinizi yazın. Neyi, hangi renkte ve neden giymeyi seversiniz?",
        "promptRo": "Scrie despre hainele tale preferate. Ce iti place sa porti, in ce culoare si de ce?",
        "promptBs": "Pišite o svojoj omiljenoj odjeći. Šta voliš da nosiš, u kojoj boji i zašto?",
        "promptEs": "Escribe sobre tu ropa favorita. ¿Qué te gusta usar, de qué color y por qué?",
        "promptBg": "Пишете за любимите си дрехи. Какво обичате да носите, в кой цвят и защо?",
        "promptEl": "Γράψε για τα αγαπημένα σου ρούχα. Τι σου αρέσει να φοράς, σε ποιο χρώμα και γιατί;",
        "promptDe": "Schreiben Sie über Ihre Lieblingskleidung. Was tragen Sie gerne, in welcher Farbe und warum?",
        "example": "Meine Lieblingskleidung ist eine blaue Jeans und ein weißes T-Shirt. Ich trage sie sehr gerne, weil sie sehr bequem sind. Im Winter trage ich auch eine warme schwarze Jacke."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Diese Jacke steht dir sehr gut.",
        "en": "This jacket suits you very well.",
        "ar": "هذه السترة تناسبك بشكل جيد للغاية.",
        "tr": "Bu ceket sana çok yakışıyor.",
        "ro": "Această jachetă ți se potrivește foarte bine.",
        "bs": "Ova jakna vam odlično stoji.",
        "es": "Esta chaqueta te sienta muy bien.",
        "bg": "Това яке много ти стои.",
        "el": "Αυτό το σακάκι σου ταιριάζει πολύ."
      },
      {
        "de": "Passt mir diese Hose?",
        "en": "Do these pants fit me?",
        "ar": "هل هذه السراويل تناسبني؟",
        "tr": "Bu pantolon bana uyar mı?",
        "ro": "Mi se potrivesc acesti pantaloni?",
        "bs": "Pristaju li mi ove pantalone?",
        "es": "¿Estos pantalones me quedan bien?",
        "bg": "Стават ли ми тези панталони?",
        "el": "Μου ταιριάζει αυτό το παντελόνι;"
      }
    ]
  },
  {
    "id": 14,
    "emoji": "🎉",
    "titleDe": "Feste, Freunde, Familie",
    "color": "#ec4899",
    "titleEn": "Festivals, Friends, Family",
    "titleAr": "المهرجانات والأصدقاء والعائلة",
    "titleTr": "Festivaller, Arkadaşlar, Aile",
    "titleRo": "Festivaluri, prieteni, familie",
    "titleBs": "Festivali, prijatelji, porodica",
    "titleEs": "Festivales, Amigos, Familia",
    "titleBg": "Фестивали, приятели, семейство",
    "titleEl": "Φεστιβάλ, Φίλοι, Οικογένεια",
    "topicsEn": [
      "Birthday parties",
      "Traditional German festivals",
      "Invitations"
    ],
    "topics": [
      "حفلات أعياد الميلاد",
      "المهرجانات الألمانية التقليدية",
      "الدعوات"
    ],
    "topicsTr": [
      "Doğum günü partileri",
      "Geleneksel Alman festivalleri",
      "Davetiyeler"
    ],
    "topicsRo": [
      "Petreceri aniversare",
      "Festivaluri tradiționale germane",
      "Invitații"
    ],
    "topicsBs": [
      "Rođendanske zabave",
      "Tradicionalni njemački festivali",
      "Pozivnice"
    ],
    "topicsEs": [
      "fiestas de cumpleaños",
      "Fiestas tradicionales alemanas",
      "Invitaciones"
    ],
    "topicsBg": [
      "Рождени дни",
      "Традиционни немски фестивали",
      "Покани"
    ],
    "topicsEl": [
      "πάρτι γενεθλίων",
      "Παραδοσιακά γερμανικά φεστιβάλ",
      "Προσκλήσεις"
    ],
    "canDoEn": "I can invite people to a party, accept/decline invitations, and talk about festivals.",
    "canDo": "يمكنني دعوة الأشخاص إلى حفلة، وقبول/رفض الدعوات، والتحدث عن المهرجانات.",
    "canDoDe": "Ich kann Leute zu einer Party einladen, Einladungen annehmen/ablehnen und über Festivals sprechen.",
    "canDoTr": "İnsanları bir partiye davet edebilirim, davetleri kabul edebilir/reddedebilirim ve festivaller hakkında konuşabilirim.",
    "canDoRo": "Pot invita oameni la o petrecere, pot accepta/refuza invitații și pot vorbi despre festivaluri.",
    "canDoBs": "Mogu pozvati ljude na zabavu, prihvatiti/odbiti pozive i razgovarati o festivalima.",
    "canDoEs": "Puedo invitar gente a una fiesta, aceptar/rechazar invitaciones y hablar sobre festivales.",
    "canDoBg": "Мога да каня хора на парти, да приемам/отхвърлям покани и да говоря за фестивали.",
    "canDoEl": "Μπορώ να προσκαλέσω ανθρώπους σε ένα πάρτι, να αποδεχτώ/να απορρίψω προσκλήσεις και να μιλήσω για φεστιβάλ.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track08.mp3",
        "label": "14.1 - Einladung zur Party",
        "labelEn": "14.1 - Invitation to the party",
        "labelAr": "14.1 - دعوة للحفلة",
        "labelTr": "14.1 - Partiye davet",
        "labelRo": "14.1 - Invitație la petrecere",
        "labelBs": "14.1 - Poziv na zabavu",
        "labelEs": "14.1 - Invitación a la fiesta",
        "labelBg": "14.1 - Покана за партито",
        "labelEl": "14.1 - Πρόσκληση στο πάρτι"
      }
    ],
    "dialogs": [
      {
        "title": "Eine Party planen",
        "titleEn": "Planning a party",
        "titleAr": "التخطيط لحفلة",
        "titleTr": "Parti planlamak",
        "titleRo": "Planifică o petrecere",
        "titleBs": "Planiranje zabave",
        "titleEs": "planeando una fiesta",
        "titleBg": "Планиране на парти",
        "titleEl": "Σχεδιάζοντας ένα πάρτι",
        "lines": [
          {
            "speaker": "Ahmad",
            "de": "Hallo Julia, hast du am Samstag Zeit? Ich feiere meinen Geburtstag.",
            "en": "Hello Julia, do you have time on Saturday? I am celebrating my birthday.",
            "ar": "مرحبا جوليا، هل لديك وقت يوم السبت؟ أنا أحتفل بعيد ميلادي.",
            "tr": "Merhaba Julia, Cumartesi günü vaktin var mı? Doğum günümü kutluyorum.",
            "ro": "Salut Julia, ai timp sambata? Îmi sărbătoresc ziua de naștere.",
            "bs": "Zdravo Julia, imaš li vremena u subotu? Slavim rođendan.",
            "es": "Hola Julia, ¿tienes tiempo el sábado? Estoy celebrando mi cumpleaños.",
            "bg": "Здравей Юлия, имаш ли време в събота? Аз празнувам рождения си ден.",
            "el": "Γεια σου Τζούλια, έχεις χρόνο το Σάββατο; Γιορτάζω τα γενέθλιά μου."
          },
          {
            "speaker": "Julia",
            "de": "Hallo Ahmad! Ja, ich komme sehr gerne. Herzlichen Glückwunsch im Voraus!",
            "en": "Hello Ahmad! Yes, I would love to come. Congratulations in advance!",
            "ar": "مرحبا أحمد! نعم، أحب أن آتي. مبروك مقدما!",
            "tr": "Merhaba Ahmed! Evet gelmeyi çok isterim. Şimdiden tebrikler!",
            "ro": "Salut Ahmad! Da, mi-ar plăcea să vin. Felicitări anticipate!",
            "bs": "Zdravo Ahmade! Da, rado bih došao. Čestitamo unaprijed!",
            "es": "¡Hola Ahmad! Sí, me encantaría venir. ¡Felicitaciones de antemano!",
            "bg": "Здравей Ахмад! Да, с удоволствие ще дойда. Честито предварително!",
            "el": "Γεια σου Ahmad! Ναι, θα ήθελα πολύ να έρθω. Συγχαρητήρια εκ των προτέρων!"
          },
          {
            "speaker": "Ahmad",
            "de": "Danke! Kannst du vielleicht einen Salat mitbringen?",
            "en": "Thanks! Can you perhaps bring a salad?",
            "ar": "شكرًا! هل يمكنك إحضار سلطة؟",
            "tr": "Teşekkürler! Belki bir salata getirebilir misin?",
            "ro": "Mulţumesc! Poți să aduci o salată?",
            "bs": "Hvala! Možete li možda donijeti salatu?",
            "es": "¡Gracias! ¿Quizás puedas traer una ensalada?",
            "bg": "благодаря Може ли да донесете салата?",
            "el": "Ευχαριστώ! Μπορείς να φέρεις μια σαλάτα;"
          },
          {
            "speaker": "Julia",
            "de": "Klar, kein Problem. Ich mache einen Nudelsalat.",
            "en": "Sure, no problem. I'll make a pasta salad.",
            "ar": "بالتأكيد، لا مشكلة. سأقوم بإعداد سلطة المعكرونة.",
            "tr": "Tabii, sorun değil. Makarna salatası yapacağım.",
            "ro": "Sigur, nicio problemă. Voi face o salată de paste.",
            "bs": "Naravno, nema problema. Napraviću salatu od tjestenine.",
            "es": "Claro, no hay problema. Haré una ensalada de pasta.",
            "bg": "Разбира се, няма проблем. Ще направя салата с паста.",
            "el": "Φυσικά, κανένα πρόβλημα. Θα φτιάξω μια μακαρονοσαλάτα."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Feste in Deutschland",
        "titleEn": "Festivals in Germany",
        "titleAr": "المهرجانات في ألمانيا",
        "titleTr": "Almanya'daki festivaller",
        "titleRo": "Festivaluri în Germania",
        "titleBs": "Festivali u Njemačkoj",
        "titleEs": "Festivales en Alemania",
        "titleBg": "Фестивали в Германия",
        "titleEl": "Φεστιβάλ στη Γερμανία",
        "text": [
          {
            "de": "In Deutschland gibt es viele traditionelle Feste. Weihnachten und Ostern sind wichtige Familienfeste.",
            "en": "In Germany, there are many traditional festivals. Christmas and Easter are important family celebrations.",
            "ar": "تقام في ألمانيا العديد من المهرجانات التقليدية. عيد الميلاد وعيد الفصح احتفالات عائلية مهمة.",
            "tr": "Almanya'da birçok geleneksel festival var. Noel ve Paskalya önemli aile kutlamalarıdır.",
            "ro": "În Germania, există multe festivaluri tradiționale. Crăciunul și Paștele sunt sărbători importante de familie.",
            "bs": "U Njemačkoj postoje mnogi tradicionalni festivali. Božić i Uskrs su važne porodične proslave.",
            "es": "En Alemania hay muchas fiestas tradicionales. Navidad y Semana Santa son celebraciones familiares importantes.",
            "bg": "В Германия има много традиционни фестивали. Коледа и Великден са важни семейни празници.",
            "el": "Στη Γερμανία, υπάρχουν πολλά παραδοσιακά φεστιβάλ. Τα Χριστούγεννα και το Πάσχα είναι σημαντικές οικογενειακές γιορτές."
          },
          {
            "de": "Viele Menschen feiern auch Karneval im Frühling und das Oktoberfest im Herbst mit Freunden.",
            "en": "Many people also celebrate Carnival in spring and Oktoberfest in autumn with friends.",
            "ar": "يحتفل العديد من الأشخاص أيضًا بالكرنفال في الربيع ومهرجان أكتوبر في الخريف مع الأصدقاء.",
            "tr": "Birçok kişi ayrıca ilkbaharda Karnaval'ı ve sonbaharda Oktoberfest'i arkadaşlarıyla kutlar.",
            "ro": "Mulți oameni sărbătoresc și Carnavalul primăvara și Oktoberfestul toamna împreună cu prietenii.",
            "bs": "Mnogi ljudi također slave karneval u proljeće i Oktoberfest u jesen sa prijateljima.",
            "es": "Mucha gente también celebra con amigos el Carnaval en primavera y el Oktoberfest en otoño.",
            "bg": "Много хора също празнуват карнавала през пролетта и Октоберфест през есента с приятели.",
            "el": "Πολλοί άνθρωποι γιορτάζουν επίσης το Καρναβάλι την άνοιξη και το Oktoberfest το φθινόπωρο με φίλους."
          }
        ],
        "questions": [
          {
            "q": "Wann feiert man das Oktoberfest?",
            "qDe": "Wann feiert man das Oktoberfest?",
            "qEn": "When do people celebrate Oktoberfest?",
            "qAr": "متى يحتفل الناس بمهرجان أكتوبر؟",
            "qTr": "İnsanlar Oktoberfest'i ne zaman kutlarlar?",
            "qRo": "Când sărbătoresc oamenii Oktoberfest?",
            "qBs": "Kada ljudi slave Oktoberfest?",
            "qEs": "¿Cuándo se celebra la gente el Oktoberfest?",
            "qBg": "Кога хората празнуват Октоберфест?",
            "qEl": "Πότε γιορτάζουν οι άνθρωποι το Oktoberfest;",
            "answer": "Man feiert es im Herbst.",
            "answerDe": "Man feiert es im Herbst.",
            "answerEn": "People celebrate it in autumn.",
            "answerAr": "يحتفل به الناس في الخريف.",
            "answerTr": "İnsanlar bunu sonbaharda kutlarlar.",
            "answerRo": "Oamenii o sărbătoresc toamna.",
            "answerBs": "Ljudi ga slave u jesen.",
            "answerEs": "La gente lo celebra en otoño.",
            "answerBg": "Хората го празнуват през есента.",
            "answerEl": "Ο κόσμος το γιορτάζει το φθινόπωρο."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Nebensätze mit 'weil'",
        "titleEn": "Subordinate Clauses with 'weil' (because)",
        "titleAr": "الجمل الثانوية مع \"weil\" (لأن)",
        "titleTr": "'Weil' içeren Yardımcı Cümleler (çünkü)",
        "titleRo": "Propoziții subordonate cu „weil” (pentru că)",
        "titleBs": "Podređene rečenice sa 'weil' (jer)",
        "titleEs": "Cláusulas subordinadas con 'weil' (porque)",
        "titleBg": "Подчинени изречения с „weil“ (защото)",
        "titleEl": "Δευτερεύουσες προτάσεις με «weil» (επειδή)",
        "explanationEn": "The conjunction 'weil' introduces a subordinate clause, which pushes the conjugated verb to the very end of the sentence.",
        "explanationAr": "يقدم حرف العطف \"weil\" جملة ثانوية، والتي تدفع الفعل المترافق إلى نهاية الجملة.",
        "explanationTr": "'Weil' bağlacı, çekimli fiili cümlenin sonuna iten bir yan cümlecik sunar.",
        "explanationRo": "Conjuncția „weil” introduce o propoziție subordonată, care împinge verbul conjugat până la sfârșitul propoziției.",
        "explanationBs": "Veznik 'weil' uvodi podređenu rečenicu, koja gura konjugirani glagol na sam kraj rečenice.",
        "explanationEs": "La conjunción 'weil' introduce una cláusula subordinada, que empuja el verbo conjugado hasta el final de la oración.",
        "explanationBg": "Съюзът „weil“ въвежда подчинено изречение, което измества спрегнатия глагол до самия край на изречението.",
        "explanationEl": "Ο σύνδεσμος «weil» εισάγει μια δευτερεύουσα πρόταση, η οποία ωθεί το συζευγμένο ρήμα μέχρι το τέλος της πρότασης.",
        "rules": [
          {
            "example": "Ich feiere eine Party, weil ich Geburtstag habe.",
            "translationEn": "I am celebrating a party because it is my birthday.",
            "translationAr": "أنا أحتفل بحفلة لأنه عيد ميلادي.",
            "translationTr": "Bir parti kutluyorum çünkü bugün benim doğum günüm.",
            "translationRo": "Sărbătoresc o petrecere pentru că este ziua mea de naștere.",
            "translationBs": "Slavim žurku jer mi je rođendan.",
            "translationEs": "Estoy celebrando una fiesta porque es mi cumpleaños.",
            "translationBg": "Празнувам парти, защото е рожденият ми ден.",
            "translationEl": "Γιορτάζω ένα πάρτι γιατί είναι τα γενέθλιά μου.",
            "noteEn": "The verb 'habe' goes to the end.",
            "noteAr": "الفعل \"habe\" يذهب إلى النهاية.",
            "noteTr": "'Habe' fiili sonuna gelir.",
            "noteRo": "Verbul „habe” ajunge până la sfârșit.",
            "noteBs": "Glagol 'habe' ide do kraja.",
            "noteEs": "El verbo 'habe' va hasta el final.",
            "noteBg": "Глаголът „хабе“ отива до края.",
            "noteEl": "Το ρήμα 'habe' πηγαίνει στο τέλος."
          }
        ]
      },
      {
        "id": "ordinalzahlen",
        "titleDe": "Ordinalzahlen für Datumsangaben",
        "title": "الأرقام الترتيبية للتواريخ",
        "titleEn": "Ordinal Numbers for Dates",
        "explanation": "تستخدم الأرقام الترتيبية للتواريخ باللغة الألمانية. يأخذون نهايات مثل الصفات (على سبيل المثال، der erste Mai، am einunddreißigsten Dezember).",
        "explanationEn": "Ordinal numbers are used for dates in German. They take endings like adjectives (e.g., der erste Mai, am einunddreißigsten Dezember).",
        "titleTr": "Tarihler için Sıra Sayıları",
        "explanationTr": "Ordinal numbers are used for dates in German. Sıfatlar gibi sonlar alırlar (örn. der erste Mai, am einunddreißigsten Dezember).",
        "titleRo": "Numere ordinale pentru date",
        "explanationRo": "Ordinal numbers are used for dates in German. They take endings like adjectives (e.g., der erste Mai, am einunddreißigsten Dezember).",
        "titleBs": "Redni brojevi za datume",
        "explanationBs": "Za datume na njemačkom jeziku koriste se redni brojevi. Uzimaju nastavke poput prideva (npr. der erste Mai, am einunddreißigsten Dezember).",
        "titleEs": "Números ordinales para fechas",
        "explanationEs": "Los números ordinales se utilizan para las fechas en alemán. Toman terminaciones como adjetivos (p. ej., der erste Mai, am einunddreißigsten Dezember).",
        "titleBg": "Поредни числа за дати",
        "explanationBg": "За датите на немски се използват редни номера. Те приемат окончания като прилагателни (напр. der erste Mai, am einunddreißigsten Dezember).",
        "titleEl": "Τακτικοί αριθμοί για ημερομηνίες",
        "explanationEl": "Ordinal numbers are used for dates in German. They take endings like adjectives (e.g., der erste Mai, am einunddreißigsten Dezember).",
        "rules": [
          {
            "example": "Ich habe am vierundzwanzigsten Dezember Geburtstag.",
            "translation": "عيد ميلادي يوم الرابع والعشرين من ديسمبر.",
            "translationEn": "My birthday is on the twenty-fourth of December.",
            "note": "حرف الجر 'am' يتطلب النهاية -عشرة.",
            "noteEn": "Preposition 'am' requires the ending -ten.",
            "translationTr": "My birthday is on the twenty-fourth of December.",
            "noteTr": "Preposition 'am' requires the ending -ten.",
            "translationRo": "My birthday is on the twenty-fourth of December.",
            "noteRo": "Preposition 'am' requires the ending -ten.",
            "translationBs": "Moj rođendan je dvadeset četvrtog decembra.",
            "noteBs": "Prijedlog 'am' zahtijeva završetak -deset.",
            "translationEs": "Mi cumpleaños es el veinticuatro de diciembre.",
            "noteEs": "La preposición 'am' requiere la terminación -diez.",
            "translationBg": "Моят рожден ден е на двадесет и четвърти декември.",
            "noteBg": "Предлогът „съм“ изисква окончание -ten.",
            "translationEl": "Τα γενέθλιά μου είναι στις είκοσι τέσσερις Δεκεμβρίου.",
            "noteEl": "Η πρόθεση «am» απαιτεί την κατάληξη -ten."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 1401,
        "type": "mcq",
        "question": "Ich komme nicht, weil ich krank ___.",
        "questionDe": "Ich komme nicht, weil ich krank ___.",
        "questionEn": "I am not coming because I ___ sick.",
        "questionAr": "أنا لن آتي لأنني ___ مريض.",
        "questionTr": "Gelmiyorum çünkü hastayım.",
        "questionRo": "Nu vin pentru că sunt ___ bolnavă.",
        "questionBs": "Ne dolazim jer sam ___ bolestan.",
        "questionEs": "No vengo porque estoy ___ enfermo.",
        "questionBg": "Няма да дойда, защото съм ___ болен.",
        "questionEl": "Δεν έρχομαι γιατί ___ είμαι άρρωστος.",
        "options": [
          {
            "de": "bin",
            "en": "am (verb at end)",
            "ar": "صباحا (الفعل في النهاية)",
            "tr": "am (sondaki fiil)",
            "ro": "am (verb la sfârșit)",
            "bs": "am (glagol na kraju)",
            "es": "soy (verbo al final)",
            "bg": "съм (глагол в края)",
            "el": "είμαι (ρήμα στο τέλος)"
          },
          {
            "de": "habe",
            "en": "have",
            "ar": "يملك",
            "tr": "sahip olmak",
            "ro": "au",
            "bs": "imati",
            "es": "tener",
            "bg": "имат",
            "el": "έχω"
          },
          {
            "de": "bin krank",
            "en": "am sick",
            "ar": "أنا مريض",
            "tr": "hastayım",
            "ro": "sunt bolnav",
            "bs": "ja sam bolestan",
            "es": "estoy enfermo",
            "bg": "болен съм",
            "el": "είμαι άρρωστος"
          }
        ],
        "answer": 0,
        "hintDe": "Verb gehört ans Ende des Nebensatzes",
        "hintEn": "Verb belongs at the end of the subordinate clause",
        "hintAr": "الفعل ينتمي إلى نهاية الجملة الثانوية",
        "hintTr": "Fiil yan cümlenin sonuna aittir",
        "hintRo": "Verbul aparține la sfârșitul propoziției subordonate",
        "hintBs": "Glagol se nalazi na kraju podređene rečenice",
        "hintEs": "El verbo pertenece al final de la cláusula subordinada.",
        "hintBg": "Глаголът е в края на подчиненото изречение",
        "hintEl": "Το ρήμα ανήκει στο τέλος της δευτερεύουσας πρότασης"
      },
      {
        "id": 1402,
        "type": "fillblank",
        "question": "Heute ist der ___ April. (3.)",
        "questionDe": "Heute ist der ___ April. (3.)",
        "questionEn": "Today is the third of April.",
        "questionAr": "اليوم هو الثالث من أبريل.",
        "answer": "dritte",
        "questionTr": "Bugün Nisan ayının üçü.",
        "questionRo": "Astăzi este trei aprilie.",
        "questionBs": "Danas je treći april.",
        "questionEs": "Hoy es tres de abril.",
        "questionBg": "Днес е трети април.",
        "questionEl": "Σήμερα είναι τρίτη Απριλίου.",
        "hintDe": "Nominativ, maskulin (der dritte)",
        "hintEn": "nominative, masculine",
        "hintAr": "اسمي، مذكر",
        "hintTr": "yalın, erkeksi",
        "hintRo": "nominativ, masculin",
        "hintBs": "nominativ, muški rod",
        "hintEs": "nominativo, masculino",
        "hintBg": "именителен падеж, мъжки род",
        "hintEl": "ονομαστική, αρσενικό"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Eine Einladung schreiben",
        "titleEn": "Write an invitation",
        "titleAr": "اكتب دعوة",
        "titleTr": "Bir davetiye yaz",
        "titleRo": "Scrie o invitație",
        "titleBs": "Napišite pozivnicu",
        "titleEs": "escribir una invitacion",
        "titleBg": "Напишете покана",
        "titleEl": "Γράψτε μια πρόσκληση",
        "promptEn": "Write an invitation email to your friends for your housewarming party. Mention when and where, and ask them to RSVP.",
        "promptAr": "اكتب دعوة بالبريد الإلكتروني لأصدقائك لحضور حفل الانتقال لمنزل جديد. اذكر متى وأين، واطلب منهم الرد على الدعوة.",
        "promptTr": "Yeni eve taşınma partiniz için arkadaşlarınıza bir davet e-postası yazın. Ne zaman ve nerede olduğunu belirtin ve LCV yapmalarını isteyin.",
        "promptRo": "Scrieți un e-mail de invitație prietenilor tăi pentru petrecerea de inaugurare a casei. Menționați când și unde și cereți-le să răspundă.",
        "promptBs": "Napišite e-poruku s pozivnicom svojim prijateljima za proslavu domaćina. Navedite kada i gdje, i zamolite ih da odgovore.",
        "promptEs": "Escribe un correo electrónico de invitación a tus amigos para tu fiesta de inauguración. Mencione cuándo y dónde, y pídales que confirmen su asistencia.",
        "promptBg": "Напишете имейл с покана до приятелите си за партито за новодома. Споменете кога и къде и ги помолете да отговорят.",
        "promptEl": "Γράψτε ένα email πρόσκλησης στους φίλους σας για το πάρτι για το σπίτι σας. Αναφέρετε πότε και πού και ζητήστε τους να απαντήσουν.",
        "promptDe": "Schreiben Sie eine Einladungs-E-Mail an Ihre Freunde für Ihre Einweihungsparty. Nennen Sie Zeit und Ort und bitten Sie um Antwort.",
        "example": "Liebe Freunde, ich lade euch herzlich zu meiner Einweihungsparty ein! Die Party findet am Samstag um 18 Uhr in meiner neuen Wohnung statt. Bitte gebt mir bis Donnerstag Bescheid, ob ihr kommen könnt. Liebe Grüße!"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Herzlichen Glückwunsch zum Geburtstag!",
        "en": "Happy birthday!",
        "ar": "عيد ميلاد سعيد!",
        "tr": "Doğum günün kutlu olsun!",
        "ro": "La mulți ani!",
        "bs": "Sretan rođendan!",
        "es": "¡Feliz cumpleaños!",
        "bg": "честит рожден ден",
        "el": "Χρόνια πολλά!"
      },
      {
        "de": "Vielen Dank für die nette Einladung.",
        "en": "Thank you very much for the nice invitation.",
        "ar": "شكرا جزيلا على الدعوة اللطيفة.",
        "tr": "Güzel davetiniz için çok teşekkür ederim.",
        "ro": "Vă mulțumesc foarte mult pentru frumoasa invitație.",
        "bs": "Hvala vam puno na lijepom pozivu.",
        "es": "Muchas gracias por la linda invitación.",
        "bg": "Благодаря много за хубавата покана.",
        "el": "Ευχαριστώ πολύ για την ωραία πρόσκληση."
      }
    ]
  },
  {
    "id": 15,
    "emoji": "🤝",
    "titleDe": "Miteinander leben",
    "color": "#3b82f6",
    "titleEn": "Living Together",
    "titleAr": "العيش معًا",
    "titleTr": "Birlikte Yaşamak",
    "titleRo": "Trăind Împreună",
    "titleBs": "Živjeti zajedno",
    "titleEs": "Vivir juntos",
    "titleBg": "Да живеем заедно",
    "titleEl": "Συμβίωση",
    "topicsEn": [
      "Neighborhood rules",
      "Conflicts and solutions",
      "Apartment living"
    ],
    "topics": [
      "قواعد الجوار",
      "الصراعات والحلول",
      "شقة المعيشة"
    ],
    "topicsTr": [
      "Mahalle kuralları",
      "Çatışmalar ve çözümler",
      "Apartmanda yaşam"
    ],
    "topicsRo": [
      "Reguli de cartier",
      "Conflicte și soluții",
      "Living apartament"
    ],
    "topicsBs": [
      "Pravila susjedstva",
      "Konflikti i rješenja",
      "Stan za stanovanje"
    ],
    "topicsEs": [
      "Reglas del vecindario",
      "Conflictos y soluciones",
      "Vida en apartamento"
    ],
    "topicsBg": [
      "Съседски правила",
      "Конфликти и решения",
      "Живеене в апартамент"
    ],
    "topicsEl": [
      "Κανόνες γειτονιάς",
      "Συγκρούσεις και λύσεις",
      "Διαμέρισμα"
    ],
    "canDoEn": "I can understand house rules, complain politely about noise, and resolve neighbor conflicts.",
    "canDo": "أستطيع فهم قواعد المنزل، والشكوى بأدب من الضوضاء، وحل نزاعات الجيران.",
    "canDoDe": "Ich kann die Hausordnung verstehen, mich höflich über Lärm beschweren und Konflikte mit Nachbarn lösen.",
    "canDoTr": "Ev kurallarını anlayabiliyorum, gürültüden kibarca şikayet edebiliyorum ve komşularla olan anlaşmazlıkları çözebiliyorum.",
    "canDoRo": "Pot să înțeleg regulile casei, să mă plâng politicos de zgomot și să rezolv conflictele cu vecinii.",
    "canDoBs": "Mogu razumjeti kućni red, pristojno se žaliti na buku i rješavati sukobe sa susjedima.",
    "canDoEs": "Puedo entender las reglas de la casa, quejarme cortésmente del ruido y resolver conflictos entre vecinos.",
    "canDoBg": "Мога да разбирам домашните правила, да се оплаквам учтиво от шума и да разрешавам съседски конфликти.",
    "canDoEl": "Μπορώ να κατανοήσω τους κανόνες του σπιτιού, να παραπονεθώ ευγενικά για τον θόρυβο και να επιλύσω συγκρούσεις με τους γείτονες.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track15.mp3",
        "label": "15.1 - Nachbarschaftsgespräch",
        "labelEn": "15.1 - Conversation with neighbors",
        "labelAr": "15.1 - المحادثة مع الجيران",
        "labelTr": "15.1 - Komşularla konuşma",
        "labelRo": "15.1 - Convorbirea cu vecinii",
        "labelBs": "15.1 - Razgovor sa komšijama",
        "labelEs": "15.1 - Conversación con los vecinos",
        "labelBg": "15.1 - Разговор със съседи",
        "labelEl": "15.1 - Συζήτηση με γείτονες"
      }
    ],
    "dialogs": [
      {
        "title": "Bitte um Ruhe",
        "titleEn": "Request for quiet",
        "titleAr": "طلب الهدوء",
        "titleTr": "Sessizlik isteği",
        "titleRo": "Cerere de liniște",
        "titleBs": "Zahtjev za tišinu",
        "titleEs": "Solicitud de tranquilidad",
        "titleBg": "Молба за тишина",
        "titleEl": "Αίτημα για ησυχία",
        "lines": [
          {
            "speaker": "Nachbar",
            "de": "Guten Abend. Entschuldigung, aber Ihre Musik ist sehr laut.",
            "en": "Good evening. Excuse me, but your music is very loud.",
            "ar": "مساء الخير. عذرا، ولكن الموسيقى الخاصة بك بصوت عال جدا.",
            "tr": "İyi akşamlar. Kusura bakmayın ama müziğiniz çok gürültülü.",
            "ro": "Bună seara. Scuză-mă, dar muzica ta este foarte tare.",
            "bs": "Dobro veče. Izvinite, ali vaša muzika je veoma glasna.",
            "es": "Buenas noches. Disculpe, pero su música está muy alta.",
            "bg": "Добър вечер Извинете, но музиката ви е много силна.",
            "el": "Καλησπέρα. Με συγχωρείτε, αλλά η μουσική σας είναι πολύ δυνατή."
          },
          {
            "speaker": "Mieter",
            "de": "Oh, tut mir leid! Ist es schon nach 22 Uhr?",
            "en": "Oh, I'm sorry! Is it already after 10 PM?",
            "ar": "أوه، أنا آسف! هل هو بالفعل بعد الساعة 10 مساءً؟",
            "tr": "Ah, özür dilerim! Saat 22.00'yi geçti mi?",
            "ro": "Oh, îmi pare rău! Este deja după ora 22:00?",
            "bs": "Oh, izvini! Je li već poslije 22 sata?",
            "es": "¡Ah, lo siento! ¿Ya son más de las 10 de la noche?",
            "bg": "О, съжалявам! Вече след 22 часа ли е?",
            "el": "Ω, λυπάμαι! Είναι ήδη μετά τις 10 το βράδυ;"
          },
          {
            "speaker": "Nachbar",
            "de": "Ja, es ist schon halb elf. Wir möchten gerne schlafen.",
            "en": "Yes, it is already half past ten. We would like to sleep.",
            "ar": "نعم، إنها بالفعل العاشرة والنصف. نود أن النوم.",
            "tr": "Evet, saat zaten on buçuk. Uyumak istiyoruz.",
            "ro": "Da, este deja zece și jumătate. Ne-ar plăcea să dormim.",
            "bs": "Da, već je pola jedanaest. Htjeli bismo spavati.",
            "es": "Sí, ya son las diez y media. Nos gustaría dormir.",
            "bg": "Да, вече е десет и половина. Бихме искали да спим.",
            "el": "Ναι, είναι ήδη δέκα και μισή. Θα θέλαμε να κοιμηθούμε."
          },
          {
            "speaker": "Mieter",
            "de": "Ich mache die Musik sofort leiser. Entschuldigung nochmals.",
            "en": "I'll turn down the music immediately. Apologies again.",
            "ar": "سأقوم بإيقاف الموسيقى على الفور. الاعتذار مرة أخرى.",
            "tr": "Müziği hemen kapatacağım. Tekrar özür dilerim.",
            "ro": "Voi refuza muzica imediat. Scuze din nou.",
            "bs": "Odmah ću stišati muziku. Još jednom izvinite.",
            "es": "Bajaré la música inmediatamente. Disculpas de nuevo.",
            "bg": "Веднага ще намаля музиката. Извинения отново.",
            "el": "Θα χαμηλώσω αμέσως τη μουσική. Και πάλι συγγνώμη."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Die Hausordnung in Deutschland",
        "titleEn": "House Rules in Germany",
        "titleAr": "قواعد المنزل في ألمانيا",
        "titleTr": "Almanya'da Ev Kuralları",
        "titleRo": "Regulile casei în Germania",
        "titleBs": "Kućni red u Njemačkoj",
        "titleEs": "Reglas de la casa en Alemania",
        "titleBg": "Домашни правила в Германия",
        "titleEl": "Κανόνες σπιτιού στη Γερμανία",
        "text": [
          {
            "de": "In deutschen Wohnhäusern gibt es eine Hausordnung. Sie regelt das Zusammenleben der Mieter.",
            "en": "In German apartment buildings, there are house rules. They regulate the living together of the tenants.",
            "ar": "في المباني السكنية الألمانية، هناك قواعد خاصة بالمنزل. أنها تنظم العيش معا للمستأجرين.",
            "tr": "Alman apartmanlarında ev kuralları vardır. Kiracıların birlikte yaşamasını düzenlerler.",
            "ro": "În blocurile de apartamente germane, există reguli ale casei. Acestea reglementează conviețuirea chiriașilor.",
            "bs": "U njemačkim stambenim zgradama postoji kućni red. Oni regulišu zajednički život stanara.",
            "es": "En los edificios de apartamentos alemanes existen reglas internas. Regulan la convivencia de los inquilinos.",
            "bg": "В немските жилищни сгради има вътрешни правила. Те регламентират съвместния живот на наемателите.",
            "el": "Στις γερμανικές πολυκατοικίες υπάρχουν κανόνες σπιτιού. Ρυθμίζουν την κοινή διαβίωση των ενοικιαστών."
          },
          {
            "de": "Besonders wichtig ist die Nachtruhe von 22 Uhr bis 6 Uhr morgens. In dieser Zeit darf man keinen Lärm machen.",
            "en": "Particularly important is the night quiet period from 10 PM to 6 AM. During this time, one must not make noise.",
            "ar": "من المهم بشكل خاص فترة الهدوء الليلي من الساعة 10 مساءً حتى الساعة 6 صباحًا. خلال هذا الوقت، لا ينبغي للمرء أن يصدر أي ضجيج.",
            "tr": "Özellikle önemli olan gece saat 22.00'den sabah 6'ya kadar olan sessiz dönemdir. Bu süre içerisinde gürültü yapılmamalıdır.",
            "ro": "Deosebit de importantă este perioada de liniște nocturnă de la 22:00 la 6:00. În acest timp, nu trebuie să faci zgomot.",
            "bs": "Posebno je važan noćni mirni period od 22 do 6 ujutro. Za to vreme se ne sme praviti buka.",
            "es": "Particularmente importante es el período de silencio nocturno de 22:00 a 6:00 horas. Durante este tiempo no se debe hacer ruido.",
            "bg": "Особено важен е нощният период на тишина от 22:00 до 06:00. През това време не трябва да се вдига шум.",
            "el": "Ιδιαίτερα σημαντική είναι η νυχτερινή ήσυχη περίοδος από τις 10 το βράδυ έως τις 6 το πρωί. Κατά τη διάρκεια αυτής της περιόδου, δεν πρέπει να κάνει κανείς θόρυβο."
          }
        ],
        "questions": [
          {
            "q": "Wann beginnt die Nachtruhe?",
            "qDe": "Wann beginnt die Nachtruhe?",
            "qEn": "When does the night quiet period begin?",
            "qAr": "متى تبدأ فترة الهدوء الليلي؟",
            "qTr": "Gece sessizliği dönemi ne zaman başlıyor?",
            "qRo": "Când începe perioada de liniște nocturnă?",
            "qBs": "Kada počinje noćna tišina?",
            "qEs": "¿Cuándo comienza el período de silencio nocturno?",
            "qBg": "Кога започва периодът на нощна тишина?",
            "qEl": "Πότε αρχίζει η νυχτερινή ησυχία;",
            "answer": "Sie beginnt um 22 Uhr.",
            "answerDe": "Sie beginnt um 22 Uhr.",
            "answerEn": "It begins at 10 PM.",
            "answerAr": "يبدأ الساعة 10 مساءً.",
            "answerTr": "Saat 22.00'de başlıyor.",
            "answerRo": "Începe la ora 22.00.",
            "answerBs": "Počinje u 22 sata.",
            "answerEs": "Comienza a las 22 horas.",
            "answerBg": "Началото е в 22 часа.",
            "answerEl": "Ξεκινά στις 10 μ.μ."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Reflexive Verben",
        "titleEn": "Reflexive Verben (Reflexive Verbs)",
        "titleAr": "الفعل الانعكاسي (الأفعال الانعكاسية)",
        "titleTr": "Dönüşlü Fiil (Dönüşlü Fiiller)",
        "titleRo": "Verben reflexiv (verbe reflexive)",
        "titleBs": "Povratni glagol (povratni glagoli)",
        "titleEs": "Verben reflexivo (verbos reflexivos)",
        "titleBg": "Reflexive Verben (възвратни глаголи)",
        "titleEl": "Reflexive Verben (Ανακλαστικά ρήματα)",
        "explanationEn": "Reflexive verbs are used with reflexive pronouns (mich, dich, sich, uns, euch) which change based on the subject.",
        "explanationAr": "تُستخدم الأفعال الانعكاسية مع الضمائر الانعكاسية (mich، dich، sich، uns، euch) والتي تتغير بناءً على الفاعل.",
        "explanationTr": "Dönüşlü fiiller, konuya göre değişen dönüşlü zamirlerle (mich, dich, sich, uns, euch) birlikte kullanılır.",
        "explanationRo": "Verbele reflexive sunt folosite cu pronume reflexive (mich, dich, sich, uns, euch) care se schimbă în funcție de subiect.",
        "explanationBs": "Povratni glagoli se koriste uz povratne zamjenice (mich, dich, sich, uns, euch) koje se mijenjaju ovisno o subjektu.",
        "explanationEs": "Los verbos reflexivos se utilizan con pronombres reflexivos (mich, dich, sich, uns, euch) que cambian según el sujeto.",
        "explanationBg": "Възвратните глаголи се използват с възвратни местоимения (mich, dich, sich, uns, euch), които се променят в зависимост от темата.",
        "explanationEl": "Τα ανακλαστικά ρήματα χρησιμοποιούνται με αντανακλαστικές αντωνυμίες (mich, dich, sich, uns, euch) που αλλάζουν με βάση το θέμα.",
        "rules": [
          {
            "example": "Ich ärgere mich über den Lärm.",
            "translationEn": "I am annoyed by the noise.",
            "translationAr": "أنا منزعج من الضوضاء.",
            "translationTr": "Gürültüden rahatsız oluyorum.",
            "translationRo": "Sunt enervat de zgomot.",
            "translationBs": "Nervira me buka.",
            "translationEs": "Me molesta el ruido.",
            "translationBg": "Дразни ме шума.",
            "translationEl": "Με ενοχλεί ο θόρυβος.",
            "noteEn": "'mich' is the reflexive pronoun for 'ich'.",
            "noteAr": "\"mich\" هو الضمير الانعكاسي لـ \"ich\".",
            "noteTr": "'mich', 'ich'in dönüşlü zamiridir.",
            "noteRo": "„mich” este pronumele reflexiv pentru „ich”.",
            "noteBs": "'mich' je povratna zamjenica za 'ich'.",
            "noteEs": "'mich' es el pronombre reflexivo de 'ich'.",
            "noteBg": "„mich“ е възвратното местоимение за „ich“.",
            "noteEl": "Το 'mich' είναι η αντανακλαστική αντωνυμία για το 'ich'."
          }
        ]
      },
      {
        "id": "verben-praepositionen",
        "titleDe": "Verben mit Präpositionen",
        "title": "الأفعال مع حروف الجر",
        "titleEn": "Verbs with Prepositions",
        "explanation": "العديد من الأفعال في اللغة الألمانية يتبعها حرف جر محدد وحالة محددة (على سبيل المثال: sich freuen auf + حالة النصب، sprechen mit + حالة الجر).",
        "explanationEn": "Many verbs in German are followed by a specific preposition and a specific case (e.g. sich freuen auf + Accusative, sprechen mit + Dative).",
        "titleTr": "Edatlı Fiiller",
        "explanationTr": "Almanca'da pek çok fiilin ardından belirli bir edat ve belirli bir durum gelir (örneğin, sich freuen auf + Suçlayıcı, sprechen mit + Dative).",
        "titleRo": "Verbe cu prepoziții",
        "explanationRo": "Multe verbe din germană sunt urmate de o prepoziție specifică și de un caz specific (de exemplu, sich freuen auf + Acuzativ, sprechen mit + Dativ).",
        "titleBs": "Glagoli s prijedlozima",
        "explanationBs": "Mnogi glagoli u njemačkom jeziku prate određeni prijedlog i određeni padež (npr. sich freuen auf + akuzativ, sprechen mit + dativ).",
        "titleEs": "Verbos con preposiciones",
        "explanationEs": "Muchos verbos en alemán van seguidos de una preposición específica y un caso específico (por ejemplo, sich freuen auf + acusativo, sprechen mit + dativo).",
        "titleBg": "Глаголи с предлози",
        "explanationBg": "Много глаголи на немски са последвани от конкретен предлог и конкретен падеж (напр. sich freuen auf + Акузатив, sprechen mit + Дателен).",
        "titleEl": "Ρήματα με Προθέσεις",
        "explanationEl": "Πολλά ρήματα στα γερμανικά ακολουθούνται από μια συγκεκριμένη πρόθεση και μια συγκεκριμένη περίπτωση (π.χ. sich freuen auf + Κατηγορούμενο, sprechen mit + Dative).",
        "rules": [
          {
            "example": "Ich freue mich auf die Party.",
            "translation": "وإنني أتطلع إلى الحزب.",
            "translationEn": "I am looking forward to the party.",
            "note": "sich freuen auf + حالة النصب (حدث مستقبلي).",
            "noteEn": "sich freuen auf + Accusative (future event).",
            "translationTr": "Partiyi sabırsızlıkla bekliyorum.",
            "noteTr": "sich freuen auf + Suçlayıcı (gelecekteki olay).",
            "translationRo": "Astept cu nerabdare petrecerea.",
            "noteRo": "sich freuen auf + Acuzativ (eveniment viitor).",
            "translationBs": "Radujem se zabavi.",
            "noteBs": "sich freuen auf + Akuzativ (budući događaj).",
            "translationEs": "Estoy deseando que llegue la fiesta.",
            "noteEs": "sich freuen auf + Acusativo (evento futuro).",
            "translationBg": "Очаквам с нетърпение купона.",
            "noteBg": "sich freuen auf + Акузатив (бъдещо събитие).",
            "translationEl": "Ανυπομονώ για το πάρτι.",
            "noteEl": "sich freuen auf + Κατηγορούμενο (μελλοντικό συμβάν)."
          }
        ],
        "table": {
          "headers": [
            "الفعل",
            "حرف الجر",
            "الحالة الإعرابية",
            "مثال"
          ],
          "headersEn": [
            "Verb",
            "Preposition",
            "Case",
            "Example"
          ],
          "headersTr": [
            "Fiil",
            "Edat",
            "Durum",
            "Örnek"
          ],
          "headersRo": [
            "Verb",
            "Prepoziție",
            "Caz",
            "Exemplu"
          ],
          "headersBs": [
            "Glagol",
            "Prijedlog",
            "Padež",
            "Primjer"
          ],
          "headersEs": [
            "Verbo",
            "Preposición",
            "Caso",
            "Ejemplo"
          ],
          "headersBg": [
            "Глагол",
            "Предлог",
            "Падеж",
            "Пример"
          ],
          "headersEl": [
            "Ρήμα",
            "Πρόθεση",
            "Πτώση",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "warten / warten / beklemek / aștepta / čekati / esperar / чакам / περιμένω",
              "auf",
              "Akkusativ",
              "Ich warte auf dich."
            ],
            [
              "denken / denken / düşünmek / a se gândi / misliti / pensar / мисля / σκέφτομαι",
              "an",
              "Akkusativ",
              "Ich denke an meine Familie."
            ],
            [
              "träumen / träumen / rüya görmek / a visa / sanjati / soñar / сънувам / ονειρεύομαι",
              "von",
              "Dativ",
              "Ich träume von einem Haus."
            ],
            [
              "sich freuen / sich freuen / sevinmek / a se bucura / radovati se / alegrarse / радвам се / χαίρομαι",
              "auf / über",
              "Akkusativ",
              "Ich freue mich auf die Party."
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 1501,
        "type": "mcq",
        "question": "Wir freuen ___ auf das Fest.",
        "questionDe": "Wir freuen ___ auf das Fest.",
        "questionEn": "We are looking forward ___ the festival.",
        "questionAr": "نحن نتطلع ___ المهرجان.",
        "questionTr": "Festivali ___ sabırsızlıkla bekliyoruz.",
        "questionRo": "Așteptăm cu nerăbdare ___ festivalul.",
        "questionBs": "Radujemo se ___ festivalu.",
        "questionEs": "Esperamos con ansias ___ el festival.",
        "questionBg": "Очакваме с нетърпение ___ фестивала.",
        "questionEl": "Ανυπομονούμε ___ το φεστιβάλ.",
        "options": [
          {
            "de": "uns",
            "en": "us / ourselves (reflexive for wir)",
            "ar": "نحن / أنفسنا (انعكاس لـ wir)",
            "tr": "biz / kendimiz (kablo için dönüşlü)",
            "ro": "noi / noi înșine (reflexiv pentru wir)",
            "bs": "mi / mi (refleksivno za wir)",
            "es": "nosotros / nosotros mismos (reflexivo de wir)",
            "bg": "нас / себе си (рефлексивен за wir)",
            "el": "εμείς / οι εαυτοί μας (αντανακλαστικό για το wir)"
          },
          {
            "de": "sich",
            "en": "himself/themselves",
            "ar": "نفسه/أنفسهم",
            "tr": "kendisi",
            "ro": "el/ele înșiși",
            "bs": "sebe/sebe",
            "es": "él mismo/ellos mismos",
            "bg": "себе си/себе си",
            "el": "τον εαυτό τους/τον εαυτό τους"
          },
          {
            "de": "euch",
            "en": "yourselves",
            "ar": "أنفسكم",
            "tr": "kendiniz",
            "ro": "voi înșivă",
            "bs": "sebe",
            "es": "vosotros",
            "bg": "себе си",
            "el": "σείς οι ίδιοι"
          }
        ],
        "answer": 0,
        "hintDe": "Reflexivpronomen für 'wir'",
        "hintEn": "Reflexive pronoun for 'wir'",
        "hintAr": "الضمير الانعكاسي لـ \"wir\"",
        "hintTr": "'Wir' için dönüşlü zamir",
        "hintRo": "Pronume reflexiv pentru „wir”",
        "hintBs": "Povratna zamjenica za 'wir'",
        "hintEs": "Pronombre reflexivo para 'wir'",
        "hintBg": "Възвратно местоимение за 'wir'",
        "hintEl": "Ανακλαστική αντωνυμία για «wir»"
      },
      {
        "id": 1502,
        "type": "fillblank",
        "question": "Wir sprechen mit ___ Nachbarn. (der, plural)",
        "questionDe": "Wir sprechen mit ___ Nachbarn. (der, plural)",
        "questionEn": "We are speaking with the neighbors.",
        "questionAr": "نحن نتحدث مع الجيران.",
        "answer": "den",
        "questionTr": "Komşularla konuşuyoruz.",
        "questionRo": "Vorbim cu vecinii.",
        "questionBs": "Razgovaramo sa komšijama.",
        "questionEs": "Estamos hablando con los vecinos.",
        "questionBg": "Говорим със съседите.",
        "questionEl": "Μιλάμε με τους γείτονες.",
        "hintDe": "Präposition 'mit' erfordert Dativ Plural",
        "hintEn": "preposition 'mit' requires Dative plural",
        "hintAr": "حرف الجر \"mit\" يتطلب صيغة الجمع",
        "hintTr": "'mit' edatı Dative çoğulu gerektirir",
        "hintRo": "prepoziția „mit” necesită dativ plural",
        "hintBs": "prijedlog 'mit' zahtijeva Dativ množine",
        "hintEs": "la preposición 'mit' requiere dativo plural",
        "hintBg": "предлогът „mit“ изисква дателен падеж множествено число",
        "hintEl": "Η πρόθεση «mit» απαιτεί δοτική πληθυντικού"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Entschuldigung an den Nachbarn",
        "titleEn": "Apology to the neighbor",
        "titleAr": "اعتذار للجيران",
        "titleTr": "Komşudan özür dilemek",
        "titleRo": "Scuze vecinului",
        "titleBs": "Izvinjenje komšiji",
        "titleEs": "Disculpa al vecino",
        "titleBg": "Извинение към съседа",
        "titleEl": "Συγγνώμη στον γείτονα",
        "promptEn": "Write a short note to your neighbor apologizing for the loud party last night.",
        "promptAr": "اكتب رسالة قصيرة إلى جارك تعتذر فيها عن الحفل الصاخب الليلة الماضية.",
        "promptTr": "Dün geceki gürültülü parti için komşunuza özür dileyen kısa bir not yazın.",
        "promptRo": "Scrieți o scurtă notă vecinului dvs., cerându-i scuze pentru petrecerea zgomotoasă de aseară.",
        "promptBs": "Napišite kratku poruku komšiji u kojoj se izvinjavate za sinoćnu glasnu zabavu.",
        "promptEs": "Escribe una breve nota a tu vecino disculpándote por la ruidosa fiesta de anoche.",
        "promptBg": "Напишете кратка бележка на съседа си, в която се извинявате за шумния купон снощи.",
        "promptEl": "Γράψε ένα σύντομο σημείωμα στον γείτονά σου ζητώντας συγγνώμη για το δυνατό πάρτι χθες το βράδυ.",
        "promptDe": "Schreiben Sie eine kurze Notiz an Ihren Nachbarn, um sich für die laute Party gestern Abend zu entschuldigen.",
        "example": "Lieber Herr Schmidt, es tut mir leid, dass unsere Party gestern Abend so laut war. Wir haben den Geburtstag meiner Schwester gefeiert und die Zeit vergessen. Wir werden in Zukunft besser aufpassen. Vielen Dank für Ihr Verständnis!"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Es tut mir leid, wir machen sofort leiser.",
        "en": "I'm sorry, we will turn it down immediately.",
        "ar": "أنا آسف، سوف نقوم برفضه على الفور.",
        "tr": "Üzgünüm, hemen geri çevireceğiz.",
        "ro": "Îmi pare rău, îl vom refuza imediat.",
        "bs": "Žao mi je, odmah ćemo ga odbiti.",
        "es": "Lo siento, lo rechazaremos inmediatamente.",
        "bg": "Съжалявам, веднага ще го отхвърлим.",
        "el": "Λυπάμαι, θα το απορρίψουμε αμέσως."
      },
      {
        "de": "Könnten Sie bitte leiser sein?",
        "en": "Could you please be quieter?",
        "ar": "هل يمكنك من فضلك أن تكون أكثر هدوءًا؟",
        "tr": "Lütfen daha sessiz olabilir misiniz?",
        "ro": "Ați putea, vă rog, să fiți mai liniștit?",
        "bs": "Možete li, molim vas, biti tiši?",
        "es": "¿Podrías estar más tranquilo, por favor?",
        "bg": "Бихте ли по-тихо, моля?",
        "el": "Θα μπορούσατε παρακαλώ να είστε πιο ήσυχοι;"
      }
    ]
  },
  {
    "id": 16,
    "emoji": "🎓",
    "titleDe": "Schule und danach",
    "color": "#8b5cf6",
    "titleEn": "School and Afterwards",
    "titleAr": "المدرسة وبعدها",
    "titleTr": "Okul ve Sonrası",
    "titleRo": "Școala și Apoi",
    "titleBs": "Škola i poslije",
    "titleEs": "Escuela y después",
    "titleBg": "Училище и след това",
    "titleEl": "Σχολείο και μετά",
    "topicsEn": [
      "School career",
      "Vocational training",
      "Future plans"
    ],
    "topics": [
      "مهنة المدرسة",
      "التدريب المهني",
      "الخطط المستقبلية"
    ],
    "topicsTr": [
      "Okul kariyeri",
      "Mesleki eğitim",
      "Gelecek planları"
    ],
    "topicsRo": [
      "Cariera școlară",
      "Formare profesională",
      "Planuri de viitor"
    ],
    "topicsBs": [
      "Školska karijera",
      "Stručna obuka",
      "Buduci planovi"
    ],
    "topicsEs": [
      "carrera escolar",
      "formación profesional",
      "Planes futuros"
    ],
    "topicsBg": [
      "Училищна кариера",
      "Професионално обучение",
      "Бъдещи планове"
    ],
    "topicsEl": [
      "Σχολική καριέρα",
      "Επαγγελματική κατάρτιση",
      "Μελλοντικά σχέδια"
    ],
    "canDoEn": "I can talk about my school experiences and discuss training and career plans.",
    "canDo": "يمكنني التحدث عن تجاربي المدرسية ومناقشة خطط التدريب والمهنية.",
    "canDoDe": "Ich kann über meine Schulerfahrungen sprechen und Ausbildungs- und Karrierepläne besprechen.",
    "canDoTr": "Okul deneyimlerim hakkında konuşabilir, eğitim ve kariyer planları hakkında konuşabilirim.",
    "canDoRo": "Pot vorbi despre experiențele mele școlare și pot discuta despre planuri de pregătire și carieră.",
    "canDoBs": "Mogu pričati o svojim školskim iskustvima i razgovarati o obuci i planovima za karijeru.",
    "canDoEs": "Puedo hablar sobre mis experiencias escolares y discutir planes de capacitación y carrera.",
    "canDoBg": "Мога да говоря за опита си в училище и да обсъждам планове за обучение и кариера.",
    "canDoEl": "Μπορώ να μιλήσω για τις σχολικές μου εμπειρίες και να συζητήσω σχέδια κατάρτισης και καριέρας.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track21.mp3",
        "label": "16.1 - Ausbildungsplatzsuche",
        "labelEn": "16.1 - Searching for training placement",
        "labelAr": "16.1 - البحث عن مكان للتدريب",
        "labelTr": "16.1 - Eğitim yerleştirmeyi arama",
        "labelRo": "16.1 - Căutarea unui loc de pregătire",
        "labelBs": "16.1 - Traženje mjesta za obuku",
        "labelEs": "16.1 - Búsqueda de plazas de formación",
        "labelBg": "16.1 - Търсене на място за обучение",
        "labelEl": "16.1 - Αναζήτηση θέσης εκπαίδευσης"
      }
    ],
    "dialogs": [
      {
        "title": "Berufsberatung",
        "titleEn": "Career counseling",
        "titleAr": "الاستشارة المهنية",
        "titleTr": "Kariyer danışmanlığı",
        "titleRo": "Consiliere în carieră",
        "titleBs": "Karijerno savjetovanje",
        "titleEs": "Asesoramiento profesional",
        "titleBg": "Кариерно консултиране",
        "titleEl": "Επαγγελματική συμβουλευτική",
        "lines": [
          {
            "speaker": "Berater",
            "de": "Was für eine Ausbildung möchten Sie machen?",
            "en": "What kind of training would you like to do?",
            "ar": "ما نوع التدريب الذي ترغب في القيام به؟",
            "tr": "Ne tür bir eğitim yapmak istersiniz?",
            "ro": "Ce fel de antrenament ai vrea să faci?",
            "bs": "Kakvu vrstu treninga biste voljeli da radite?",
            "es": "¿Qué tipo de formación te gustaría hacer?",
            "bg": "Какъв вид обучение бихте искали да направите?",
            "el": "Τι είδους εκπαίδευση θα θέλατε να κάνετε;"
          },
          {
            "speaker": "Schüler",
            "de": "Ich interessiere mich für Informatik. Ich möchte App-Entwickler werden.",
            "en": "I am interested in computer science. I want to become an app developer.",
            "ar": "أنا مهتم بعلوم الكمبيوتر. أريد أن أصبح مطور تطبيقات.",
            "tr": "Bilgisayar bilimine ilgim var. Uygulama geliştiricisi olmak istiyorum.",
            "ro": "Sunt interesat de informatica. Vreau să devin dezvoltator de aplicații.",
            "bs": "Zanimaju me informatika. Želim postati programer aplikacija.",
            "es": "Estoy interesado en la informática. Quiero convertirme en desarrollador de aplicaciones.",
            "bg": "Интересувам се от компютърни науки. Искам да стана разработчик на приложения.",
            "el": "Ενδιαφέρομαι για την πληροφορική. Θέλω να γίνω προγραμματιστής εφαρμογών."
          },
          {
            "speaker": "Berater",
            "de": "Haben Sie schon ein Praktikum gemacht?",
            "en": "Have you already done an internship?",
            "ar": "هل قمت بالفعل بالتدريب؟",
            "tr": "Zaten staj yaptınız mı?",
            "ro": "Ai făcut deja un stagiu?",
            "bs": "Jeste li već obavili praksu?",
            "es": "¿Ya has hecho unas prácticas?",
            "bg": "Стажували ли сте вече?",
            "el": "Έχετε κάνει ήδη πρακτική;"
          },
          {
            "speaker": "Schüler",
            "de": "Ja, ich habe ein dreiwöchiges Praktikum in einer Softwarefirma absolviert.",
            "en": "Yes, I completed a three-week internship in a software company.",
            "ar": "نعم، لقد أكملت تدريبًا لمدة ثلاثة أسابيع في شركة برمجيات.",
            "tr": "Evet, bir yazılım şirketinde üç haftalık staj yaptım.",
            "ro": "Da, am efectuat un stagiu de trei săptămâni într-o companie de software.",
            "bs": "Da, završio sam tronedeljnu praksu u softverskoj kompaniji.",
            "es": "Sí, realicé una pasantía de tres semanas en una empresa de software.",
            "bg": "Да, завърших триседмичен стаж в софтуерна компания.",
            "el": "Ναι, ολοκλήρωσα πρακτική άσκηση τριών εβδομάδων σε εταιρεία λογισμικού."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Die duale Ausbildung in Deutschland",
        "titleEn": "Dual Training in Germany",
        "titleAr": "التدريب المزدوج في ألمانيا",
        "titleTr": "Almanya'da İkili Eğitim",
        "titleRo": "Training dual în Germania",
        "titleBs": "Dualni trening u Njemačkoj",
        "titleEs": "Formación Dual en Alemania",
        "titleBg": "Дуално обучение в Германия",
        "titleEl": "Dual Training στη Γερμανία",
        "text": [
          {
            "de": "In Deutschland lernen viele Jugendliche einen Beruf durch eine duale Ausbildung.",
            "en": "In Germany, many young people learn a profession through dual vocational training.",
            "ar": "في ألمانيا، يتعلم العديد من الشباب مهنة من خلال التدريب المهني المزدوج.",
            "tr": "Almanya'da birçok genç ikili mesleki eğitim yoluyla bir meslek öğreniyor.",
            "ro": "În Germania, mulți tineri învață o profesie prin formarea profesională duală.",
            "bs": "U Njemačkoj mnogi mladi ljudi uče profesiju kroz dualnu stručnu obuku.",
            "es": "En Alemania, muchos jóvenes aprenden una profesión mediante la formación profesional dual.",
            "bg": "В Германия много млади хора усвояват професия чрез дуално професионално обучение.",
            "el": "Στη Γερμανία, πολλοί νέοι μαθαίνουν ένα επάγγελμα μέσω διπλής επαγγελματικής κατάρτισης."
          },
          {
            "de": "Das bedeutet, dass sie in einer Berufsschule lernen und gleichzeitig praktisch in einer Firma arbeiten.",
            "en": "This means that they study in a vocational school and at the same time work practically in a company.",
            "ar": "وهذا يعني أنهم يدرسون في مدرسة مهنية وفي نفس الوقت يعملون عمليا في الشركة.",
            "tr": "Bu onların bir meslek okulunda okudukları ve aynı zamanda bir şirkette pratik olarak çalıştıkları anlamına gelir.",
            "ro": "Asta înseamnă că învață într-o școală profesională și în același timp lucrează practic într-o companie.",
            "bs": "To znači da se školuju u stručnoj školi i da istovremeno rade praktično u firmi.",
            "es": "Esto significa que estudian en una escuela de formación profesional y al mismo tiempo trabajan prácticamente en una empresa.",
            "bg": "Това означава, че учат в професионална гимназия и същевременно работят практически във фирма.",
            "el": "Αυτό σημαίνει ότι σπουδάζουν σε ΙΕΚ και παράλληλα εργάζονται πρακτικά σε εταιρεία."
          }
        ],
        "questions": [
          {
            "q": "Wo arbeiten Auszubildende praktisch?",
            "qDe": "Wo arbeiten Auszubildende praktisch?",
            "qEn": "Where do trainees work practically?",
            "qAr": "أين يعمل المتدربون عمليا؟",
            "qTr": "Stajyerler pratik olarak nerede çalışıyor?",
            "qRo": "Unde lucrează practic stagiarii?",
            "qBs": "Gdje praktično rade pripravnici?",
            "qEs": "¿Dónde trabajan los alumnos en la práctica?",
            "qBg": "Къде практически работят стажантите?",
            "qEl": "Πού εργάζονται πρακτικά οι εκπαιδευόμενοι;",
            "answer": "Sie arbeiten praktisch in einer Firma.",
            "answerDe": "Sie arbeiten praktisch in einer Firma.",
            "answerEn": "They work practically in a company.",
            "answerAr": "إنهم يعملون عمليا في الشركة.",
            "answerTr": "Bir şirkette pratik olarak çalışıyorlar.",
            "answerRo": "Ei lucrează practic într-o companie.",
            "answerBs": "Oni praktično rade u firmi.",
            "answerEs": "Trabajan prácticamente en una empresa.",
            "answerBg": "Те работят практически във фирма.",
            "answerEl": "Δουλεύουν πρακτικά σε μια εταιρεία."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Nebensätze mit 'dass'",
        "titleEn": "Subordinate Clauses with 'dass' (that)",
        "titleAr": "الجمل الثانوية مع \"dass\" (ذلك)",
        "titleTr": "'Dass' (that) ile Yardımcı Cümleler",
        "titleRo": "Propoziții subordonate cu „dass” (că)",
        "titleBs": "Podređene rečenice sa 'dass' (to)",
        "titleEs": "Cláusulas subordinadas con 'dass' (eso)",
        "titleBg": "Подчинени изречения с „dass“ (това)",
        "titleEl": "Δευτερεύουσες προτάσεις με «dass» (που)",
        "explanationEn": "Subordinate clauses introduced by 'dass' express opinions, facts, or beliefs, and push the conjugated verb to the end.",
        "explanationAr": "الجمل الثانوية التي أدخلتها كلمة \"dass\" تعبر عن آراء أو حقائق أو معتقدات، وتدفع الفعل المصرف إلى النهاية.",
        "explanationTr": "'Dass' tarafından getirilen yan tümceler görüşleri, gerçekleri veya inançları ifade eder ve çekimli fiili sonuna kadar iter.",
        "explanationRo": "Propozițiile subordonate introduse de „dass” exprimă opinii, fapte sau credințe și împing verbul conjugat până la capăt.",
        "explanationBs": "Podređene rečenice uvedene sa 'dass' izražavaju mišljenja, činjenice ili uvjerenja i guraju konjugirani glagol do kraja.",
        "explanationEs": "Las cláusulas subordinadas introducidas por 'dass' expresan opiniones, hechos o creencias y llevan el verbo conjugado hasta el final.",
        "explanationBg": "Подчинените изречения, въведени от 'dass', изразяват мнения, факти или вярвания и избутват спрегнатия глагол до края.",
        "explanationEl": "Οι δευτερεύουσες προτάσεις που εισάγονται από το 'dass' εκφράζουν απόψεις, γεγονότα ή πεποιθήσεις και ωθούν το συζευγμένο ρήμα μέχρι το τέλος.",
        "rules": [
          {
            "example": "Ich glaube, dass eine Ausbildung sehr wichtig ist.",
            "translationEn": "I believe that vocational training is very important.",
            "translationAr": "أعتقد أن التدريب المهني مهم جدًا.",
            "translationTr": "Mesleki eğitimin çok önemli olduğuna inanıyorum.",
            "translationRo": "Cred că formarea profesională este foarte importantă.",
            "translationBs": "Smatram da je stručno osposobljavanje veoma važno.",
            "translationEs": "Creo que la formación profesional es muy importante.",
            "translationBg": "Вярвам, че професионалното обучение е много важно.",
            "translationEl": "Πιστεύω ότι η επαγγελματική κατάρτιση είναι πολύ σημαντική.",
            "noteEn": "'ist' is pushed to the very end.",
            "noteAr": "تم دفع \"ist\" إلى النهاية.",
            "noteTr": "'ist' sonuna kadar itilir.",
            "noteRo": "„ist” este împins până la capăt.",
            "noteBs": "'ist' je gurnut do samog kraja.",
            "noteEs": "'ist' se lleva hasta el final.",
            "noteBg": "'ist' се избутва до самия край.",
            "noteEl": "Το 'ist' ωθείται μέχρι το τέλος."
          }
        ]
      },
      {
        "id": "temporale-praepositionen",
        "titleDe": "Temporale Präpositionen",
        "title": "حروف الجر الزمنية",
        "titleEn": "Temporal Prepositions",
        "explanation": "حروف الجر الزمنية مثل vor (قبل)، nach (بعد)، وin (في / بعد مدة) تعبر عن العلاقات الزمنية وعادة ما تتطلب حالة حالة الجر.",
        "explanationEn": "Temporal prepositions like vor (before), nach (after), and in (in / after a duration) express time relationships and usually require the Dative case.",
        "titleTr": "Zamansal Edatlar",
        "explanationTr": "Vor (önce), nach (sonra) ve in (bir süre içinde / sonra) gibi zamansal edatlar zaman ilişkilerini ifade eder ve genellikle Dative durumunu gerektirir.",
        "titleRo": "Prepoziții temporale",
        "explanationRo": "Prepozițiile temporale precum vor (înainte), nach (după) și în (în / după o durată) exprimă relații de timp și necesită de obicei cazul dativ.",
        "titleBs": "Temporal Prepositions",
        "explanationBs": "Vremenski prijedlozi kao što su vor (prije), nach (poslije) i in (u / poslije nekog trajanja) izražavaju vremenske odnose i obično zahtijevaju dativ.",
        "titleEs": "Preposiciones temporales",
        "explanationEs": "Las preposiciones temporales como vor (antes), nach (después) y en (en/después de una duración) expresan relaciones de tiempo y generalmente requieren el caso dativo.",
        "titleBg": "Темпорални предлози",
        "explanationBg": "Темпоралните предлози като vor (преди), nach (след) и in (в / след продължителност) изразяват времеви отношения и обикновено изискват дателен падеж.",
        "titleEl": "Χρονικές Προθέσεις",
        "explanationEl": "Οι χρονικές προθέσεις όπως vor (πριν), nach (μετά) και in (in / after a duration) εκφράζουν χρονικές σχέσεις και συνήθως απαιτούν την κεφαλαία Dative.",
        "rules": [
          {
            "example": "Nach dem Unterricht lerne ich Deutsch.",
            "translation": "بعد الدرس أدرس اللغة الألمانية.",
            "translationEn": "After the lesson, I study German.",
            "note": "تتطلب كلمة \"nach\" حالة حالة الجر (dem Unterricht).",
            "noteEn": "'nach' requires the Dative case (dem Unterricht).",
            "translationTr": "Dersten sonra Almanca çalışıyorum.",
            "noteTr": "'nach' Dative durumunu (dem Unterricht) gerektirir.",
            "translationRo": "După lecție, studiez germana.",
            "noteRo": "„nach” necesită cazul dativ (dem Unterricht).",
            "translationBs": "Nakon nastave učim njemački.",
            "noteBs": "'nach' zahtijeva dativ (dem Unterricht).",
            "translationEs": "Después de la lección, estudio alemán.",
            "noteEs": "'nach' requiere el caso dativo (dem Unterricht).",
            "translationBg": "След урока уча немски.",
            "noteBg": "„nach“ изисква дателен падеж (dem Unterricht).",
            "translationEl": "Μετά το μάθημα, μαθαίνω γερμανικά.",
            "noteEl": "Το 'nach' απαιτεί την περίπτωση Dative (dem Unterricht)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 1601,
        "type": "mcq",
        "question": "Der Lehrer sagt, dass wir fleißig lernen ___.",
        "questionDe": "Der Lehrer sagt, dass wir fleißig lernen ___.",
        "questionEn": "The teacher says that we must study hard.",
        "questionAr": "يقول المعلم أنه يجب علينا أن ندرس بجد.",
        "questionTr": "Öğretmen çok çalışmamız gerektiğini söylüyor.",
        "questionRo": "Profesorul spune că trebuie să studiem din greu.",
        "questionBs": "Učitelj kaže da moramo vrijedno učiti.",
        "questionEs": "El maestro dice que debemos estudiar mucho.",
        "questionBg": "Учителят казва, че трябва да учим здраво.",
        "questionEl": "Ο δάσκαλος λέει ότι πρέπει να μελετήσουμε σκληρά.",
        "options": [
          {
            "de": "müssen",
            "en": "must (verb at end)",
            "ar": "يجب (الفعل في النهاية)",
            "tr": "gerekir (sondaki fiil)",
            "ro": "trebuie (verb la sfârșit)",
            "bs": "moram (glagol na kraju)",
            "es": "debe (verbo al final)",
            "bg": "трябва (глагол в края)",
            "el": "πρέπει (ρήμα στο τέλος)"
          },
          {
            "de": "müsst",
            "en": "must (plural informal)",
            "ar": "يجب (جمع غير رسمي)",
            "tr": "gerekir (çoğul gayri resmi)",
            "ro": "trebuie (plural informal)",
            "bs": "mora (množina neformalno)",
            "es": "debe (plural informal)",
            "bg": "трябва (множествено число неформално)",
            "el": "πρέπει (πληθυντικός άτυπος)"
          },
          {
            "de": "haben",
            "en": "have",
            "ar": "يملك",
            "tr": "sahip olmak",
            "ro": "au",
            "bs": "imati",
            "es": "tener",
            "bg": "имат",
            "el": "έχω"
          }
        ],
        "answer": 0,
        "hintDe": "Subjekt des Nebensatzes ist 'wir'",
        "hintEn": "Subject of the subordinate clause is 'wir'",
        "hintAr": "موضوع الجملة الثانوية هو \"wir\"",
        "hintTr": "Yan cümleciğin konusu 'wir'",
        "hintRo": "Subiectul propoziției subordonate este „wir”",
        "hintBs": "Subjekt podređene rečenice je 'wir'",
        "hintEs": "El sujeto de la cláusula subordinada es 'wir'.",
        "hintBg": "Предметът на подчиненото изречение е „wir“",
        "hintEl": "Το θέμα της δευτερεύουσας πρότασης είναι \"wir\""
      },
      {
        "id": 1602,
        "type": "fillblank",
        "question": "___ der Prüfung war ich sehr nervös. (Before)",
        "questionDe": "___ der Prüfung war ich sehr nervös. (Before)",
        "questionEn": "Before the exam I was very nervous.",
        "questionAr": "قبل الامتحان كنت متوترا جدا.",
        "answer": "Vor",
        "questionTr": "Sınavdan önce çok gergindim.",
        "questionRo": "Înainte de examen eram foarte nervos.",
        "questionBs": "Prije ispita sam bio jako nervozan.",
        "questionEs": "Antes del examen estaba muy nervioso.",
        "questionBg": "Преди изпита бях много нервна.",
        "questionEl": "Πριν από τις εξετάσεις ήμουν πολύ νευρικός.",
        "hintDe": "vor + Dativ (feminin: der Prüfung)",
        "hintEn": "before + Dative (feminine)",
        "hintAr": "قبل + حالة النصب (مؤنث)",
        "hintTr": "önce + Dative (dişil)",
        "hintRo": "înainte + Dativ (feminin)",
        "hintBs": "prije + Dativ (ženski rod)",
        "hintEs": "antes + dativo (femenino)",
        "hintBg": "пред + дателен падеж (женски род)",
        "hintEl": "πριν + δοτική (θηλυκό)"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Mein Schulweg",
        "titleEn": "My school path / career",
        "titleAr": "مسار مدرستي / مسيرتي المهنية",
        "titleTr": "Okul yolum / kariyerim",
        "titleRo": "Calea mea școlară / cariera",
        "titleBs": "Moj školski put / karijera",
        "titleEs": "Mi trayectoria escolar/carrera",
        "titleBg": "Моят училищен път / кариера",
        "titleEl": "Η σχολική μου πορεία / καριέρα",
        "promptEn": "Write about your school career. Which school did you attend, which subjects did you like, and what are your plans?",
        "promptAr": "اكتب عن مسيرتك المدرسية. في أي مدرسة التحقت، وما هي المواد التي أعجبتك، وما هي خططك؟",
        "promptTr": "Okul kariyeriniz hakkında yazın. Hangi okula gittiniz, hangi konuları sevdiniz, planlarınız neler?",
        "promptRo": "Scrieți despre cariera dvs. școlară. La ce școală ați urmat, ce materii v-au plăcut și ce planuri aveți?",
        "promptBs": "Pišite o svojoj školskoj karijeri. Koju ste školu pohađali, koje predmete volite i koji su vam planovi?",
        "promptEs": "Escribe sobre tu carrera escolar. ¿A qué escuela asististe, qué materias te gustaron y cuáles son tus planes?",
        "promptBg": "Пишете за училищната си кариера. В кое училище сте учили, кои предмети харесвате и какви са плановете ви?",
        "promptEl": "Γράψε για τη σχολική σου καριέρα. Ποιο σχολείο παρακολούθησες, ποια μαθήματα σου άρεσαν και ποια είναι τα σχέδιά σου;",
        "promptDe": "Schreiben Sie über Ihre Schulzeit. Welche Schule haben Sie besucht, welche Fächer mochten Sie und was sind Ihre Pläne?",
        "example": "Ich habe die Schule in meiner Heimat besucht und dort mein Abitur gemacht. Mein Lieblingsfach war Englisch. Jetzt wohne ich in Deutschland und möchte eine Ausbildung als Elektroniker machen, weil ich Technik mag."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich möchte eine Ausbildung machen.",
        "en": "I want to do vocational training.",
        "ar": "أريد أن أقوم بالتدريب المهني.",
        "tr": "Mesleki eğitim yapmak istiyorum.",
        "ro": "Vreau să fac formare profesională.",
        "bs": "Želim da završim stručnu obuku.",
        "es": "Quiero hacer formación profesional.",
        "bg": "Искам да премина професионално обучение.",
        "el": "Θέλω να κάνω επαγγελματική κατάρτιση."
      },
      {
        "de": "Ich glaube, dass dieser Beruf Zukunft hat.",
        "en": "I believe this job has a future.",
        "ar": "أعتقد أن هذه الوظيفة لها مستقبل.",
        "tr": "Bu mesleğin bir geleceği olduğuna inanıyorum.",
        "ro": "Cred că această meserie are viitor.",
        "bs": "Vjerujem da ovaj posao ima budućnost.",
        "es": "Creo que este trabajo tiene futuro.",
        "bg": "Вярвам, че тази работа има бъдеще.",
        "el": "Πιστεύω ότι αυτή η δουλειά έχει μέλλον."
      }
    ]
  },
  {
    "id": 17,
    "emoji": "🏢",
    "titleDe": "Die neue Wohnung",
    "color": "#f59e0b",
    "titleEn": "The New Apartment",
    "titleAr": "الشقة الجديدة",
    "titleTr": "Yeni Daire",
    "titleRo": "Apartamentul Nou",
    "titleBs": "Novi stan",
    "titleEs": "El nuevo apartamento",
    "titleBg": "Новият апартамент",
    "titleEl": "Το Νέο Διαμέρισμα",
    "topicsEn": [
      "Apartment search",
      "Rental advertisements",
      "Moving and furniture"
    ],
    "topics": [
      "بحث عن شقة",
      "إعلانات الإيجار",
      "النقل والأثاث"
    ],
    "topicsTr": [
      "Daire arama",
      "Kiralama ilanları",
      "Taşınma ve mobilya"
    ],
    "topicsRo": [
      "Cautare apartament",
      "Anunturi de inchiriere",
      "Mutare si mobila"
    ],
    "topicsBs": [
      "Pretraga stana",
      "Oglasi za iznajmljivanje",
      "Selidba i namještaj"
    ],
    "topicsEs": [
      "Búsqueda de apartamento",
      "Anuncios de alquiler",
      "Mudanzas y muebles"
    ],
    "topicsBg": [
      "Търсене на апартамент",
      "Обяви за наеми",
      "Преместване и обзавеждане"
    ],
    "topicsEl": [
      "Αναζήτηση διαμερίσματος",
      "Διαφημίσεις ενοικίασης",
      "Μετακόμιση και έπιπλα"
    ],
    "canDoEn": "I can read housing ads, understand rent and utility costs, and describe my apartment layout.",
    "canDo": "أستطيع قراءة إعلانات الإسكان، وفهم تكاليف الإيجار والمرافق، ووصف تصميم شقتي.",
    "canDoDe": "Ich kann Wohnungsanzeigen lesen, Miete und Nebenkosten verstehen und die Aufteilung meiner Wohnung beschreiben.",
    "canDoTr": "Konut ilanlarını okuyabiliyor, kira ve kullanım masraflarını anlayabiliyor ve dairemin düzenini anlatabiliyorum.",
    "canDoRo": "Pot să citesc reclamele de locuințe, să înțeleg costurile cu chiria și utilitățile și să descriu aspectul apartamentului meu.",
    "canDoBs": "Mogu čitati stambene oglase, razumjeti troškove stanarine i komunalije i opisati raspored svog stana.",
    "canDoEs": "Puedo leer anuncios de vivienda, comprender los costos de alquiler y servicios públicos y describir la distribución de mi apartamento.",
    "canDoBg": "Мога да чета обяви за жилища, да разбирам разходите за наем и комунални услуги и да опиша разположението на апартамента си.",
    "canDoEl": "Μπορώ να διαβάσω τις αγγελίες στέγασης, να κατανοήσω το κόστος ενοικίου και κοινής ωφέλειας και να περιγράψω τη διάταξη του διαμερίσματός μου.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track27.mp3",
        "label": "17.1 - Wohnungsbesichtigung",
        "labelEn": "17.1 - Apartment viewing",
        "labelAr": "17.1 - مشاهدة الشقة",
        "labelTr": "17.1 - Daire görüntüleme",
        "labelRo": "17.1 - Vizualizare apartament",
        "labelBs": "17.1 - Pregled apartmana",
        "labelEs": "17.1 - Visita del apartamento",
        "labelBg": "17.1 - Оглед на апартамент",
        "labelEl": "17.1 - Προβολή διαμερίσματος"
      }
    ],
    "dialogs": [
      {
        "title": "Die Besichtigung",
        "titleEn": "The viewing",
        "titleAr": "المشاهدة",
        "titleTr": "görüntüleme",
        "titleRo": "Vizionarea",
        "titleBs": "Gledanje",
        "titleEs": "la visualización",
        "titleBg": "Гледането",
        "titleEl": "Η θέαση",
        "lines": [
          {
            "speaker": "Interessent",
            "de": "Guten Tag, wie hoch ist die Kaltmiete für die Wohnung?",
            "en": "Good day, how much is the cold rent for the apartment?",
            "ar": "مساء الخير، كم هو الإيجار البارد للشقة؟",
            "tr": "İyi günler, dairenin soğuk kirası ne kadar?",
            "ro": "Buna ziua, cat costa chiria la rece pentru apartament?",
            "bs": "Dobar dan, kolika je hladna kirija za stan?",
            "es": "Buenos días, ¿cuánto cuesta el alquiler frío del apartamento?",
            "bg": "Добър ден, колко е студеният наем за апартамента?",
            "el": "Καλημέρα, πόσο είναι το κρύο ενοίκιο για το διαμέρισμα;"
          },
          {
            "speaker": "Vermieter",
            "de": "Die Kaltmiete ist 600 Euro, dazu kommen 150 Euro Nebenkosten.",
            "en": "The cold rent is 600 euros, plus 150 euros utility costs.",
            "ar": "الإيجار البارد هو 600 يورو، بالإضافة إلى 150 يورو تكاليف المرافق.",
            "tr": "Soğuk kira 600 avro artı 150 avro kullanım gideridir.",
            "ro": "Chiria la rece este de 600 de euro, plus 150 de euro cheltuieli de utilitate.",
            "bs": "Hladna renta je 600 eura, plus komunalni troškovi 150 eura.",
            "es": "El alquiler frío es de 600 euros, más 150 euros de gastos de servicios públicos.",
            "bg": "Студеният наем е 600 евро плюс 150 евро консумативи.",
            "el": "Το κρύο ενοίκιο είναι 600 ευρώ συν 150 ευρώ τα κοινόχρηστα."
          },
          {
            "speaker": "Interessent",
            "de": "Gibt es auch eine Kaution?",
            "en": "Is there also a deposit?",
            "ar": "هل هناك أيضا وديعة؟",
            "tr": "Depozito da var mı?",
            "ro": "Există și un depozit?",
            "bs": "Postoji li i depozit?",
            "es": "¿También hay un depósito?",
            "bg": "Има ли и депозит?",
            "el": "Υπάρχει και κατάθεση;"
          },
          {
            "speaker": "Vermieter",
            "de": "Ja, die Kaution beträgt drei Monatskaltmieten.",
            "en": "Yes, the deposit is three months' cold rent.",
            "ar": "نعم، الوديعة عبارة عن إيجار بارد لمدة ثلاثة أشهر.",
            "tr": "Evet, depozito üç aylık kira bedelidir.",
            "ro": "Da, depozitul este de trei luni de chirie la rece.",
            "bs": "Da, depozit je tromesečna hladna renta.",
            "es": "Sí, el depósito es de tres meses de alquiler frío.",
            "bg": "Да, депозитът е тримесечен студен наем.",
            "el": "Ναι, η προκαταβολή είναι κρύο ενοίκιο τριών μηνών."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Wohnungssuche in Deutschland",
        "titleEn": "Searching for an Apartment in Germany",
        "titleAr": "البحث عن شقة في ألمانيا",
        "titleTr": "Almanya'da Daire Aramak",
        "titleRo": "Caut apartament in Germania",
        "titleBs": "Tražim stan u Njemačkoj",
        "titleEs": "Buscando un apartamento en Alemania",
        "titleBg": "Търся апартамент в Германия",
        "titleEl": "Ψάχνω για διαμέρισμα στη Γερμανία",
        "text": [
          {
            "de": "Wohnungsanzeigen im Internet haben viele Abkürzungen. Zum Beispiel bedeutet 'KM' Kaltmiete und 'NK' Nebenkosten.",
            "en": "Housing ads on the internet have many abbreviations. For example, 'KM' means cold rent and 'NK' means utility costs.",
            "ar": "تحتوي إعلانات الإسكان على الإنترنت على العديد من الاختصارات. على سبيل المثال، \"KM\" تعني الإيجار البارد و\"NK\" تعني تكاليف المرافق.",
            "tr": "İnternetteki konut ilanlarının birçok kısaltması bulunmaktadır. Örneğin, 'KM' soğuk kira anlamına gelir ve 'NK' kullanım maliyetleri anlamına gelir.",
            "ro": "Anunțurile de locuințe de pe internet au multe abrevieri. De exemplu, „KM” înseamnă chirie la rece, iar „NK” înseamnă costuri cu utilitățile.",
            "bs": "Stambeni oglasi na internetu imaju mnogo skraćenica. Na primjer, 'KM' znači hladnu rentu, a 'NK' znači komunalne troškove.",
            "es": "Los anuncios de vivienda en Internet tienen muchas abreviaturas. Por ejemplo, 'KM' significa alquiler frío y 'NK' significa costos de servicios públicos.",
            "bg": "Обявите за жилища в интернет имат много съкращения. Например „KM“ означава студен наем, а „NK“ означава разходи за комунални услуги.",
            "el": "Οι αγγελίες κατοικίας στο διαδίκτυο έχουν πολλές συντομογραφίες. Για παράδειγμα, «KM» σημαίνει κρύο ενοίκιο και «NK» σημαίνει κόστος κοινής ωφέλειας."
          },
          {
            "de": "Wohnungen in Großstädten sind oft sehr teuer und schwer zu finden. Man muss viele Besichtigungen machen.",
            "en": "Apartments in big cities are often very expensive and hard to find. One has to do many viewings.",
            "ar": "غالبًا ما تكون الشقق في المدن الكبرى باهظة الثمن ويصعب العثور عليها. على المرء أن يقوم بالعديد من المشاهدات.",
            "tr": "Büyük şehirlerdeki daireler genellikle çok pahalıdır ve bulunması zordur. Çok sayıda görüntüleme yapılması gerekiyor.",
            "ro": "Apartamentele din orașele mari sunt adesea foarte scumpe și greu de găsit. Trebuie să faci multe vizionări.",
            "bs": "Stanovi u velikim gradovima su često veoma skupi i teško ih je pronaći. Čovjek mora obaviti mnogo pregleda.",
            "es": "Los apartamentos en las grandes ciudades suelen ser muy caros y difíciles de encontrar. Hay que hacer muchos visionados.",
            "bg": "Апартаментите в големите градове често са много скъпи и трудни за намиране. Човек трябва да прави много гледания.",
            "el": "Τα διαμερίσματα στις μεγάλες πόλεις είναι συχνά πολύ ακριβά και δυσεύρετα. Κάποιος πρέπει να κάνει πολλές προβολές."
          }
        ],
        "questions": [
          {
            "q": "Was bedeutet die Abkürzung 'KM'?",
            "qDe": "Was bedeutet die Abkürzung 'KM'?",
            "qEn": "What does the abbreviation 'KM' mean?",
            "qAr": "ماذا يعني الاختصار \"KM\"؟",
            "qTr": "'KM' kısaltması ne anlama geliyor?",
            "qRo": "Ce înseamnă abrevierea „KM”?",
            "qBs": "Šta znači skraćenica 'KM'?",
            "qEs": "¿Qué significa la abreviatura 'KM'?",
            "qBg": "Какво означава абревиатурата \"КМ\"?",
            "qEl": "Τι σημαίνει η συντομογραφία «KM»;",
            "answer": "Sie bedeutet Kaltmiete.",
            "answerDe": "Sie bedeutet Kaltmiete.",
            "answerEn": "It means cold rent.",
            "answerAr": "يعني الإيجار البارد.",
            "answerTr": "Soğuk kira anlamına gelir.",
            "answerRo": "Înseamnă chirie la rece.",
            "answerBs": "To znači hladnu rentu.",
            "answerEs": "Quiere decir alquiler frío.",
            "answerBg": "Това означава студен наем.",
            "answerEl": "Σημαίνει κρύο ενοίκιο."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Wechselpräpositionen mit Dativ und Akkusativ",
        "titleEn": "Two-way Prepositions with Dative and Accusative",
        "titleAr": "حروف الجر في اتجاهين مع حالة النصب والنصب",
        "titleTr": "Dative ve Accusative ile İki Yönlü Edatlar",
        "titleRo": "Prepoziții bidirecționale cu dativ și acuzativ",
        "titleBs": "Dvosmjerni prijedlozi s dativom i akuzativom",
        "titleEs": "Preposiciones bidireccionales con dativo y acusativo",
        "titleBg": "Двупосочни предлози с дателен и винителен падеж",
        "titleEl": "Αμφίδρομες προθέσεις με δοτική και αιτιατική",
        "explanationEn": "Use Dative for locations (answering 'Wo?' / where) and Accusative for directions/movement (answering 'Wohin?' / where to).",
        "explanationAr": "استخدم صيغة الجر للمواقع (الإجابة بـ \"Wo؟\" / أين) وصيغة النصب للاتجاهات/الحركة (الإجابة بـ \"Wohin؟\" / إلى أين).",
        "explanationTr": "Konumlar için Dative'i ('Wo?' / nereye yanıtını vererek) ve yönler/hareket için Accusative'i ('Wohin?' / nereye yanıtını vererek) kullanın.",
        "explanationRo": "Folosiți Dativ pentru locații (răspunzând „Wo?” / unde) și Acuzativ pentru direcții/deplasare (răspunzând „Wohin?” / unde).",
        "explanationBs": "Koristite dativ za lokacije (odgovaranje 'Wo?' / gdje) i akuzativ za smjernice/kretanje (odgovaranje 'Wohin?' / kuda).",
        "explanationEs": "Utilice dativo para ubicaciones (respondiendo 'Wo?'/dónde) y acusativo para direcciones/movimiento (respondiendo 'Wohin?'/dónde).",
        "explanationBg": "Използвайте дателен падеж за местоположения (отговаряйки „Wo?“ / къде) и винителен падеж за упътвания/движение (отговаряйки „Wohin?“ / накъде).",
        "explanationEl": "Χρησιμοποιήστε το Dative για τοποθεσίες (απαντώντας \"Wo;\" / πού) και Accusative για οδηγίες/κίνηση (απαντώντας \"Wohin;\" / πού να).",
        "rules": [
          {
            "example": "Das Buch liegt auf dem Tisch (Dativ). Ich lege das Buch auf den Tisch (Akkusativ).",
            "translationEn": "The book lies on the table. I put the book on the table.",
            "translationAr": "الكتاب يقع على الطاولة. أضع الكتاب على الطاولة.",
            "translationTr": "Kitap masanın üzerinde yatıyor. Kitabı masanın üzerine koydum.",
            "translationRo": "Cartea stă pe masă. Am pus cartea pe masă.",
            "translationBs": "Knjiga leži na stolu. Stavio sam knjigu na sto.",
            "translationEs": "El libro está sobre la mesa. Dejo el libro sobre la mesa.",
            "translationBg": "Книгата лежи на масата. Сложих книгата на масата.",
            "translationEl": "Το βιβλίο βρίσκεται στο τραπέζι. Έβαλα το βιβλίο στο τραπέζι.",
            "noteEn": "liegen (position -> Dative), legen (movement -> Accusative).",
            "noteAr": "liegen (المنصب -> حالة النصب)، Legen (الحركة -> حالة النصب).",
            "noteTr": "liegen (konum -> Dative), legen (hareket -> Akusatif).",
            "noteRo": "liegen (poziție -> Dativ), legen (mișcare -> Acuzativ).",
            "noteBs": "liegen (pozicija -> Dativ), legen (pokret -> Akuzativ).",
            "noteEs": "liegen (posición -> Dativo), legen (movimiento -> Acusativo).",
            "noteBg": "liegen (позиция -> дателен), legen (движение -> акузатив).",
            "noteEl": "liegen (θέση -> Dative), legen (κίνηση -> Κατηγορούμενο)."
          }
        ]
      },
      {
        "id": "wechselpraepositionen-verben",
        "titleDe": "Positions- und Richtungsverben",
        "title": "التنسيب مقابل أفعال الموقف",
        "titleEn": "Placement vs. Position Verbs",
        "explanation": "تميز اللغة الألمانية بين الأفعال التي تحرك شيئًا ما (stellen، legen، hängen + حالة النصب) والحالات التي توضح مكان وجود شيء ما (stehen، liegen، hängen + حالة النصب).",
        "explanationEn": "German distinguishes between actions moving something (stellen, legen, hängen + Accusative) and states showing where something is (stehen, liegen, hängen + Dative).",
        "titleTr": "Yerleştirme ve Konum Fiilleri",
        "explanationTr": "Almanca, bir şeyi hareket ettiren eylemler (stellen, legen, hängen + Accusative) ile bir şeyin nerede olduğunu gösteren durumlar (stehen, liegen, hängen + Dative) arasında ayrım yapar.",
        "titleRo": "Verbe de plasare versus poziție",
        "explanationRo": "Germana face distincție între acțiunile care mișcă ceva (stellen, legen, hängen + Acuzativ) și acțiunile care arată unde este ceva (stehen, liegen, hängen + Dativ).",
        "titleBs": "Položaj glagola u odnosu na položaj",
        "explanationBs": "Njemački razlikuje radnje koje pokreću nešto (stelen, legen, hängen + akuzativ) i stanja koja pokazuju gdje se nešto nalazi (stehen, liegen, hängen + Dativ).",
        "titleEs": "Verbos de ubicación versus posición",
        "explanationEs": "El alemán distingue entre acciones que mueven algo (stellen, legen, hängen + acusativo) y estados que muestran dónde está algo (stehen, liegen, hängen + dativo).",
        "titleBg": "Разположение срещу глаголи за позиция",
        "explanationBg": "Немският прави разлика между действия, които преместват нещо (stellen, legen, hängen + Акузатив) и състояния, показващи къде се намира нещо (stehen, liegen, hängen + Дателен падеж).",
        "titleEl": "Ρήματα τοποθέτησης εναντίον θέσης",
        "explanationEl": "Τα Γερμανικά κάνουν διάκριση μεταξύ ενεργειών που κινούν κάτι (stellen, legen, hängen + Κατηγορούμενο) και δηλώνει που δείχνει πού βρίσκεται κάτι (stehen, liegen, hängen + Dative).",
        "rules": [
          {
            "example": "Ich lege das Buch auf den Tisch. (Accusative) / Das Buch liegt auf dem Tisch. (Dative)",
            "translation": "أضع الكتاب على الطاولة. / الكتاب ملقى على الطاولة.",
            "translationEn": "I lay the book on the table. / The book is lying on the table.",
            "note": "ليجن (العمل) مقابل ليجن (الحالة).",
            "noteEn": "legen (action) vs. liegen (state).",
            "translationTr": "Kitabı masanın üzerine koydum. / Kitap masanın üzerinde yatıyor.",
            "noteTr": "legen (eylem) vs. liegen (durum).",
            "translationRo": "Am pus cartea pe masă. / Cartea stă întinsă pe masă.",
            "noteRo": "legen (acțiune) vs. liegen (stare).",
            "translationBs": "Spustio sam knjigu na sto. / Knjiga leži na stolu.",
            "noteBs": "legen (akcija) naspram liegen (stanje).",
            "translationEs": "Dejo el libro sobre la mesa. / El libro está sobre la mesa.",
            "noteEs": "legen (acción) vs. liegen (estado).",
            "translationBg": "Поставям книгата на масата. / Книгата лежи на масата.",
            "noteBg": "legen (действие) срещу liegen (състояние).",
            "translationEl": "Ακουμπάω το βιβλίο στο τραπέζι. / Το βιβλίο είναι ξαπλωμένο στο τραπέζι.",
            "noteEl": "legen (δράση) εναντίον liegen (κατάσταση)."
          }
        ],
        "table": {
          "headers": [
            "فعل الحركة (اتجاه)",
            "الحالة",
            "مثال",
            "فعل السكون (موقع)",
            "الحالة",
            "مثال"
          ],
          "headersEn": [
            "Direction Verb (Aktion)",
            "Case",
            "Example",
            "Position Verb (Zustand)",
            "Case",
            "Example"
          ],
          "headersTr": [
            "Yön Yönelim Fiili",
            "Durum",
            "Örnek",
            "Konum Durum Fiili",
            "Durum",
            "Örnek"
          ],
          "headersRo": [
            "Verb de direcție (Acțiune)",
            "Caz",
            "Exemplu",
            "Verb de poziție (Stare)",
            "Caz",
            "Exemplu"
          ],
          "headersBs": [
            "Glagol kretanja (Akcija)",
            "Padež",
            "Primjer",
            "Glagol stanja (Pozicija)",
            "Padež",
            "Primjer"
          ],
          "headersEs": [
            "Verbo de dirección (Acción)",
            "Caso",
            "Ejemplo",
            "Verbo de posición (Estado)",
            "Caso",
            "Ejemplo"
          ],
          "headersBg": [
            "Глагол за посока (Действие)",
            "Падеж",
            "Пример",
            "Глагол за състояние (Положение)",
            "Падеж",
            "Пример"
          ],
          "headersEl": [
            "Ρήμα κατεύθυνσης (Ενέργεια)",
            "Πτώση",
            "Παράδειγμα",
            "Ρήμα θέσης (Κατάσταση)",
            "Πτώση",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "legen (يضع أفقياً) / legen (to lay flat) / legen / a așeza culcat / položiti / colocar horizontal / поставям легнал / τοποθετώ οριζόντια",
              "Akkusativ",
              "Ich lege das Buch auf den Tisch.",
              "liegen (يستلقي أفقياً) / liegen (to lie flat) / liegen / a sta culcat / ležati / estar tumbado / лежа / κείτομαι",
              "Dativ",
              "Das Buch liegt auf dem Tisch."
            ],
            [
              "stellen (يضع عمودياً) / stellen (to stand up) / stellen / a pune în picioare / staviti / colocar vertical / поставям изправен / τοποθετώ όρθιο",
              "Akkusativ",
              "Ich stelle das Glas ins Regal.",
              "stehen (يقف عمودياً) / stehen (to stand) / stehen / a sta în picioare / stajati / estar de pie / стоя изправен / στέκομαι",
              "Dativ",
              "Das Glas steht im Regal."
            ],
            [
              "setzen (يجلس شخصاً) / setzen (to seat) / setzen / a așeza / posaditi / sentar / поставям седнал / καθίζω",
              "Akkusativ",
              "Ich setze mich auf den Stuhl.",
              "sitzen (يجلس) / sitzen (to be seated) / sitzen / a sta așezat / sjediti / estar sentado / седя / κάθομαι",
              "Dativ",
              "Ich sitze auf dem Stuhl."
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 1701,
        "type": "mcq",
        "question": "Ich stelle den Stuhl in ___ Ecke. (die Ecke)",
        "questionDe": "Ich stelle den Stuhl in ___ Ecke. (die Ecke)",
        "questionEn": "I place the chair in the corner.",
        "questionAr": "أضع الكرسي في الزاوية.",
        "questionTr": "Sandalyeyi köşeye koyuyorum.",
        "questionRo": "Asez scaunul in colt.",
        "questionBs": "Stavljam stolicu u ugao.",
        "questionEs": "Coloco la silla en la esquina.",
        "questionBg": "Поставям стола в ъгъла.",
        "questionEl": "Τοποθετώ την καρέκλα στη γωνία.",
        "options": [
          {
            "de": "die",
            "en": "the (fem. accusative - direction)",
            "ar": "ال (فيم. حالة النصب - الاتجاه)",
            "tr": "(dişi suçlayıcı - yön)",
            "ro": "the (fem. acuzativ - direcție)",
            "bs": "the (ženski akuzativ - smjer)",
            "es": "el (fem. acusativo - dirección)",
            "bg": "the (жен. винителен падеж - посока)",
            "el": "το (θηλ. κατηγορούμενο - κατεύθυνση)"
          },
          {
            "de": "der",
            "en": "the (fem. dative)",
            "ar": "ال (فيم. موطن)",
            "tr": "(dişil datif)",
            "ro": "cel (fem. dativ)",
            "bs": "(ženski dativ)",
            "es": "el (fem. dativo)",
            "bg": "(женски дателен)",
            "el": "η (θηλ. δοτική)"
          },
          {
            "de": "den",
            "en": "the (masc. accusative)",
            "ar": "ال (masc. حالة النصب)",
            "tr": "(masc. suçlayıcı)",
            "ro": "cel (masc. acuzativ)",
            "bs": "the (mask. akuzativ)",
            "es": "el (masc. acusativo)",
            "bg": "на (маск. винителен падеж)",
            "el": "το (αρσ. κατηγορούμενο)"
          }
        ],
        "answer": 0,
        "hintDe": "stellen = wohin? -> Akkusativ",
        "hintEn": "stellen = where to? -> Accusative",
        "hintAr": "ستيلين = إلى أين؟ -> النصب",
        "hintTr": "stellen = nereye? -> Suçlayıcı",
        "hintRo": "stellen = unde? -> Acuzativ",
        "hintBs": "stellen = kuda? -> Akuzativ",
        "hintEs": "estellen = ¿adónde? -> Acusativo",
        "hintBg": "stellen = накъде? -> Винителен падеж",
        "hintEl": "stellen = πού; -> Κατηγορούμενο"
      },
      {
        "id": 1702,
        "type": "fillblank",
        "question": "Die Katze liegt auf ___ Bett. (das)",
        "questionDe": "Die Katze liegt auf ___ Bett. (das)",
        "questionEn": "The cat lies on the bed.",
        "questionAr": "القطة ترقد على السرير.",
        "answer": "dem",
        "questionTr": "Kedi yatakta yatıyor.",
        "questionRo": "Pisica se întinde pe pat.",
        "questionBs": "Mačka leži na krevetu.",
        "questionEs": "El gato yace en la cama.",
        "questionBg": "Котката лежи на леглото.",
        "questionEl": "Η γάτα ξαπλώνει στο κρεβάτι.",
        "hintDe": "liegen erfordert Dativ (Ort) für das Bett",
        "hintEn": "liegen requires Dative (location) for neuter",
        "hintAr": "يتطلب liegen حالة Dative (الموقع) للمحايد",
        "hintTr": "liegen kısırlaştırma için Dative (konum) gerektirir",
        "hintRo": "liegen necesită dativ (locație) pentru neutru",
        "hintBs": "liegen zahtijeva dativ (lokacija) za srednji rod",
        "hintEs": "liegen requiere dativo (ubicación) para neutro",
        "hintBg": "liegen изисква дателен падеж (местоположение) за среден род",
        "hintEl": "Το liegen απαιτεί Dative (τοποθεσία) για ουδέτερο"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Wohnung beschreiben",
        "titleEn": "Describe the apartment",
        "titleAr": "وصف الشقة",
        "titleTr": "Daireyi tanımlayın",
        "titleRo": "Descrieți apartamentul",
        "titleBs": "Opišite stan",
        "titleEs": "Describe el apartamento",
        "titleBg": "Опишете апартамента",
        "titleEl": "Περιγράψτε το διαμέρισμα",
        "promptEn": "Describe your apartment. How many rooms does it have, how is it furnished, and what do you like about it?",
        "promptAr": "وصف شقتك. كم عدد غرفه وكيف تم تأثيثه وما الذي يعجبك فيه؟",
        "promptTr": "Dairenizi tanımlayın. Kaç odası var, nasıl döşenmiş ve nesini beğeniyorsunuz?",
        "promptRo": "Descrie-ți apartamentul. Câte camere are, cum este mobilată și ce vă place la ea?",
        "promptBs": "Opišite svoj stan. Koliko soba ima, kako je namješten i šta vam se sviđa kod njega?",
        "promptEs": "Describe tu apartamento. ¿Cuántas habitaciones tiene, cómo está amueblado y qué te gusta de él?",
        "promptBg": "Опишете вашия апартамент. Колко стаи има, как е обзаведена и какво харесвате в нея?",
        "promptEl": "Περιγράψτε το διαμέρισμά σας. Πόσα δωμάτια έχει, πώς είναι επιπλωμένο και τι σας αρέσει;",
        "promptDe": "Beschreiben Sie Ihre Wohnung. Wie viele Zimmer hat sie, wie ist sie eingerichtet und was gefällt Ihnen daran?",
        "example": "Meine Wohnung hat drei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist sehr hell und hat einen Balkon. In der Küche koche ich gerne. Die Miete ist nicht zu teuer und ich verstehe mich gut mit den Nachbarn."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich suche eine Dreizimmerwohnung mit Balkon.",
        "en": "I am looking for a three-room apartment with a balcony.",
        "ar": "أبحث عن شقة من ثلاث غرف مع شرفة.",
        "tr": "Balkonlu üç odalı bir daire arıyorum.",
        "ro": "Caut apartament cu trei camere cu balcon.",
        "bs": "Tražim trosoban stan sa balkonom.",
        "es": "Busco piso de tres habitaciones con balcón.",
        "bg": "Търся тристаен апартамент с тераса.",
        "el": "Ψάχνω για διαμέρισμα τριών δωματίων με μπαλκόνι."
      },
      {
        "de": "Die Wohnung liegt im zweiten Stock.",
        "en": "The apartment is on the second floor.",
        "ar": "الشقة في الطابق الثاني.",
        "tr": "Daire ikinci kattadır.",
        "ro": "Apartamentul este la etajul doi.",
        "bs": "Stan se nalazi na drugom spratu.",
        "es": "El departamento está en el segundo piso.",
        "bg": "Апартаментът се намира на втори етаж.",
        "el": "Το διαμέρισμα βρίσκεται στον δεύτερο όροφο."
      }
    ]
  },
  {
    "id": 18,
    "emoji": "🚲",
    "titleDe": "Mobil in der Stadt",
    "color": "#14b8a6",
    "titleEn": "Mobile in the City / Transport",
    "titleAr": "المحمول في المدينة / النقل",
    "titleTr": "Şehirde Mobil / Ulaşım",
    "titleRo": "Mobil în oraș / Transport",
    "titleBs": "Mobilni u gradu / Prijevoz",
    "titleEs": "Móvil en la Ciudad / Transporte",
    "titleBg": "Мобилен в града / Транспорт",
    "titleEl": "Κινητό στην πόλη / Συγκοινωνίες",
    "topicsEn": [
      "Public transport",
      "Tickets and connections",
      "Directions"
    ],
    "topics": [
      "وسائل النقل العام",
      "التذاكر والاتصالات",
      "الاتجاهات"
    ],
    "topicsTr": [
      "Toplu taşıma",
      "Biletler ve bağlantılar",
      "Yol Tarifi"
    ],
    "topicsRo": [
      "Transport public",
      "Bilete și conexiuni",
      "Direcții"
    ],
    "topicsBs": [
      "Javni prevoz",
      "Karte i veze",
      "Upute"
    ],
    "topicsEs": [
      "Transporte público",
      "Entradas y conexiones",
      "Instrucciones"
    ],
    "topicsBg": [
      "Обществен транспорт",
      "Билети и връзки",
      "Упътвания"
    ],
    "topicsEl": [
      "Μέσα μαζικής μεταφοράς",
      "Εισιτήρια και συνδέσεις",
      "Οδηγίες"
    ],
    "canDoEn": "I can buy tickets, find train connections, ask for directions, and understand travel announcements.",
    "canDo": "يمكنني شراء التذاكر، والعثور على خطوط القطارات، والسؤال عن الاتجاهات، وفهم إعلانات السفر.",
    "canDoDe": "Ich kann Fahrkarten kaufen, Zugverbindungen finden, nach dem Weg fragen und Reiseankündigungen verstehen.",
    "canDoTr": "Bilet satın alabiliyorum, tren bağlantılarını bulabiliyorum, yol tarifi isteyebiliyorum ve seyahat duyurularını anlayabiliyorum.",
    "canDoRo": "Pot să cumpăr bilete, să găsesc legături de tren, să cer indicații de orientare și să înțeleg anunțurile de călătorie.",
    "canDoBs": "Mogu kupiti karte, pronaći željezničke veze, pitati za upute i razumjeti najave putovanja.",
    "canDoEs": "Puedo comprar billetes, encontrar conexiones de tren, pedir direcciones y entender anuncios de viajes.",
    "canDoBg": "Мога да купувам билети, да намирам влакови връзки, да питам за упътване и да разбирам съобщения за пътуване.",
    "canDoEl": "Μπορώ να αγοράσω εισιτήρια, να βρω συνδέσεις τρένων, να ζητήσω οδηγίες και να κατανοήσω τις ταξιδιωτικές ανακοινώσεις.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 13-18/- Track33.mp3",
        "label": "18.1 - Wegbeschreibung am Bahnhof",
        "labelEn": "18.1 - Directions at the station",
        "labelAr": "18.1 - الاتجاهات في المحطة",
        "labelTr": "18.1 - İstasyondaki yol tarifleri",
        "labelRo": "18.1 - Indicații de orientare către stație",
        "labelBs": "18.1 - Upute na stanici",
        "labelEs": "18.1 - Indicaciones para llegar a la estación",
        "labelBg": "18.1 - Упътвания на гарата",
        "labelEl": "18.1 - Οδηγίες στο σταθμό"
      }
    ],
    "dialogs": [
      {
        "title": "Am Fahrkartenschalter",
        "titleEn": "At the ticket counter",
        "titleAr": "عند شباك التذاكر",
        "titleTr": "Bilet gişesinde",
        "titleRo": "La ghișeul de bilete",
        "titleBs": "Na šalteru karata",
        "titleEs": "En el mostrador de boletos",
        "titleBg": "На гишето за билети",
        "titleEl": "Στο γκισέ εισιτηρίων",
        "lines": [
          {
            "speaker": "Fahrgast",
            "de": "Guten Tag, ich brauche eine Fahrkarte nach Frankfurt.",
            "en": "Good day, I need a ticket to Frankfurt.",
            "ar": "يوم جيد، أحتاج إلى تذكرة إلى فرانكفورت.",
            "tr": "İyi günler, Frankfurt'a bir bilete ihtiyacım var.",
            "ro": "Bună ziua, am nevoie de un bilet la Frankfurt.",
            "bs": "Dobar dan, treba mi karta za Frankfurt.",
            "es": "Buenos días, necesito un billete para Frankfurt.",
            "bg": "Добър ден, трябва ми билет до Франкфурт.",
            "el": "Καλημέρα, χρειάζομαι εισιτήριο για Φρανκφούρτη."
          },
          {
            "speaker": "Beamter",
            "de": "Möchten Sie eine einfache Fahrt oder auch eine Rückfahrkarte?",
            "en": "Would you like a one-way trip or also a return ticket?",
            "ar": "هل ترغب في رحلة ذهاب فقط أم تذكرة عودة أيضًا؟",
            "tr": "Tek yön yolculuk mu yoksa dönüş bileti mi istiyorsunuz?",
            "ro": "Doriți o călătorie dus sau și un bilet dus-întors?",
            "bs": "Želite li putovanje u jednom smjeru ili povratnu kartu?",
            "es": "¿Quieres un viaje de ida o también de vuelta?",
            "bg": "Искате ли еднопосочно пътуване или билет за връщане?",
            "el": "Θα θέλατε ένα ταξίδι απλής μετάβασης ή και ένα εισιτήριο μετ' επιστροφής;"
          },
          {
            "speaker": "Fahrgast",
            "de": "Einfach, bitte. Und fährt der Zug direkt oder muss ich umsteigen?",
            "en": "One-way, please. And does the train go directly or do I have to transfer?",
            "ar": "اتجاه واحد، من فضلك. وهل القطار يذهب مباشرة أم يجب علي التحويل؟",
            "tr": "Tek yön lütfen. Peki tren doğrudan mı gidiyor yoksa aktarma yapmam mı gerekiyor?",
            "ro": "Un singur sens, te rog. Și trenul merge direct sau trebuie să fac transfer?",
            "bs": "Jednosmjerno, molim. I da li voz ide direktno ili moram da presjednem?",
            "es": "Unidireccional, por favor. ¿Y el tren va directo o tengo que hacer transbordo?",
            "bg": "Еднопосочно, моля. А влака директно ли отива или трябва да прекачвам?",
            "el": "Μονόδρομος, παρακαλώ. Και το τρένο πάει κατευθείαν ή πρέπει να κάνω μεταφορά;"
          },
          {
            "speaker": "Beamter",
            "de": "Der Zug fährt direkt von Gleis 5 ab. Sie müssen nicht umsteigen.",
            "en": "The train goes directly from platform 5. You do not have to transfer.",
            "ar": "ينطلق القطار مباشرةً من الرصيف رقم 5. ولا يتعين عليك الانتقال.",
            "tr": "Tren doğrudan 5. perondan gidiyor. Aktarmanıza gerek yok.",
            "ro": "Trenul merge direct de la peronul 5. Nu trebuie să faceți transfer.",
            "bs": "Voz ide direktno sa perona 5. Ne morate presjedati.",
            "es": "El tren sale directamente desde el andén 5. No es necesario hacer transbordo.",
            "bg": "Влакът тръгва директно от платформа 5. Не е необходимо да прекачвате.",
            "el": "Το τρένο πηγαίνει απευθείας από την πλατφόρμα 5. Δεν χρειάζεται να μεταφερθείτε."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Verkehrsmittel in deutschen Städten",
        "titleEn": "Means of Transport in German Cities",
        "titleAr": "وسائل النقل في المدن الألمانية",
        "titleTr": "Alman Şehirlerinde Ulaşım Araçları",
        "titleRo": "Mijloace de transport în orașele germane",
        "titleBs": "Prijevozna sredstva u njemačkim gradovima",
        "titleEs": "Medios de transporte en las ciudades alemanas",
        "titleBg": "Транспортни средства в германските градове",
        "titleEl": "Μεταφορικά μέσα σε γερμανικές πόλεις",
        "text": [
          {
            "de": "In den meisten deutschen Städten gibt es ein sehr gutes Netz aus U-Bahnen, S-Bahnen und Bussen.",
            "en": "In most German cities, there is a very good network of subways, suburban trains, and buses.",
            "ar": "توجد في معظم المدن الألمانية شبكة جيدة جدًا من مترو الأنفاق وقطارات الضواحي والحافلات.",
            "tr": "Çoğu Alman şehrinde çok iyi bir metro, banliyö treni ve otobüs ağı bulunmaktadır.",
            "ro": "În majoritatea orașelor germane, există o rețea foarte bună de metrouri, trenuri suburbane și autobuze.",
            "bs": "U većini njemačkih gradova postoji vrlo dobra mreža metroa, prigradskih vozova i autobusa.",
            "es": "En la mayoría de las ciudades alemanas existe una muy buena red de metro, trenes de cercanías y autobuses.",
            "bg": "В повечето германски градове има много добра мрежа от метро, ​​крайградски влакове и автобуси.",
            "el": "Στις περισσότερες γερμανικές πόλεις, υπάρχει ένα πολύ καλό δίκτυο μετρό, προαστιακών τρένων και λεωφορείων."
          },
          {
            "de": "Viele Menschen nutzen auch das Fahrrad, um zur Arbeit zu fahren, weil es umweltfreundlich ist.",
            "en": "Many people also use the bicycle to ride to work because it is environmentally friendly.",
            "ar": "يستخدم العديد من الأشخاص أيضًا الدراجة للذهاب إلى العمل لأنها صديقة للبيئة.",
            "tr": "Çevre dostu olması nedeniyle pek çok kişi işe giderken de bisikleti kullanıyor.",
            "ro": "Mulți oameni folosesc bicicleta și pentru a merge la serviciu, deoarece este ecologică.",
            "bs": "Mnogi ljudi također koriste bicikl za vožnju na posao jer je ekološki prihvatljiv.",
            "es": "Mucha gente también utiliza la bicicleta para ir al trabajo porque es respetuosa con el medio ambiente.",
            "bg": "Много хора също използват велосипеда, за да се придвижат до работа, защото той е екологичен.",
            "el": "Πολλοί άνθρωποι χρησιμοποιούν επίσης το ποδήλατο για να οδηγήσουν στη δουλειά επειδή είναι φιλικό προς το περιβάλλον."
          }
        ],
        "questions": [
          {
            "q": "Warum nutzen viele Menschen das Fahrrad?",
            "qDe": "Warum nutzen viele Menschen das Fahrrad?",
            "qEn": "Why do many people use the bicycle?",
            "qAr": "لماذا يستخدم الكثير من الناس الدراجة؟",
            "qTr": "Neden birçok insan bisikleti kullanıyor?",
            "qRo": "De ce mulți oameni folosesc bicicleta?",
            "qBs": "Zašto mnogi ljudi koriste bicikl?",
            "qEs": "¿Por qué mucha gente usa la bicicleta?",
            "qBg": "Защо много хора използват велосипеда?",
            "qEl": "Γιατί πολλοί άνθρωποι χρησιμοποιούν το ποδήλατο;",
            "answer": "Weil es umweltfreundlich ist.",
            "answerDe": "Weil es umweltfreundlich ist.",
            "answerEn": "Because it is environmentally friendly.",
            "answerAr": "لأنها صديقة للبيئة.",
            "answerTr": "Çünkü çevre dostudur.",
            "answerRo": "Pentru că este prietenos cu mediul.",
            "answerBs": "Zato što je ekološki prihvatljiv.",
            "answerEs": "Porque es respetuoso con el medio ambiente.",
            "answerBg": "Защото е екологичен.",
            "answerEl": "Γιατί είναι φιλικό προς το περιβάλλον."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Indirekte Fragen mit 'ob'",
        "titleEn": "Indirect Questions with 'ob' (whether/if)",
        "titleAr": "أسئلة غير مباشرة مع 'ob' (سواء/إذا)",
        "titleTr": "'ob' ile Dolaylı Sorular (ister/if)",
        "titleRo": "Întrebări indirecte cu „ob” (dacă/dacă)",
        "titleBs": "Indirektna pitanja sa 'ob' (da li/ako)",
        "titleEs": "Preguntas indirectas con 'ob' (si/si)",
        "titleBg": "Непреки въпроси с 'ob' (дали/ако)",
        "titleEl": "Έμμεσες ερωτήσεις με «ob» (αν/αν)",
        "explanationEn": "Indirect yes/no questions start with 'ob', which pushes the conjugated verb to the end of the subordinate clause.",
        "explanationAr": "تبدأ أسئلة نعم/لا غير المباشرة بـ \"ob\"، مما يدفع الفعل المترافق إلى نهاية الجملة الثانوية.",
        "explanationTr": "Dolaylı evet/hayır soruları, konjuge fiili yan cümleciğin sonuna iten 'ob' ile başlar.",
        "explanationRo": "Întrebările indirecte da/nu încep cu „ob”, ceea ce împinge verbul conjugat la sfârșitul propoziției subordonate.",
        "explanationBs": "Indirektna pitanja da/ne počinju sa 'ob', što gura konjugirani glagol na kraj podređene rečenice.",
        "explanationEs": "Las preguntas indirectas de sí/no comienzan con 'ob', lo que empuja el verbo conjugado hasta el final de la cláusula subordinada.",
        "explanationBg": "Непреките въпроси с да/не започват с „ob“, което измества спрегнатия глагол в края на подчиненото изречение.",
        "explanationEl": "Οι έμμεσες ερωτήσεις ναι/όχι ξεκινούν με «ob», που ωθεί το συζευγμένο ρήμα στο τέλος της δευτερεύουσας πρότασης.",
        "rules": [
          {
            "example": "Ich möchte wissen, ob der Zug pünktlich ist.",
            "translationEn": "I would like to know if the train is on time.",
            "translationAr": "أود أن أعرف إذا كان القطار في الوقت المحدد.",
            "translationTr": "Trenin zamanında gelip gelmediğini bilmek istiyorum.",
            "translationRo": "As dori sa stiu daca trenul este la timp.",
            "translationBs": "Voleo bih da znam da li je voz na vreme.",
            "translationEs": "Me gustaría saber si el tren llega a tiempo.",
            "translationBg": "Бих искал да знам дали влакът е навреме.",
            "translationEl": "Θα ήθελα να μάθω αν το τρένο είναι στην ώρα του.",
            "noteEn": "'ist' is at the very end.",
            "noteAr": "\"ist\" هو في النهاية.",
            "noteTr": "'ist' en sondadır.",
            "noteRo": "„ist” este la sfârșit.",
            "noteBs": "'ist' je na samom kraju.",
            "noteEs": "'ist' está al final.",
            "noteBg": "'ist' е в самия край.",
            "noteEl": "Το 'ist' είναι στο τέλος."
          }
        ]
      },
      {
        "id": "richtungsadverbien",
        "titleDe": "Richtungsadverbien: hin und her",
        "title": "الاحوال الاتجاهية : هين وهي",
        "titleEn": "Directional Adverbs: hin and her",
        "explanation": "الظروف الاتجاهية تعبر عن الحركة. كلمة \"Hin\" تعني الابتعاد عن مكبر الصوت، وكلمة \"her\" تعني التحرك نحو مكبر الصوت (غالبًا ما يتم اختصارها إلى كبح، raus، rüber، rauf، runter).",
        "explanationEn": "Directional adverbs express movement. 'Hin' means moving away from the speaker, 'her' means moving towards the speaker (often shortened to rein, raus, rüber, rauf, runter).",
        "titleTr": "Yön Zarfları: hin ve o",
        "explanationTr": "Yön zarfları hareketi ifade eder. 'Hin' konuşmacıdan uzaklaşmak anlamına gelir, 'her' ise konuşmacıya doğru hareket etmek anlamına gelir (genellikle dizgin, raus, rüber, rauf, runter olarak kısaltılır).",
        "titleRo": "Adverbe direcționale: hin și ea",
        "explanationRo": "Adverbele direcționale exprimă mișcarea. „Hin” înseamnă să te îndepărtezi de vorbitor, „ea” înseamnă să te deplasezi către vorbitor (deseori scurtat în rein, raus, rüber, rauf, runter).",
        "titleBs": "Prilozi za usmjeravanje: hin and her",
        "explanationBs": "Smjerni prilozi izražavaju kretanje. 'Hin' znači udaljavanje od govornika, 'njena' znači kretanje prema govorniku (često skraćeno na rein, raus, rüber, rauf, runter).",
        "titleEs": "Adverbios direccionales: hin y ella",
        "explanationEs": "Los adverbios direccionales expresan movimiento. 'Hin' significa alejarse del hablante, 'ella' significa acercarse al hablante (a menudo abreviado como rein, raus, rüber, rauf, runter).",
        "titleBg": "Наречия за посока: hin и her",
        "explanationBg": "Наречията за посока изразяват движение. „Hin“ означава отдалечаване от говорещия, „her“ означава придвижване към говорещия (често съкратено до rein, raus, rüber, rauf, runter).",
        "titleEl": "Κατευθυντικά Επιρρήματα: hin and her",
        "explanationEl": "Τα κατευθυντικά επιρρήματα εκφράζουν κίνηση. 'Hin' σημαίνει απομάκρυνση από το ηχείο, 'her' σημαίνει κίνηση προς το ηχείο (συχνά συντομεύεται σε rein, raus, rüber, rauf, runter).",
        "rules": [
          {
            "example": "Komm bitte her! / Geh bitte hin!",
            "translation": "من فضلك تعال هنا! / من فضلك اذهب إلى هناك!",
            "translationEn": "Please come here! / Please go there!",
            "note": "لها (نحو) مقابل هين (بعيدا).",
            "noteEn": "her (towards) vs. hin (away).",
            "translationTr": "Lütfen buraya gelin! / Lütfen oraya gidin!",
            "noteTr": "ona (doğru) karşı hin (uzağa).",
            "translationRo": "Te rog vino aici! / Te rog du-te acolo!",
            "noteRo": "ea (spre) vs. hin (departe).",
            "translationBs": "Molim te dođi ovamo! / Molim te idi tamo!",
            "noteBs": "njena (prema) vs. hin (udalje).",
            "translationEs": "¡Por favor ven aquí! / ¡Por favor ve allí!",
            "noteEs": "ella (hacia) vs. hin (lejos).",
            "translationBg": "Моля, елате тук! / Моля, отидете там!",
            "noteBg": "нея (към) срещу хин (далече).",
            "translationEl": "Παρακαλώ ελάτε εδώ! / Παρακαλώ πηγαίνετε εκεί!",
            "noteEl": "της (προς) εναντίον ιν (μακριά)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 1801,
        "type": "mcq",
        "question": "Können Sie mir sagen, ob der Bus schon ___ ist? (abfahren)",
        "questionDe": "Können Sie mir sagen, ob der Bus schon ___ ist? (abfahren)",
        "questionEn": "Can you tell me if the bus has already departed?",
        "questionAr": "هل يمكن أن تخبرني إذا كانت الحافلة قد غادرت بالفعل؟",
        "questionTr": "Otobüsün çoktan hareket edip etmediğini bana söyleyebilir misiniz?",
        "questionRo": "Îmi puteți spune dacă autobuzul a plecat deja?",
        "questionBs": "Možete li mi reći da li je autobus već krenuo?",
        "questionEs": "¿Puedes decirme si el autobús ya partió?",
        "questionBg": "Можете ли да ми кажете дали автобусът вече е тръгнал?",
        "questionEl": "Μπορείτε να μου πείτε αν το λεωφορείο έχει ήδη αναχωρήσει;",
        "options": [
          {
            "de": "abgefahren",
            "en": "departed (past participle)",
            "ar": "غادر (النعت الماضي)",
            "tr": "ayrıldı (geçmiş katılımcı)",
            "ro": "plecat (participiu trecut)",
            "bs": "departed (prošlost)",
            "es": "partió (participio pasado)",
            "bg": "замина (минало причастие)",
            "el": "αναχώρησε (παρελθοντικό)"
          },
          {
            "de": "abfährt",
            "en": "departs",
            "ar": "يغادر",
            "tr": "ayrılıyor",
            "ro": "pleacă",
            "bs": "odlazi",
            "es": "sale",
            "bg": "тръгва",
            "el": "αναχωρεί"
          },
          {
            "de": "abzufahren",
            "en": "to depart",
            "ar": "للمغادرة",
            "tr": "ayrılmak",
            "ro": "a pleca",
            "bs": "da ode",
            "es": "partir",
            "bg": "да замина",
            "el": "να αναχωρήσει"
          }
        ],
        "answer": 0,
        "hintDe": "Perfekt-Form am Ende mit Hilfsverb 'ist'",
        "hintEn": "Perfect form at the end with auxiliary verb 'ist'",
        "hintAr": "شكل مثالي في النهاية مع الفعل المساعد \"ist\"",
        "hintTr": "'ist' yardımcı fiiliyle sondaki mükemmel biçim",
        "hintRo": "Forma perfectă la sfârșit cu verbul auxiliar „ist”",
        "hintBs": "Savršen oblik na kraju s pomoćnim glagolom 'ist'",
        "hintEs": "Forma perfecta al final con el verbo auxiliar 'ist'",
        "hintBg": "Перфектна форма в края със спомагателен глагол 'ist'",
        "hintEl": "Τέλεια μορφή στο τέλος με βοηθητικό ρήμα 'ist'"
      },
      {
        "id": 1802,
        "type": "fillblank",
        "question": "Komm bitte in das Haus ___! (in / inside)",
        "questionDe": "Komm bitte in das Haus ___! (in / inside)",
        "questionEn": "Please come inside the house!",
        "questionAr": "يرجى الدخول إلى المنزل!",
        "answer": "rein",
        "questionTr": "Lütfen evin içine gelin!",
        "questionRo": "Vă rog să intrați în casă!",
        "questionBs": "Molim vas uđite u kuću!",
        "questionEs": "¡Por favor, entra a la casa!",
        "questionBg": "Моля, влезте в къщата!",
        "questionEl": "Παρακαλώ ελάτε μέσα στο σπίτι!",
        "hintDe": "herein = rein (Bewegung zum Sprecher)",
        "hintEn": "herein = rein (movement towards speaker)",
        "hintAr": "هنا = كبح جماح (الحركة نحو المتحدث)",
        "hintTr": "burada = dizgin (konuşmacıya doğru hareket)",
        "hintRo": "aici = frâu (mișcare către vorbitor)",
        "hintBs": "ovdje = uzde (kretanje prema govorniku)",
        "hintEs": "herein = rienda (movimiento hacia el hablante)",
        "hintBg": "herein = юзда (движение към говорещия)",
        "hintEl": "herein = χαλινάρι (κίνηση προς το ηχείο)"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Eine Reisebeschreibung",
        "titleEn": "A travel description",
        "titleAr": "وصف السفر",
        "titleTr": "Bir seyahat açıklaması",
        "titleRo": "O descriere a călătoriei",
        "titleBs": "Opis putovanja",
        "titleEs": "Una descripción de viaje",
        "titleBg": "Описание на пътуването",
        "titleEl": "Περιγραφή ταξιδιού",
        "promptEn": "Write about a short trip you made. How did you travel, who did you go with, and what did you see?",
        "promptAr": "اكتب عن رحلة قصيرة قمت بها. كيف سافرت ومع من ذهبت وماذا رأيت؟",
        "promptTr": "Yaptığınız kısa bir gezi hakkında yazın. Nasıl seyahat ettiniz, kiminle gittiniz ve neler gördünüz?",
        "promptRo": "Scrieți despre o scurtă călătorie pe care ați făcut-o. Cum ai călătorit, cu cine ai mers și ce ai văzut?",
        "promptBs": "Napišite o svom kratkom putovanju. Kako ste putovali, s kim ste išli i šta ste vidjeli?",
        "promptEs": "Escribe sobre un viaje corto que hayas hecho. ¿Cómo viajaste, con quién fuiste y qué viste?",
        "promptBg": "Напишете за кратко пътуване, което сте направили. Как пътувахте, с кого бяхте и какво видяхте?",
        "promptEl": "Γράψτε για ένα σύντομο ταξίδι που κάνατε. Πώς ταξίδεψες, με ποιους πήγες και τι είδες;",
        "promptDe": "Schreiben Sie über eine kurze Reise, die Sie gemacht haben. Wie sind Sie gereist, mit wem und was haben Sie gesehen?",
        "example": "Letztes Wochenende bin ich mit der Bahn nach Hamburg gefahren. Ich bin mit meinem Freund gereist. Wir haben den Hafen besucht und ein Konzert gehört. Die Reise war sehr entspannt, weil die Bahn pünktlich war."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Entschuldigung, wie komme ich zum Hauptbahnhof?",
        "en": "Excuse me, how do I get to the main station?",
        "ar": "معذرة، كيف أصل إلى المحطة الرئيسية؟",
        "tr": "Affedersiniz, ana istasyona nasıl gidebilirim?",
        "ro": "Scuzați-mă, cum ajung la gara principală?",
        "bs": "Izvinite, kako da dođem do glavne stanice?",
        "es": "Disculpe, ¿cómo llego a la estación principal?",
        "bg": "Извинете, как да стигна до централната гара?",
        "el": "Με συγχωρείτε, πώς θα πάω στον κεντρικό σταθμό;"
      },
      {
        "de": "Muss ich bei dieser Verbindung umsteigen?",
        "en": "Do I have to transfer on this connection?",
        "ar": "هل يجب علي التحويل على هذا الاتصال؟",
        "tr": "Bu bağlantıda aktarım yapmam gerekiyor mu?",
        "ro": "Trebuie să transfer pe această conexiune?",
        "bs": "Moram li izvršiti prijenos na ovoj vezi?",
        "es": "¿Tengo que transferir en esta conexión?",
        "bg": "Трябва ли да прехвърлям по тази връзка?",
        "el": "Πρέπει να κάνω μεταφορά σε αυτήν τη σύνδεση;"
      }
    ]
  },
  {
    "id": 19,
    "emoji": "🎨",
    "titleDe": "Das finde ich schön",
    "color": "#6366f1",
    "titleEn": "That's What I Find Beautiful / Tastes",
    "titleAr": "هذا ما أجده جميلاً/مذاقًا",
    "titleTr": "Güzel Bulduğum Şey / Tatlar",
    "titleRo": "Asta Găsesc Frumos / Gusturi",
    "titleBs": "To je ono što mi je lijepo / ukusi",
    "titleEs": "Eso es lo que me parece bonito/Sabores",
    "titleBg": "Това е, което намирам за красиво / Вкусове",
    "titleEl": "Αυτό είναι που βρίσκω όμορφο / γεύσεις",
    "topicsEn": [
      "Art and museums",
      "Tastes and opinions",
      "Design and architecture"
    ],
    "topics": [
      "الفن والمتاحف",
      "الأذواق والآراء",
      "التصميم والهندسة المعمارية"
    ],
    "topicsTr": [
      "Sanat ve müzeler",
      "Zevkler ve görüşler",
      "Tasarım ve mimari"
    ],
    "topicsRo": [
      "Art and museums",
      "Tastes and opinions",
      "Design and architecture"
    ],
    "topicsBs": [
      "Umjetnost i muzeji",
      "Ukusi i mišljenja",
      "Dizajn i arhitektura"
    ],
    "topicsEs": [
      "Arte y museos",
      "Gustos y opiniones",
      "Diseño y arquitectura"
    ],
    "topicsBg": [
      "Изкуство и музеи",
      "Вкусове и мнения",
      "Дизайн и архитектура"
    ],
    "topicsEl": [
      "Τέχνη και μουσεία",
      "Γούστα και απόψεις",
      "Σχεδιασμός και αρχιτεκτονική"
    ],
    "canDoEn": "I can express opinions on art and design, compare things, and describe my tastes.",
    "canDo": "أستطيع التعبير عن آرائي حول الفن والتصميم، ومقارنة الأشياء، ووصف ذوقي.",
    "canDoDe": "Ich kann meine Meinung zu Kunst und Design äußern, Dinge vergleichen und meinen Geschmack beschreiben.",
    "canDoTr": "Sanat ve tasarımla ilgili görüşlerimi ifade edebiliyorum, karşılaştırma yapabiliyorum, zevklerimi anlatabiliyorum.",
    "canDoRo": "Pot să-mi exprim părerile despre artă și design, să compar lucruri și să îmi descriu gusturile.",
    "canDoBs": "Mogu izraziti mišljenje o umjetnosti i dizajnu, uporediti stvari i opisati svoje ukuse.",
    "canDoEs": "Puedo expresar opiniones sobre arte y diseño, comparar cosas y describir mis gustos.",
    "canDoBg": "Мога да изразявам мнения относно изкуството и дизайна, да сравнявам неща и да описвам вкусовете си.",
    "canDoEl": "Μπορώ να εκφράσω απόψεις για την τέχνη και το σχέδιο, να συγκρίνω πράγματα και να περιγράψω τα γούστα μου.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track01.mp3",
        "label": "19.1 - Museumsbesuch",
        "labelEn": "19.1 - Visiting a museum",
        "labelAr": "19.1 - زيارة المتحف",
        "labelTr": "19.1 - Müze ziyareti",
        "labelRo": "19.1 - Vizitarea unui muzeu",
        "labelBs": "19.1 - Posjeta muzeju",
        "labelEs": "19.1 - Visitar un museo",
        "labelBg": "19.1 - Посещение на музей",
        "labelEl": "19.1 - Επίσκεψη σε μουσείο"
      }
    ],
    "dialogs": [
      {
        "title": "Vor einem Kunstwerk",
        "titleEn": "In front of an artwork",
        "titleAr": "أمام عمل فني",
        "titleTr": "Bir sanat eserinin önünde",
        "titleRo": "În fața unei opere de artă",
        "titleBs": "Ispred umjetničkog djela",
        "titleEs": "Frente a una obra de arte",
        "titleBg": "Пред произведение на изкуството",
        "titleEl": "Μπροστά σε ένα έργο τέχνης",
        "lines": [
          {
            "speaker": "Markus",
            "de": "Schau mal dieses Gemälde an. Das finde ich wirklich schön.",
            "en": "Look at this painting. I find it really beautiful.",
            "ar": "انظر إلى هذه اللوحة. أجد أنها جميلة حقا.",
            "tr": "Şu tabloya bakın. Bunu gerçekten çok güzel buluyorum.",
            "ro": "Uită-te la acest tablou. Mi se pare foarte frumos.",
            "bs": "Pogledaj ovu sliku. Smatram da je zaista prelepo.",
            "es": "Mira este cuadro. Lo encuentro realmente hermoso.",
            "bg": "Вижте тази картина. Намирам го наистина красиво.",
            "el": "Δείτε αυτόν τον πίνακα. Το βρίσκω πολύ όμορφο."
          },
          {
            "speaker": "Sarah",
            "de": "Echt? Ich finde die Farben viel zu dunkel und hässlich.",
            "en": "Really? I find the colors much too dark and ugly.",
            "ar": "حقًا؟ أجد الألوان داكنة وقبيحة جدًا.",
            "tr": "Gerçekten mi? Renkleri çok koyu ve çirkin buluyorum.",
            "ro": "Serios? Mi se par prea inchise si urate culorile.",
            "bs": "Stvarno? Smatram da su boje previše tamne i ružne.",
            "es": "¿En realidad? Los colores me parecen demasiado oscuros y feos.",
            "bg": "наистина ли Намирам цветовете за твърде тъмни и грозни.",
            "el": "Πραγματικά; Βρίσκω τα χρώματα πολύ σκούρα και άσχημα."
          },
          {
            "speaker": "Markus",
            "de": "Das ist moderne Kunst. Sie soll interessant sein, nicht nur hübsch.",
            "en": "That is modern art. It is supposed to be interesting, not just pretty.",
            "ar": "هذا هو الفن الحديث. من المفترض أن تكون مثيرة للاهتمام، وليست جميلة فقط.",
            "tr": "İşte modern sanat budur. Sadece güzel değil ilginç de olması gerekiyordu.",
            "ro": "Asta este arta moderna. Ar trebui să fie interesant, nu doar frumos.",
            "bs": "To je moderna umjetnost. Trebalo bi da bude zanimljivo, ne samo lepo.",
            "es": "Eso es arte moderno. Se supone que debe ser interesante, no sólo bonito.",
            "bg": "Това е модерното изкуство. Предполага се, че е интересно, не просто красиво.",
            "el": "Αυτή είναι η σύγχρονη τέχνη. Υποτίθεται ότι είναι ενδιαφέρον, όχι απλώς όμορφο."
          },
          {
            "speaker": "Sarah",
            "de": "Nun ja, über Geschmack lässt sich streiten. Das andere Bild ist besser.",
            "en": "Well, there's no accounting for taste. The other picture is better.",
            "ar": "حسنًا، ليس هناك حساب للذوق. والصورة الأخرى أفضل.",
            "tr": "Zevk meselesinin muhasebesi yok. Diğer resim daha iyi.",
            "ro": "Ei bine, nu se ține cont de gust. Cealaltă poză este mai bună.",
            "bs": "Pa, nema računa o ukusu. Druga slika je bolja.",
            "es": "Bueno, sobre el gusto no hay contabilidad. La otra imagen es mejor.",
            "bg": "Е, няма сметка за вкуса. Другата снимка е по-добра.",
            "el": "Λοιπόν, δεν λαμβάνεται υπόψη η γεύση. Η άλλη εικόνα είναι καλύτερη."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Museen in Deutschland",
        "titleEn": "Museums in Germany",
        "titleAr": "المتاحف في ألمانيا",
        "titleTr": "Almanya'daki müzeler",
        "titleRo": "Muzee din Germania",
        "titleBs": "Muzeji u Njemačkoj",
        "titleEs": "Museos en Alemania",
        "titleBg": "Музеи в Германия",
        "titleEl": "Μουσεία στη Γερμανία",
        "text": [
          {
            "de": "Deutschland hat eine reiche Kultur mit Tausenden von Museen für Kunst, Geschichte und Technik.",
            "en": "Germany has a rich culture with thousands of museums for art, history, and technology.",
            "ar": "تتمتع ألمانيا بثقافة غنية حيث تضم آلاف المتاحف للفنون والتاريخ والتكنولوجيا.",
            "tr": "Almanya sanat, tarih ve teknolojiye yönelik binlerce müzeyle zengin bir kültüre sahiptir.",
            "ro": "Germania are o cultură bogată, cu mii de muzee de artă, istorie și tehnologie.",
            "bs": "Nemačka ima bogatu kulturu sa hiljadama muzeja za umetnost, istoriju i tehnologiju.",
            "es": "Alemania tiene una rica cultura con miles de museos de arte, historia y tecnología.",
            "bg": "Германия има богата култура с хиляди музеи за изкуство, история и технологии.",
            "el": "Η Γερμανία έχει έναν πλούσιο πολιτισμό με χιλιάδες μουσεία για την τέχνη, την ιστορία και την τεχνολογία."
          },
          {
            "de": "Die Museumsinsel in Berlin ist weltberühmt. Jedes Jahr besuchen Millionen Menschen diese Ausstellungen.",
            "en": "The Museum Island in Berlin is world-famous. Every year, millions of people visit these exhibitions.",
            "ar": "جزيرة المتاحف في برلين مشهورة عالميًا. كل عام، الملايين من الناس يزورون هذه المعارض.",
            "tr": "Berlin'deki Müze Adası dünyaca ünlüdür. Her yıl milyonlarca insan bu sergileri ziyaret ediyor.",
            "ro": "Insula Muzeelor ​​din Berlin este renumită în întreaga lume. În fiecare an, milioane de oameni vizitează aceste expoziții.",
            "bs": "Ostrvo muzeja u Berlinu je svjetski poznato. Svake godine milioni ljudi posete ove izložbe.",
            "es": "La Isla de los Museos de Berlín es mundialmente famosa. Cada año, millones de personas visitan estas exposiciones.",
            "bg": "Островът на музеите в Берлин е световно известен. Всяка година милиони хора посещават тези изложби.",
            "el": "Το νησί των μουσείων στο Βερολίνο είναι παγκοσμίως γνωστό. Κάθε χρόνο, εκατομμύρια άνθρωποι επισκέπτονται αυτές τις εκθέσεις."
          }
        ],
        "questions": [
          {
            "q": "Wo liegt die berühmte Museumsinsel?",
            "qDe": "Wo liegt die berühmte Museumsinsel?",
            "qEn": "Where is the famous Museum Island located?",
            "qAr": "أين تقع جزيرة المتاحف الشهيرة؟",
            "qTr": "Ünlü Müze Adası nerede bulunur?",
            "qRo": "Unde se află celebra Insula Muzeelor?",
            "qBs": "Gdje se nalazi poznato Muzejsko ostrvo?",
            "qEs": "¿Dónde se encuentra la famosa Isla de los Museos?",
            "qBg": "Къде се намира известният Остров на музеите?",
            "qEl": "Πού βρίσκεται το διάσημο νησί των μουσείων;",
            "answer": "Sie liegt in Berlin.",
            "answerDe": "Sie liegt in Berlin.",
            "answerEn": "It is located in Berlin.",
            "answerAr": "تقع في برلين.",
            "answerTr": "Berlin'de bulunmaktadır.",
            "answerRo": "Este situat în Berlin.",
            "answerBs": "Nalazi se u Berlinu.",
            "answerEs": "Está ubicado en Berlín.",
            "answerBg": "It is located in Berlin.",
            "answerEl": "Βρίσκεται στο Βερολίνο."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Komparativ und Superlativ",
        "titleEn": "Comparative and Superlative",
        "titleAr": "المقارنة والتفضيل",
        "titleTr": "Karşılaştırmalı ve Üstün",
        "titleRo": "Comparativ și Superlativ",
        "titleBs": "Komparativ i superlativ",
        "titleEs": "Comparativo y Superlativo",
        "titleBg": "Сравнително и превъзходно",
        "titleEl": "Συγκριτικός και Υπερθετικός",
        "explanationEn": "Compare things using Komparativ (-er + als) and Superlativ (am -sten). Note irregulars: gut - besser - am besten, viel - mehr - am meisten.",
        "explanationAr": "قارن بين الأشياء باستخدام Komparativ (-er + als) وSuperlativ (am -sten). ملاحظة المخالفات: القناة الهضمية - besser - am besten، viel - mehr - am meisten.",
        "explanationTr": "Compare things using Komparativ (-er + als) and Superlativ (am -sten). Düzensizlere dikkat edin: gut - besser - am besten, viel - mehr - am meisten.",
        "explanationRo": "Comparați lucrurile folosind Komparativ (-er + als) și Superlativ (am -sten). Notă neregulate: gut - besser - am besten, viel - mehr - am meisten.",
        "explanationBs": "Uporedite stvari koristeći Komparativ (-er + als) i Superlativ (am -sten). Napomena nepravilne: gut - besser - am besten, viel - mehr - am meisten.",
        "explanationEs": "Compara cosas usando Komparativ (-er + als) y Superlativ (am -sten). Nota irregulares: gut - besser - am besten, viel - mehr - am meisten.",
        "explanationBg": "Сравнете нещата, като използвате Komparativ (-er + als) и Superlativ (am -sten). Забележете неправилни: черва - besser - am besten, viel - mehr - am meisten.",
        "explanationEl": "Συγκρίνετε πράγματα χρησιμοποιώντας Komparativ (-er + als) και Superlativ (am -sten). Σημειώστε ακανόνιστα: έντερο - besser - am besten, viel - mehr - am meisten.",
        "rules": [
          {
            "example": "Dieses Sofa ist bequemer als das andere, aber das Bett ist am bequemsten.",
            "translationEn": "This sofa is more comfortable than the other, but the bed is the most comfortable.",
            "translationAr": "هذه الأريكة أكثر راحة من الأخرى، لكن السرير هو الأكثر راحة.",
            "translationTr": "Bu kanepe diğerine göre daha rahat ama yatak en rahatı.",
            "translationRo": "Această canapea este mai confortabilă decât cealaltă, dar patul este cel mai confortabil.",
            "translationBs": "Ova sofa je udobnija od druge, ali je krevet najudobniji.",
            "translationEs": "Este sofá es más cómodo que el otro, pero la cama es la más cómoda.",
            "translationBg": "Този диван е по-удобен от другия, но леглото е най-удобно.",
            "translationEl": "Αυτός ο καναπές είναι πιο άνετος από τον άλλο, αλλά το κρεβάτι είναι το πιο άνετο.",
            "noteEn": "bequem -> bequemer -> am bequemsten.",
            "noteAr": "bequem -> bequemer -> أنا bequemsten.",
            "noteTr": "bequem -> bequemer -> bequemsten.",
            "noteRo": "bequem -> bequemer -> am bequemsten.",
            "noteBs": "bequem -> bequemer -> am bequemsten.",
            "noteEs": "bequem -> bequemer -> am bequemsten.",
            "noteBg": "bequem -> bequemer -> am bequemsten.",
            "noteEl": "bequem -> bequemer -> am bequemsten."
          }
        ]
      },
      {
        "id": "adjektivdeklination-ohne-artikel",
        "titleDe": "Adjektivdeklination ohne Artikel",
        "title": "تصريف الصفة بدون المادة",
        "titleEn": "Adjective Declension without Article",
        "explanation": "عندما لا يكون هناك أداة تعريف قبل الصفة، فإن الصفة نفسها تأخذ النهاية التي كانت ستأخذها أداة التعريف (باستثناء المذكر/المحايد).",
        "explanationEn": "When there is no article before an adjective, the adjective itself takes the ending that the definite article would have taken (except genitive masculine/neuter).",
        "titleTr": "Artikelsiz Sıfat Çekimi",
        "explanationTr": "Bir sıfattan önce artikel olmadığında, sıfatın kendisi, belirli artikelin alabileceği son eki alır (genitive eril/nötr hariç).",
        "titleRo": "Adjectiv Declinare fără articol",
        "explanationRo": "Când nu există un articol înaintea unui adjectiv, adjectivul însuși ia finalul pe care ar fi luat-o articolul hotărât (cu excepția genitivului masculin/neutru).",
        "titleBs": "Deklinacija pridjeva bez člana",
        "explanationBs": "Kada ispred pridjeva nema člana, sam pridjev uzima završetak koji bi zauzeo određeni član (osim genitiva muškog/srednjeg roda).",
        "titleEs": "Declinación de adjetivos sin artículo",
        "explanationEs": "Cuando no hay ningún artículo delante de un adjetivo, el propio adjetivo toma la terminación que habría tomado el artículo definido (excepto genitivo masculino/neutro).",
        "titleBg": "Прилагателно склонение без член",
        "explanationBg": "Когато няма член пред прилагателно, самото прилагателно приема окончанието, което би получило определителният член (с изключение на родителен падеж от мъжки/среден род).",
        "titleEl": "Επίθετο κλίση χωρίς άρθρο",
        "explanationEl": "Όταν δεν υπάρχει άρθρο πριν από ένα επίθετο, το ίδιο το επίθετο παίρνει την κατάληξη που θα έπαιρνε το οριστικό άρθρο (εκτός από το γενικό αρσενικό/ουδέτερο).",
        "rules": [
          {
            "example": "Kreative Künstler malen bunte Bilder.",
            "translation": "الفنانون المبدعون يرسمون صورًا ملونة.",
            "translationEn": "Creative artists paint colorful pictures.",
            "note": "الجمع الاسمي بدون أداة يأخذ -e.",
            "noteEn": "Nominative plural without article takes -e.",
            "translationTr": "Yaratıcı sanatçılar renkli resimler çiziyor.",
            "noteTr": "Artikelsiz yalın çoğul -e alır.",
            "translationRo": "Artiștii creativi pictează imagini colorate.",
            "noteRo": "Nominativ plural fără articol ia -e.",
            "translationBs": "Kreativni umjetnici slikaju šarene slike.",
            "noteBs": "Imenativ množine bez člana uzima -e.",
            "translationEs": "Los artistas creativos pintan cuadros coloridos.",
            "noteEs": "El nominativo plural sin artículo lleva -e.",
            "translationBg": "Творческите художници рисуват цветни картини.",
            "noteBg": "Именителен падеж множествено число без член взема -е.",
            "translationEl": "Δημιουργικοί καλλιτέχνες ζωγραφίζουν πολύχρωμες εικόνες.",
            "noteEl": "Ονομαστική πληθυντικού χωρίς άρθρο παίρνει -ε."
          }
        ],
        "table": {
          "headers": [
            "الحالة / الجنس",
            "مذكر (Maskulin)",
            "محايد (Neutral)",
            "مؤنث (Feminin)",
            "الجمع (Plural)"
          ],
          "headersEn": [
            "Case / Gender",
            "Masculine (Maskulin)",
            "Neuter (Neutral)",
            "Feminine (Feminin)",
            "Plural"
          ],
          "headersTr": [
            "Durum / Cinsiyet",
            "Eril (Maskulin)",
            "Nötr (Neutral)",
            "Dişil (Feminin)",
            "Çoğul (Plural)"
          ],
          "headersRo": [
            "Caz / Gen",
            "Masculin",
            "Neutru",
            "Feminin",
            "Plural"
          ],
          "headersBs": [
            "Padež / Rod",
            "Muški",
            "Srednji",
            "Ženski",
            "Množina"
          ],
          "headersEs": [
            "Caso / Género",
            "Masculino",
            "Neutro",
            "Femenino",
            "Plural"
          ],
          "headersBg": [
            "Падеж / Род",
            "Мъжки род",
            "Среден род",
            "Женски род",
            "Множествено число"
          ],
          "headersEl": [
            "Πτώση / Γένος",
            "Αρσενικό",
            "Ουδέτερο",
            "Θηλυκό",
            "Πληθυντικός"
          ],
          "rows": [
            [
              "الرفع (Nominativ) / Nominative / Yalın (Nominativ) / Nominativ / Nominativ / Nominativo / Именителен падеж / Ονομαστική",
              "kalter Tee",
              "frisches Wasser",
              "heiße Milch",
              "süße Früchte"
            ],
            [
              "النصب (Akkusativ) / Accusative / -i Hali (Akkusativ) / Acuzativ / Akuzativ / Acusativo / Винителен падеж / Αιτιατική",
              "kalten Tee",
              "frisches Wasser",
              "heiße Milch",
              "süße Früchte"
            ],
            [
              "الجر (Dativ) / Dative / -e Hali (Dativ) / Dativ / Dativ / Dativo / Дателен падеж / Доτική",
              "kaltem Tee",
              "frischem Wasser",
              "heißer Milch",
              "süßen Früchten"
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 1901,
        "type": "mcq",
        "question": "Fußball gefällt mir gut, aber Basketball finde ich ___.",
        "questionDe": "Fußball gefällt mir gut, aber Basketball finde ich ___.",
        "questionEn": "I like football, but I find basketball better.",
        "questionAr": "أحب كرة القدم، لكني أجد كرة السلة أفضل.",
        "questionTr": "Futbolu seviyorum ama basketbolu daha iyi buluyorum.",
        "questionRo": "Îmi place fotbalul, dar baschetul mi se pare mai bun.",
        "questionBs": "Volim fudbal, ali mi je košarka bolja.",
        "questionEs": "Me gusta el fútbol, ​​pero encuentro mejor el baloncesto.",
        "questionBg": "Харесвам футбола, но намирам баскетбола за по-добър.",
        "questionEl": "Μου αρέσει το ποδόσφαιρο, αλλά το μπάσκετ το βρίσκω καλύτερο.",
        "options": [
          {
            "de": "besser",
            "en": "better (comparative of gut)",
            "ar": "أفضل (مقارنة القناة الهضمية)",
            "tr": "daha iyi (bağırsakla karşılaştırıldığında)",
            "ro": "mai bun (comparativ cu intestin)",
            "bs": "bolje (u poređenju sa crijevima)",
            "es": "mejor (comparativo de tripa)",
            "bg": "по-добре (сравнение с червата)",
            "el": "καλύτερα (σε σύγκριση με το έντερο)"
          },
          {
            "de": "gut",
            "en": "good",
            "ar": "جيد",
            "tr": "iyi",
            "ro": "bun",
            "bs": "dobro",
            "es": "bien",
            "bg": "добре",
            "el": "καλός"
          },
          {
            "de": "am besten",
            "en": "the best",
            "ar": "الأفضل",
            "tr": "en iyisi",
            "ro": "cel mai bun",
            "bs": "najbolji",
            "es": "el mejor",
            "bg": "най-доброто",
            "el": "το καλύτερο"
          }
        ],
        "answer": 0,
        "hintDe": "Komparativ-Form von 'gut'",
        "hintEn": "Comparative form of 'gut'",
        "hintAr": "شكل مقارن من \"القناة الهضمية\"",
        "hintTr": "'Bağırsak' kelimesinin karşılaştırmalı biçimi",
        "hintRo": "Forma comparativă a „intestinului”",
        "hintBs": "Uporedni oblik 'creva'",
        "hintEs": "Forma comparativa de 'tripa'",
        "hintBg": "Сравнителна форма на \"червата\"",
        "hintEl": "Συγκριτική μορφή του «έντερου»"
      },
      {
        "id": 1902,
        "type": "fillblank",
        "question": "Ich trinke gern ___ Kaffee. (heiß)",
        "questionDe": "Ich trinke gern ___ Kaffee. (heiß)",
        "questionEn": "I like to drink hot coffee.",
        "questionAr": "أحب شرب القهوة الساخنة.",
        "answer": "heißen",
        "questionTr": "Sıcak kahve içmeyi severim.",
        "questionRo": "Îmi place să beau cafea fierbinte.",
        "questionBs": "Volim da pijem toplu kafu.",
        "questionEs": "Me gusta tomar café caliente.",
        "questionBg": "Обичам да пия горещо кафе.",
        "questionEl": "Μου αρέσει να πίνω ζεστό καφέ.",
        "hintDe": "Akkusativ maskulin, kein Artikel",
        "hintEn": "accusative masculine, no article",
        "hintAr": "حالة النصب المذكر، لا يوجد مقال",
        "hintTr": "suçlayıcı erkeksi, makale yok",
        "hintRo": "acuzativ masculin, fără articol",
        "hintBs": "akuzativ muškog roda, bez člana",
        "hintEs": "acusativo masculino, sin artículo",
        "hintBg": "винителен падеж мъжки род, без член",
        "hintEl": "κατηγορούμενο αρσενικό, κανένα άρθρο"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Mein Lieblingskunstwerk",
        "titleEn": "My favorite artwork / design",
        "titleAr": "العمل الفني/التصميم المفضل لدي",
        "titleTr": "En sevdiğim sanat eseri/tasarım",
        "titleRo": "Opera mea de artă / design preferată",
        "titleBs": "Moje omiljeno umjetničko djelo / dizajn",
        "titleEs": "Mi obra de arte/diseño favorito",
        "titleBg": "Любимото ми произведение на изкуството / дизайн",
        "titleEl": "Το αγαπημένο μου έργο τέχνης / σχέδιο",
        "promptEn": "Write about an object, painting, or building that you find beautiful. What is it, what color does it have, and why do you like it?",
        "promptAr": "اكتب عن شيء أو لوحة أو مبنى تجده جميلاً. ما هو وما لونه ولماذا يعجبك؟",
        "promptTr": "Güzel bulduğunuz bir nesne, resim veya bina hakkında yazın. Nedir, hangi rengi var ve neden onu seviyorsunuz?",
        "promptRo": "Scrieți despre un obiect, pictură sau clădire care vi se pare frumoasă. Ce este, ce culoare are și de ce vă place?",
        "promptBs": "Pišite o objektu, slici ili zgradi koju smatrate prekrasnim. Šta je, koje boje ima i zašto vam se sviđa?",
        "promptEs": "Escribe sobre un objeto, pintura o edificio que te parezca hermoso. ¿Qué es, qué color tiene y por qué te gusta?",
        "promptBg": "Напишете за предмет, картина или сграда, които намирате за красиви. Какво е, какъв цвят има и защо ви харесва?",
        "promptEl": "Γράψτε για ένα αντικείμενο, έναν πίνακα ή ένα κτίριο που βρίσκετε όμορφο. Τι είναι, τι χρώμα έχει και γιατί σας αρέσει;",
        "promptDe": "Schreiben Sie über einen Gegenstand, ein Gemälde oder ein Gebäude, das Sie schön finden. Was ist es, welche Farbe hat es und warum gefällt es Ihnen?",
        "example": "Ich finde das Brandenburger Tor in Berlin sehr schön. Es ist ein historisches Bauwerk aus Stein. Es sieht besonders abends beleuchtet sehr beeindruckend aus. Ich fotografiere es gerne, wenn ich in Berlin bin."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich finde dieses Design sehr modern.",
        "en": "I find this design very modern.",
        "ar": "أجد هذا التصميم حديثًا جدًا.",
        "tr": "Bu tasarımı çok modern buluyorum.",
        "ro": "Mi se pare foarte modern acest design.",
        "bs": "Smatram da je ovaj dizajn vrlo moderan.",
        "es": "Este diseño me parece muy moderno.",
        "bg": "Намирам този дизайн за много модерен.",
        "el": "Βρίσκω αυτό το σχέδιο πολύ μοντέρνο."
      },
      {
        "de": "Das Bild ist viel schöner als das andere.",
        "en": "The picture is much nicer than the other one.",
        "ar": "الصورة أجمل بكثير من الصورة الأخرى.",
        "tr": "Resim diğerine göre çok daha güzel.",
        "ro": "Poza este mult mai frumoasa decat cealalta.",
        "bs": "Slika je mnogo lepša od one druge.",
        "es": "La imagen es mucho más bonita que la otra.",
        "bg": "Снимката е много по-хубава от другата.",
        "el": "Η εικόνα είναι πολύ πιο ωραία από την άλλη."
      }
    ]
  },
  {
    "id": 20,
    "emoji": "🎬",
    "titleDe": "Komm doch mit!",
    "color": "#eab308",
    "titleEn": "Come Along! / Leisure",
    "titleAr": "تعال على طول! / فراغ",
    "titleTr": "Gelin! / Boş vakit",
    "titleRo": "Vino împreună! / Timp liber",
    "titleBs": "Come Along! / Slobodno vrijeme",
    "titleEs": "¡Venir también! / Ocio",
    "titleBg": "Хайде! / Свободно време",
    "titleEl": "Παρουσιάζομαι! / Αναψυχή",
    "topicsEn": [
      "Leisure activities",
      "Scheduling appointments",
      "Declining and postponing"
    ],
    "topics": [
      "الأنشطة الترفيهية",
      "جدولة المواعيد",
      "تراجع وتأجيل"
    ],
    "topicsTr": [
      "Boş zaman aktiviteleri",
      "Randevu planlama",
      "Reddetmek ve ertelemek"
    ],
    "topicsRo": [
      "Activități de agrement",
      "Programarea intalnirilor",
      "Declin și amânare"
    ],
    "topicsBs": [
      "Slobodne aktivnosti",
      "Zakazivanje termina",
      "Odbijanje i odlaganje"
    ],
    "topicsEs": [
      "Actividades de ocio",
      "Programar citas",
      "Rechazar y posponer"
    ],
    "topicsBg": [
      "Развлекателни дейности",
      "Насрочване на срещи",
      "Отказ и отлагане"
    ],
    "topicsEl": [
      "Δραστηριότητες αναψυχής",
      "Προγραμματισμός ραντεβού",
      "Μείωση και αναβολή"
    ],
    "canDoEn": "I can plan joint activities, make suggestions, and reschedule appointments with friends.",
    "canDo": "يمكنني التخطيط للأنشطة المشتركة وتقديم الاقتراحات وإعادة جدولة المواعيد مع الأصدقاء.",
    "canDoDe": "Ich kann gemeinsame Aktivitäten planen, Vorschläge machen und Termine mit Freunden verschieben.",
    "canDoTr": "Arkadaşlarımla ortak aktiviteler planlayabilir, önerilerde bulunabilir ve randevuları yeniden planlayabilirim.",
    "canDoRo": "Pot planifica activități comune, pot face sugestii și pot reprograma întâlnirile cu prietenii.",
    "canDoBs": "Mogu planirati zajedničke aktivnosti, davati prijedloge i pomjerati termine sa prijateljima.",
    "canDoEs": "Puedo planificar actividades conjuntas, hacer sugerencias y reprogramar citas con amigos.",
    "canDoBg": "Мога да планирам съвместни дейности, да правя предложения и да пренасрочвам срещи с приятели.",
    "canDoEl": "Μπορώ να προγραμματίσω κοινές δραστηριότητες, να κάνω προτάσεις και να προγραμματίσω εκ νέου ραντεβού με φίλους.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track06.mp3",
        "label": "20.1 - Freizeitplanung",
        "labelEn": "20.1 - Leisure planning",
        "labelAr": "20.1 - التخطيط للترفيه",
        "labelTr": "20.1 - Boş zaman planlaması",
        "labelRo": "20.1 - Planificarea timpului liber",
        "labelBs": "20.1 - Planiranje slobodnog vremena",
        "labelEs": "20.1 - Planificación del ocio",
        "labelBg": "20.1 - Планиране на свободното време",
        "labelEl": "20.1 - Σχεδιασμός αναψυχής"
      }
    ],
    "dialogs": [
      {
        "title": "Verabredung fürs Wochenende",
        "titleEn": "Arrangement for the weekend",
        "titleAr": "الترتيب لعطلة نهاية الأسبوع",
        "titleTr": "Hafta sonu için düzenleme",
        "titleRo": "Aranjament pentru weekend",
        "titleBs": "Aranzman za vikend",
        "titleEs": "Arreglo para el fin de semana",
        "titleBg": "Аранжировка за уикенда",
        "titleEl": "Ρύθμιση για το Σαββατοκύριακο",
        "lines": [
          {
            "speaker": "Thomas",
            "de": "Hast du Lust, am Sonntag wandern zu gehen? Das Wetter soll schön sein.",
            "en": "Do you feel like going hiking on Sunday? The weather is supposed to be nice.",
            "ar": "هل تشعر بالرغبة في الذهاب للتنزه يوم الأحد؟ من المفترض أن يكون الطقس جميلاً.",
            "tr": "Pazar günü yürüyüşe çıkmak ister misiniz? Havanın güzel olması gerekiyor.",
            "ro": "Îți vine să faci drumeții duminică? Vremea ar trebui să fie frumoasă.",
            "bs": "Da li vam se nedjeljom ide na planinarenje? Vrijeme bi trebalo biti lijepo.",
            "es": "¿Te apetece hacer senderismo el domingo? Se supone que hará buen tiempo.",
            "bg": "Искате ли да ходите на туризъм в неделя? Времето трябва да е хубаво.",
            "el": "Θέλετε να κάνετε πεζοπορία την Κυριακή; Ο καιρός υποτίθεται ότι είναι καλός."
          },
          {
            "speaker": "Maria",
            "de": "Das ist eine gute Idee! Wann und wo wollen wir uns treffen?",
            "en": "That's a good idea! When and where do we want to meet?",
            "ar": "هذه فكرة جيدة! متى وأين نريد أن نلتقي؟",
            "tr": "Bu iyi bir fikir! Ne zaman ve nerede buluşmak istiyoruz?",
            "ro": "E o idee bună! Când și unde vrem să ne întâlnim?",
            "bs": "To je dobra ideja! Kada i gdje želimo da se nađemo?",
            "es": "¡Esa es una buena idea! ¿Cuándo y dónde queremos encontrarnos?",
            "bg": "Това е добра идея! Кога и къде искаме да се срещнем?",
            "el": "Αυτή είναι μια καλή ιδέα! Πότε και πού θέλουμε να βρεθούμε;"
          },
          {
            "speaker": "Thomas",
            "de": "Treffen wir uns um 9 Uhr am Hauptbahnhof am Gleis 3.",
            "en": "Let's meet at 9 AM at the main station on platform 3.",
            "ar": "دعونا نجتمع في الساعة 9 صباحًا في المحطة الرئيسية على الرصيف 3.",
            "tr": "Sabah 9'da ana istasyondaki platform 3'te buluşalım.",
            "ro": "Să ne întâlnim la ora 9 dimineața la gara principală de pe peronul 3.",
            "bs": "Nađimo se u 9 ujutro na glavnoj stanici na peronu 3.",
            "es": "Nos vemos a las 9 a.m. en la estación principal en el andén 3.",
            "bg": "Да се ​​срещнем в 9 сутринта на централната гара на платформа 3.",
            "el": "Ας συναντηθούμε στις 9 το πρωί στον κεντρικό σταθμό στην πλατφόρμα 3."
          },
          {
            "speaker": "Maria",
            "de": "Alles klar, bis Sonntag. Ich freue mich!",
            "en": "Alright, see you Sunday. I am looking forward to it!",
            "ar": "حسنًا، أراك يوم الأحد. أنا أتطلع إلى ذلك!",
            "tr": "Tamam, Pazar günü görüşürüz. Bunu sabırsızlıkla bekliyorum!",
            "ro": "Bine, ne vedem duminică. Aștept cu nerăbdare!",
            "bs": "U redu, vidimo se u nedjelju. Jedva čekam!",
            "es": "Muy bien, nos vemos el domingo. ¡Estoy deseando que llegue!",
            "bg": "Добре, ще се видим в неделя. Очаквам го с нетърпение!",
            "el": "Εντάξει, τα λέμε την Κυριακή. Ανυπομονώ!"
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Freizeit der Deutschen",
        "titleEn": "Leisure Time of Germans",
        "titleAr": "أوقات الفراغ لدى الألمان",
        "titleTr": "Almanların Boş Zamanları",
        "titleRo": "Timpul liber al germanilor",
        "titleBs": "Slobodno vrijeme Nijemaca",
        "titleEs": "El tiempo libre de los alemanes",
        "titleBg": "Свободно време на германците",
        "titleEl": "Ελεύθερος χρόνος των Γερμανών",
        "text": [
          {
            "de": "Die Menschen in Deutschland verbringen ihre Freizeit gerne aktiv. Viele sind Mitglieder in einem Sportverein.",
            "en": "People in Germany like to spend their free time actively. Many are members of a sports club.",
            "ar": "يحب الناس في ألمانيا قضاء أوقات فراغهم بنشاط. والعديد منهم أعضاء في نادٍ رياضي.",
            "tr": "Almanya'da insanlar boş zamanlarını aktif olarak geçirmeyi seviyor. Çoğu bir spor kulübüne üye.",
            "ro": "Oamenilor din Germania le place să își petreacă timpul liber în mod activ. Mulți sunt membri ai unui club sportiv.",
            "bs": "Ljudi u Njemačkoj vole aktivno provoditi svoje slobodno vrijeme. Mnogi su članovi sportskih klubova.",
            "es": "A los alemanes les gusta pasar su tiempo libre de forma activa. Muchos son miembros de un club deportivo.",
            "bg": "Хората в Германия обичат да прекарват свободното си време активно. Много от тях са членове на спортен клуб.",
            "el": "Οι άνθρωποι στη Γερμανία θέλουν να περνούν ενεργά τον ελεύθερο χρόνο τους. Πολλοί είναι μέλη αθλητικού συλλόγου."
          },
          {
            "de": "Wandern im Wald und Radfahren sind ebenfalls sehr beliebte Freizeitbeschäftigungen.",
            "en": "Hiking in the forest and cycling are also very popular leisure activities.",
            "ar": "تعتبر رياضة المشي لمسافات طويلة في الغابة وركوب الدراجات من الأنشطة الترفيهية الشهيرة جدًا.",
            "tr": "Ormanda yürüyüş yapmak ve bisiklete binmek de oldukça popüler boş zaman etkinlikleridir.",
            "ro": "Drumețiile în pădure și ciclismul sunt, de asemenea, activități de agrement foarte populare.",
            "bs": "Pješačenje u šumi i vožnja bicikla također su vrlo popularne aktivnosti u slobodno vrijeme.",
            "es": "El senderismo por el bosque y el ciclismo también son actividades de ocio muy populares.",
            "bg": "Туризмът в гората и колоезденето също са много популярни дейности за свободното време.",
            "el": "Η πεζοπορία στο δάσος και η ποδηλασία είναι επίσης πολύ δημοφιλείς δραστηριότητες αναψυχής."
          }
        ],
        "questions": [
          {
            "q": "Wo spielen viele Menschen Sport?",
            "qDe": "Wo spielen viele Menschen Sport?",
            "qEn": "Where do many people play sports?",
            "qAr": "أين يمارس الكثير من الناس الرياضة؟",
            "qTr": "Birçok insan nerede spor yapıyor?",
            "qRo": "Unde fac sport mulți?",
            "qBs": "Gdje se mnogi ljudi bave sportom?",
            "qEs": "¿Dónde practica deportes mucha gente?",
            "qBg": "Къде спортуват много хора?",
            "qEl": "Πού αθλούνται πολλοί;",
            "answer": "Sie spielen Sport in einem Sportverein.",
            "answerDe": "Sie spielen Sport in einem Sportverein.",
            "answerEn": "They play sports in a sports club.",
            "answerAr": "يمارسون الرياضة في نادٍ رياضي.",
            "answerTr": "Bir spor kulübünde spor yapıyorlar.",
            "answerRo": "Ei fac sport într-un club sportiv.",
            "answerBs": "Bave se sportom u sportskom klubu.",
            "answerEs": "Practican deportes en un club deportivo.",
            "answerBg": "Спортуват в спортен клуб.",
            "answerEl": "Αθλούνται σε αθλητικό σωματείο."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Konditionalsätze mit 'wenn'",
        "titleEn": "Conditional Clauses with 'wenn' (if/when)",
        "titleAr": "الجمل الشرطية مع \"wenn\" (إذا/متى)",
        "titleTr": "'Wenn' içeren Koşullu Cümleler (if/when)",
        "titleRo": "Propoziții condiționale cu „wenn” (dacă/când)",
        "titleBs": "Uslovne rečenice sa 'wenn' (ako/kada)",
        "titleEs": "Cláusulas condicionales con 'wenn' (si/cuándo)",
        "titleBg": "Условни клаузи с 'wenn' (ако/когато)",
        "titleEl": "Ρήτρες υπό όρους με «wenn» (εάν/πότε)",
        "explanationEn": "Conditional sentences state a condition and a result. The subordinate clause starts with 'wenn' and pushes the verb to the end.",
        "explanationAr": "الجمل الشرطية تشير إلى شرط ونتيجة. تبدأ الجملة الثانوية بـ \"wenn\" وتدفع الفعل إلى النهاية.",
        "explanationTr": "Koşul cümleleri bir koşulu ve sonucu belirtir. Yan cümle 'wenn' ile başlar ve fiili sonuna kadar iter.",
        "explanationRo": "Propozițiile condiționate stabilesc o condiție și un rezultat. Propoziția subordonată începe cu „wenn” și împinge verbul până la sfârșit.",
        "explanationBs": "Uslovne rečenice navode uslov i rezultat. Podređena rečenica počinje sa 'wenn' i gura glagol do kraja.",
        "explanationEs": "Las oraciones condicionales establecen una condición y un resultado. La cláusula subordinada comienza con 'wenn' y lleva el verbo hasta el final.",
        "explanationBg": "Условните изречения посочват условие и резултат. Подчиненото изречение започва с 'wenn' и измества глагола до края.",
        "explanationEl": "Οι προτάσεις υπό όρους δηλώνουν μια προϋπόθεση και ένα αποτέλεσμα. Η δευτερεύουσα πρόταση αρχίζει με «wenn» και ωθεί το ρήμα μέχρι το τέλος.",
        "rules": [
          {
            "example": "Wenn das Wetter schön ist, gehen wir spazieren.",
            "translationEn": "If the weather is nice, we go for a walk.",
            "translationAr": "إذا كان الطقس جميلاً، نذهب في نزهة على الأقدام.",
            "translationTr": "Hava güzelse yürüyüşe çıkarız.",
            "translationRo": "Dacă vremea este frumoasă, mergem la plimbare.",
            "translationBs": "Ako je lijepo vrijeme idemo u šetnju.",
            "translationEs": "Si hace buen tiempo, salimos a caminar.",
            "translationBg": "Ако времето е хубаво, отиваме на разходка.",
            "translationEl": "Αν ο καιρός είναι καλός, πάμε μια βόλτα.",
            "noteEn": "If the 'wenn' clause is first, the main clause starts with the verb.",
            "noteAr": "إذا كانت جملة \"wenn\" هي الأولى، فإن الجملة الرئيسية تبدأ بالفعل.",
            "noteTr": "Eğer 'wenn' cümleciği birinci ise, ana cümle fiil ile başlar.",
            "noteRo": "Dacă clauza „wenn” este prima, clauza principală începe cu verbul.",
            "noteBs": "Ako je klauzula 'wenn' prva, glavna rečenica počinje glagolom.",
            "noteEs": "Si la cláusula 'wenn' es la primera, la cláusula principal comienza con el verbo.",
            "noteBg": "Ако клаузата 'wenn' е първа, основната клауза започва с глагола.",
            "noteEl": "Εάν η ρήτρα 'wenn' είναι πρώτη, η κύρια πρόταση αρχίζει με το ρήμα."
          }
        ]
      },
      {
        "id": "konjunktiv-zwei",
        "titleDe": "Konjunktiv II: Höfliche Bitten und Wünsche",
        "title": "Konjunktiv II: الطلبات والرغبات المهذبة",
        "titleEn": "Konjunktiv II: Polite Requests and Wishes",
        "explanation": "يتم استخدام Konjunktiv II للتعبير عن الأحلام والرغبات ولجعل الطلبات تبدو مهذبة للغاية (على سبيل المثال Ich hätte gerne..., Könnten Sie bitte...).",
        "explanationEn": "Konjunktiv II is used to express dreams, wishes, and to make requests sound very polite (e.g. Ich hätte gerne..., Könnten Sie bitte...).",
        "titleTr": "Konjunktiv II: Kibar İstekler ve Dilekler",
        "explanationTr": "Konjunktiv II, hayalleri, dilekleri ifade etmek ve isteklerin kulağa çok kibar gelmesini sağlamak için kullanılır (örn. Ich hätte gerne..., Könnten Sie bitte...).",
        "titleRo": "Konjunktiv II: Cereri și dorințe politicoase",
        "explanationRo": "Konjunktiv II este folosit pentru a exprima vise, dorințe și pentru a face cereri să sune foarte politicos (de exemplu, Ich hätte gerne..., Könnten Sie bitte...).",
        "titleBs": "Konjunktiv II: Uljudni zahtjevi i želje",
        "explanationBs": "Konjunktiv II se koristi da izrazi snove, želje i učini da zahtjevi zvuče vrlo pristojno (npr. Ich hätte gerne..., Könnten Sie bitte...).",
        "titleEs": "Konjunktiv II: peticiones y deseos amables",
        "explanationEs": "Konjunktiv II se utiliza para expresar sueños, deseos y hacer peticiones que suenen muy educadas (por ejemplo, Ich hätte gerne..., Könnten Sie bitte...).",
        "titleBg": "Konjunktiv II: Учтиви молби и пожелания",
        "explanationBg": "Konjunktiv II се използва за изразяване на мечти, желания и за да накара молбите да звучат много учтиво (напр. Ich hätte gerne..., Könnten Sie bitte...).",
        "titleEl": "Konjunktiv II: Ευγενικά αιτήματα και ευχές",
        "explanationEl": "Το Konjunktiv II χρησιμοποιείται για να εκφράσει όνειρα, επιθυμίες και για να κάνει τα αιτήματα να ακούγονται πολύ ευγενικά (π.χ. Ich hätte gerne..., Könnten Sie bitte...).",
        "rules": [
          {
            "example": "Ich würde gerne mitkommen, wenn ich Zeit hätte.",
            "translation": "أود أن آتي إذا كان لدي الوقت.",
            "translationEn": "I would like to come along if I had time.",
            "note": "würde + صيغة المصدر، وhätte (من haben).",
            "noteEn": "würde + infinitive, and hätte (from haben).",
            "translationTr": "Zamanım olursa ben de gelmek isterim.",
            "noteTr": "würde + mastar ve hätte (haben'den).",
            "translationRo": "Aș vrea să vin dacă aș avea timp.",
            "noteRo": "würde + infinitiv și hätte (din haben).",
            "translationBs": "Voleo bih da dođem ako budem imao vremena.",
            "noteBs": "würde + infinitiv, i hätte (od haben).",
            "translationEs": "Me gustaría acompañarme si tuviera tiempo.",
            "noteEs": "würde + infinitivo y hätte (de haben).",
            "translationBg": "Бих искал да дойда, ако имах време.",
            "noteBg": "würde + инфинитив и hätte (от haben).",
            "translationEl": "Θα ήθελα να έρθω αν είχα χρόνο.",
            "noteEl": "würde + αόριστος, και hätte (από το haben)."
          }
        ],
        "table": {
          "headers": [
            "الضمير",
            "haben ➔ hätte (التمني)",
            "sein ➔ wäre (التمني)",
            "werden ➔ würde + Infinitiv"
          ],
          "headersEn": [
            "Pronoun",
            "haben ➔ hätte (wishes)",
            "sein ➔ wäre (wishes)",
            "werden ➔ würde + Infinitiv"
          ],
          "headersTr": [
            "Zamir",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + Infinitiv"
          ],
          "headersRo": [
            "Pronume",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + Infinitiv"
          ],
          "headersBs": [
            "Zamjenica",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + Infinitiv"
          ],
          "headersEs": [
            "Pronombre",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + infinitivo"
          ],
          "headersBg": [
            "Местоимение",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + инфинитив"
          ],
          "headersEl": [
            "Αντωνυμία",
            "haben ➔ hätte",
            "sein ➔ wäre",
            "werden ➔ würde + απαρέμφατο"
          ],
          "rows": [
            [
              "ich",
              "hätte",
              "wäre",
              "würde ..."
            ],
            [
              "du",
              "hättest",
              "wärest",
              "würdest ..."
            ],
            [
              "er/sie/es",
              "hätte",
              "wäre",
              "würde ..."
            ],
            [
              "wir",
              "hätten",
              "wären",
              "würden ..."
            ],
            [
              "ihr",
              "hättet",
              "wäret",
              "würdet ..."
            ],
            [
              "sie/Sie",
              "hätten",
              "wären",
              "würden ..."
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 2001,
        "type": "mcq",
        "question": "___ ich Zeit habe, lerne ich Deutsch.",
        "questionDe": "___ ich Zeit habe, lerne ich Deutsch.",
        "questionEn": "When/if I have time, I study German.",
        "questionAr": "عندما/إذا كان لدي الوقت، أدرس اللغة الألمانية.",
        "questionTr": "Zamanım olursa/zamanım olursa Almanca çalışırım.",
        "questionRo": "Când/dacă am timp, studiez germana.",
        "questionBs": "Kad/ako imam vremena, učim njemački.",
        "questionEs": "Cuando tengo tiempo, estudio alemán.",
        "questionBg": "Когато/ако имам време, уча немски.",
        "questionEl": "Όταν/αν έχω χρόνο, σπουδάζω γερμανικά.",
        "options": [
          {
            "de": "Wenn",
            "en": "If / When",
            "ar": "إذا / متى",
            "tr": "Eğer / Ne zaman",
            "ro": "Dacă / Când",
            "bs": "Ako / Kada",
            "es": "Si / Cuando",
            "bg": "Ако / Кога",
            "el": "Εάν / Πότε"
          },
          {
            "de": "Weil",
            "en": "Because",
            "ar": "لأن",
            "tr": "Çünkü",
            "ro": "Deoarece",
            "bs": "Jer",
            "es": "Porque",
            "bg": "защото",
            "el": "Επειδή"
          },
          {
            "de": "Dass",
            "en": "That",
            "ar": "الذي - التي",
            "tr": "O",
            "ro": "Că",
            "bs": "To",
            "es": "Eso",
            "bg": "това",
            "el": "Οτι"
          }
        ],
        "answer": 0,
        "hintDe": "Bedingung oder zeitlicher Nebensatz",
        "hintEn": "Condition or temporal subordinate clause",
        "hintAr": "شرط أو شرط تابع زمني",
        "hintTr": "Koşul veya zamansal yan cümle",
        "hintRo": "Condiție sau propoziție subordonată temporală",
        "hintBs": "Uslov ili vremenska podređena rečenica",
        "hintEs": "Condición o cláusula subordinada temporal",
        "hintBg": "Условие или темпорално подчинено изречение",
        "hintEl": "Προϋπόθεση ή χρονική δευτερεύουσα ρήτρα"
      },
      {
        "id": 2002,
        "type": "fillblank",
        "question": "___ Sie mir bitte helfen? (Could)",
        "questionDe": "___ Sie mir bitte helfen? (Could)",
        "questionEn": "Could you please help me?",
        "questionAr": "هلاّ ساعدتني من فضلك؟",
        "answer": "Könnten",
        "questionTr": "Lütfen bana yardım eder misiniz?",
        "questionRo": "Mă puteți ajuta , vă rog?",
        "questionBs": "Možete li mi pomoći?",
        "questionEs": "¿Me podría ayudar?",
        "questionBg": "Бихте ли ми помогнали?",
        "questionEl": "Θα μπορούσατε σας παρακαλώ να με βοηθήσετε;",
        "hintDe": "Höfliche Bitte mit können",
        "hintEn": "Polite request with können",
        "hintAr": "طلب مهذب مع können",
        "hintTr": "Können ile kibar rica",
        "hintRo": "Cerere politicoasă cu können",
        "hintBs": "Ljubazan zahtjev sa können",
        "hintEs": "Solicitud cortés con können",
        "hintBg": "Учтива молба с können",
        "hintEl": "Ευγενικό αίτημα με τον können"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Termin verschieben",
        "titleEn": "Reschedule an appointment",
        "titleAr": "إعادة جدولة موعد",
        "titleTr": "Randevuyu yeniden planlama",
        "titleRo": "Reprogramați o întâlnire",
        "titleBs": "Ponovo zakažite termin",
        "titleEs": "Reprogramar una cita",
        "titleBg": "Пренасрочване на среща",
        "titleEl": "Κλείστε ξανά ένα ραντεβού",
        "promptEn": "Write a message to a friend. You cannot meet today at the agreed time. Apologize, explain why, and suggest a new time.",
        "promptAr": "اكتب رسالة إلى صديق. لا يمكنك الاجتماع اليوم في الوقت المتفق عليه. اعتذر، واشرح السبب، واقترح وقتًا جديدًا.",
        "promptTr": "Bir arkadaşınıza mesaj yazın. Bugün kararlaştırılan saatte buluşamazsınız. Özür dileyin, nedenini açıklayın ve yeni bir zaman önerin.",
        "promptRo": "Scrieți un mesaj unui prieten. Nu vă puteți întâlni astăzi la ora convenită. Cereți scuze, explicați de ce și sugerați o nouă oră.",
        "promptBs": "Napišite poruku prijatelju. Ne možete se naći danas u dogovoreno vrijeme. Izvinite se, objasnite zašto i predložite novi termin.",
        "promptEs": "Escribe un mensaje a un amigo. No podéis reuniros hoy a la hora acordada. Discúlpate, explica por qué y sugiere un nuevo horario.",
        "promptBg": "Напишете съобщение на приятел. Не можете да се срещнете днес в уговорения час. Извинете се, обяснете защо и предложете нов час.",
        "promptEl": "Γράψτε ένα μήνυμα σε έναν φίλο. Δεν μπορείτε να συναντηθείτε σήμερα στη συμφωνημένη ώρα. Ζητήστε συγγνώμη, εξηγήστε γιατί και προτείνετε νέα ώρα.",
        "promptDe": "Schreiben Sie eine Nachricht an einen Freund. Sie können sich heute nicht zur vereinbarten Zeit treffen. Entschuldigen Sie sich, erklären Sie warum, und schlagen Sie eine neue Zeit vor.",
        "example": "Hallo Lukas, es tut mir sehr leid, aber ich kann heute leider nicht um 15 Uhr kommen. Ich muss länger arbeiten. Können wir uns morgen um die gleiche Uhrzeit treffen? Viele Grüße!"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Wollen wir heute Abend ins Kino gehen?",
        "en": "Do we want to go to the cinema tonight?",
        "ar": "هل نريد الذهاب إلى السينما الليلة؟",
        "tr": "Bu akşam sinemaya gitmek ister miyiz?",
        "ro": "Vrem să mergem diseară la cinema?",
        "bs": "Hoćemo li večeras u bioskop?",
        "es": "¿Queremos ir al cine esta noche?",
        "bg": "Искаме ли да отидем на кино тази вечер?",
        "el": "Θέλουμε να πάμε σινεμά απόψε;"
      },
      {
        "de": "Es tut mir leid, aber ich habe heute keine Zeit.",
        "en": "I am sorry, but I don't have time today.",
        "ar": "أنا آسف، ولكن ليس لدي الوقت اليوم.",
        "tr": "Üzgünüm ama bugün vaktim yok.",
        "ro": "Îmi pare rău, dar nu am timp azi.",
        "bs": "Žao mi je, ali danas nemam vremena.",
        "es": "Lo siento, pero hoy no tengo tiempo.",
        "bg": "Съжалявам, но днес нямам време.",
        "el": "Λυπάμαι, αλλά δεν έχω χρόνο σήμερα."
      }
    ]
  },
  {
    "id": 21,
    "emoji": "💼",
    "titleDe": "Arbeitssuche",
    "color": "#f97316",
    "titleEn": "Job Hunting",
    "titleAr": "البحث عن وظيفة",
    "titleTr": "İş Arama",
    "titleRo": "Vânătoare de locuri de muncă",
    "titleBs": "Traženje posla",
    "titleEs": "Búsqueda de empleo",
    "titleBg": "Търсене на работа",
    "titleEl": "Κυνήγι Εργασίας",
    "topicsEn": [
      "Job advertisements",
      "Job application (CV & cover letter)",
      "Job interviews"
    ],
    "topics": [
      "إعلانات الوظائف",
      "طلب وظيفة (السيرة الذاتية وخطاب التقديم)",
      "مقابلات العمل"
    ],
    "topicsTr": [
      "İş ilanları",
      "İş başvurusu (CV ve ön yazı)",
      "İş görüşmeleri"
    ],
    "topicsRo": [
      "Anunțuri de locuri de muncă",
      "Cerere de angajare (CV și scrisoare de intenție)",
      "Interviuri de angajare"
    ],
    "topicsBs": [
      "Oglasi za posao",
      "Prijava za posao (CV i propratno pismo)",
      "Intervjui za posao"
    ],
    "topicsEs": [
      "Anuncios de empleo",
      "Solicitud de empleo (CV y carta de presentación)",
      "Entrevistas de trabajo"
    ],
    "topicsBg": [
      "Обяви за работа",
      "Кандидатстване за работа (автобиография и мотивационно писмо)",
      "Интервюта за работа"
    ],
    "topicsEl": [
      "αγγελίες εργασίας",
      "Αίτηση εργασίας (CV & συνοδευτική επιστολή)",
      "Συνεντεύξεις για δουλειά"
    ],
    "canDoEn": "I can understand job advertisements, write a simple CV, and introduce myself in a job interview.",
    "canDo": "أستطيع فهم إعلانات الوظائف، وكتابة سيرة ذاتية بسيطة، وتقديم نفسي في مقابلة عمل.",
    "canDoDe": "Ich kann Stellenanzeigen verstehen, einen einfachen Lebenslauf schreiben und mich in einem Vorstellungsgespräch vorstellen.",
    "canDoTr": "İş ilanlarını anlayabilir, basit bir özgeçmiş yazabilir ve bir iş görüşmesinde kendimi tanıtabilirim.",
    "canDoRo": "Pot să înțeleg anunțurile de angajare, să scriu un CV simplu și să mă prezint la un interviu de angajare.",
    "canDoBs": "Mogu razumjeti oglase za posao, napisati jednostavan CV i predstaviti se na intervjuu za posao.",
    "canDoEs": "Puedo entender anuncios de trabajo, escribir un CV sencillo y presentarme en una entrevista de trabajo.",
    "canDoBg": "Мога да разбирам обявите за работа, да напиша проста автобиография и да се представя на интервю за работа.",
    "canDoEl": "Μπορώ να κατανοήσω τις αγγελίες εργασίας, να γράψω ένα απλό βιογραφικό σημείωμα και να συστηθώ σε μια συνέντευξη για δουλειά.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track12.mp3",
        "label": "21.1 - Vorstellungsgespräch",
        "labelEn": "21.1 - Job interview",
        "labelAr": "21.1 - مقابلة العمل",
        "labelTr": "21.1 - İş görüşmesi",
        "labelRo": "21.1 - Interviu de angajare",
        "labelBs": "21.1 - Intervju za posao",
        "labelEs": "21.1 - Entrevista de trabajo",
        "labelBg": "21.1 - Интервю за работа",
        "labelEl": "21.1 - Συνέντευξη για δουλειά"
      }
    ],
    "dialogs": [
      {
        "title": "Im Vorstellungsgespräch",
        "titleEn": "In the job interview",
        "titleAr": "في مقابلة العمل",
        "titleTr": "İş görüşmesinde",
        "titleRo": "La interviul de angajare",
        "titleBs": "Na razgovoru za posao",
        "titleEs": "en la entrevista de trabajo",
        "titleBg": "На интервюто за работа",
        "titleEl": "Στη συνέντευξη για δουλειά",
        "lines": [
          {
            "speaker": "Arbeitgeber",
            "de": "Guten Tag, Herr Al-Masri. Warum bewerben Sie sich bei uns?",
            "en": "Good day, Mr. Al-Masri. Why are you applying with us?",
            "ar": "يوم جيد يا سيد المصري. لماذا تتقدم معنا؟",
            "tr": "İyi günler Bay Al-Masri. Neden bize başvuruyorsunuz?",
            "ro": "Bună ziua, domnule Al-Masri. De ce aplicați la noi?",
            "bs": "Dobar dan, g. Al-Masri. Zašto se prijavljujete kod nas?",
            "es": "Buenos días, señor Al-Masri. ¿Por qué postulas con nosotros?",
            "bg": "Добър ден, г-н Ал-Масри. Защо кандидатствате при нас?",
            "el": "Καλημέρα, κύριε Al-Masri. Γιατί κάνετε αίτηση μαζί μας;"
          },
          {
            "speaker": "Bewerber",
            "de": "Guten Tag. Ich habe Erfahrung als Buchhalter und Ihre Firma hat einen sehr guten Ruf.",
            "en": "Good day. I have experience as an accountant and your company has a very good reputation.",
            "ar": "يوم جيد. لدي خبرة كمحاسب وشركتك تتمتع بسمعة جيدة جدًا.",
            "tr": "İyi günler. Muhasebeci olarak deneyimim var ve şirketinizin çok iyi bir itibarı var.",
            "ro": "Bună ziua. Am experiență ca contabil și compania dumneavoastră are o reputație foarte bună.",
            "bs": "Dobar dan. Imam iskustvo kao računovođa i vaša kompanija ima veoma dobru reputaciju.",
            "es": "Buen día. Tengo experiencia como contador y su empresa tiene muy buena reputación.",
            "bg": "Добър ден Имам опит като счетоводител и вашата фирма има много добра репутация.",
            "el": "Καλημέρα. Έχω εμπειρία ως λογιστής και η εταιρεία σας έχει πολύ καλή φήμη."
          },
          {
            "speaker": "Arbeitgeber",
            "de": "Verstehen Sie sich gut mit Kollegen?",
            "en": "Do you get along well with colleagues?",
            "ar": "هل تتفق بشكل جيد مع الزملاء؟",
            "tr": "Meslektaşlarınızla iyi anlaşıyor musunuz?",
            "ro": "Te intelegi bine cu colegii?",
            "bs": "Da li se dobro slažete sa kolegama?",
            "es": "¿Te llevas bien con los compañeros?",
            "bg": "Разбирате ли се добре с колегите?",
            "el": "Τα πάτε καλά με τους συναδέλφους;"
          },
          {
            "speaker": "Bewerber",
            "de": "Ja, ich arbeite gerne im Team und bin sehr zuverlässig.",
            "en": "Yes, I like working in a team and am very reliable.",
            "ar": "نعم، أحب العمل ضمن فريق وأنا جدير بالثقة.",
            "tr": "Evet, bir ekipte çalışmayı seviyorum ve çok güvenilirim.",
            "ro": "Da, îmi place să lucrez în echipă și sunt foarte de încredere.",
            "bs": "Da, volim raditi u timu i vrlo sam pouzdan.",
            "es": "Sí, me gusta trabajar en equipo y soy muy confiable.",
            "bg": "Да, обичам да работя в екип и съм много надежден.",
            "el": "Ναι, μου αρέσει να δουλεύω σε ομάδα και είμαι πολύ αξιόπιστος."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Die Bewerbung in Deutschland",
        "titleEn": "The Application in Germany",
        "titleAr": "التطبيق في ألمانيا",
        "titleTr": "Almanya'daki Uygulama",
        "titleRo": "Aplicația în Germania",
        "titleBs": "Aplikacija u Njemačkoj",
        "titleEs": "La aplicación en Alemania",
        "titleBg": "Приложението в Германия",
        "titleEl": "Η εφαρμογή στη Γερμανία",
        "text": [
          {
            "de": "Zu einer vollständigen Bewerbung gehören ein Anschreiben, ein Lebenslauf mit Foto und Zeugnisse.",
            "en": "A complete application includes a cover letter, a CV with a photo, and certificates.",
            "ar": "يشتمل الطلب الكامل على خطاب تقديمي وسيرة ذاتية مع صورة وشهادات.",
            "tr": "Eksiksiz bir başvuru, bir ön yazı, fotoğraflı bir CV ve sertifikalardan oluşur.",
            "ro": "O cerere completă include o scrisoare de intenție, un CV cu o fotografie și certificate.",
            "bs": "Kompletna prijava uključuje propratno pismo, CV sa fotografijom i sertifikate.",
            "es": "Una solicitud completa incluye una carta de presentación, un CV con fotografía y certificados.",
            "bg": "Пълната кандидатура включва мотивационно писмо, автобиография със снимка и сертификати.",
            "el": "Μια πλήρης αίτηση περιλαμβάνει συνοδευτική επιστολή, βιογραφικό με φωτογραφία και πιστοποιητικά."
          },
          {
            "de": "Der Lebenslauf sollte übersichtlich und tabellarisch geschrieben sein, mit den wichtigsten Stationen.",
            "en": "The CV should be clearly written in table format, showing the most important stages.",
            "ar": "يجب أن تكون السيرة الذاتية مكتوبة بشكل واضح على شكل جدول يوضح أهم المراحل.",
            "tr": "CV en önemli aşamaları gösterecek şekilde tablo formatında net bir şekilde yazılmalıdır.",
            "ro": "CV-ul trebuie să fie scris clar în format tabel, arătând cele mai importante etape.",
            "bs": "CV treba biti jasno napisan u obliku tabele, sa prikazom najvažnijih faza.",
            "es": "El CV debe estar escrito claramente en formato de tabla, mostrando las etapas más importantes.",
            "bg": "Автобиографията трябва да бъде ясно написана в табличен формат, показваща най-важните етапи.",
            "el": "Το βιογραφικό σημείωμα θα πρέπει να είναι γραμμένο με σαφήνεια σε μορφή πίνακα, που να δείχνει τα πιο σημαντικά στάδια."
          }
        ],
        "questions": [
          {
            "q": "Was gehört neben dem Lebenslauf zur Bewerbung?",
            "qDe": "Was gehört neben dem Lebenslauf zur Bewerbung?",
            "qEn": "What belongs to the application besides the CV?",
            "qAr": "ما الذي يخص التطبيق إلى جانب السيرة الذاتية؟",
            "qTr": "Başvurunun CV dışında neleri var?",
            "qRo": "Ce aparține aplicației în afară de CV?",
            "qBs": "Šta spada u aplikaciju osim CV-a?",
            "qEs": "¿Qué incluye la solicitud además del CV?",
            "qBg": "Какво принадлежи към кандидатурата освен автобиографията?",
            "qEl": "Τι ανήκει στην εφαρμογή εκτός από το βιογραφικό;",
            "answer": "Es gehören ein Anschreiben und Zeugnisse dazu.",
            "answerDe": "Es gehören ein Anschreiben und Zeugnisse dazu.",
            "answerEn": "A cover letter and certificates belong to it.",
            "answerAr": "خطاب تغطية وشهادات تنتمي إليه.",
            "answerTr": "Ön yazı ve sertifikalar kendisine aittir.",
            "answerRo": "O scrisoare de intenție și certificatele îi aparțin.",
            "answerBs": "Pripadaju mu propratno pismo i sertifikati.",
            "answerEs": "Le pertenecen una carta de presentación y certificados.",
            "answerBg": "Към него принадлежат мотивационно писмо и сертификати.",
            "answerEl": "Μια συνοδευτική επιστολή και πιστοποιητικά ανήκουν σε αυτό."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Präteritum der Modalverben",
        "titleEn": "Simple Past (Präteritum) of Modal Verbs",
        "titleAr": "الماضي البسيط (Präteritum) للأفعال الشرطية",
        "titleTr": "Modal Fiillerin Basit Geçmişi (Präteritum)",
        "titleRo": "Trecut simplu (Präteritum) al verbelor modale",
        "titleBs": "Prosta prošlost (Präteritum) modalnih glagola",
        "titleEs": "Pasado simple (Präteritum) de verbos modales",
        "titleBg": "Просто минало време (Präteritum) на модалните глаголи",
        "titleEl": "Απλό Παρελθόν (Präteritum) τροπικών ρημάτων",
        "explanationEn": "In past tense, modal verbs are conjugated as: musste, konnte, wollte, durfte, sollte. They are used frequently in daily life.",
        "explanationAr": "في زمن الماضي، يتم تصريف الأفعال الشرطية على النحو التالي: musste، konnte، wollte، durfte، sollte. يتم استخدامها بشكل متكرر في الحياة اليومية.",
        "explanationTr": "Geçmiş zamanda modal fiiller şu şekilde konjuge edilir: musste, konnte, wollte, durfte, sollte. Günlük hayatta sıklıkla kullanılırlar.",
        "explanationRo": "La trecut, verbele modale sunt conjugate ca: musste, konnte, wollte, durfte, sollte. Sunt folosite frecvent în viața de zi cu zi.",
        "explanationBs": "U prošlom vremenu modalni glagoli konjugiraju se kao: musste, konnte, wollte, durfte, sollte. Često se koriste u svakodnevnom životu.",
        "explanationEs": "En tiempo pasado, los verbos modales se conjugan como: musste, konnte, wollte, durfte, sollte. Se utilizan con frecuencia en la vida diaria.",
        "explanationBg": "В минало време модалните глаголи се спрегат като: musste, konnte, wollte, durfte, sollte. Те се използват често в ежедневието.",
        "explanationEl": "Σε παρελθοντικό χρόνο, τα τροπικά ρήματα συζευγνύονται ως: musste, konnte, wollte, durfte, sollte. Χρησιμοποιούνται συχνά στην καθημερινή ζωή.",
        "rules": [
          {
            "example": "Gestern musste ich lange arbeiten und konnte nicht zum Kurs kommen.",
            "translationEn": "Yesterday I had to work long and couldn't come to the course.",
            "translationAr": "بالأمس كان علي أن أعمل لفترة طويلة ولم أتمكن من الحضور إلى الدورة.",
            "translationTr": "Dün çok çalışmam gerekti ve kursa gelemedim.",
            "translationRo": "Ieri a trebuit să muncesc mult și nu am putut veni la curs.",
            "translationBs": "Jučer sam morao dugo raditi i nisam mogao doći na kurs.",
            "translationEs": "Ayer tuve que trabajar mucho y no pude venir al curso.",
            "translationBg": "Вчера трябваше да работя дълго и не можах да дойда на курса.",
            "translationEl": "Χθες έπρεπε να δουλέψω πολύ και δεν μπορούσα να έρθω στο μάθημα.",
            "noteEn": "Präteritum forms of müssen (musste) and können (konnte).",
            "noteAr": "أشكال Präteritum من müssen (musste) وkönnen (konnte).",
            "noteTr": "Müssen (musste) ve können (konnte) kelimelerinin Präteritum biçimleri.",
            "noteRo": "Formele Präteritum de müssen (musste) și können (konnte).",
            "noteBs": "Präteritum oblici müssen (musste) i können (konnte).",
            "noteEs": "Präteritum formas de müssen (musste) y können (konnte).",
            "noteBg": "Präteritum форми на müssen (musste) и können (konnte).",
            "noteEl": "Präteritum μορφές του müssen (musste) και του können (konnte)."
          }
        ]
      },
      {
        "id": "genitiv",
        "titleDe": "Der Genitiv",
        "title": "القضية الجينية",
        "titleEn": "The Genitive Case",
        "explanation": "تستخدم الحالة المضاف إليها لإظهار الحيازة أو العلاقة. الأسماء المذكرة والمحايدة تأخذ نهاية إضافية -s أو -es (على سبيل المثال، des Vaters، der Mutter).",
        "explanationEn": "The genitive case is used to show possession or relationship. Masculine and neuter nouns take an additional -s or -es ending (e.g., des Vaters, der Mutter).",
        "titleTr": "Genel Durum",
        "explanationTr": "Genel durum, mülkiyeti veya ilişkiyi göstermek için kullanılır. Eril ve nötr isimler ek olarak -s veya -es ekini alır (örneğin, des Vaters, der Mutter).",
        "titleRo": "Cazul genitiv",
        "explanationRo": "Cazul genitiv este folosit pentru a arăta posesia sau relația. Substantivele masculine și neutre au o terminație suplimentară -s sau -es (de exemplu, des Vaters, der Mutter).",
        "titleBs": "Padež genitiva",
        "explanationBs": "Genitiv se koristi da pokaže posjedovanje ili odnos. Imenice muškog i srednjeg roda imaju dodatni završetak -s ili -es (npr. des Vaters, der Mutter).",
        "titleEs": "El caso genitivo",
        "explanationEs": "El caso genitivo se utiliza para mostrar posesión o relación. Los sustantivos masculinos y neutros llevan una terminación -s o -es adicional (p. ej., des Vaters, der Mutter).",
        "titleBg": "Родителен падеж",
        "explanationBg": "Родителният падеж се използва за показване на притежание или връзка. Съществителните от мъжки и среден род имат допълнително окончание -s или -es (напр. des Vaters, der Mutter).",
        "titleEl": "The Genitive Case",
        "explanationEl": "Η γενετική περίπτωση χρησιμοποιείται για να δείξει κατοχή ή σχέση. Τα αρσενικά και ουδέτερα ουσιαστικά παίρνουν πρόσθετη κατάληξη -s ή -es (π.χ. des Vaters, der Mutter).",
        "rules": [
          {
            "example": "Das ist das Büro des Chefs.",
            "translation": "هذا هو مكتب الرئيس.",
            "translationEn": "That is the boss's office.",
            "note": "des Chefs (مضاف إليه المذكر).",
            "noteEn": "des Chefs (masculine genitive).",
            "translationTr": "Orası patronun ofisi.",
            "noteTr": "des Chefs (eril genetik).",
            "translationRo": "Acesta este biroul șefului.",
            "noteRo": "des Chefs (genitiv masculin).",
            "translationBs": "To je šefova kancelarija.",
            "noteBs": "des Chefs (muški genitiv).",
            "translationEs": "Esa es la oficina del jefe.",
            "noteEs": "des Chefs (genitivo masculino).",
            "translationBg": "Това е кабинетът на шефа.",
            "noteBg": "des Chefs (родителен падеж в мъжки род).",
            "translationEl": "Εκεί είναι το γραφείο του αφεντικού.",
            "noteEl": "des Chefs (αρσενικό γένος)."
          }
        ],
        "table": {
          "headers": [
            "الجنس",
            "أداة التعريف",
            "نهاية الاسم",
            "مثال"
          ],
          "headersEn": [
            "Gender",
            "Definite Article",
            "Noun Ending",
            "Example"
          ],
          "headersTr": [
            "Cinsiyet",
            "Belirli Artikel",
            "İsim Takısı",
            "Örnek"
          ],
          "headersRo": [
            "Gen",
            "Articol hotărât",
            "Terminație substantiv",
            "Exemplu"
          ],
          "headersBs": [
            "Rod",
            "Određeni član",
            "Nastavak imenice",
            "Primjer"
          ],
          "headersEs": [
            "Género",
            "Artículo definido",
            "Terminación sustantivo",
            "Ejemplo"
          ],
          "headersBg": [
            "Род",
            "Определителен член",
            "Окончание на съществително",
            "Пример"
          ],
          "headersEl": [
            "Γένος",
            "Οριστικό άρθρο",
            "Κατάληξη ουσιαστικού",
            "Παράδειγμα"
          ],
          "rows": [
            [
              "مذكر (Maskulinum) / Masculine / Eril / Masculin / Muški / Masculino / Мъжки / Αρσενικό",
              "des",
              "-s / -es",
              "des Vaters / des Mannes"
            ],
            [
              "محايد (Neutrum) / Neuter / Nötr / Neutru / Srednji / Neutro / Среден / Ουδέτερο",
              "des",
              "-s / -es",
              "des Kindes / des Hauses"
            ],
            [
              "مؤنث (Femininum) / Feminine / Dişil / Feminin / Ženski / Femenino / Женски / Θηλυκό",
              "der",
              "–",
              "der Mutter / der Frau"
            ],
            [
              "جمع (Plural) / Plural / Çoğul / Plural / Množina / Plural / Множествено число / Πληθυντικός",
              "der",
              "–",
              "der Kinder / der Freunde"
            ]
          ]
        }
      }
    ],
    "exercises": [
      {
        "id": 2101,
        "type": "mcq",
        "question": "Als Kind ___ ich nicht gut Deutsch sprechen. (können)",
        "questionDe": "Als Kind ___ ich nicht gut Deutsch sprechen. (können)",
        "questionEn": "As a child, I could not speak German well.",
        "questionAr": "عندما كنت طفلاً، لم أتمكن من التحدث باللغة الألمانية جيدًا.",
        "questionTr": "Çocukken Almancayı iyi konuşamıyordum.",
        "questionRo": "În copilărie, nu puteam vorbi bine germană.",
        "questionBs": "Kao dijete nisam znao dobro govoriti njemački.",
        "questionEs": "Cuando era niño no hablaba bien alemán.",
        "questionBg": "Като дете не можех да говоря немски добре.",
        "questionEl": "Ως παιδί δεν μπορούσα να μιλήσω καλά γερμανικά.",
        "options": [
          {
            "de": "konnte",
            "en": "could (singular past)",
            "ar": "يمكن (الماضي المفرد)",
            "tr": "olabilir (tekil geçmiş)",
            "ro": "putea (trecut singular)",
            "bs": "mogao (jedinstvena prošlost)",
            "es": "podría (pasado singular)",
            "bg": "може (единствено минало)",
            "el": "θα μπορούσε (ενικό παρελθόν)"
          },
          {
            "de": "kann",
            "en": "can (present tense)",
            "ar": "يستطيع (المضارع)",
            "tr": "olabilir (şimdiki zaman)",
            "ro": "can (timpul prezent)",
            "bs": "može (sadašnje vrijeme)",
            "es": "puede (tiempo presente)",
            "bg": "мога (сегашно време)",
            "el": "μπορώ (ενεστώτα)"
          },
          {
            "de": "konnten",
            "en": "could (plural past)",
            "ar": "يمكن (جمع الماضي)",
            "tr": "olabilir (çoğul geçmiş)",
            "ro": "putea (plural trecut)",
            "bs": "mogao (množina prošlost)",
            "es": "podría (pasado plural)",
            "bg": "може (множествено число минало)",
            "el": "θα μπορούσε (πληθυντικός παρελθόν)"
          }
        ],
        "answer": 0,
        "hintDe": "können im Präteritum für 'ich'",
        "hintEn": "können in Präteritum for 'ich'",
        "hintAr": "können في Präteritum لـ \"ich\"",
        "hintTr": "'ich' için Präteritum'da können",
        "hintRo": "können în Präteritum pentru „ich”",
        "hintBs": "können u Präteritum za 'ich'",
        "hintEs": "können en Präteritum para 'ich'",
        "hintBg": "können в Präteritum за \"ich\"",
        "hintEl": "können στο Präteritum για το «ich»"
      },
      {
        "id": 2102,
        "type": "fillblank",
        "question": "Das ist das Auto ___ Kollegin. (der / die, feminin)",
        "questionDe": "Das ist das Auto ___ Kollegin. (der / die, feminin)",
        "questionEn": "That is the colleague's car.",
        "questionAr": "تلك هي سيارة الزميل.",
        "answer": "der",
        "questionTr": "Bu meslektaşının arabası.",
        "questionRo": "Asta e mașina colegului.",
        "questionBs": "To je auto kolege.",
        "questionEs": "Ese es el auto del colega.",
        "questionBg": "Това е колата на колегата.",
        "questionEl": "Αυτό είναι το αυτοκίνητο του συναδέλφου.",
        "hintDe": "Genitiv feminin (der Kollegin)",
        "hintEn": "genitive feminine (der)",
        "hintAr": "مؤنث مضاف (دير)",
        "hintTr": "genel dişil (der)",
        "hintRo": "genitiv feminin (der)",
        "hintBs": "genitiv ženskog roda (der)",
        "hintEs": "genitivo femenino (der)",
        "hintBg": "родителен падеж женски (der)",
        "hintEl": "γεννητικό θηλυκό (der)"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Bewerbungsschreiben",
        "titleEn": "Application letter",
        "titleAr": "خطاب التطبيق",
        "titleTr": "Başvuru mektubu",
        "titleRo": "Scrisoare de cerere",
        "titleBs": "Prijavno pismo",
        "titleEs": "carta de solicitud",
        "titleBg": "Писмо за кандидатстване",
        "titleEl": "Επιστολή αίτησης",
        "promptEn": "Write a short application letter for a job as a helper in a supermarket. State who you are, what you can do, and when you can work.",
        "promptAr": "اكتب خطاب طلب قصير لوظيفة كمساعد في سوبر ماركت. اذكر من أنت، وماذا يمكنك أن تفعل، ومتى يمكنك العمل.",
        "promptTr": "Bir süpermarkette yardımcı olarak çalışmak için kısa bir başvuru mektubu yazın. Kim olduğunuzu, ne yapabileceğinizi ve ne zaman çalışabileceğinizi belirtin.",
        "promptRo": "Scrieți o scurtă scrisoare de cerere pentru un loc de muncă ca ajutor într-un supermarket. Spuneți cine sunteți, ce puteți face și când puteți lucra.",
        "promptBs": "Napišite kratko pismo za prijavu za posao pomoćnika u supermarketu. Navedite ko ste, šta možete da radite i kada možete da radite.",
        "promptEs": "Escribe una breve carta de solicitud para un trabajo como ayudante en un supermercado. Indique quién es usted, qué puede hacer y cuándo puede trabajar.",
        "promptBg": "Напишете кратко писмо за кандидатстване за работа като помощник в супермаркет. Посочете кой сте, какво можете да правите и кога можете да работите.",
        "promptEl": "Γράψτε μια σύντομη επιστολή αίτησης για εργασία ως βοηθός σε ένα σούπερ μάρκετ. Δηλώστε ποιος είστε, τι μπορείτε να κάνετε και πότε μπορείτε να εργαστείτε.",
        "promptDe": "Schreiben Sie ein kurzes Bewerbungsschreiben für einen Job als Aushilfe im Supermarkt. Sagen Sie, wer Sie sind, was Sie können und wann Sie arbeiten können.",
        "example": "Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle als Aushilfe. Ich bin fleißig und zuverlässig. Ich kann ab sofort jeden Nachmittag arbeiten. Über eine positive Antwort freue ich mich. Mit freundlichen Grüßen!"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich habe als Programmierer im Ausland gearbeitet.",
        "en": "I worked as a programmer abroad.",
        "ar": "عملت كمبرمج في الخارج.",
        "tr": "Yurt dışında programcı olarak çalıştım.",
        "ro": "Am lucrat ca programator în străinătate.",
        "bs": "Radio sam kao programer u inostranstvu.",
        "es": "Trabajé como programador en el extranjero.",
        "bg": "Работил съм като програмист в чужбина.",
        "el": "Εργάστηκα ως προγραμματιστής στο εξωτερικό."
      },
      {
        "de": "Ich möchte mich kurz vorstellen.",
        "en": "I would like to introduce myself briefly.",
        "ar": "أود أن أقدم نفسي بإيجاز.",
        "tr": "Kısaca kendimi tanıtmak isterim.",
        "ro": "Aș dori să mă prezint pe scurt.",
        "bs": "Želeo bih da se ukratko predstavim.",
        "es": "Me gustaría presentarme brevemente.",
        "bg": "Искам да се представя накратко.",
        "el": "Θα ήθελα να συστηθώ εν συντομία."
      }
    ]
  },
  {
    "id": 22,
    "emoji": "📱",
    "titleDe": "Alltag und Medien",
    "color": "#ef4444",
    "titleEn": "Daily Life and Media",
    "titleAr": "الحياة اليومية والإعلام",
    "titleTr": "Günlük Yaşam ve Medya",
    "titleRo": "Viața de zi cu zi și mass-media",
    "titleBs": "Dnevni život i mediji",
    "titleEs": "Vida cotidiana y medios",
    "titleBg": "Ежедневие и медии",
    "titleEl": "Καθημερινή ζωή και ΜΜΕ",
    "topicsEn": [
      "Social media",
      "Daily internet use",
      "Email communication"
    ],
    "topics": [
      "وسائل التواصل الاجتماعي",
      "الاستخدام اليومي للإنترنت",
      "التواصل عبر البريد الإلكتروني"
    ],
    "topicsTr": [
      "Sosyal medya",
      "Günlük internet kullanımı",
      "E-posta iletişimi"
    ],
    "topicsRo": [
      "Rețelele de socializare",
      "Utilizarea zilnică a internetului",
      "Comunicare prin e-mail"
    ],
    "topicsBs": [
      "Društveni mediji",
      "Svakodnevno korištenje interneta",
      "Komunikacija putem e-pošte"
    ],
    "topicsEs": [
      "redes sociales",
      "Uso diario de internet",
      "comunicación por correo electrónico"
    ],
    "topicsBg": [
      "Социални медии",
      "Daily internet use",
      "Email communication"
    ],
    "topicsEl": [
      "Μέσα κοινωνικής δικτύωσης",
      "Καθημερινή χρήση Διαδικτύου",
      "Επικοινωνία μέσω email"
    ],
    "canDoEn": "I can describe my media consumption, write formal/informal emails, and find information online.",
    "canDo": "يمكنني وصف استهلاكي للوسائط، وكتابة رسائل البريد الإلكتروني الرسمية/غير الرسمية، والعثور على المعلومات عبر الإنترنت.",
    "canDoDe": "Ich kann meinen Medienkonsum beschreiben, formelle/informelle E-Mails schreiben und Informationen online finden.",
    "canDoTr": "Medya tüketimimi açıklayabilir, resmi/gayri resmi e-postalar yazabilir ve çevrimiçi bilgi bulabilirim.",
    "canDoRo": "Pot să descriu consumul meu de media, să scriu e-mailuri formale/informale și să găsesc informații online.",
    "canDoBs": "Mogu opisati svoju medijsku potrošnju, pisati formalne/neformalne e-poruke i pronaći informacije na internetu.",
    "canDoEs": "Puedo describir mi consumo de medios, escribir correos electrónicos formales/informales y encontrar información en línea.",
    "canDoBg": "Мога да опиша медийното си потребление, да пиша официални/неофициални имейли и да намеря информация онлайн.",
    "canDoEl": "Μπορώ να περιγράψω την κατανάλωση πολυμέσων μου, να γράψω επίσημα/άτυπα email και να βρω πληροφορίες στο διαδίκτυο.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track18.mp3",
        "label": "22.1 - Mediennutzung im Alltag",
        "labelEn": "22.1 - Media usage in daily life",
        "labelAr": "22.1 - استخدام وسائل الإعلام في الحياة اليومية",
        "labelTr": "22.1 - Günlük hayatta medya kullanımı",
        "labelRo": "22.1 - Utilizarea mass-media în viața de zi cu zi",
        "labelBs": "22.1 - Upotreba medija u svakodnevnom životu",
        "labelEs": "22.1 - Uso de los medios en la vida diaria",
        "labelBg": "22.1 - Използване на медии в ежедневието",
        "labelEl": "22.1 - Χρήση πολυμέσων στην καθημερινή ζωή"
      }
    ],
    "dialogs": [
      {
        "title": "Immer online",
        "titleEn": "Always online",
        "titleAr": "دائما على الانترنت",
        "titleTr": "Her zaman çevrimiçi",
        "titleRo": "Mereu online",
        "titleBs": "Uvijek na mreži",
        "titleEs": "Siempre en línea",
        "titleBg": "Винаги онлайн",
        "titleEl": "Πάντα online",
        "lines": [
          {
            "speaker": "Julia",
            "de": "Warum schaust du ständig auf dein Handy?",
            "en": "Why are you constantly looking at your cell phone?",
            "ar": "لماذا تنظر باستمرار إلى هاتفك الخلوي؟",
            "tr": "Neden sürekli cep telefonuna bakıyorsun?",
            "ro": "De ce te uiți constant la telefonul tău mobil?",
            "bs": "Zašto stalno gledate u svoj mobilni telefon?",
            "es": "¿Por qué estás constantemente mirando tu celular?",
            "bg": "Защо постоянно гледаш мобилния си телефон?",
            "el": "Γιατί κοιτάς συνεχώς το κινητό σου;"
          },
          {
            "speaker": "Ben",
            "de": "Ich muss wichtige Nachrichten nachsehen und meine E-Mails beantworten.",
            "en": "I have to check important messages and answer my emails.",
            "ar": "لا بد لي من التحقق من الرسائل الهامة والرد على رسائل البريد الإلكتروني الخاصة بي.",
            "tr": "Önemli mesajları kontrol etmem ve e-postalarıma cevap vermem gerekiyor.",
            "ro": "Trebuie să verific mesajele importante și să-mi răspund la e-mailuri.",
            "bs": "Moram provjeriti važne poruke i odgovoriti na e-poštu.",
            "es": "Tengo que revisar mensajes importantes y responder mis correos electrónicos.",
            "bg": "Трябва да проверявам важни съобщения и да отговарям на имейлите си.",
            "el": "Πρέπει να ελέγξω σημαντικά μηνύματα και να απαντήσω στα email μου."
          },
          {
            "speaker": "Julia",
            "de": "Du bist den ganzen Tag online. Das ist doch ungesund.",
            "en": "You are online the whole day. Surely that is unhealthy.",
            "ar": "أنت متصل بالإنترنت طوال اليوم. ومن المؤكد أن هذا غير صحي.",
            "tr": "Bütün gün çevrimiçisiniz. Elbette bu sağlıksız bir durum.",
            "ro": "Ești online toată ziua. Cu siguranță asta este nesănătos.",
            "bs": "Na mreži ste cijeli dan. To je sigurno nezdravo.",
            "es": "Estás en línea todo el día. Seguramente eso no es saludable.",
            "bg": "Вие сте онлайн през целия ден. Със сигурност това е нездравословно.",
            "el": "Είστε online όλη την ημέρα. Σίγουρα αυτό είναι ανθυγιεινό."
          },
          {
            "speaker": "Ben",
            "de": "Ja, vielleicht hast du recht. Ich schalte es jetzt aus.",
            "en": "Yes, maybe you're right. I will turn it off now.",
            "ar": "نعم، ربما أنت على حق. سوف أقوم بإيقاف تشغيله الآن.",
            "tr": "Evet, belki haklısın. Şimdi kapatacağım.",
            "ro": "Da, poate ai dreptate. O voi opri acum.",
            "bs": "Da, možda si u pravu. Sada ću ga isključiti.",
            "es": "Sí, tal vez tengas razón. Lo apagaré ahora.",
            "bg": "Yes, maybe you're right. I will turn it off now.",
            "el": "Ναι, ίσως έχεις δίκιο. Θα το σβήσω τώρα."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Internetnutzung in Deutschland",
        "titleEn": "Internet Usage in Germany",
        "titleAr": "استخدام الانترنت في ألمانيا",
        "titleTr": "Almanya'da İnternet Kullanımı",
        "titleRo": "Utilizarea internetului în Germania",
        "titleBs": "Upotreba interneta u Njemačkoj",
        "titleEs": "Uso de Internet en Alemania",
        "titleBg": "Използване на интернет в Германия",
        "titleEl": "Χρήση Διαδικτύου στη Γερμανία",
        "text": [
          {
            "de": "Fast alle Deutschen nutzen täglich das Internet, um Nachrichten zu lesen oder Videos anzuschauen.",
            "en": "Almost all Germans use the internet daily to read news or watch videos.",
            "ar": "يستخدم جميع الألمان تقريبًا الإنترنت يوميًا لقراءة الأخبار أو مشاهدة مقاطع الفيديو.",
            "tr": "Neredeyse tüm Almanlar interneti her gün haber okumak veya video izlemek için kullanıyor.",
            "ro": "Aproape toți germanii folosesc internetul zilnic pentru a citi știri sau pentru a viziona videoclipuri.",
            "bs": "Gotovo svi Nijemci svakodnevno koriste internet za čitanje vijesti ili gledanje videa.",
            "es": "Casi todos los alemanes utilizan Internet a diario para leer noticias o ver vídeos.",
            "bg": "Почти всички германци използват ежедневно интернет, за да четат новини или да гледат видеоклипове.",
            "el": "Σχεδόν όλοι οι Γερμανοί χρησιμοποιούν το διαδίκτυο καθημερινά για να διαβάζουν ειδήσεις ή να παρακολουθούν βίντεο."
          },
          {
            "de": "Soziale Medien wie WhatsApp und Instagram sind besonders bei jungen Menschen sehr beliebt.",
            "en": "Social media like WhatsApp and Instagram are particularly popular with young people.",
            "ar": "تحظى وسائل التواصل الاجتماعي مثل WhatsApp وInstagram بشعبية خاصة بين الشباب.",
            "tr": "WhatsApp ve Instagram gibi sosyal medyalar özellikle gençler arasında popülerdir.",
            "ro": "Rețelele sociale precum WhatsApp și Instagram sunt deosebit de populare în rândul tinerilor.",
            "bs": "Društveni mediji kao što su WhatsApp i Instagram posebno su popularni među mladima.",
            "es": "Las redes sociales como WhatsApp e Instagram son particularmente populares entre los jóvenes.",
            "bg": "Социалните медии като WhatsApp и Instagram са особено популярни сред младите хора.",
            "el": "Τα μέσα κοινωνικής δικτύωσης όπως το WhatsApp και το Instagram είναι ιδιαίτερα δημοφιλή στους νέους."
          }
        ],
        "questions": [
          {
            "q": "Welche Apps sind besonders beliebt?",
            "qDe": "Welche Apps sind besonders beliebt?",
            "qEn": "Which apps are particularly popular?",
            "qAr": "ما هي التطبيقات التي تحظى بشعبية خاصة؟",
            "qTr": "Hangi uygulamalar özellikle popüler?",
            "qRo": "Ce aplicații sunt deosebit de populare?",
            "qBs": "Koje su aplikacije posebno popularne?",
            "qEs": "¿Qué aplicaciones son particularmente populares?",
            "qBg": "Кои приложения са особено популярни?",
            "qEl": "Ποιες εφαρμογές είναι ιδιαίτερα δημοφιλείς;",
            "answer": "Apps wie WhatsApp und Instagram sind beliebt.",
            "answerDe": "Apps wie WhatsApp und Instagram sind beliebt.",
            "answerEn": "Apps like WhatsApp and Instagram are popular.",
            "answerAr": "تحظى تطبيقات مثل WhatsApp وInstagram بشعبية كبيرة.",
            "answerTr": "WhatsApp ve Instagram gibi uygulamalar popülerdir.",
            "answerRo": "Aplicații precum WhatsApp și Instagram sunt populare.",
            "answerBs": "Popularne su aplikacije kao što su WhatsApp i Instagram.",
            "answerEs": "Aplicaciones como WhatsApp e Instagram son populares.",
            "answerBg": "Приложения като WhatsApp и Instagram са популярни.",
            "answerEl": "Εφαρμογές όπως το WhatsApp και το Instagram είναι δημοφιλείς."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Verben mit festen Präpositionen",
        "titleEn": "Verbs with Fixed Prepositions",
        "titleAr": "الأفعال مع حروف الجر الثابتة",
        "titleTr": "Sabit Edatlı Fiiller",
        "titleRo": "Verbe cu prepoziții fixe",
        "titleBs": "Glagoli s fiksnim prijedlozima",
        "titleEs": "Verbos con preposiciones fijas",
        "titleBg": "Глаголи с постоянни предлози",
        "titleEl": "Ρήματα με σταθερές προθέσεις",
        "explanationEn": "Many verbs are linked to fixed prepositions and specific cases (e.g. warten auf + Accusative, träumen von + Dative).",
        "explanationAr": "ترتبط العديد من الأفعال بحروف الجر الثابتة وحالات محددة (على سبيل المثال: warten auf + حالة النصب، träumen von + حالة الجر).",
        "explanationTr": "Birçok fiil sabit edatlarla ve belirli durumlarla bağlantılıdır (örneğin, warten auf + Accusative, träumen von + Dative).",
        "explanationRo": "Multe verbe sunt legate de prepoziții fixe și cazuri specifice (de exemplu, warten auf + Acuzativ, träumen von + Dativ).",
        "explanationBs": "Mnogi glagoli su povezani s fiksnim prijedlozima i posebnim padežima (npr. warten auf + akuzativ, träumen von + dativ).",
        "explanationEs": "Muchos verbos están vinculados a preposiciones fijas y casos específicos (por ejemplo, warten auf + acusativo, träumen von + dativo).",
        "explanationBg": "Много глаголи са свързани с постоянни предлози и конкретни падежи (напр. warten auf + Акузатив, träumen von + Дателен).",
        "explanationEl": "Πολλά ρήματα συνδέονται με σταθερές προθέσεις και συγκεκριμένες περιπτώσεις (π.χ. warten auf + Κατηγορητικό, träumen von + Dative).",
        "rules": [
          {
            "example": "Ich warte auf eine wichtige E-Mail.",
            "translationEn": "I am waiting for an important email.",
            "translationAr": "أنا في انتظار رسالة بريد إلكتروني مهمة.",
            "translationTr": "Önemli bir e-posta bekliyorum.",
            "translationRo": "Astept un email important.",
            "translationBs": "Čekam važan email.",
            "translationEs": "Estoy esperando un correo electrónico importante.",
            "translationBg": "Чакам важен имейл.",
            "translationEl": "Περιμένω ένα σημαντικό email.",
            "noteEn": "warten auf takes Accusative case.",
            "noteAr": "Warten auf يأخذ حالة النصب.",
            "noteTr": "warten auf Suçlayıcı durumu alır.",
            "noteRo": "warten auf ia Caz acuzativ.",
            "noteBs": "warten auf uzima akuzativ.",
            "noteEs": "warten auf toma caso acusativo.",
            "noteBg": "warten auf взема Винителен падеж.",
            "noteEl": "Ο warten auf παίρνει Αιτητική περίπτωση."
          }
        ]
      },
      {
        "id": "nebensaetze-dass",
        "titleDe": "Nebensätze mit 'dass'",
        "title": "الجمل الثانوية مع \"dass\" (ذلك)",
        "titleEn": "Subordinate Clauses with 'dass' (that)",
        "explanation": "الجمل الثانوية التي أدخلتها كلمة \"dass\" (التي) تعبر عن الأفكار أو البيانات أو الآراء، وتدفع الفعل المصرف إلى نهاية الجملة.",
        "explanationEn": "Subordinate clauses introduced by 'dass' (that) express thoughts, statements, or opinions, and push the conjugated verb to the end of the sentence.",
        "titleTr": "'Dass' (that) ile Yardımcı Cümleler",
        "explanationTr": "'Dass' (ki bu) tarafından getirilen yan cümleler düşünceleri, ifadeleri veya görüşleri ifade eder ve çekimli fiili cümlenin sonuna iter.",
        "titleRo": "Propoziții subordonate cu „dass” (că)",
        "explanationRo": "Propozițiile subordonate introduse de „dass” (care) exprimă gânduri, declarații sau opinii și împing verbul conjugat până la sfârșitul propoziției.",
        "titleBs": "Podređene rečenice sa 'dass' (to)",
        "explanationBs": "Podređene rečenice uvedene sa 'dass' (koje) izražavaju misli, izjave ili mišljenja i guraju konjugirani glagol na kraj rečenice.",
        "titleEs": "Cláusulas subordinadas con 'dass' (eso)",
        "explanationEs": "Oraciones subordinadas introducidas por 'dass' (que) expresan pensamientos, declaraciones u opiniones y empujan el verbo conjugado hasta el final de la oración.",
        "titleBg": "Подчинени изречения с „dass“ (това)",
        "explanationBg": "Подчинени изречения, въведени от „dass“ (които) изразяват мисли, твърдения или мнения и изместват спрегнатия глагол в края на изречението.",
        "titleEl": "Δευτερεύουσες προτάσεις με «dass» (που)",
        "explanationEl": "Οι δευτερεύουσες προτάσεις που εισάγονται από το «dass» (που) εκφράζουν σκέψεις, δηλώσεις ή απόψεις και ωθούν το συζευγμένο ρήμα στο τέλος της πρότασης.",
        "rules": [
          {
            "example": "Ich glaube, dass das Internet wichtig ist.",
            "translation": "أعتقد أن الإنترنت مهم.",
            "translationEn": "I believe that the internet is important.",
            "note": "الفعل \"ist\" يذهب إلى النهاية.",
            "noteEn": "The verb 'ist' goes to the very end.",
            "translationTr": "İnternetin önemli olduğuna inanıyorum.",
            "noteTr": "'İst' fiili en sona gider.",
            "translationRo": "Eu cred că internetul este important.",
            "noteRo": "Verbul „ist” ajunge până la capăt.",
            "translationBs": "Vjerujem da je internet važan.",
            "noteBs": "Glagol 'ist' ide do samog kraja.",
            "translationEs": "Creo que Internet es importante.",
            "noteEs": "El verbo 'ist' llega hasta el final.",
            "translationBg": "Вярвам, че интернет е важен.",
            "noteBg": "Глаголът „ист“ отива до самия край.",
            "translationEl": "Πιστεύω ότι το Διαδίκτυο είναι σημαντικό.",
            "noteEl": "Το ρήμα 'ist' φτάνει μέχρι το τέλος."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 2201,
        "type": "mcq",
        "question": "Er träumt ___ einem neuen Computer. (von)",
        "questionDe": "Er träumt ___ einem neuen Computer. (von)",
        "questionEn": "He dreams of a new computer.",
        "questionAr": "يحلم بجهاز كمبيوتر جديد.",
        "questionTr": "Yeni bir bilgisayarın hayalini kuruyor.",
        "questionRo": "El visează la un computer nou.",
        "questionBs": "Sanja o novom kompjuteru.",
        "questionEs": "Sueña con una computadora nueva.",
        "questionBg": "Мечтае за нов компютър.",
        "questionEl": "Ονειρεύεται έναν νέο υπολογιστή.",
        "options": [
          {
            "de": "von",
            "en": "of (takes Dative)",
            "ar": "من (يأخذ حالة الجر)",
            "tr": "(Dative'i alır)",
            "ro": "de (ia dativ)",
            "bs": "od (uzima dativ)",
            "es": "de (toma dativo)",
            "bg": "of (takes Dative)",
            "el": "από (παίρνει Dative)"
          },
          {
            "de": "auf",
            "en": "on / for",
            "ar": "على / ل",
            "tr": "açık / için",
            "ro": "pe / pentru",
            "bs": "na / za",
            "es": "en / para",
            "bg": "на / за",
            "el": "on / για"
          },
          {
            "de": "für",
            "en": "for",
            "ar": "ل",
            "tr": "için",
            "ro": "pentru",
            "bs": "za",
            "es": "para",
            "bg": "за",
            "el": "για"
          }
        ],
        "answer": 0,
        "hintDe": "träumen + von + Dativ (einem ...)",
        "hintEn": "träumen + von + Dative (einem ...)",
        "hintAr": "träumen + von + Dative (einem ...)",
        "hintTr": "träumen + von + Dative (bir ...)",
        "hintRo": "träumen + von + Dativ (einem ...)",
        "hintBs": "träumen + von + Dativ (einem ...)",
        "hintEs": "träumen + von + Dativo (einem ...)",
        "hintBg": "träumen + von + дателен (einem ...)",
        "hintEl": "träumen + von + Dative (einem ...)"
      },
      {
        "id": 2202,
        "type": "fillblank",
        "question": "Er sagt, ___ er morgen arbeitet. (that)",
        "questionDe": "Er sagt, ___ er morgen arbeitet. (that)",
        "questionEn": "He says that he works tomorrow.",
        "questionAr": "ويقول أنه يعمل غدا.",
        "answer": "dass",
        "questionTr": "Yarın çalışacağını söylüyor.",
        "questionRo": "Spune că mâine lucrează.",
        "questionBs": "Kaže da sutra radi.",
        "questionEs": "Dice que mañana trabaja.",
        "questionBg": "Казва, че утре работи.",
        "questionEl": "Λέει ότι δουλεύει αύριο.",
        "hintDe": "Verbindung mit einem dass-Satz",
        "hintEn": "linking with a dass-clause",
        "hintAr": "الربط مع جملة dass",
        "hintTr": "bir dass cümlesiyle bağlantı kurma",
        "hintRo": "legând cu o clauză dass",
        "hintBs": "povezivanje sa dass-klauzulom",
        "hintEs": "vinculación con una cláusula dass",
        "hintBg": "свързване с dass-клауза",
        "hintEl": "σύνδεση με μια ρήτρα dass"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Eine E-Mail an den Lehrer",
        "titleEn": "An email to the teacher",
        "titleAr": "بريد الكتروني للمعلم",
        "titleTr": "Öğretmene bir e-posta",
        "titleRo": "Un e-mail către profesor",
        "titleBs": "E-mail za nastavnika",
        "titleEs": "Un correo electrónico al profesor.",
        "titleBg": "Имейл до учителя",
        "titleEl": "Ένα email στον δάσκαλο",
        "promptEn": "Write a formal email to your German teacher. Explain that you cannot attend class today because you are sick. Ask for the homework.",
        "promptAr": "اكتب بريدًا إلكترونيًا رسميًا إلى مدرس اللغة الألمانية الخاص بك. اشرح أنه لا يمكنك حضور الفصل اليوم لأنك مريض. اطلب الواجب المنزلي.",
        "promptTr": "Almanca öğretmeninize resmi bir e-posta yazın. Hasta olduğunuz için bugün derse katılamayacağınızı açıklayın. Ödevini isteyin.",
        "promptRo": "Scrieți un e-mail oficial profesorului dvs. de germană. Explicați că nu puteți merge la curs astăzi pentru că sunteți bolnav. Cere temele.",
        "promptBs": "Napišite službenu e-poštu svom nastavniku njemačkog. Objasnite da danas ne možete doći na čas jer ste bolesni. Pitaj za domaći.",
        "promptEs": "Escribe un correo electrónico formal a tu profesor de alemán. Explique que no puede asistir a clase hoy porque está enfermo. Pide la tarea.",
        "promptBg": "Напишете официален имейл до вашия учител по немски. Обяснете, че не можете да присъствате на час днес, защото сте болни. Поискайте домашното.",
        "promptEl": "Γράψτε ένα επίσημο email στον καθηγητή σας στα γερμανικά. Εξηγήστε ότι δεν μπορείτε να παρακολουθήσετε το μάθημα σήμερα επειδή είστε άρρωστοι. Ζητήστε την εργασία.",
        "promptDe": "Schreiben Sie eine formelle E-Mail an Ihren Deutschlehrer. Erklären Sie, dass Sie heute nicht am Unterricht teilnehmen können, weil Sie krank sind. Fragen Sie nach den Hausaufgaben.",
        "example": "Sehr geehrte Frau Müller, leider kann ich heute nicht am Unterricht teilnehmen, da ich krank bin und zum Arzt gehen muss. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken? Vielen Dank für Ihr Verständnis! Mit freundlichen Grüßen!"
      }
    ],
    "speakingPhrases": [
      {
        "de": "Wie oft benutzt du soziale Medien?",
        "en": "How often do you use social media?",
        "ar": "كم مرة تستخدم وسائل التواصل الاجتماعي؟",
        "tr": "Sosyal medyayı ne sıklıkla kullanıyorsunuz?",
        "ro": "Cât de des folosești rețelele sociale?",
        "bs": "Koliko često koristite društvene mreže?",
        "es": "¿Con qué frecuencia utilizas las redes sociales?",
        "bg": "Колко често използвате социалните медии?",
        "el": "Πόσο συχνά χρησιμοποιείτε τα social media;"
      },
      {
        "de": "Ich schreibe dir später eine Nachricht.",
        "en": "I will write you a message later.",
        "ar": "سأكتب لك رسالة لاحقا.",
        "tr": "Sana daha sonra mesaj yazacağım.",
        "ro": "Îți voi scrie un mesaj mai târziu.",
        "bs": "Napisaću ti poruku kasnije.",
        "es": "Te escribiré un mensaje más tarde.",
        "bg": "Ще ти напиша съобщение по-късно.",
        "el": "Θα σου γράψω μήνυμα αργότερα."
      }
    ]
  },
  {
    "id": 23,
    "emoji": "🗳️",
    "titleDe": "Die Politik und ich",
    "color": "#4b5563",
    "titleEn": "Politics and Me",
    "titleAr": "السياسة وأنا",
    "titleTr": "Siyaset ve Ben",
    "titleRo": "Politica și Eu",
    "titleBs": "Politika i ja",
    "titleEs": "La política y yo",
    "titleBg": "Politics and Me",
    "titleEl": "Η πολιτική και εγώ",
    "topicsEn": [
      "Democracy and elections",
      "News and opinions",
      "Citizen rights and duties"
    ],
    "topics": [
      "الديمقراطية والانتخابات",
      "أخبار وآراء",
      "حقوق وواجبات المواطن"
    ],
    "topicsTr": [
      "Demokrasi ve seçimler",
      "Haberler ve görüşler",
      "Vatandaş hakları ve görevleri"
    ],
    "topicsRo": [
      "Democrație și alegeri",
      "Știri și opinii",
      "Drepturile și îndatoririle cetățenilor"
    ],
    "topicsBs": [
      "Demokratija i izbori",
      "Vijesti i mišljenja",
      "Prava i dužnosti građana"
    ],
    "topicsEs": [
      "Democracia y elecciones",
      "Noticias y opiniones",
      "Derechos y deberes de los ciudadanos"
    ],
    "topicsBg": [
      "Демокрация и избори",
      "Новини и мнения",
      "Права и задължения на гражданите"
    ],
    "topicsEl": [
      "Δημοκρατία και εκλογές",
      "Ειδήσεις και απόψεις",
      "Δικαιώματα και υποχρεώσεις του πολίτη"
    ],
    "canDoEn": "I can understand basic political news, express my opinion, and talk about elections.",
    "canDo": "أستطيع أن أفهم الأخبار السياسية الأساسية، والتعبير عن رأيي، والحديث عن الانتخابات.",
    "canDoDe": "Ich kann grundlegende politische Nachrichten verstehen, meine Meinung äußern und über Wahlen sprechen.",
    "canDoTr": "Temel siyasi haberleri anlayabiliyor, fikrimi ifade edebiliyor ve seçimler hakkında konuşabiliyorum.",
    "canDoRo": "Pot să înțeleg știrile politice de bază, să-mi exprim părerea și să vorbesc despre alegeri.",
    "canDoBs": "Mogu razumjeti osnovne političke vijesti, izraziti svoje mišljenje i govoriti o izborima.",
    "canDoEs": "Puedo entender noticias políticas básicas, expresar mi opinión y hablar sobre elecciones.",
    "canDoBg": "Мога да разбирам основни политически новини, да изразявам мнението си и да говоря за избори.",
    "canDoEl": "Μπορώ να κατανοήσω τις βασικές πολιτικές ειδήσεις, να εκφράσω τη γνώμη μου και να μιλήσω για εκλογές.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track24.mp3",
        "label": "23.1 - Diskussion über Wahlen",
        "labelEn": "23.1 - Discussion about elections",
        "labelAr": "23.1 - مناقشة حول الانتخابات",
        "labelTr": "23.1 - Seçimlerle ilgili tartışma",
        "labelRo": "23.1 - Discuție despre alegeri",
        "labelBs": "23.1 - Diskusija o izborima",
        "labelEs": "23.1 - Discusión sobre elecciones",
        "labelBg": "23.1 - Дискусия за избори",
        "labelEl": "23.1 - Συζήτηση για τις εκλογές"
      }
    ],
    "dialogs": [
      {
        "title": "Zur Wahl gehen",
        "titleEn": "Going to vote",
        "titleAr": "الذهاب للتصويت",
        "titleTr": "Oy vermeye gidiyorum",
        "titleRo": "Merg la vot",
        "titleBs": "Idem na glasanje",
        "titleEs": "ir a votar",
        "titleBg": "Отивам да гласувам",
        "titleEl": "Πάει να ψηφίσει",
        "lines": [
          {
            "speaker": "Klaus",
            "de": "Gehst du am Sonntag wählen?",
            "en": "Are you going to vote on Sunday?",
            "ar": "هل ستصوت يوم الأحد؟",
            "tr": "Pazar günü oy kullanacak mısınız?",
            "ro": "Ai de gând să votezi duminică?",
            "bs": "Hoćete li glasati u nedjelju?",
            "es": "¿Vas a votar el domingo?",
            "bg": "Ще гласувате ли в неделя?",
            "el": "Θα ψηφίσετε την Κυριακή;"
          },
          {
            "speaker": "Sven",
            "de": "Ja, natürlich. Wählen ist ein wichtiges Recht in einer Demokratie.",
            "en": "Yes, of course. Voting is an important right in a democracy.",
            "ar": "نعم بالطبع. التصويت هو حق مهم في الديمقراطية.",
            "tr": "Evet elbette. Demokrasilerde oy vermek önemli bir haktır.",
            "ro": "Da, desigur. Votul este un drept important într-o democrație.",
            "bs": "Da, naravno. Glasanje je važno pravo u demokratiji.",
            "es": "Sí, claro. Votar es un derecho importante en una democracia.",
            "bg": "да разбира се Гласуването е важно право в една демокрация.",
            "el": "Ναι, φυσικά. Η ψήφος είναι σημαντικό δικαίωμα σε μια δημοκρατία."
          },
          {
            "speaker": "Klaus",
            "de": "Ich weiß noch nicht, welche Partei ich wählen soll.",
            "en": "I don't know yet which party I should vote for.",
            "ar": "لا أعرف حتى الآن أي حزب يجب أن أصوت له.",
            "tr": "Hangi partiye oy vermem gerektiğini henüz bilmiyorum.",
            "ro": "Nu știu încă pentru ce partid ar trebui să votez.",
            "bs": "Još ne znam za koju stranku da glasam.",
            "es": "Todavía no sé por qué partido debería votar.",
            "bg": "Още не знам за коя партия да гласувам.",
            "el": "Δεν ξέρω ακόμα ποιο κόμμα να ψηφίσω."
          },
          {
            "speaker": "Sven",
            "de": "Lies am besten die Programme der Parteien im Internet.",
            "en": "Best read the programs of the parties on the internet.",
            "ar": "من الأفضل قراءة برامج الحفلات على الإنترنت.",
            "tr": "En iyisi partilerin programlarını internetten okuyun.",
            "ro": "Cel mai bine citiți programele petrecerilor de pe internet.",
            "bs": "Najbolje pročitajte programe žurki na internetu.",
            "es": "Lo mejor es leer los programas de los partidos en internet.",
            "bg": "Най-добре четете програмите на партиите в интернет.",
            "el": "Διαβάστε καλύτερα τα προγράμματα των πάρτι στο διαδίκτυο."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Wahlen in Deutschland",
        "titleEn": "Elections in Germany",
        "titleAr": "الانتخابات في ألمانيا",
        "titleTr": "Almanya'da seçimler",
        "titleRo": "Alegeri in Germania",
        "titleBs": "Izbori u Njemačkoj",
        "titleEs": "Elecciones en Alemania",
        "titleBg": "Избори в Германия",
        "titleEl": "Εκλογές στη Γερμανία",
        "text": [
          {
            "de": "In Deutschland gibt es regelmäßig freie Wahlen. Die Bürger wählen die Politiker im Parlament.",
            "en": "In Germany, there are regular free elections. Citizens elect the politicians in parliament.",
            "ar": "تجري في ألمانيا انتخابات حرة منتظمة. ينتخب المواطنون السياسيين في البرلمان.",
            "tr": "Almanya'da düzenli olarak serbest seçimler yapılıyor. Vatandaşlar parlamentoda politikacıları seçiyor.",
            "ro": "În Germania, sunt regulate alegeri libere. Cetăţenii aleg politicienii în parlament.",
            "bs": "U Njemačkoj su redovni slobodni izbori. Građani biraju političare u parlamentu.",
            "es": "En Alemania se celebran periódicamente elecciones libres. Los ciudadanos eligen a los políticos en el parlamento.",
            "bg": "В Германия има редовни свободни избори. Гражданите избират политиците в парламента.",
            "el": "Στη Γερμανία γίνονται τακτικές ελεύθερες εκλογές. Οι πολίτες εκλέγουν τους πολιτικούς στο κοινοβούλιο."
          },
          {
            "de": "Jeder Bürger ab 18 Jahren darf wählen und so die Politik mitbestimmen.",
            "en": "Every citizen from 18 years old is allowed to vote and thus help determine the politics.",
            "ar": "يُسمح لكل مواطن بدءًا من 18 عامًا بالتصويت وبالتالي المساعدة في تحديد السياسة.",
            "tr": "18 yaşını dolduran her vatandaşın oy kullanma ve dolayısıyla siyasetin belirlenmesine yardımcı olma hakkı bulunmaktadır.",
            "ro": "Fiecare cetățean de la 18 ani are voie să voteze și astfel contribuie la determinarea politicii.",
            "bs": "Svaki građanin od 18 godina može glasati i tako pomoći u određivanju politike.",
            "es": "Todo ciudadano mayor de 18 años puede votar y así contribuir a determinar la política.",
            "bg": "Всеки гражданин от 18-годишна възраст има право да гласува и по този начин да помогне за определяне на политиката.",
            "el": "Κάθε πολίτης από 18 ετών επιτρέπεται να ψηφίζει και έτσι να βοηθά στον καθορισμό της πολιτικής."
          }
        ],
        "questions": [
          {
            "q": "Ab welchem Alter darf man wählen?",
            "qDe": "Ab welchem Alter darf man wählen?",
            "qEn": "From what age is one allowed to vote?",
            "qAr": "من أي عمر يُسمح للشخص بالتصويت؟",
            "qTr": "Bir kişinin oy kullanmasına kaç yaşından itibaren izin verilir?",
            "qRo": "De la ce vârstă are voie să voteze?",
            "qBs": "Od koje godine se može glasati?",
            "qEs": "¿A partir de qué edad se puede votar?",
            "qBg": "От каква възраст има право да се гласува?",
            "qEl": "Από ποια ηλικία επιτρέπεται να ψηφίζει κανείς;",
            "answer": "Man darf ab 18 Jahren wählen.",
            "answerDe": "Man darf ab 18 Jahren wählen.",
            "answerEn": "One is allowed to vote from 18 years.",
            "answerAr": "يُسمح للشخص بالتصويت بدءًا من 18 عامًا.",
            "answerTr": "Birinin 18 yaşından itibaren oy kullanmasına izin veriliyor.",
            "answerRo": "Unul are voie să voteze de la 18 ani.",
            "answerBs": "Glasati je dozvoljeno sa 18 godina.",
            "answerEs": "Se permite votar a partir de los 18 años.",
            "answerBg": "Човек има право да гласува от 18 години.",
            "answerEl": "Επιτρέπεται κάποιος να ψηφίσει από 18 ετών."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Adjektivdeklination nach dem bestimmten Artikel",
        "titleEn": "Adjective Declension after Definite Article",
        "titleAr": "تصريف الصفة بعد المادة المحددة",
        "titleTr": "Belirli Artikelden Sonra Sıfat Çekimi",
        "titleRo": "Declinarea adjectivă după articolul definit",
        "titleBs": "Deklinacija pridjeva iza određenog člana",
        "titleEs": "Declinación de adjetivo después de artículo definido",
        "titleBg": "Прилагателно склонение след определителен член",
        "titleEl": "Κλίση επιθέτου μετά από οριστική",
        "explanationEn": "Adjectives after definite articles (der, die, das) take weak endings (mostly -e in singular Nominative, and -en in Accusative/Dative/Plural).",
        "explanationAr": "الصفات بعد أدوات التعريف (der، die، das) تأخذ نهايات ضعيفة (في الغالب -e في حالة الرفع المفرد، و -en في حالة النصب/حالة الجر/الجمع).",
        "explanationTr": "Belirli artikellerden (der, die, das) sonra gelen sıfatlar zayıf sonlar alır (çoğunlukla tekil Nominatifte -e ve Suçlayıcı/Datif/Çoğulda -en).",
        "explanationRo": "Adjectivele după articole hotărâte (der, die, das) au terminații slabe (mai ales -e la singular Nominativ și -en la Acuzativ/Datif/Plural).",
        "explanationBs": "Pridjevi iza određenih članova (der, die, das) imaju slabe nastavke (uglavnom -e u nominativu jednine i -en u akuzativu/dativu/množini).",
        "explanationEs": "Los adjetivos después de artículos definidos (der, die, das) toman terminaciones débiles (principalmente -e en nominativo singular y -en en acusativo/dativo/plural).",
        "explanationBg": "Прилагателните след определителни членове (der, die, das) имат слаби окончания (предимно -e в единствено число, номинативно число и -en във винителен/дателен/множествен падеж).",
        "explanationEl": "Τα επίθετα μετά από οριστικά άρθρα (der, die, das) παίρνουν αδύναμες καταλήξεις (κυρίως -e στον ενικό Ονομαστικό, και -en σε Κατηγορούμενο/Δοτική/Πληθυντικό).",
        "rules": [
          {
            "example": "Das neue Gesetz (Nom) / Ich unterstütze das neue Gesetz (Akk).",
            "translationEn": "The new law / I support the new law.",
            "translationAr": "القانون الجديد / أنا أؤيد القانون الجديد .",
            "translationTr": "Yeni yasa / Yeni yasayı destekliyorum.",
            "translationRo": "Noua lege / Sustin noua lege.",
            "translationBs": "Novi zakon / Podržavam novi zakon.",
            "translationEs": "La nueva ley / Apoyo la nueva ley.",
            "translationBg": "Новият закон / Подкрепям новия закон.",
            "translationEl": "Ο νέος νόμος / υποστηρίζω τον νέο νόμο.",
            "noteEn": "Neuter Singular Nominative/Accusative adjective ends in -e.",
            "noteAr": "الصفة المفردة/النصبية المحايدة تنتهي بـ -e.",
            "noteTr": "Nötr Tekil Nominatif/Suçlayıcı sıfat -e ile biter.",
            "noteRo": "Neutru Singular Nominativ/Acuzativ adjectiv se termină în -e.",
            "noteBs": "Nominativ/akuzativ srednjeg roda jednine završava se na -e.",
            "noteEs": "El adjetivo neutro singular nominativo/acusativo termina en -e.",
            "noteBg": "Среден род, единствено число, именителен/винителен падеж, прилагателно завършва на -е.",
            "noteEl": "Ουδέτερο Ενικό Ονομαστικό/Κατηγορητικό επίθετο τελειώνει σε -e."
          }
        ]
      },
      {
        "id": "nebensaetze-obwohl",
        "titleDe": "Nebensätze mit 'obwohl'",
        "title": "الجمل الثانوية مع \"obwohl\" (على الرغم من)",
        "titleEn": "Subordinate Clauses with 'obwohl' (although)",
        "explanation": "\"Obwohl\" (على الرغم من / على الرغم من) يقدم تنازلًا أو تباينًا. وهو حرف عطف تابع، فيذهب الفعل المصروف إلى آخره.",
        "explanationEn": "'Obwohl' (although/even though) introduces a concession or contrast. It is a subordinating conjunction, so the conjugated verb goes to the end.",
        "titleTr": "'Obwohl' içeren Yardımcı Cümleler (gerçi)",
        "explanationTr": "'Obwohl' (her ne kadar/olsa da) bir taviz veya karşıtlık getiriyor. Bu bir alt bağlaçtır, dolayısıyla konjuge fiil sonuna gider.",
        "titleRo": "Propoziții subordonate cu „obwohl” (deși)",
        "explanationRo": "„Obwohl” (deși/chiar dacă) introduce o concesie sau un contrast. Este o conjuncție subordonată, deci verbul conjugat merge până la sfârșit.",
        "titleBs": "Podređene rečenice sa 'obwohl' (iako)",
        "explanationBs": "'Obwohl' (iako/iako) uvodi ustupak ili kontrast. To je podređeni veznik, pa konjugirani glagol ide do kraja.",
        "titleEs": "Cláusulas subordinadas con 'obwohl' (aunque)",
        "explanationEs": "'Obwohl' (aunque/aunque) introduce una concesión o contraste. Es una conjunción subordinante, por lo que el verbo conjugado va hasta el final.",
        "titleBg": "Подчинени изречения с „obwohl“ (въпреки че)",
        "explanationBg": "„Obwohl“ (въпреки че/въпреки че) въвежда отстъпка или контраст. Това е подчинителна връзка, така че спрегнатият глагол отива в края.",
        "titleEl": "Δευτερεύουσες προτάσεις με «obwohl» (αν και)",
        "explanationEl": "Το «Obwohl» (αν και/ακόμα κι αν) εισάγει μια παραχώρηση ή αντίθεση. Είναι δευτερεύων σύνδεσμος, οπότε το συζευγμένο ρήμα πηγαίνει στο τέλος.",
        "rules": [
          {
            "example": "Er geht wählen, obwohl er keine Zeit hat.",
            "translation": "يذهب للتصويت على الرغم من أنه ليس لديه الوقت.",
            "translationEn": "He goes to vote even though he has no time.",
            "note": "الفعل \"قبعة\" يوضع في النهاية.",
            "noteEn": "The verb 'hat' is placed at the end.",
            "translationTr": "Zamanı olmamasına rağmen oy kullanmaya gidiyor.",
            "noteTr": "'Şapka' fiili sonuna yerleştirilir.",
            "translationRo": "Merge la vot deși nu are timp.",
            "noteRo": "Verbul „pălărie” este plasat la sfârșit.",
            "translationBs": "Ide na glasanje iako nema vremena.",
            "noteBs": "Glagol 'šešir' se nalazi na kraju.",
            "translationEs": "Va a votar aunque no tiene tiempo.",
            "noteEs": "El verbo 'sombrero' se coloca al final.",
            "translationBg": "Отива да гласува, въпреки че няма време.",
            "noteBg": "В края се поставя глаголът „шапка“.",
            "translationEl": "Πάει να ψηφίσει κι ας μην έχει χρόνο.",
            "noteEl": "Το ρήμα «καπέλο» τοποθετείται στο τέλος."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 2301,
        "type": "mcq",
        "question": "Der nett___ Politiker spricht mit den Bürgern. (nett)",
        "questionDe": "Der nett___ Politiker spricht mit den Bürgern. (nett)",
        "questionEn": "The nice politician speaks with the citizens.",
        "questionAr": "السياسي اللطيف يتحدث مع المواطنين.",
        "questionTr": "İyi politikacı vatandaşlarla konuşuyor.",
        "questionRo": "Politicianul drăguț vorbește cu cetățenii.",
        "questionBs": "Simpatičan političar razgovara sa građanima.",
        "questionEs": "El simpático político habla con los ciudadanos.",
        "questionBg": "Симпатичният политик говори с гражданите.",
        "questionEl": "Ο ωραίος πολιτικός μιλάει με τους πολίτες.",
        "options": [
          {
            "de": "e",
            "en": "-e (masc. nominative ending)",
            "ar": "-e (masc. النهاية الاسمية)",
            "tr": "-e (masc. yalın son)",
            "ro": "-e (masc. terminație nominativă)",
            "bs": "-e (masc. nominativan završetak)",
            "es": "-e (finalización nominativa masc.)",
            "bg": "-e (маск. номинативно окончание)",
            "el": "-e (αρσ. ονομαστική κατάληξη)"
          },
          {
            "de": "en",
            "en": "-en",
            "ar": "-en",
            "tr": "-en",
            "ro": "-ro",
            "bs": "-en",
            "es": "-es",
            "bg": "-en",
            "el": "-en"
          },
          {
            "de": "er",
            "en": "-er",
            "ar": "-إيه",
            "tr": "-er",
            "ro": "-eh",
            "bs": "-er",
            "es": "-er",
            "bg": "-Ъъъъ",
            "el": "-εεε"
          }
        ],
        "answer": 0,
        "hintDe": "bestimmter Artikel 'der', Maskulinum, Nominativ",
        "hintEn": "definite article 'der', masculine, nominative",
        "hintAr": "أداة تعريف \"دير\"، مذكر، اسمي",
        "hintTr": "belirli tanım edatı 'der', eril, yalın",
        "hintRo": "articol hotărât „der”, masculin, nominativ",
        "hintBs": "određeni član 'der', muški rod, nominativ",
        "hintEs": "artículo definido 'der', masculino, nominativo",
        "hintBg": "определителен член 'der', мъжки род, именителен падеж",
        "hintEl": "οριστικό άρθρο «der», αρσενικό, ονομαστική"
      },
      {
        "id": 2302,
        "type": "fillblank",
        "question": "Ich lerne weiter, ___ es schwer ist. (although)",
        "questionDe": "Ich lerne weiter, ___ es schwer ist. (although)",
        "questionEn": "I continue to study although it is difficult.",
        "questionAr": "أواصل الدراسة رغم صعوبتها.",
        "answer": "obwohl",
        "questionTr": "Zor da olsa okumaya devam ediyorum.",
        "questionRo": "Continui sa studiez desi este greu.",
        "questionBs": "Nastavljam da učim iako je teško.",
        "questionEs": "Sigo estudiando aunque es difícil.",
        "questionBg": "Продължавам да уча, въпреки че е трудно.",
        "questionEl": "Συνεχίζω να σπουδάζω αν και είναι δύσκολο.",
        "hintDe": "Gegensatz ausgedrückt durch obwohl",
        "hintEn": "contrast expressed by obwohl",
        "hintAr": "التباين الذي أعرب عنه obwohl",
        "hintTr": "obwohl tarafından ifade edilen kontrast",
        "hintRo": "contrast exprimat de obwohl",
        "hintBs": "kontrast izražen obwohl",
        "hintEs": "contraste expresado por obwohl",
        "hintBg": "контраст, изразен от obwohl",
        "hintEl": "αντίθεση που εκφράζεται από το obwohl"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Meine Meinung äußern",
        "titleEn": "Expressing my opinion",
        "titleAr": "التعبير عن رأيي",
        "titleTr": "Görüşümü ifade etme",
        "titleRo": "Exprimându-mi părerea",
        "titleBs": "Izražavam svoje mišljenje",
        "titleEs": "expresando mi opinion",
        "titleBg": "Expressing my opinion",
        "titleEl": "Εκφράζοντας τη γνώμη μου",
        "promptEn": "Write your opinion about environmental protection. Why is it important, and what should citizens and politicians do?",
        "promptAr": "اكتب رأيك حول حماية البيئة. لماذا هو مهم، وماذا يجب على المواطنين والسياسيين القيام به؟",
        "promptTr": "Çevrenin korunması hakkında düşüncenizi yazın. Bu neden önemlidir ve vatandaşlar ve politikacılar ne yapmalıdır?",
        "promptRo": "Scrie-ți părerea despre protecția mediului. De ce este important și ce ar trebui să facă cetățenii și politicienii?",
        "promptBs": "Napišite svoje mišljenje o zaštiti životne sredine. Zašto je to važno i šta bi građani i političari trebali učiniti?",
        "promptEs": "Escribe tu opinión sobre la protección del medio ambiente. ¿Por qué es importante y qué deberían hacer los ciudadanos y los políticos?",
        "promptBg": "Напишете мнението си за опазване на околната среда. Защо е важно и какво трябва да направят гражданите и политиците?",
        "promptEl": "Γράψτε τη γνώμη σας για την προστασία του περιβάλλοντος. Γιατί είναι σημαντικό και τι πρέπει να κάνουν οι πολίτες και οι πολιτικοί;",
        "promptDe": "Schreiben Sie Ihre Meinung zum Umweltschutz. Warum ist er wichtig und was sollten Bürger und Politiker tun?",
        "example": "Meiner Meinung nach ist Umweltschutz sehr wichtig für unsere Zukunft. Die Politiker müssen strengere Gesetze beschließen, um das Klima zu schützen. Aber auch jeder Bürger muss helfen, zum Beispiel durch Mülltrennung."
      }
    ],
    "speakingPhrases": [
      {
        "de": "Ich denke, dass wählen gehen sehr wichtig ist.",
        "en": "I think that going to vote is very important.",
        "ar": "أعتقد أن الذهاب إلى التصويت مهم للغاية.",
        "tr": "Oy kullanmaya gitmenin çok önemli olduğunu düşünüyorum.",
        "ro": "Cred că este foarte important să mergi la vot.",
        "bs": "Mislim da je izlazak na glasanje veoma važan.",
        "es": "Creo que ir a votar es muy importante.",
        "bg": "Мисля, че да гласуваш е много важно.",
        "el": "Νομίζω ότι είναι πολύ σημαντικό να πάμε να ψηφίσουμε."
      },
      {
        "de": "Was ist Ihre Meinung zu diesem Thema?",
        "en": "What is your opinion on this topic?",
        "ar": "ما هو رأيك في هذا الموضوع؟",
        "tr": "Bu konu hakkındaki fikriniz nedir?",
        "ro": "Ce parere aveti despre acest subiect?",
        "bs": "Kakvo je vaše mišljenje o ovoj temi?",
        "es": "¿Cuál es tu opinión sobre este tema?",
        "bg": "Какво е вашето мнение по тази тема?",
        "el": "Ποια είναι η γνώμη σας για αυτό το θέμα;"
      }
    ]
  },
  {
    "id": 24,
    "emoji": "🌍",
    "titleDe": "Bei uns und bei euch",
    "color": "#06b6d4",
    "titleEn": "At Our Place and Your Place / Intercultural",
    "titleAr": "في مكاننا ومكانك / متعدد الثقافات",
    "titleTr": "Bizim Yerimizde ve Sizin Yerinizde / Kültürlerarası",
    "titleRo": "La noi și la locul tău / Intercultural",
    "titleBs": "Kod nas i kod vas / Interkulturalno",
    "titleEs": "En Nuestro Lugar y en Tu Lugar / Intercultural",
    "titleBg": "У нас и при вас / Междукултурно",
    "titleEl": "Στο χώρο μας και στη θέση σας / Διαπολιτισμική",
    "topicsEn": [
      "Intercultural experiences",
      "Comparing traditions",
      "Settle in a new country"
    ],
    "topics": [
      "تجارب بين الثقافات",
      "مقارنة التقاليد",
      "استقر في بلد جديد"
    ],
    "topicsTr": [
      "Kültürlerarası deneyimler",
      "Geleneklerin karşılaştırılması",
      "Yeni bir ülkeye yerleşmek"
    ],
    "topicsRo": [
      "Experiențe interculturale",
      "Compararea tradițiilor",
      "Stabiliți-vă într-o țară nouă"
    ],
    "topicsBs": [
      "Interkulturalna iskustva",
      "Poređenje tradicija",
      "Nastanite se u novoj zemlji"
    ],
    "topicsEs": [
      "Experiencias interculturales",
      "Comparando tradiciones",
      "Establecerse en un nuevo país."
    ],
    "topicsBg": [
      "Междукултурни преживявания",
      "Сравняване на традициите",
      "Установете се в нова страна"
    ],
    "topicsEl": [
      "Διαπολιτισμικές εμπειρίες",
      "Σύγκριση παραδόσεων",
      "Εγκαταστήστε σε μια νέα χώρα"
    ],
    "canDoEn": "I can compare customs between my homeland and Germany, and describe my experiences living abroad.",
    "canDo": "يمكنني مقارنة العادات بين وطني وألمانيا، ووصف تجاربي في الخارج.",
    "canDoDe": "Ich kann die Sitten meiner Heimat und Deutschlands vergleichen und meine Erfahrungen im Ausland schildern.",
    "canDoTr": "Kendi memleketim ile Almanya arasındaki gelenekleri karşılaştırabiliyorum ve yurt dışında yaşadığım deneyimleri anlatabiliyorum.",
    "canDoRo": "Pot compara obiceiurile dintre patria mea și Germania și pot descrie experiențele mele de viață în străinătate.",
    "canDoBs": "Mogu da uporedim običaje između svoje domovine i Nemačke, i opišem svoja iskustva života u inostranstvu.",
    "canDoEs": "Puedo comparar las costumbres entre mi país y Alemania y describir mis experiencias viviendo en el extranjero.",
    "canDoBg": "Мога да сравня обичаите между моята родина и Германия и да опиша преживяванията си в чужбина.",
    "canDoEl": "Μπορώ να συγκρίνω έθιμα μεταξύ της πατρίδας μου και της Γερμανίας και να περιγράψω τις εμπειρίες μου που ζούσα στο εξωτερικό.",
    "audioFiles": [
      {
        "file": "Berliner Platz 2 neu/Berliner Platz 2 neu Audio/Berliner Platz 2 neu - A2 Lernbuch 19-24/- Track30.mp3",
        "label": "24.1 - Leben in Deutschland",
        "labelEn": "24.1 - Living in Germany",
        "labelAr": "24.1 - العيش في ألمانيا",
        "labelTr": "24.1 - Almanya'da Yaşamak",
        "labelRo": "24.1 - Trăiește în Germania",
        "labelBs": "24.1 - Živjeti u Njemačkoj",
        "labelEs": "24.1 - Vivir en Alemania",
        "labelBg": "24.1 - Живее в Германия",
        "labelEl": "24.1 - Ζώντας στη Γερμανία"
      }
    ],
    "dialogs": [
      {
        "title": "Kulturelle Unterschiede",
        "titleEn": "Cultural differences",
        "titleAr": "الاختلافات الثقافية",
        "titleTr": "Kültürel farklılıklar",
        "titleRo": "Diferențele culturale",
        "titleBs": "Kulturne razlike",
        "titleEs": "Diferencias culturales",
        "titleBg": "Cultural differences",
        "titleEl": "Πολιτιστικές διαφορές",
        "lines": [
          {
            "speaker": "Aisha",
            "de": "Wie gefällt es dir in Deutschland? Hast du dich gut eingelebt?",
            "en": "How do you like Germany? Have you settled in well?",
            "ar": "كيف تحب ألمانيا؟ هل استقرت بشكل جيد؟",
            "tr": "Almanya'yı nasıl seversin? İyi yerleştiniz mi?",
            "ro": "Cum iti place Germania? Te-ai instalat bine?",
            "bs": "Kako ti se sviđa Njemačka? Da li ste se dobro smestili?",
            "es": "¿Cómo te gusta Alemania? ¿Te has adaptado bien?",
            "bg": "How do you like Germany? Добре ли се настанихте?",
            "el": "Πώς σας φαίνεται η Γερμανία; Τακτοποιήσατε καλά;"
          },
          {
            "speaker": "Tareq",
            "de": "Ja, ich habe mich gut eingelebt, aber manche Sitten sind ganz anders als in Syrien.",
            "en": "Yes, I have settled in well, but some customs are quite different from Syria.",
            "ar": "نعم، لقد استقرت جيدًا، لكن بعض العادات تختلف تمامًا عن سوريا.",
            "tr": "Evet, iyice yerleştim ama bazı gelenekler Suriye'dekinden oldukça farklı.",
            "ro": "Da, m-am instalat bine, dar unele obiceiuri sunt destul de diferite de Siria.",
            "bs": "Da, dobro sam se snašao, ali neki običaji se dosta razlikuju od sirijskih.",
            "es": "Sí, me he adaptado bien, pero algunas costumbres son bastante diferentes a las de Siria.",
            "bg": "Да, настаних се добре, но някои обичаи са доста различни от Сирия.",
            "el": "Ναι, έχω εγκατασταθεί καλά, αλλά κάποια έθιμα είναι αρκετά διαφορετικά από τη Συρία."
          },
          {
            "speaker": "Aisha",
            "de": "Was ist zum Beispiel anders?",
            "en": "What is different, for example?",
            "ar": "ما هو المختلف مثلا؟",
            "tr": "Örneğin farklı olan ne?",
            "ro": "Ce este diferit, de exemplu?",
            "bs": "Šta je drugačije, na primjer?",
            "es": "¿Qué es diferente, por ejemplo?",
            "bg": "Какво е различното например?",
            "el": "Τι είναι διαφορετικό, για παράδειγμα;"
          },
          {
            "speaker": "Tareq",
            "de": "In Deutschland ist Pünktlichkeit extrem wichtig. Daran musste ich mich erst gewöhnen.",
            "en": "In Germany, punctuality is extremely important. I had to get used to that first.",
            "ar": "في ألمانيا، الالتزام بالمواعيد أمر في غاية الأهمية. كان علي أن أعتاد على ذلك أولاً.",
            "tr": "Almanya'da dakiklik son derece önemlidir. Önce buna alışmam gerekiyordu.",
            "ro": "În Germania, punctualitatea este extrem de importantă. A trebuit să mă obișnuiesc mai întâi cu asta.",
            "bs": "U Njemačkoj je tačnost izuzetno važna. Morao sam se prvo naviknuti na to.",
            "es": "En Alemania la puntualidad es muy importante. Primero tuve que acostumbrarme a eso.",
            "bg": "В Германия точността е изключително важна. Първо трябваше да свикна с това.",
            "el": "Στη Γερμανία, η ακρίβεια είναι εξαιρετικά σημαντική. Έπρεπε να το συνηθίσω πρώτα."
          }
        ]
      }
    ],
    "readingTexts": [
      {
        "title": "Erfahrungen im Ausland",
        "titleEn": "Experiences Abroad",
        "titleAr": "تجارب في الخارج",
        "titleTr": "Yurtdışı Deneyimler",
        "titleRo": "Experiențe în străinătate",
        "titleBs": "Experiences Abroad",
        "titleEs": "Experiencias en el extranjero",
        "titleBg": "Преживявания в чужбина",
        "titleEl": "Εμπειρίες στο Εξωτερικό",
        "text": [
          {
            "de": "Ein neues Leben im Ausland zu beginnen, ist eine große Herausforderung. Man muss eine neue Sprache lernen und Kontakte knüpfen.",
            "en": "Starting a new life abroad is a big challenge. One has to learn a new language and make contacts.",
            "ar": "إن بدء حياة جديدة في الخارج يمثل تحديًا كبيرًا. يتعين على المرء أن يتعلم لغة جديدة ويجري اتصالات.",
            "tr": "Yurtdışında yeni bir hayata başlamak büyük bir zorluktur. Yeni bir dil öğrenmek ve iletişim kurmak gerekiyor.",
            "ro": "A începe o nouă viață în străinătate este o mare provocare. Trebuie să înveți o nouă limbă și să stabilești contacte.",
            "bs": "Započinjanje novog života u inostranstvu veliki je izazov. Treba naučiti novi jezik i uspostaviti kontakte.",
            "es": "Empezar una nueva vida en el extranjero es un gran desafío. Hay que aprender un nuevo idioma y hacer contactos.",
            "bg": "Да започнеш нов живот в чужбина е голямо предизвикателство. Човек трябва да научи нов език и да създаде контакти.",
            "el": "Το να ξεκινήσεις μια νέα ζωή στο εξωτερικό είναι μια μεγάλη πρόκληση. Κάποιος πρέπει να μάθει μια νέα γλώσσα και να κάνει επαφές."
          },
          {
            "de": "Durch den Austausch lernt man andere Kulturen besser verstehen und baut Vorurteile ab.",
            "en": "Through exchange, one learns to understand other cultures better and reduces prejudices.",
            "ar": "ومن خلال التبادل، يتعلم المرء فهم الثقافات الأخرى بشكل أفضل ويقلل من الأحكام المسبقة.",
            "tr": "Değişim yoluyla kişi diğer kültürleri daha iyi anlamayı öğrenir ve önyargıları azaltır.",
            "ro": "Prin schimb, se învață să înțeleagă mai bine alte culturi și se reduce prejudecățile.",
            "bs": "Kroz razmjenu se uči bolje razumjeti druge kulture i smanjuje predrasude.",
            "es": "A través del intercambio se aprende a comprender mejor otras culturas y se reducen los prejuicios.",
            "bg": "Чрез обмена човек се научава да разбира по-добре други култури и намалява предразсъдъците.",
            "el": "Μέσω της ανταλλαγής, μαθαίνει κανείς να κατανοεί καλύτερα τους άλλους πολιτισμούς και μειώνει τις προκαταλήψεις."
          }
        ],
        "questions": [
          {
            "q": "Was lernt man durch den Austausch?",
            "qDe": "Was lernt man durch den Austausch?",
            "qEn": "What does one learn through exchange?",
            "qAr": "ماذا يتعلم المرء من خلال التبادل؟",
            "qTr": "What does one learn through exchange?",
            "qRo": "What does one learn through exchange?",
            "qBs": "Šta se uči kroz razmjenu?",
            "qEs": "¿Qué se aprende a través del intercambio?",
            "qBg": "Какво научава човек чрез обмен?",
            "qEl": "What does one learn through exchange?",
            "answer": "Man lernt andere Kulturen besser verstehen.",
            "answerDe": "Man lernt andere Kulturen besser verstehen.",
            "answerEn": "One learns to understand other cultures better.",
            "answerAr": "يتعلم المرء أن يفهم الثقافات الأخرى بشكل أفضل.",
            "answerTr": "İnsan diğer kültürleri daha iyi anlamayı öğrenir.",
            "answerRo": "Se învață să înțeleagă mai bine alte culturi.",
            "answerBs": "Čovjek uči bolje razumjeti druge kulture.",
            "answerEs": "Se aprende a comprender mejor otras culturas.",
            "answerBg": "Човек се научава да разбира по-добре другите култури.",
            "answerEl": "Μαθαίνει κανείς να κατανοεί καλύτερα τους άλλους πολιτισμούς."
          }
        ]
      }
    ],
    "grammar": [
      {
        "titleDe": "Präpositionen mit Genitiv",
        "titleEn": "Prepositions with Genitive",
        "titleAr": "حروف الجر مع المضاف إليه",
        "titleTr": "Genitive ile Edatlar",
        "titleRo": "Prepoziții cu genitiv",
        "titleBs": "Predlozi sa genitivom",
        "titleEs": "Preposiciones con genitivo",
        "titleBg": "Предлози с генитив",
        "titleEl": "Προθέσεις με Genitive",
        "explanationEn": "Prepositions like 'wegen', 'während', and 'trotz' require the Genitive case (e.g. wegen des Wetters, während der Fahrt).",
        "explanationAr": "تتطلب حروف الجر مثل \"wegen\" و\"während\" و\"trotz\" حالة المضاف إليها (على سبيل المثال، wegen des Wetters، während der Fahrt).",
        "explanationTr": "'Wegen', 'während' ve 'trotz' gibi edatlar Genitive durumunu gerektirir (örn. wegen des Wetters, während der Fahrt).",
        "explanationRo": "Prepoziții precum „wegen”, „während” și „trotz” necesită cazul genitiv (de exemplu, wegen des Wetters, während der Fahrt).",
        "explanationBs": "Prijedlozi poput 'wegen', 'während' i 'trotz' zahtijevaju genitiv (npr. wegen des Wetters, während der Fahrt).",
        "explanationEs": "Preposiciones como 'wegen', 'während' y 'trotz' requieren el caso genitivo (por ejemplo, wegen des Wetters, während der Fahrt).",
        "explanationBg": "Предлози като „wegen“, „während“ и „trotz“ изискват родителен падеж (напр. wegen des Wetters, während der Fahrt).",
        "explanationEl": "Οι προθέσεις όπως «wegen», «während» και «trotz» απαιτούν την κεφαλαία κεφαλαία (π.χ. wegen des Wetters, während der Fahrt).",
        "rules": [
          {
            "example": "Wegen des Regens blieben wir zu Hause.",
            "translationEn": "Because of the rain, we stayed at home.",
            "translationAr": "وبسبب المطر بقينا في المنزل.",
            "translationTr": "Yağmurdan dolayı evde kaldık.",
            "translationRo": "Din cauza ploii am rămas acasă.",
            "translationBs": "Zbog kiše smo ostali kod kuće.",
            "translationEs": "A causa de la lluvia nos quedamos en casa.",
            "translationBg": "Заради дъжда останахме вкъщи.",
            "translationEl": "Λόγω της βροχής μείναμε σπίτι.",
            "noteEn": "wegen + Genitive of der Regen -> des Regens.",
            "noteAr": "wegen + Genitive of der Regen -> des Regens.",
            "noteTr": "wegen + Yenilemenin Genitifi -> Yenilemeler.",
            "noteRo": "wegen + Genitiv der Regen -> des Regens.",
            "noteBs": "wegen + Genitiv od der Regen -> des Regens.",
            "noteEs": "wegen + Genitivo de der Regen -> des Regens.",
            "noteBg": "wegen + Родителен падеж на der Regen -> des Regens.",
            "noteEl": "wegen + Γεν. του der Regen -> des Regens."
          }
        ]
      },
      {
        "id": "finalsaetze",
        "titleDe": "Finalsätze: um...zu und damit",
        "title": "البنود النهائية: أم...زو و داميت",
        "titleEn": "Final Clauses: um...zu and damit",
        "explanation": "الجمل النهائية تعبر عن الغرض أو الهدف. استخدم \"um...zu\" إذا كان الموضوع هو نفسه في كلا الجملتين، و\"damt\" إذا كان الموضوعان مختلفين.",
        "explanationEn": "Final clauses express purpose or goal. Use 'um...zu' if the subject is the same in both clauses, and 'damit' if the subjects are different.",
        "titleTr": "Son Cümleler: um...zu ve kahretsin",
        "explanationTr": "Son maddeler amacı veya amacı ifade eder. Her iki cümlede de konu aynıysa 'um...zu', konular farklıysa 'lanet olsun' kullanın.",
        "titleRo": "Clauze finale: um...zu și damit",
        "explanationRo": "Clauzele finale exprimă scopul sau scopul. Folosiți „um...zu” dacă subiectul este același în ambele propoziții și „damit” dacă subiectele sunt diferite.",
        "titleBs": "Završne rečenice: um...zu i dovraga",
        "explanationBs": "Završne rečenice izražavaju svrhu ili cilj. Upotrijebite 'um...zu' ako je subjekt isti u obje rečenice, i 'dovraga' ako su subjekti različiti.",
        "titleEs": "Cláusulas finales: um...zu y damit",
        "explanationEs": "Las cláusulas finales expresan propósito u objetivo. Utilice 'um...zu' si el sujeto es el mismo en ambas cláusulas y 'damit' si los sujetos son diferentes.",
        "titleBg": "Заключителни клаузи: um...zu и damit",
        "explanationBg": "Финалните клаузи изразяват цел или цел. Използвайте 'um...zu', ако темата е една и съща и в двете клаузи, и 'damit', ако субектите са различни.",
        "titleEl": "Τελικές ρήτρες: um...zu and damit",
        "explanationEl": "Οι τελικές ρήτρες εκφράζουν σκοπό ή στόχο. Χρησιμοποιήστε \"um...zu\" αν το θέμα είναι το ίδιο και στις δύο προτάσεις και \"damit\" εάν τα θέματα είναι διαφορετικά.",
        "rules": [
          {
            "example": "Ich reise nach Deutschland, um Deutsch zu lernen.",
            "translation": "أسافر إلى ألمانيا لتعلم اللغة الألمانية.",
            "translationEn": "I travel to Germany in order to learn German.",
            "note": "أم + أكشن + زو + صيغة المصدر.",
            "noteEn": "um + action + zu + infinitive.",
            "translationTr": "Almanca öğrenmek için Almanya'ya gidiyorum.",
            "noteTr": "um + eylem + zu + mastar.",
            "translationRo": "Călătoresc în Germania pentru a învăța limba germană.",
            "noteRo": "um + acțiune + zu + infinitiv.",
            "translationBs": "Putujem u Njemačku kako bih naučio njemački.",
            "noteBs": "um + akcija + zu + infinitiv.",
            "translationEs": "Viajo a Alemania para aprender alemán.",
            "noteEs": "um + acción + zu + infinitivo.",
            "translationBg": "Пътувам до Германия, за да науча немски.",
            "noteBg": "um + действие + zu + инфинитив.",
            "translationEl": "Ταξιδεύω στη Γερμανία για να μάθω γερμανικά.",
            "noteEl": "um + δράση + zu + αόριστος."
          }
        ]
      }
    ],
    "exercises": [
      {
        "id": 2401,
        "type": "mcq",
        "question": "Trotz des ___ Windes sind wir spazieren gegangen. (kalt)",
        "questionDe": "Trotz des ___ Windes sind wir spazieren gegangen. (kalt)",
        "questionEn": "Despite the cold wind, we went for a walk.",
        "questionAr": "على الرغم من الرياح الباردة، ذهبنا في نزهة على الأقدام.",
        "questionTr": "Soğuk rüzgara rağmen yürüyüşe çıktık.",
        "questionRo": "În ciuda vântului rece, ne-am plimbat.",
        "questionBs": "I pored hladnog vjetra otišli smo u šetnju.",
        "questionEs": "A pesar del viento frío, salimos a caminar.",
        "questionBg": "Въпреки студения вятър излязохме на разходка.",
        "questionEl": "Παρά τον κρύο αέρα, πήγαμε μια βόλτα.",
        "options": [
          {
            "de": "kalten",
            "en": "-en (masc. genitive ending)",
            "ar": "-en (masc. نهاية مضافة)",
            "tr": "-en (masc. genel son)",
            "ro": "-en (masc. terminație genitiva)",
            "bs": "-en (masc. genitiv završetak)",
            "es": "-en (finalización genitiva masc.)",
            "bg": "-en (маск. родителен падеж)",
            "el": "-en (αρσ. γεν. κατάληξη)"
          },
          {
            "de": "kalter",
            "en": "-er",
            "ar": "-إيه",
            "tr": "-er",
            "ro": "-eh",
            "bs": "-er",
            "es": "-er",
            "bg": "-Ъъъъ",
            "el": "-εεε"
          },
          {
            "de": "kaltes",
            "en": "-es",
            "ar": "-es",
            "tr": "-es",
            "ro": "-es",
            "bs": "-es",
            "es": "-es",
            "bg": "-es",
            "el": "-es"
          }
        ],
        "answer": 0,
        "hintDe": "Genitiv-Attribut nach 'trotz des'",
        "hintEn": "Genitive attribute after 'trotz des'",
        "hintAr": "السمة المضافة بعد \"trotz des\"",
        "hintTr": "'Trotz des'ten sonra gelen genel özellik",
        "hintRo": "Atribut genitiv după „trotz des”",
        "hintBs": "Genitivni atribut iza \"trotz des\"",
        "hintEs": "Atributo genitivo después de 'trotz des'",
        "hintBg": "Родителен атрибут след „trotz des“",
        "hintEl": "Γενικό χαρακτηριστικό μετά το \"trotz des\""
      },
      {
        "id": 2402,
        "type": "fillblank",
        "question": "Sie lernt fleißig, ___ die Prüfung zu bestehen. (in order to)",
        "questionDe": "Sie lernt fleißig, ___ die Prüfung zu bestehen. (in order to)",
        "questionEn": "She studies hard in order to pass the exam.",
        "questionAr": "إنها تدرس بجد من أجل اجتياز الامتحان.",
        "answer": "um",
        "questionTr": "Sınavı geçmek için çok çalışıyor.",
        "questionRo": "Ea învață din greu pentru a trece examenul.",
        "questionBs": "Vredno uči kako bi položila ispit.",
        "questionEs": "Ella estudia mucho para aprobar el examen.",
        "questionBg": "Тя учи усилено, за да издържи изпита.",
        "questionEl": "Σπουδάζει σκληρά για να περάσει τις εξετάσεις.",
        "hintDe": "um...zu-Konstruktion für Zweck",
        "hintEn": "um...zu construction for purpose",
        "hintAr": "أم...زو البناء لهذا الغرض",
        "hintTr": "um...zu amaca yönelik inşaat",
        "hintRo": "um...zu construcție pentru scop",
        "hintBs": "hm...zu konstrukciju za namjenu",
        "hintEs": "um...zu construcción para un propósito",
        "hintBg": "хм...зу конструкция по предназначение",
        "hintEl": "um...zu κατασκευή για σκοπό"
      }
    ],
    "writingPrompts": [
      {
        "titleDe": "Meine Heimat und Deutschland",
        "titleEn": "My homeland and Germany",
        "titleAr": "وطني وألمانيا",
        "titleTr": "Vatanım ve Almanya",
        "titleRo": "Patria mea și Germania",
        "titleBs": "Moja domovina i Njemačka",
        "titleEs": "Mi patria y Alemania",
        "titleBg": "My homeland and Germany",
        "titleEl": "Η πατρίδα μου και η Γερμανία",
        "promptEn": "Write a comparison. What are the differences and similarities between daily life in Germany and in your home country?",
        "promptAr": "اكتب مقارنة. ما هي أوجه الاختلاف والتشابه بين الحياة اليومية في ألمانيا وفي بلدك؟",
        "promptTr": "Bir karşılaştırma yazın. Almanya'daki günlük yaşamla kendi ülkenizdeki günlük yaşam arasındaki farklar ve benzerlikler nelerdir?",
        "promptRo": "Scrieți o comparație. Care sunt diferențele și asemănările dintre viața de zi cu zi din Germania și cea din țara ta de origine?",
        "promptBs": "Napišite poređenje. Koje su razlike i sličnosti između svakodnevnog života u Njemačkoj i u vašoj domovini?",
        "promptEs": "Escribe una comparación. ¿Cuáles son las diferencias y similitudes entre la vida cotidiana en Alemania y en su país de origen?",
        "promptBg": "Write a comparison. Какви са разликите и приликите между ежедневието в Германия и във вашата страна?",
        "promptEl": "Γράψε μια σύγκριση. Ποιες είναι οι διαφορές και οι ομοιότητες μεταξύ της καθημερινής ζωής στη Γερμανία και στη χώρα σας;",
        "promptDe": "Schreiben Sie einen Vergleich. Was sind die Unterschiede und Gemeinsamkeiten im Alltag zwischen Deutschland und Ihrem Heimatland?",
        "example": "In meinem Heimatland Syrien essen die Menschen oft sehr spät zu Abend, meistens erst um 21 Uhr. In Deutschland essen viele Familien schon um 18 Uhr. Eine Gemeinsamkeit ist, dass die Familie in beiden Ländern eine sehr wichtige Rolle spielt."
      }
    ],
    "speakingPhrases": [
      {
        "de": "In meiner Heimat feiert man Feste ganz anders.",
        "en": "In my homeland, people celebrate festivals quite differently.",
        "ar": "في وطني، يحتفل الناس بالمهرجانات بشكل مختلف تمامًا.",
        "tr": "Benim memleketimde insanlar festivalleri oldukça farklı kutlarlar.",
        "ro": "În patria mea, oamenii sărbătoresc festivalurile cu totul diferit.",
        "bs": "U mojoj domovini ljudi slave praznike sasvim drugačije.",
        "es": "En mi país la gente celebra las fiestas de forma muy diferente.",
        "bg": "В моята родина хората празнуват съвсем различно.",
        "el": "Στην πατρίδα μου οι άνθρωποι γιορτάζουν τα πανηγύρια πολύ διαφορετικά."
      },
      {
        "de": "Ich habe viele neue Freunde in Deutschland gefunden.",
        "en": "I have found many new friends in Germany.",
        "ar": "لقد وجدت العديد من الأصدقاء الجدد في ألمانيا.",
        "tr": "Almanya'da birçok yeni arkadaş buldum.",
        "ro": "Mi-am găsit mulți prieteni noi în Germania.",
        "bs": "Našao sam mnogo novih prijatelja u Njemačkoj.",
        "es": "He encontrado muchos nuevos amigos en Alemania.",
        "bg": "Намерих много нови приятели в Германия.",
        "el": "Έχω βρει πολλούς νέους φίλους στη Γερμανία."
      }
    ]
  }
];
