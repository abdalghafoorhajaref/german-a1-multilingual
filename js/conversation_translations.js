// ============================================================
// CONVERSATION TRANSLATIONS DATABASE - Multilingual
// ============================================================

const CONVERSATION_TRANSLATIONS = {
  "en": {
    "1": {
      "title": "Self Introduction",
      "turns": [
        {
          "text": "Hello! I am Anna. What is your name?"
        },
        {
          "prompt": "Introduce yourself and tell the partner your name",
          "options": [
            "Hello Anna! My name is Ahmad.",
            "Good day! My name is Ahmad."
          ]
        },
        {
          "text": "Pleased to meet you, Ahmad! Where do you come from?"
        },
        {
          "prompt": "Tell the partner your country of origin",
          "options": [
            "I come from Syria.",
            "I come from Egypt."
          ]
        },
        {
          "text": "Ah, nice! And where do you live now?"
        },
        {
          "prompt": "Tell the partner your current city",
          "options": [
            "I live in Berlin now.",
            "I live in Munich now."
          ]
        },
        {
          "text": "Berlin is great! Which languages do you speak?"
        },
        {
          "prompt": "Mention the languages you speak",
          "options": [
            "I speak Arabic and a little German.",
            "My mother tongue is Arabic. I am learning German now."
          ]
        },
        {
          "text": "Very good! Goodbye, Ahmad!"
        },
        {
          "prompt": "Say goodbye to the partner in an appropriate way",
          "options": [
            "Goodbye, Anna! Bye!",
            "Bye! See you soon!"
          ]
        }
      ]
    },
    "2": {
      "title": "Meeting in a Cafe",
      "turns": [
        {
          "text": "Hello! How are you doing today?"
        },
        {
          "prompt": "Reply that you are doing well and ask how the partner is doing",
          "options": [
            "Hello! I'm doing very well, thank you. And you?",
            "Thanks, good! And how are you?"
          ]
        },
        {
          "text": "I'm doing well too, thank you. Would you like to drink coffee or tea?"
        },
        {
          "prompt": "Order a cup of coffee with milk, please",
          "options": [
            "I would like a coffee with milk, please.",
            "A coffee with milk for me, please."
          ]
        },
        {
          "text": "Sure! I'll take a tea. What is your mobile number for later?"
        },
        {
          "prompt": "Give your phone number to the partner (0176...)",
          "options": [
            "My number is zero-one-seven-six-two-three-four.",
            "Here is my number: zero-one-seven-six-five-six-seven."
          ]
        },
        {
          "text": "Thank you, I've noted it down! See you next time!"
        },
        {
          "prompt": "Say goodbye to your friend and wish them a good day",
          "options": [
            "Bye! Have a nice day!",
            "Goodbye! See you soon!"
          ]
        }
      ]
    },
    "3": {
      "title": "At the Flea Market",
      "turns": [
        {
          "text": "Good day! Are you looking for something specific?"
        },
        {
          "prompt": "Say you are looking for a camera or a book and ask about the price",
          "options": [
            "Good day! I'm looking for a book. How much does this book cost?",
            "Hello! How much is this camera here?"
          ]
        },
        {
          "text": "The book costs 5 Euros. The camera costs 45 Euros. That's cheap!"
        },
        {
          "prompt": "Say the price is too high (expensive) and try to negotiate a lower price",
          "options": [
            "The book is cheap. I'll take the book.",
            "Oh, 45 Euros is too expensive! Is 35 Euros okay?"
          ]
        },
        {
          "text": "Well, okay, 35 Euros for the camera is fine. Will you take it?"
        },
        {
          "prompt": "Agree, say you will take it, and ask where to pay",
          "options": [
            "Yes, I'll take it. Thank you very much!",
            "Great, I'll take the camera for 35 Euros."
          ]
        },
        {
          "text": "Here you go. That makes 35 Euros."
        },
        {
          "prompt": "Pay the seller and thank them",
          "options": [
            "Here are 35 Euros. Thank you very much!",
            "Here you go, 35 Euros. Have a nice day!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens and Appointments",
      "turns": [
        {
          "text": "Hello! When do you normally get up?"
        },
        {
          "prompt": "Tell them you usually wake up at 7 AM and eat breakfast at 7:30",
          "options": [
            "I get up at seven o'clock and eat breakfast at half past seven.",
            "Normally I get up at 7 o'clock, then I have breakfast."
          ]
        },
        {
          "text": "And when does your German course start?"
        },
        {
          "prompt": "Tell them the lesson starts at nine o'clock and ends at half past one",
          "options": [
            "The course starts at nine o'clock and ends at half past one.",
            "It starts at 9 o'clock and goes until 13:30."
          ]
        },
        {
          "text": "Oh, that is a long course! Do you have time on Friday evening? Shall we go to the cinema?"
        },
        {
          "prompt": "Apologize that you don't have time because of another appointment, and ask about Saturday",
          "options": [
            "I'm sorry, I don't have time on Friday. Does Saturday work?",
            "Unfortunately I have an appointment on Friday. How about Saturday?"
          ]
        },
        {
          "text": "Yes, Saturday at 6 PM fits well! See you Saturday!"
        },
        {
          "prompt": "Agree to the appointment and say goodbye",
          "options": [
            "Great! See you Saturday at 18:00. Bye!",
            "Deal! See you Saturday!"
          ]
        }
      ]
    },
    "5": {
      "title": "Grocery Shopping",
      "turns": [
        {
          "text": "Good day! What can I do for you?"
        },
        {
          "prompt": "Say you want to buy tomatoes and cheese and ask if they are fresh",
          "options": [
            "Good day! I need tomatoes and cheese. Are they fresh?",
            "Hello! I would like to buy tomatoes and cheese."
          ]
        },
        {
          "text": "Yes, everything is very fresh! How many tomatoes would you like?"
        },
        {
          "prompt": "Request one kilogram of tomatoes",
          "options": [
            "I would like one kilo of tomatoes, please.",
            "One kilo of tomatoes, please."
          ]
        },
        {
          "text": "Sure. And how much cheese would you like?"
        },
        {
          "prompt": "Request 300 grams of Swiss cheese",
          "options": [
            "Please give me 300 grams of cheese.",
            "I need three hundred grams of cheese, please."
          ]
        },
        {
          "text": "Here you go. Anything else?"
        },
        {
          "prompt": "Answer negatively and ask for the total cost",
          "options": [
            "No, thank you. That is all. How much does that cost?",
            "That is all, thank you. How much does it make?"
          ]
        },
        {
          "text": "That makes 9 Euros 40 in total, please."
        },
        {
          "prompt": "Give them a 10 Euro bill and tell them to keep the change",
          "options": [
            "Here are 10 Euros. Keep the change!",
            "Here you go. Ten Euros. Keep the change."
          ]
        }
      ]
    },
    "6": {
      "title": "Talking About Family",
      "turns": [
        {
          "text": "Hello! Do you live alone or with your family?"
        },
        {
          "prompt": "Say you are married and live with your family and children",
          "options": [
            "I am married and live with my family.",
            "I live together with my wife and my two children."
          ]
        },
        {
          "text": "Ah, how nice! How old are your children?"
        },
        {
          "prompt": "Tell them your daughter is 8 years old and your son is 5 years old",
          "options": [
            "My daughter is eight and my son is five years old.",
            "The daughter is 8 years old and the son is 5."
          ]
        },
        {
          "text": "And your parents? Do they also live here in Germany?"
        },
        {
          "prompt": "Tell them they live in your home country, but you talk on the phone with them often",
          "options": [
            "No, my parents live in my home country. But we talk on the phone often.",
            "They live in Egypt/Syria. I talk on the phone with them every day."
          ]
        },
        {
          "text": "That's good! Tomorrow is my sister's birthday. We are celebrating!"
        },
        {
          "prompt": "Congratulate his sister and wish her a happy birthday",
          "options": [
            "Happy birthday to your sister!",
            "All the best on her birthday!"
          ]
        }
      ]
    },
    "7": {
      "title": "Renting an Apartment",
      "turns": [
        {
          "text": "Good day! Are you calling regarding the 3-room apartment?"
        },
        {
          "prompt": "Confirm the call and ask about the total square meters of the apartment",
          "options": [
            "Yes, exactly. How big is the apartment actually?",
            "Good day! Yes, I am interested in the apartment. How many square meters is it?"
          ]
        },
        {
          "text": "The apartment is 85 square meters and also has a balcony."
        },
        {
          "prompt": "Ask about the cold rent and the cost of utilities and electricity",
          "options": [
            "How high is the cold rent? And how much are the utilities?",
            "How much is the warm rent?"
          ]
        },
        {
          "text": "The cold rent is 750 Euros. The utilities are 180 Euros."
        },
        {
          "prompt": "Ask what floor the apartment is on and if the building has an elevator",
          "options": [
            "Which floor is the apartment on? Is there an elevator?",
            "Is the apartment on the ground floor or on the first floor?"
          ]
        },
        {
          "text": "The apartment is on the third floor. But unfortunately, there is no elevator."
        },
        {
          "prompt": "Say you find the apartment suitable and ask about viewing it soon",
          "options": [
            "That's okay for me. Can I view the apartment?",
            "When is a viewing possible? I would like to see it."
          ]
        }
      ]
    },
    "8": {
      "title": "At the Doctor",
      "turns": [
        {
          "text": "Good day! What is wrong with you?"
        },
        {
          "prompt": "Explain to the doctor that you feel sick, have a severe headache, and a fever",
          "options": [
            "Good day, doctor. I feel very bad. I have a headache and a fever.",
            "I am sick. My head hurts and I have a fever."
          ]
        },
        {
          "text": "I see. Do you also have a sore throat or a cough?"
        },
        {
          "prompt": "Answer yes, your throat hurts too and you can't sleep well",
          "options": [
            "Yes, my throat hurts too and I cannot sleep.",
            "Yes, I have a sore throat since yesterday."
          ]
        },
        {
          "text": "You have a bad cold. I will prescribe you medication."
        },
        {
          "prompt": "Ask the doctor how many times a day you need to take this medicine",
          "options": [
            "How many times a day do I need to take the medicine?",
            "When should I take the medicine?"
          ]
        },
        {
          "text": "Twice daily, morning and evening after eating. Get well soon!"
        },
        {
          "prompt": "Thank him and say goodbye politely",
          "options": [
            "Thank you very much, doctor. Goodbye!",
            "Thank you very much for your help. Bye!"
          ]
        }
      ]
    },
    "9": {
      "title": "Asking for Directions",
      "turns": [
        {
          "text": "Excuse me! How do I get to the train station?"
        },
        {
          "prompt": "Tell the traveler to go straight ahead and then turn left",
          "options": [
            "Go straight ahead and then take the next street left.",
            "First go straight ahead, then turn left."
          ]
        },
        {
          "text": "Is the train station far from here?"
        },
        {
          "prompt": "Tell him it's not far, only a five-minute walk",
          "options": [
            "No, it is very close. Only five minutes on foot.",
            "It's not far, about 500 meters."
          ]
        },
        {
          "text": "Can I also take the bus?"
        },
        {
          "prompt": "Tell him yes, bus number 100 goes directly there",
          "options": [
            "Yes, bus line 100 goes directly there.",
            "Yes, take bus number 100."
          ]
        },
        {
          "text": "Great! Thank you very much for your help!"
        },
        {
          "prompt": "Respond with 'You're welcome' and wish him a good trip",
          "options": [
            "You're welcome! Have a good trip!",
            "You're welcome! Have a nice day!"
          ]
        }
      ]
    },
    "10": {
      "title": "Making Free Time Plans",
      "turns": [
        {
          "text": "Hello! What do you like to do most in your free time?"
        },
        {
          "prompt": "Tell him you like playing football and listening to music",
          "options": [
            "I like playing football very much and listening to music.",
            "In my free time I play football or read a book."
          ]
        },
        {
          "text": "Football is great! We are playing on Saturday. Do you want to come along?"
        },
        {
          "prompt": "Express your interest and ask what time you will start playing",
          "options": [
            "Yes, gladly! What time are you meeting?",
            "That sounds fun! When are you playing on Saturday?"
          ]
        },
        {
          "text": "We are playing on Saturday at 3 PM in the park. Just bring sports shoes."
        },
        {
          "prompt": "Confirm your attendance at the scheduled time and say you will definitely come",
          "options": [
            "Alright! I will come on Saturday at 15:00. See you then!",
            "Great, I'll be there on Saturday at three o'clock."
          ]
        }
      ]
    },
    "11": {
      "title": "Talking About Jobs",
      "turns": [
        {
          "text": "Hello! What is your profession?"
        },
        {
          "prompt": "Tell him your profession (e.g. computer engineer) and the company you work for",
          "options": [
            "I am an engineer by profession and work at a computer company.",
            "I work as a salesman in a supermarket."
          ]
        },
        {
          "text": "That's interesting! How many hours do you work per week?"
        },
        {
          "prompt": "Say you work 40 hours a week and your job is fun but tiring",
          "options": [
            "I work 40 hours per week. The work is fun, but it is stressful.",
            "I work forty hours. I like my job very much."
          ]
        },
        {
          "text": "I see. And what is your dream job?"
        },
        {
          "prompt": "Say your dream job is to work as a manager or software developer and earn a lot of money",
          "options": [
            "My dream job is software developer. I would like to work flexibly.",
            "I would like to be a successful cook and have my own restaurant."
          ]
        }
      ]
    },
    "12": {
      "title": "In the Restaurant",
      "turns": [
        {
          "text": "Good evening! Have you reserved a table?"
        },
        {
          "prompt": "Answer yes, you reserved a table for two under the name 'Ahmad'",
          "options": [
            "Good evening! Yes, we have reserved a table for two under the name Ahmad.",
            "Yes, a table for two. The name is Ahmad."
          ]
        },
        {
          "text": "Certainly, Mr. Ahmad. Here is your table. What would you like to drink?"
        },
        {
          "prompt": "Order a bottle of mineral water and an apple juice",
          "options": [
            "I would like a bottle of mineral water and an apple juice, please.",
            "Please bring me a water and a juice."
          ]
        },
        {
          "text": "With pleasure. And what would you like to eat?"
        },
        {
          "prompt": "Order tomato soup as a starter and schnitzel as the main course",
          "options": [
            "As a starter the tomato soup and as a main course the schnitzel.",
            "I'll take a soup and a schnitzel, please."
          ]
        },
        {
          "text": "Coming right up. (Later...) Was the food delicious? Would you like to pay?"
        },
        {
          "prompt": "Praise the food and ask for the bill",
          "options": [
            "Yes, the food was fantastic! The bill, please!",
            "It was very delicious. The bill, please."
          ]
        },
        {
          "text": "That makes 27 Euros 80 Cents in total."
        },
        {
          "prompt": "Give him 30 Euros and tell him to keep the change (tip)",
          "options": [
            "Here are 30 Euros. Keep the change!",
            "Keep the change. Make it 30 Euros."
          ]
        }
      ]
    }
  },
  "tr": {
    "1": {
      "title": "Kendini Tanıtma",
      "turns": [
        {
          "text": "Merhaba! Ben Anna. Senin adın ne?"
        },
        {
          "prompt": "Kendini tanıt ve adını ortağına söyle",
          "options": [
            "Merhaba Anna! Benim adım Ahmad.",
            "İyi günler! Benim adım Ahmad."
          ]
        },
        {
          "text": "Tanıştığımıza memnun oldum, Ahmad! Nereden geliyorsun?"
        },
        {
          "prompt": "Ortağına geldiğin ülkeyi söyle",
          "options": [
            "Suriye'den geliyorum.",
            "Mısır'dan geliyorum."
          ]
        },
        {
          "text": "Ah, güzel! Ve şimdi nerede yaşıyorsun?"
        },
        {
          "prompt": "Ortağına şimdi yaşadığın şehri söyle",
          "options": [
            "Şimdi Berlin'de yaşıyorum.",
            "Şimdi Münih'de yaşıyorum."
          ]
        },
        {
          "text": "Berlin harika! Hangi dilleri konuşuyorsun?"
        },
        {
          "prompt": "Konuştuğun dilleri belirt",
          "options": [
            "Arapça ve biraz Almanca konuşuyorum.",
            "Ana dilim Arapça. Şimdi Almanca öğreniyorum."
          ]
        },
        {
          "text": "Çok iyi! Görüşmek üzere, Ahmad!"
        },
        {
          "prompt": "Ortağına uygun bir şekilde veda et",
          "options": [
            "Görüşmek üzere, Anna! Hoşça kal!",
            "Görüşürüz! Yakında görüşmek üzere!"
          ]
        }
      ]
    },
    "2": {
      "title": "Kafede Buluşma",
      "turns": [
        {
          "text": "Merhaba! Bugün nasılsın?"
        },
        {
          "prompt": "İyi olduğunu söyle ve ortağının nasıl olduğunu sor",
          "options": [
            "Merhaba! Çok iyiyim, teşekkürler. Ya sen?",
            "Teşekkürler, iyiyim! Sen nasılsın?"
          ]
        },
        {
          "text": "Ben de iyiyim, teşekkürler. Kahve mi yoksa çay mı içmek istersin?"
        },
        {
          "prompt": "Lütfen bir fincan sütlü kahve isteyin",
          "options": [
            "Sütlü bir kahve rica ediyorum, lütfen.",
            "Benim için sütlü bir kahve lütfen."
          ]
        },
        {
          "text": "Memnuniyetle! Ben çay alıyorum. Sonrası için cep telefonu numaran nedir?"
        },
        {
          "prompt": "Telefon numaranı ortağına ver (0176...)",
          "options": [
            "Numaram sıfır-bir-yedi-altı-iki-üç-dört.",
            "İşte numaram: sıfır-bir-yedi-altı-beş-altı-yedi."
          ]
        },
        {
          "text": "Teşekkürler, kaydettim! Bir dahaki sefere görüşmek üzere!"
        },
        {
          "prompt": "Arkadaşına veda et ve ona iyi bir gün dile",
          "options": [
            "Görüşürüz! İyi günler!",
            "Görüşmek üzere! Yakında görüşürüz!"
          ]
        }
      ]
    },
    "3": {
      "title": "Bit Pazarında",
      "turns": [
        {
          "text": "İyi günler! Özel bir şey mi arıyorsunuz?"
        },
        {
          "prompt": "Bir kamera veya kitap aradığınızı söyleyin ve fiyatını sorun",
          "options": [
            "İyi günler! Bir kitap arıyorum. Bu kitabın fiyatı nedir?",
            "Merhaba! Buradaki bu kameranın fiyatı ne kadar?"
          ]
        },
        {
          "text": "Kitap 5 Euro. Kamera 45 Euro. Bu çok ucuz!"
        },
        {
          "prompt": "Fiyatın çok yüksek (pahalı) olduğunu söyleyin ve daha düşük bir fiyata pazarlık etmeye çalışın",
          "options": [
            "Kitap uygun fiyatlı. Kitabı alıyorum.",
            "Oh, 45 Euro çok pahalı! 35 Euro olur mu?"
          ]
        },
        {
          "text": "Pekala, kamera için 35 Euro olur. Alıyor musunuz?"
        },
        {
          "prompt": "Kabul edin, alacağınızı söyleyin ve nereye ödeyeceğinizi sorun",
          "options": [
            "Evet, alıyorum. Çok teşekkürler!",
            "Harika, kamerayı 35 Euro'ya alıyorum."
          ]
        },
        {
          "text": "Buyurun. Toplam 35 Euro yapıyor."
        },
        {
          "prompt": "Satıcıya ödeme yapın ve teşekkür edin",
          "options": [
            "Buyurun 35 Euro. Çok teşekkürler!",
            "Buyurun 35 Euro. İyi günler!"
          ]
        }
      ]
    },
    "4": {
      "title": "Sabah Rutini ve Randevular",
      "turns": [
        {
          "text": "Merhaba! Genelde saat kaçta kalkarsın?"
        },
        {
          "prompt": "Genelde sabah 7'de kalktığınızı ve 7:30'da kahvaltı yaptığınızı söyleyin",
          "options": [
            "Saat yedide kalkıyorum ve yedi buçukta kahvaltı yapıyorum.",
            "Genelde saat 7'de kalkarım, sonra kahvaltı yaparım."
          ]
        },
        {
          "text": "Almanca kursun saat kaçta başlıyor?"
        },
        {
          "prompt": "Dersin tam dokuzda başladığını ve bir buçukta bittiğini söyleyin",
          "options": [
            "Kurs saat dokuzda başlıyor ve bir buçukta bitiyor.",
            "Saat 9'da başlıyor ve 13:30'a kadar sürüyor."
          ]
        },
        {
          "text": "Oh, bu uzun bir kurs! Cuma akşamı vaktin var mı? Sinemaya gidelim mi?"
        },
        {
          "prompt": "Başka bir randevunuz olduğu için gelemeyeceğinizi söyleyip özür dileyin ve Cumartesi gününü sorun",
          "options": [
            "Üzgünüm, Cuma günü vaktim yok. Cumartesi olur mu?",
            "Maalesef Cuma günü bir randevum var. Cumartesi nasıl?"
          ]
        },
        {
          "text": "Evet, Cumartesi saat 18:00 çok uygun! Cumartesi görüşürüz!"
        },
        {
          "prompt": "Randevuyu onaylayın ve veda edin",
          "options": [
            "Harika! Cumartesi saat 18:00'de görüşürüz. Hoşça kal!",
            "Anlaştık! Cumartesi görüşürüz!"
          ]
        }
      ]
    },
    "5": {
      "title": "Gıda Alışverişi",
      "turns": [
        {
          "text": "İyi günler! Sizin için ne yapabilirim?"
        },
        {
          "prompt": "Domates ve peynir almak istediğinizi söyleyin ve taze olup olmadıklarını sorun",
          "options": [
            "İyi günler! Domates ve peynire ihtiyacım var. Taze mi?",
            "Merhaba! Domates ve peynir satın almak istiyorum."
          ]
        },
        {
          "text": "Evet, her şey çok taze! Ne kadar domates istersiniz?"
        },
        {
          "prompt": "Bir kilogram domates isteyin",
          "options": [
            "Bir kilo domates rica ediyorum, lütfen.",
            "Bir kilo domates lütfen."
          ]
        },
        {
          "text": "Elbette. Ne kadar peynir istersiniz?"
        },
        {
          "prompt": "300 gram İsviçre peyniri isteyin",
          "options": [
            "Bana lütfen 300 gram peynir verin.",
            "Üç yüz gram peynire ihtiyacım var, lütfen."
          ]
        },
        {
          "text": "Buyurun. Başka bir şey?"
        },
        {
          "prompt": "Başka bir şey istemediğinizi belirtin ve toplam tutarı sorun",
          "options": [
            "Hayır, teşekkürler. Hepsi bu. Fiyatı ne kadar?",
            "Hepsi bu kadar, teşekkürler. Toplam ne kadar tutuyor?"
          ]
        },
        {
          "text": "Toplam 9 Euro 40 Cent yapıyor, lütfen."
        },
        {
          "prompt": "10 Euro verin ve üstünün kalmasını söyleyin",
          "options": [
            "Buyurun 10 Euro. Üstü kalsın!",
            "Buyurun. On Euro. Üstü kalsın."
          ]
        }
      ]
    },
    "6": {
      "title": "Aile Hakkında Konuşmak",
      "turns": [
        {
          "text": "Merhaba! Yalnız mı yaşıyorsun yoksa ailenle mi?"
        },
        {
          "prompt": "Evli olduğunuzu, aileniz ve çocuklarınızla birlikte yaşadığınızı söyleyin",
          "options": [
            "Evliyim ve ailemle yaşıyorum.",
            "Eşim ve iki çocuğumla birlikte yaşıyorum."
          ]
        },
        {
          "text": "Ah, ne güzel! Çocukların kaç yaşında?"
        },
        {
          "prompt": "Kızınızın 8, oğlunuzun ise 5 yaşında olduğunu söyleyin",
          "options": [
            "Kızım sekiz, oğlum beş yaşında.",
            "Kızım 8 yaşında, oğlum ise 5."
          ]
        },
        {
          "text": "Peki ya anne baban? Onlar da Almanya'da mı yaşıyor?"
        },
        {
          "prompt": "Kendi ülkenizde yaşadıklarını ama onlarla sık sık telefonda konuştuğunuzu söyleyin",
          "options": [
            "Hayır, anne babam memleketimde yaşıyor. Ama sık sık telefonda konuşuyoruz.",
            "Mısır/Suriye'de yaşıyorlar. Onlarla her gün telefonlaşıyorum."
          ]
        },
        {
          "text": "Bu çok güzel! Yarın kız kardeşimin doğum günü. Kutlayacağız!"
        },
        {
          "prompt": "Kız kardeşinin doğum gününü kutlayın ve iyi dileklerde bulunun",
          "options": [
            "Kız kardeşinin doğum günü kutlu olsun!",
            "Onun için en iyi dileklerimle!"
          ]
        }
      ]
    },
    "7": {
      "title": "Daire Kiralamak",
      "turns": [
        {
          "text": "İyi günler! 3 odalı daire için mi arıyorsunuz?"
        },
        {
          "prompt": "Aramayı onaylayın ve dairenin toplam metrekare boyutunu sorun",
          "options": [
            "Evet, aynen öyle. Daire aslında ne kadar büyüklükte?",
            "İyi günler! Evet, daire ile ilgileniyorum. Kaç metrekare?"
          ]
        },
        {
          "text": "Daire 85 metrekare büyüklüğünde ve ayrıca bir balkonu var."
        },
        {
          "prompt": "Soğuk kirayı ve ek giderler ile elektrik maliyetini sorun",
          "options": [
            "Soğuk kira ne kadar? Ek giderler ne kadar tutuyor?",
            "Sıcak kira ne kadar?"
          ]
        },
        {
          "text": "Soğuk kira 750 Euro. Ek giderler ise 180 Euro."
        },
        {
          "prompt": "Dairenin kaçıncı katta olduğunu ve binada asansör olup olmadığını sorun",
          "options": [
            "Daire kaçıncı katta? Asansör var mı?",
            "Daire giriş katında mı yoksa birinci katta mı?"
          ]
        },
        {
          "text": "Daire üçüncü katta yer alıyor. Ancak maalesef asansör yok."
        },
        {
          "prompt": "Dairenin sizin için uygun olduğunu söyleyin ve yakında görmenin mümkün olup olmadığını sorun",
          "options": [
            "Bu benim için uygun. Daireyi görebilir miyim?",
            "Gözden geçirme ne zaman mümkün olur? Görmek isterim."
          ]
        }
      ]
    },
    "8": {
      "title": "Doktorda",
      "turns": [
        {
          "text": "İyi günler! Neyiniz var?"
        },
        {
          "prompt": "Doktora kendinizi kötü hissettiğinizi, şiddetli baş ağrınız ve ateşiniz olduğunu açıklayın",
          "options": [
            "İyi günler, doktor bey. Kendimi çok kötü hissediyorum. Baş ağrım ve ateşim var.",
            "Hastayım. Başım ağrıyor ve ateşim var."
          ]
        },
        {
          "text": "Anlıyorum. Boğaz ağrınız veya öksürüğünüz de var mı?"
        },
        {
          "prompt": "Evet deyin, boğazınız da ağrıyor ve iyi uyuyamıyorsunuz",
          "options": [
            "Evet, boğazım da ağrıyor ve uyuyamıyorum.",
            "Evet, dünden beri boğaz ağrım var."
          ]
        },
        {
          "text": "Şiddetli bir soğuk algınlığınız var. Size ilaç yazacağım."
        },
        {
          "prompt": "Doktora bu ilacı günde kaç kez almanız gerektiğini sorun",
          "options": [
            "İlacı günde kaç kez almam gerekiyor?",
            "İlacı ne zaman almalıyım?"
          ]
        },
        {
          "text": "Günde iki kez, sabah ve akşam yemekten sonra. Geçmiş olsun!"
        },
        {
          "prompt": "Teşekkür edin ve kibarca veda edin",
          "options": [
            "Çok teşekkürler, doktor bey. Görüşmek üzere!",
            "Yardımınız için çok teşekkür ederim. Hoşça kal!"
          ]
        }
      ]
    },
    "9": {
      "title": "Yol Tarifi İsteme",
      "turns": [
        {
          "text": "Affedersiniz! Tren istasyonuna nasıl gidebilirim?"
        },
        {
          "prompt": "Yolcuya düz gitmesini ve ardından sola dönmesini söyleyin",
          "options": [
            "Düz gidin ve ardından bir sonraki sokaktan sola dönün.",
            "Önce düz gidin, sonra sola dönün."
          ]
        },
        {
          "text": "İstasyon buradan uzak mı?"
        },
        {
          "prompt": "Uzak olmadığını, yürüyerek sadece beş dakika olduğunu söyleyin",
          "options": [
            "Hayır, oldukça yakın. Yürüyerek sadece beş dakika.",
            "Uzak değil, yaklaşık 500 metre."
          ]
        },
        {
          "text": "Otobüse de binebilir miyim?"
        },
        {
          "prompt": "Evet deyin, 100 numaralı otobüs hattı doğrudan oraya gidiyor",
          "options": [
            "Evet, 100 numaralı otobüs hattı doğrudan oraya gidiyor.",
            "Evet, 100 numaralı otobüse binin."
          ]
        },
        {
          "text": "Harika! Yardımlarınız için çok teşekkürler!"
        },
        {
          "prompt": "Rica ederim deyin ve iyi yolculuklar dileyin",
          "options": [
            "Rica ederim! İyi yolculuklar!",
            "Rica ederim! İyi günler!"
          ]
        }
      ]
    },
    "10": {
      "title": "Boş Zaman Planı Yapma",
      "turns": [
        {
          "text": "Merhaba! Boş zamanlarında en çok ne yapmayı seversin?"
        },
        {
          "prompt": "Futbol oynamayı ve müzik dinlemeyi çok sevdiğinizi söyleyin",
          "options": [
            "Futbol oynamayı ve müzik dinlemeyi çok severim.",
            "Boş zamanlarımda futbol oynarım veya kitap okurum."
          ]
        },
        {
          "text": "Futbol harika! Cumartesi günü oynuyoruz. Bize katılmak ister misin?"
        },
        {
          "prompt": "Fikri beğendiğinizi söyleyin ve saat kaçta oynamaya başlayacağınızı sorun",
          "options": [
            "Evet, çok isterim! Saat kaçta buluşuyorsunuz?",
            "Bu çok eğlenceli! Cumartesi günü ne zaman oynuyorsunuz?"
          ]
        },
        {
          "text": "Cumartesi günü saat 15:00'te parkta oynuyoruz. Sadece spor ayakkabılarını getir."
        },
        {
          "prompt": "Belirtilen saatte geleceğinizi onaylayın ve kesinlikle geleceğinizi söyleyin",
          "options": [
            "Tamamdır! Cumartesi saat 15:00'te geliyorum. Görüşmek üzere!",
            "Harika, Cumartesi saat üçte orada olurum."
          ]
        }
      ]
    },
    "11": {
      "title": "Meslekler Hakkında Konuşmak",
      "turns": [
        {
          "text": "Merhaba! Mesleğiniz nedir?"
        },
        {
          "prompt": "Mesleğinizi (örn. bilgisayar mühendisi) ve çalıştığınız şirketi belirtin",
          "options": [
            "Mesleğim mühendislik ve bir bilgisayar şirketinde çalışıyorum.",
            "Bir süpermarkette tezgahtar olarak çalışıyorum."
          ]
        },
        {
          "text": "Bu ilginç! Haftada kaç saat çalışıyorsunuz?"
        },
        {
          "prompt": "Haftada 40 saat çalıştığınızı, işin eğlenceli ama yorucu olduğunu belirtin",
          "options": [
            "Haftada 40 saat çalışıyorum. İş keyifli ama stresli.",
            "Kırk saat çalışıyorum. Mesleğimi çok seviyorum."
          ]
        },
        {
          "text": "Anlıyorum. Peki hayalinizdeki iş nedir?"
        },
        {
          "prompt": "Hayalinizdeki işin yönetici veya yazılım tasarımcısı olmak ve çok para kazanmak olduğunu söyleyin",
          "options": [
            "Hayalimdeki meslek yazılım geliştiricisi olmak. Esnek çalışmak istiyorum.",
            "Başarılı bir aşçı olmak ve kendi restoranımı açmak isterim."
          ]
        }
      ]
    },
    "12": {
      "title": "Restoranda",
      "turns": [
        {
          "text": "İyi akşamlar! Masa rezerve etmiş miydiniz?"
        },
        {
          "prompt": "Evet deyin, 'Ahmad' adına iki kişilik masa ayırttığınızı belirtin",
          "options": [
            "İyi akşamlar! Evet, Ahmad adına iki kişilik bir masa rezerve etmiştik.",
            "Evet, iki kişilik bir masa. İsim Ahmad."
          ]
        },
        {
          "text": "Elbette Bay Ahmad. Buyurun masanız. Ne içmek istersiniz?"
        },
        {
          "prompt": "Bir şişe maden suyu ve elma suyu isteyin",
          "options": [
            "Bir şişe maden suyu ve elma suyu rica ediyorum, lütfen.",
            "Lütfen bana bir su ve bir meyve suyu getirin."
          ]
        },
        {
          "text": "Memnuniyetle. Peki ne yemek istersiniz?"
        },
        {
          "prompt": "Başlangıç olarak domates çorbası, ana yemek olarak şinitzel sipariş edin",
          "options": [
            "Başlangıç olarak domates çorbası ve ana yemek olarak şinitzel.",
            "Bir çorba ve bir şinitzel alıyorum, lütfen."
          ]
        },
        {
          "text": "Hemen geliyor. (Sonra...) Yemek lezzetli miydi? Ödemek ister misiniz?"
        },
        {
          "prompt": "Yemeği övün ve hesabı isteyin",
          "options": [
            "Evet, yemek harikaydı! Hesap lütfen!",
            "Çok lezzetliydi. Hesap lütfen."
          ]
        },
        {
          "text": "Toplam 27 Euro 80 Cent yapıyor."
        },
        {
          "prompt": "Ona 30 Euro verin ve üstünün kalmasını söyleyin (bahşiş)",
          "options": [
            "Buyurun 30 Euro. Üstü kalsın!",
            "Üstü kalsın. 30 Euro yapın."
          ]
        }
      ]
    }
  },
  "ro": {
    "1": {
      "title": "Introducere de sine",
      "turns": [
        {
          "text": "Buna ziua! Eu sunt Anna. Cum te numești?"
        },
        {
          "prompt": "Prezintă-te și spune-i partenerului numele tău",
          "options": [
            "Salut Anna! Numele meu este Ahmad.",
            "Bună ziua! Numele meu este Ahmad."
          ]
        },
        {
          "text": "Încântat să te cunosc, Ahmad! De unde eşti?"
        },
        {
          "prompt": "Spuneți partenerului țara dvs. de origine",
          "options": [
            "Vin din Siria.",
            "Vin din Egipt."
          ]
        },
        {
          "text": "Ah, frumos! Și unde locuiești acum?"
        },
        {
          "prompt": "Spune-i partenerului orașul tău actual",
          "options": [
            "Locuiesc la Berlin acum.",
            "Locuiesc în Munchen acum."
          ]
        },
        {
          "text": "Berlinul este grozav! Ce limbi vorbiți?"
        },
        {
          "prompt": "Menționați limbile pe care le vorbiți",
          "options": [
            "Vorbesc arabă și puțin germană.",
            "Limba mea maternă este arabă. Acum invat germana."
          ]
        },
        {
          "text": "Foarte bun! La revedere, Ahmad!"
        },
        {
          "prompt": "Spune-i la revedere partenerului într-un mod adecvat",
          "options": [
            "La revedere, Anna! Pa!",
            "Pa! Pe curând!"
          ]
        }
      ]
    },
    "2": {
      "title": "Întâlnire într-o cafenea",
      "turns": [
        {
          "text": "Buna ziua! Cum te simţi azi?"
        },
        {
          "prompt": "Răspundeți că vă descurcați bine și întreabă-l cum se descurcă partenerul",
          "options": [
            "Buna ziua! Mă descurc foarte bine, mulțumesc. Și tu?",
            "Multumesc, bine! Si ce mai faci?"
          ]
        },
        {
          "text": "Si eu ma descurc bine, multumesc. Ți-ar plăcea să bei cafea sau ceai?"
        },
        {
          "prompt": "Comandă o ceașcă de cafea cu lapte, te rog",
          "options": [
            "As dori o cafea cu lapte, va rog.",
            "O cafea cu lapte pentru mine, te rog."
          ]
        },
        {
          "text": "Sigur! Voi lua un ceai. Care este numărul tău de mobil mai târziu?"
        },
        {
          "prompt": "Dați numărul de telefon partenerului (0176...)",
          "options": [
            "Numărul meu este zero-unu-șapte-șase-doi-trei-patru.",
            "Iată numărul meu: zero-unu-șapte-șase-cinci-șase-șapte."
          ]
        },
        {
          "text": "Mulțumesc, am notat-o! Ne vedem data viitoare!"
        },
        {
          "prompt": "Spune-i la revedere prietenului tău și urează-i o zi bună",
          "options": [
            "Pa! O zi plăcută!",
            "La revedere! Pe curând!"
          ]
        }
      ]
    },
    "3": {
      "title": "La Târgul de vechituri",
      "turns": [
        {
          "text": "Bună ziua! Cauți ceva anume?"
        },
        {
          "prompt": "Spuneți că căutați o cameră sau o carte și întrebați despre preț",
          "options": [
            "Bună ziua! Caut o carte. Cât costă această carte?",
            "Buna ziua! Cât costă această cameră aici?"
          ]
        },
        {
          "text": "Cartea costă 5 euro. Camera costa 45 de euro. E ieftin!"
        },
        {
          "prompt": "Spuneți că prețul este prea mare (scump) și încercați să negociați un preț mai mic",
          "options": [
            "Cartea este ieftină. Voi lua cartea.",
            "Oh, 45 de euro e prea scump! E ok 35 de euro?"
          ]
        },
        {
          "text": "Ei bine, 35 de euro pentru cameră este bine. O vei lua?"
        },
        {
          "prompt": "De acord, spuneți că o veți lua și întrebați unde să plătiți",
          "options": [
            "Da, o voi lua. Mulțumesc foarte mult!",
            "Super, iau camera cu 35 de euro."
          ]
        },
        {
          "text": "Poftim. Asta face 35 de euro."
        },
        {
          "prompt": "Plătește vânzătorul și mulțumește-i",
          "options": [
            "Aici sunt 35 de euro. Mulțumesc foarte mult!",
            "Poftim, 35 de euro. O zi plăcută!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens și Numiri",
      "turns": [
        {
          "text": "Buna ziua! Când te trezești de obicei?"
        },
        {
          "prompt": "Spune-le că de obicei te trezești la 7:00 și iei micul dejun la 7:30",
          "options": [
            "Mă trezesc la ora șapte și iau micul dejun la șapte și jumătate.",
            "In mod normal ma trezesc la ora 7, apoi iau micul dejun."
          ]
        },
        {
          "text": "Și când începe cursul tău de germană?"
        },
        {
          "prompt": "Spune-le că lecția începe la ora nouă și se termină la unu și jumătate",
          "options": [
            "Cursul începe la ora nouă și se termină la unu și jumătate.",
            "Începe la ora 9 și durează până la 13:30."
          ]
        },
        {
          "text": "Oh, acesta este un curs lung! Ai timp vineri seara? Mergem la cinema?"
        },
        {
          "prompt": "Scuze că nu ai timp din cauza unei alte întâlniri și întreabă de sâmbătă",
          "options": [
            "Îmi pare rău, nu am timp vineri. Sâmbăta funcționează?",
            "Din pacate am o programare vineri. Ce zici de sambata?"
          ]
        },
        {
          "text": "Da, sâmbătă la 18:00 se potrivește bine! Ne vedem sâmbătă!"
        },
        {
          "prompt": "Acceptați întâlnirea și luați-vă la revedere",
          "options": [
            "Mare! Ne vedem sâmbătă la 18:00. Pa!",
            "Afacere! Ne vedem sâmbătă!"
          ]
        }
      ]
    },
    "5": {
      "title": "Cumpărături alimentare",
      "turns": [
        {
          "text": "Bună ziua! Cu ce ​​vă pot ajuta?"
        },
        {
          "prompt": "Spuneți că doriți să cumpărați roșii și brânză și întrebați dacă sunt proaspete",
          "options": [
            "Bună ziua! Am nevoie de roșii și brânză. Sunt proaspete?",
            "Buna ziua! As dori sa cumpar rosii si branza."
          ]
        },
        {
          "text": "Da, totul este foarte proaspăt! Câte roșii ai vrea?"
        },
        {
          "prompt": "Solicitați un kilogram de roșii",
          "options": [
            "Aș dori un kilogram de roșii, vă rog.",
            "Un kilogram de roșii, vă rog."
          ]
        },
        {
          "text": "Sigur. Și câtă brânză ai vrea?"
        },
        {
          "prompt": "Solicitați 300 de grame de brânză elvețiană",
          "options": [
            "Vă rog să-mi dați 300 de grame de brânză.",
            "Am nevoie de trei sute de grame de brânză, te rog."
          ]
        },
        {
          "text": "Poftim. Altceva?"
        },
        {
          "prompt": "Răspunde negativ și cere costul total",
          "options": [
            "Nu, mulțumesc. Asta este tot. Cât costă?",
            "Asta e tot, mulțumesc. Cât face?"
          ]
        },
        {
          "text": "Asta înseamnă 9 euro 40 în total, te rog."
        },
        {
          "prompt": "Dă-le o bancnotă de 10 euro și spune-le să păstreze schimbul",
          "options": [
            "Aici sunt 10 euro. Păstrați restul!",
            "Poftim. Zece euro. Păstrați restul."
          ]
        }
      ]
    },
    "6": {
      "title": "Vorbind despre familie",
      "turns": [
        {
          "text": "Buna ziua! Locuiești singur sau cu familia ta?"
        },
        {
          "prompt": "Spune că ești căsătorit și trăiești cu familia și copiii tăi",
          "options": [
            "Sunt căsătorit și locuiesc cu familia mea.",
            "Locuiesc împreună cu soția și cei doi copii ai mei."
          ]
        },
        {
          "text": "Ah, ce frumos! Câți ani au copiii tăi?"
        },
        {
          "prompt": "Spune-le că fiica ta are 8 ani și fiul tău are 5 ani",
          "options": [
            "Fiica mea are opt ani, iar fiul meu are cinci ani.",
            "Fiica are 8 ani, iar fiul 5."
          ]
        },
        {
          "text": "Și părinții tăi? Locuiesc și aici, în Germania?"
        },
        {
          "prompt": "Spune-le că locuiesc în țara ta de origine, dar vorbești des la telefon cu ei",
          "options": [
            "Nu, părinții mei locuiesc în țara mea natală. Dar vorbim des la telefon.",
            "Ei trăiesc în Egipt/Siria. Vorbesc la telefon cu ei în fiecare zi."
          ]
        },
        {
          "text": "Asta e bine! Mâine este ziua surorii mele. Sarbatorim!"
        },
        {
          "prompt": "O felicită pe sora lui și îi urează la mulți ani",
          "options": [
            "La multi ani surorii tale!",
            "Toate cele bune de ziua ei!"
          ]
        }
      ]
    },
    "7": {
      "title": "Închirierea unui apartament",
      "turns": [
        {
          "text": "Bună ziua! Sunati pentru apartamentul cu 3 camere?"
        },
        {
          "prompt": "Confirmați apelul și întrebați despre totalul de metri pătrați ai apartamentului",
          "options": [
            "Da, exact. Cât de mare este de fapt apartamentul?",
            "Bună ziua! Da, ma intereseaza apartamentul. Cati metri patrati are?"
          ]
        },
        {
          "text": "Apartamentul are 85 mp si are si balcon."
        },
        {
          "prompt": "Întrebați despre chiria rece și costul utilităților și al energiei electrice",
          "options": [
            "Cât de mare este chiria la rece? Si cat sunt utilitatile?",
            "Cât costă chiria caldă?"
          ]
        },
        {
          "text": "Chiria la rece este de 750 de euro. Utilitatile sunt 180 euro."
        },
        {
          "prompt": "Întrebați la ce etaj se află apartamentul și dacă clădirea are lift",
          "options": [
            "La ce etaj este apartamentul? Există lift?",
            "Apartamentul este la parter sau la primul etaj?"
          ]
        },
        {
          "text": "Apartamentul este la etajul trei. Dar, din păcate, nu există lift."
        },
        {
          "prompt": "Spuneți că găsiți apartamentul potrivit și întrebați dacă îl vizionați în curând",
          "options": [
            "E în regulă pentru mine. Pot vedea apartamentul?",
            "Când este posibilă o vizionare? Aș vrea să-l văd."
          ]
        }
      ]
    },
    "8": {
      "title": "La Doctor",
      "turns": [
        {
          "text": "Bună ziua! Ce este în neregulă cu tine?"
        },
        {
          "prompt": "Explicați medicului că vă simțiți rău, aveți o durere de cap severă și febră",
          "options": [
            "Bună ziua, doctore. ma simt foarte rau. Am o durere de cap și o febră.",
            "Sunt bolnav. Mă doare capul și am febră."
          ]
        },
        {
          "text": "Înțeleg. Aveți și dureri în gât sau tuse?"
        },
        {
          "prompt": "Raspunde ca da, te doare si gatul si nu poti dormi bine",
          "options": [
            "Da, mă doare și gâtul și nu pot să dorm.",
            "Da, mă doare gâtul de ieri."
          ]
        },
        {
          "text": "Ai o răceală urâtă. Îți voi prescrie medicamente."
        },
        {
          "prompt": "Întrebați medicul de câte ori pe zi trebuie să luați acest medicament",
          "options": [
            "De câte ori pe zi trebuie să iau medicamentul?",
            "Când ar trebui să iau medicamentul?"
          ]
        },
        {
          "text": "De două ori pe zi, dimineața și seara, după masă. Fă-te bine cât mai curând!"
        },
        {
          "prompt": "Mulțumește-i și spune-i la revedere politicos",
          "options": [
            "Mulțumesc mult, doctore. La revedere!",
            "Vă mulțumesc foarte mult pentru ajutor. Pa!"
          ]
        }
      ]
    },
    "9": {
      "title": "Cererea de indicații",
      "turns": [
        {
          "text": "Scuzați-mă! Cum ajung la stația de tren?"
        },
        {
          "prompt": "Spune-i călătorul să meargă drept înainte și apoi să vireze la stânga",
          "options": [
            "Mergeți drept înainte și apoi luați următoarea stradă la stânga.",
            "Mai întâi mergeți drept înainte, apoi faceți stânga."
          ]
        },
        {
          "text": "Gara este departe de aici?"
        },
        {
          "prompt": "Spune-i că nu e departe, doar o plimbare de cinci minute",
          "options": [
            "Nu, este foarte aproape. Doar cinci minute de mers pe jos.",
            "Nu e departe, vreo 500 de metri."
          ]
        },
        {
          "text": "Pot să iau și autobuzul?"
        },
        {
          "prompt": "Spune-i că da, autobuzul numărul 100 merge direct acolo",
          "options": [
            "Da, linia de autobuz 100 merge direct acolo.",
            "Da, luați autobuzul numărul 100."
          ]
        },
        {
          "text": "Mare! Vă mulțumesc foarte mult pentru ajutor!"
        },
        {
          "prompt": "Răspundeți cu „Bine ați venit” și urați-i o călătorie bună",
          "options": [
            "Cu plăcere! O călătorie bună!",
            "Cu plăcere! O zi plăcută!"
          ]
        }
      ]
    },
    "10": {
      "title": "Efectuarea de planuri de timp liber",
      "turns": [
        {
          "text": "Buna ziua! Ce iti place sa faci cel mai mult in timpul liber?"
        },
        {
          "prompt": "Spune-i că-ți place să joci fotbal și să asculți muzică",
          "options": [
            "Îmi place foarte mult să joc fotbal și să ascult muzică.",
            "În timpul liber joc fotbal sau citesc o carte."
          ]
        },
        {
          "text": "Fotbalul este grozav! Jucăm sâmbătă. Vrei să vii?"
        },
        {
          "prompt": "Exprimă-ți interesul și întreabă la ce oră vei începe să joci",
          "options": [
            "Da, cu plăcere! La ce oră vă întâlniți?",
            "Sună distractiv! Când joci sâmbătă?"
          ]
        },
        {
          "text": "Ne jucăm sâmbătă la ora 15, în parc. Aduceți doar pantofi sport."
        },
        {
          "prompt": "Confirmați-vă prezența la ora programată și spuneți că veți veni cu siguranță",
          "options": [
            "Bine! Vin sambata la 15:00. Ne vedem atunci!",
            "Super, voi fi acolo sâmbătă la ora trei."
          ]
        }
      ]
    },
    "11": {
      "title": "Vorbind despre locuri de muncă",
      "turns": [
        {
          "text": "Buna ziua! Care este profesia ta?"
        },
        {
          "prompt": "Spune-i profesia ta (de exemplu, inginer informatic) și compania la care lucrezi",
          "options": [
            "Sunt inginer de profesie și lucrez la o companie de calculatoare.",
            "Lucrez ca vânzător într-un supermarket."
          ]
        },
        {
          "text": "E interesant! Câte ore lucrezi pe săptămână?"
        },
        {
          "prompt": "Să presupunem că lucrezi 40 de ore pe săptămână și că munca ta este distractivă, dar obositoare",
          "options": [
            "Lucrez 40 de ore pe săptămână. Munca este distractivă, dar este stresantă.",
            "Lucrez patruzeci de ore. Îmi place foarte mult meseria mea."
          ]
        },
        {
          "text": "Înțeleg. Și care este jobul tău de vis?"
        },
        {
          "prompt": "Spune că jobul tău de vis este să lucrezi ca manager sau dezvoltator de software și să câștigi mulți bani",
          "options": [
            "Jobul meu de vis este dezvoltator de software. Aș dori să lucrez flexibil.",
            "Mi-ar plăcea să fiu un bucătar de succes și să am propriul meu restaurant."
          ]
        }
      ]
    },
    "12": {
      "title": "În Restaurant",
      "turns": [
        {
          "text": "Bună seara! Ai rezervat o masă?"
        },
        {
          "prompt": "Răspundeți da, ați rezervat o masă pentru două persoane sub numele „Ahmad”",
          "options": [
            "Bună seara! Da, am rezervat o masă pentru doi sub numele Ahmad.",
            "Da, o masă pentru doi. Numele este Ahmad."
          ]
        },
        {
          "text": "Cu siguranță, domnule Ahmad. Aici este masa ta. Ce ți-ar place să bei?"
        },
        {
          "prompt": "Comandați o sticlă de apă minerală și un suc de mere",
          "options": [
            "As dori o sticla de apa minerala si un suc de mere, va rog.",
            "Vă rog să-mi aduceți o apă și un suc."
          ]
        },
        {
          "text": "Cu plăcere. Și ce ai vrea să mănânci?"
        },
        {
          "prompt": "Comandă supă de roșii ca aperitiv și șnițel ca fel principal",
          "options": [
            "Ca aperitiv supa de rosii si ca fel principal snitelul.",
            "O să iau o supă și un șnitel, te rog."
          ]
        },
        {
          "text": "Vin imediat. (Mai târziu...) A fost mâncarea delicioasă? Doriți să plătiți?"
        },
        {
          "prompt": "Lăudați mâncarea și cereți nota",
          "options": [
            "Da, mâncarea a fost fantastică! Factura, vă rog!",
            "A fost foarte delicios. Factura, vă rog."
          ]
        },
        {
          "text": "Asta înseamnă 27 de euro 80 de cenți în total."
        },
        {
          "prompt": "Dă-i 30 de euro și spune-i să păstreze schimbul (bacsis)",
          "options": [
            "Aici sunt 30 de euro. Păstrați restul!",
            "Păstrați restul. Fă-o 30 de euro."
          ]
        }
      ]
    }
  },
  "bs": {
    "1": {
      "title": "Self Introduction",
      "turns": [
        {
          "text": "Zdravo! Ja sam Anna. kako se zoveš?"
        },
        {
          "prompt": "Predstavite se i recite partneru svoje ime",
          "options": [
            "Zdravo Anna! Moje ime je Ahmad.",
            "Dobar dan! Moje ime je Ahmad."
          ]
        },
        {
          "text": "Drago mi je, Ahmade! odakle dolaziš?"
        },
        {
          "prompt": "Recite partneru svoju zemlju porijekla",
          "options": [
            "Dolazim iz Sirije.",
            "Dolazim iz Egipta."
          ]
        },
        {
          "text": "Ah, lepo! I gdje sada živiš?"
        },
        {
          "prompt": "Recite partneru vaš trenutni grad",
          "options": [
            "Sada živim u Berlinu.",
            "Sada živim u Minhenu."
          ]
        },
        {
          "text": "Berlin je odličan! Koje jezike govorite?"
        },
        {
          "prompt": "Navedite jezike koje govorite",
          "options": [
            "Govorim arapski i malo njemački.",
            "Moj maternji jezik je arapski. Sada učim njemački."
          ]
        },
        {
          "text": "Vrlo dobro! Zbogom, Ahmade!"
        },
        {
          "prompt": "Recite zbogom partneru na odgovarajući način",
          "options": [
            "Zbogom, Anna! ćao!",
            "ćao! Vidimo se uskoro!"
          ]
        }
      ]
    },
    "2": {
      "title": "Sastanak u kafiću",
      "turns": [
        {
          "text": "Zdravo! kako si danas?"
        },
        {
          "prompt": "Odgovorite da ste dobro i pitajte kako je partner",
          "options": [
            "Zdravo! Dobro mi ide, hvala. A ti?",
            "Hvala, dobro! A kako si ti?"
          ]
        },
        {
          "text": "I ja sam dobro, hvala. Želite li popiti kafu ili čaj?"
        },
        {
          "prompt": "Naručite šolju kafe sa mlekom, molim",
          "options": [
            "Ja bih kafu sa mlekom, molim.",
            "Kafu sa mlekom za mene, molim."
          ]
        },
        {
          "text": "Naravno! Uzeću čaj. Koji je tvoj broj mobilnog za kasnije?"
        },
        {
          "prompt": "Dajte svoj broj telefona partneru (0176...)",
          "options": [
            "Moj broj je nula-jedan-sedam-šest-dva-tri-četiri.",
            "Evo mog broja: nula-jedan-sedam-šest-pet-šest-sedam."
          ]
        },
        {
          "text": "Hvala, zapisao sam! Vidimo se sljedeći put!"
        },
        {
          "prompt": "Pozdravite se sa svojim prijateljem i poželite im dobar dan",
          "options": [
            "ćao! ugodan dan!",
            "Zbogom! Vidimo se uskoro!"
          ]
        }
      ]
    },
    "3": {
      "title": "Na buvljoj pijaci",
      "turns": [
        {
          "text": "Dobar dan! Tražite li nešto konkretno?"
        },
        {
          "prompt": "Recimo da tražite kameru ili knjigu i pitajte za cijenu",
          "options": [
            "Dobar dan! Tražim knjigu. Koliko košta ova knjiga?",
            "Zdravo! Koliko je ova kamera ovdje?"
          ]
        },
        {
          "text": "Knjiga košta 5 evra. Kamera košta 45 eura. To je jeftino!"
        },
        {
          "prompt": "Recite da je cijena previsoka (skupa) i pokušajte dogovoriti nižu cijenu",
          "options": [
            "Knjiga je jeftina. Ja ću uzeti knjigu.",
            "Oh, 45 eura je preskupo! Da li je 35 evra u redu?"
          ]
        },
        {
          "text": "Pa, dobro, 35 eura za kameru je u redu. Hoćeš li ga uzeti?"
        },
        {
          "prompt": "Složi se, reci da ćeš uzeti i pitaj gdje da platiš",
          "options": [
            "Da, uzeću. Hvala vam puno!",
            "Odlično, uzeću kameru za 35 eura."
          ]
        },
        {
          "text": "Izvolite. To je 35 evra."
        },
        {
          "prompt": "Platite prodavcu i zahvalite im se",
          "options": [
            "Evo 35 eura. Hvala vam puno!",
            "Izvolite, 35 eura. ugodan dan!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens and Appointings",
      "turns": [
        {
          "text": "Zdravo! Kada obično ustajete?"
        },
        {
          "prompt": "Recite im da se obično budite u 7 ujutro i doručkujete u 7:30",
          "options": [
            "Ustajem u sedam sati i doručkujem u pola osam.",
            "Inače ustajem u 7 sati, pa doručkujem."
          ]
        },
        {
          "text": "A kada počinje vaš kurs njemačkog?"
        },
        {
          "prompt": "Recite im da lekcija počinje u devet sati i završava se u pola jedan",
          "options": [
            "Kurs počinje u devet sati i završava se u pola dva.",
            "Počinje u 9 sati i traje do 13:30."
          ]
        },
        {
          "text": "Oh, to je dug kurs! Imate li vremena u petak uveče? Hoćemo li u bioskop?"
        },
        {
          "prompt": "Izvinite se što nemate vremena zbog drugog termina i pitajte za subotu",
          "options": [
            "Žao mi je, nemam vremena u petak. Radi li subota?",
            "Nažalost, imam termin u petak. Šta kažeš na subotu?"
          ]
        },
        {
          "text": "Da, subota u 18 sati dobro pristaje! Vidimo se u subotu!"
        },
        {
          "prompt": "Dogovorite se na termin i recite zbogom",
          "options": [
            "Odlično! Vidimo se u subotu u 18h. ćao!",
            "Dogovoreno! Vidimo se u subotu!"
          ]
        }
      ]
    },
    "5": {
      "title": "Kupovina namirnica",
      "turns": [
        {
          "text": "Dobar dan! Šta mogu učiniti za vas?"
        },
        {
          "prompt": "Recite da želite kupiti paradajz i sir i pitajte da li su svježi",
          "options": [
            "Dobar dan! Trebaju mi ​​paradajz i sir. Jesu li svježe?",
            "Zdravo! Hteo bih da kupim paradajz i sir."
          ]
        },
        {
          "text": "Da, sve je veoma sveže! Koliko paradajza želite?"
        },
        {
          "prompt": "Zatražite jedan kilogram paradajza",
          "options": [
            "Ja bih jedan kilogram paradajza, molim.",
            "Jedan kilogram paradajza, molim."
          ]
        },
        {
          "text": "Naravno. A koliko sira biste željeli?"
        },
        {
          "prompt": "Zatražite 300 grama švajcarskog sira",
          "options": [
            "Molim te, daj mi 300 grama sira.",
            "Treba mi trista grama sira, molim."
          ]
        },
        {
          "text": "Izvolite. Još nešto?"
        },
        {
          "prompt": "Odgovorite negativno i zatražite ukupni trošak",
          "options": [
            "Ne, hvala. To je sve. Koliko to košta?",
            "To je sve, hvala. Koliko zarađuje?"
          ]
        },
        {
          "text": "To je ukupno 9 eura 40, molim."
        },
        {
          "prompt": "Dajte im novčanicu od 10 eura i recite im da zadrže kusur",
          "options": [
            "Evo 10 eura. Zadrži kusur!",
            "Izvolite. Deset eura. Zadrži kusur."
          ]
        }
      ]
    },
    "6": {
      "title": "Talking About Family",
      "turns": [
        {
          "text": "Zdravo! Da li živite sami ili sa porodicom?"
        },
        {
          "prompt": "Recite da ste oženjeni i živite sa svojom porodicom i djecom",
          "options": [
            "Oženjen sam i živim sa svojom porodicom.",
            "Živim zajedno sa suprugom i dvoje djece."
          ]
        },
        {
          "text": "Ah, kako je lepo! Koliko godina imaju vaša djeca?"
        },
        {
          "prompt": "Recite im da vaša ćerka ima 8 godina, a vaš sin 5 godina",
          "options": [
            "Moja ćerka ima osam, a sin pet godina.",
            "Ćerka ima 8 godina, a sin 5 godina."
          ]
        },
        {
          "text": "A tvoji roditelji? Žive li i oni ovdje u Njemačkoj?"
        },
        {
          "prompt": "Recite im da žive u vašoj zemlji, ali često razgovarate telefonom s njima",
          "options": [
            "Ne, moji roditelji žive u mojoj domovini. Ali često razgovaramo telefonom.",
            "Žive u Egiptu/Siriji. Svaki dan razgovaram telefonom s njima."
          ]
        },
        {
          "text": "To je dobro! Sutra je mojoj sestri rođendan. Slavimo!"
        },
        {
          "prompt": "Čestitajte njegovoj sestri i poželite joj srećan rođendan",
          "options": [
            "Sretan rođendan tvojoj sestri!",
            "Sve najbolje za njen rodjendan!"
          ]
        }
      ]
    },
    "7": {
      "title": "Iznajmljivanje stana",
      "turns": [
        {
          "text": "Dobar dan! Zovete u vezi 3-sobnog stana?"
        },
        {
          "prompt": "Potvrdite poziv i raspitajte se o ukupnim kvadratima stana",
          "options": [
            "Da, tačno. Koliko je zapravo stan velik?",
            "Dobar dan! Da, zainteresovan sam za stan. Koliko je kvadratnih metara?"
          ]
        },
        {
          "text": "Stan je površine 85 kvadratnih metara i također ima balkon."
        },
        {
          "prompt": "Raspitajte se o najamnini za hladnoću i troškovima komunalija i struje",
          "options": [
            "Koliko je visoka renta? A koliko su komunalije?",
            "Koliko je topla renta?"
          ]
        },
        {
          "text": "Hladna renta je 750 eura. Režije su 180 eura."
        },
        {
          "prompt": "Pitajte na kom je spratu stan i da li zgrada ima lift",
          "options": [
            "Na kom spratu se nalazi stan? Ima li lift?",
            "Da li je stan u prizemlju ili na prvom spratu?"
          ]
        },
        {
          "text": "Stan se nalazi na trećem spratu. Ali nažalost, lifta nema."
        },
        {
          "prompt": "Recite da smatrate da je stan prikladan i pitajte da li ga uskoro pogledate",
          "options": [
            "To je u redu za mene. Mogu li pogledati stan?",
            "Kada je moguće razgledanje? Voleo bih to da vidim."
          ]
        }
      ]
    },
    "8": {
      "title": "Kod doktora",
      "turns": [
        {
          "text": "Dobar dan! šta nije u redu s tobom?"
        },
        {
          "prompt": "Objasnite lekaru da se osećate mučno, da imate jaku glavobolju i temperaturu",
          "options": [
            "Dobar dan, doktore. Osećam se veoma loše. Imam glavobolju i temperaturu.",
            "Ja sam bolestan. Boli me glava i imam temperaturu."
          ]
        },
        {
          "text": "Vidim. Imate li i grlobolju ili kašalj?"
        },
        {
          "prompt": "Odgovorite da, boli vas i grlo i ne možete dobro spavati",
          "options": [
            "Da, i mene boli grlo i ne mogu da spavam.",
            "Da, od juče me boli grlo."
          ]
        },
        {
          "text": "Imaš jaku prehladu. Prepisaću ti lekove."
        },
        {
          "prompt": "Pitajte ljekara koliko puta dnevno trebate uzimati ovaj lijek",
          "options": [
            "Koliko puta dnevno treba da uzimam lek?",
            "Kada treba da uzmem lek?"
          ]
        },
        {
          "text": "Dva puta dnevno, ujutro i uveče nakon jela. Ozdravi uskoro!"
        },
        {
          "prompt": "Zahvalite mu se i ljubazno se pozdravite",
          "options": [
            "Hvala vam puno doktore. Zbogom!",
            "Hvala vam puno na pomoći. ćao!"
          ]
        }
      ]
    },
    "9": {
      "title": "Pitam za upute",
      "turns": [
        {
          "text": "Izvinite me! Kako da dođem do željezničke stanice?"
        },
        {
          "prompt": "Recite putniku da ide pravo, a zatim skrene lijevo",
          "options": [
            "Idite pravo i onda skrenite sljedećom ulicom lijevo.",
            "Prvo idite pravo, a zatim skrenite lijevo."
          ]
        },
        {
          "text": "Je li željeznička stanica daleko odavde?"
        },
        {
          "prompt": "Reci mu da nije daleko, samo pet minuta hoda",
          "options": [
            "Ne, vrlo je blizu. Samo pet minuta hoda.",
            "Nije daleko, oko 500 metara."
          ]
        },
        {
          "text": "Mogu li i ja ići autobusom?"
        },
        {
          "prompt": "Reci mu da, autobus broj 100 ide direktno tamo",
          "options": [
            "Da, autobuska linija 100 ide direktno tamo.",
            "Da, idite autobusom broj 100."
          ]
        },
        {
          "text": "Odlično! Hvala vam puno na pomoći!"
        },
        {
          "prompt": "Odgovorite sa 'Nema na čemu' i poželite mu sretan put",
          "options": [
            "Nema na čemu! Sretan put!",
            "Nema na čemu! ugodan dan!"
          ]
        }
      ]
    },
    "10": {
      "title": "Pravljenje planova slobodnog vremena",
      "turns": [
        {
          "text": "Zdravo! Šta najviše voliš da radiš u slobodno vrijeme?"
        },
        {
          "prompt": "Recite mu da volite da igrate fudbal i slušate muziku",
          "options": [
            "Jako volim da igram fudbal i slušam muziku.",
            "U slobodno vrijeme igram fudbal ili čitam knjigu."
          ]
        },
        {
          "text": "Fudbal je odličan! Igramo u subotu. Želiš li s nama?"
        },
        {
          "prompt": "Izrazite interesovanje i pitajte u koje vreme ćete početi da igrate",
          "options": [
            "Da, rado! Kada se sastajete?",
            "To zvuči zabavno! Kada igrate u subotu?"
          ]
        },
        {
          "text": "Igramo u subotu u 15h u parku. Samo ponesite sportsku obuću."
        },
        {
          "prompt": "Potvrdite svoje prisustvo u zakazano vrijeme i recite da ćete sigurno doći",
          "options": [
            "U redu! Dolazim u subotu u 15h. Vidimo se onda!",
            "Odlično, biću tamo u subotu u tri sata."
          ]
        }
      ]
    },
    "11": {
      "title": "Pričamo o poslovima",
      "turns": [
        {
          "text": "Zdravo! Koja je tvoja profesija?"
        },
        {
          "prompt": "Recite mu svoju profesiju (npr. kompjuterski inženjer) i kompaniju u kojoj radite",
          "options": [
            "Po struci sam inženjer i radim u kompjuterskoj kompaniji.",
            "Radim kao prodavac u supermarketu."
          ]
        },
        {
          "text": "To je zanimljivo! Koliko sati sedmično radite?"
        },
        {
          "prompt": "Recimo da radite 40 sati sedmično i da vam je posao zabavan, ali naporan",
          "options": [
            "Radim 40 sati sedmično. Posao je zabavan, ali je stresan.",
            "Radim četrdeset sati. Jako volim svoj posao."
          ]
        },
        {
          "text": "Vidim. A koji je tvoj posao iz snova?"
        },
        {
          "prompt": "Recimo da je vaš posao iz snova raditi kao menadžer ili programer softvera i zaraditi mnogo novca",
          "options": [
            "Moj posao iz snova je programer softvera. Voleo bih da radim fleksibilno.",
            "Voleo bih da budem uspešan kuvar i da imam svoj restoran."
          ]
        }
      ]
    },
    "12": {
      "title": "U restoranu",
      "turns": [
        {
          "text": "Dobro veče! Jeste li rezervisali sto?"
        },
        {
          "prompt": "Odgovori da, rezervisao si sto za dvoje pod imenom 'Ahmad'",
          "options": [
            "Dobro veče! Da, rezervisali smo sto za dvoje pod imenom Ahmad.",
            "Da, sto za dvoje. Zovem se Ahmad."
          ]
        },
        {
          "text": "Svakako, gospodine Ahmad. Evo vašeg stola. Šta biste voljeli popiti?"
        },
        {
          "prompt": "Naručite flašu mineralne vode i sok od jabuke",
          "options": [
            "Želim flašu mineralne vode i sok od jabuke, molim.",
            "Molim te, donesi mi vodu i sok."
          ]
        },
        {
          "text": "Sa zadovoljstvom. A šta biste željeli jesti?"
        },
        {
          "prompt": "Naručite supu od paradajza kao predjelo i šnicle kao glavno jelo",
          "options": [
            "Kao predjelo supa od paradajza i kao glavno jelo šnicle.",
            "Uzeću supu i šnicle, molim."
          ]
        },
        {
          "text": "Stiže pravo gore. (Kasnije...) Da li je hrana bila ukusna? Želite li platiti?"
        },
        {
          "prompt": "Pohvalite hranu i tražite račun",
          "options": [
            "Da, hrana je bila fantastična! Račun, molim!",
            "Bilo je veoma ukusno. Račun, molim."
          ]
        },
        {
          "text": "To ukupno čini 27 eura 80 centi."
        },
        {
          "prompt": "Dajte mu 30 eura i recite mu da zadrži kusur (napojnica)",
          "options": [
            "Evo 30 eura. Zadrži kusur!",
            "Zadrži kusur. Neka bude 30 eura."
          ]
        }
      ]
    }
  },
  "es": {
    "1": {
      "title": "Autopresentación",
      "turns": [
        {
          "text": "¡Hola! Soy Ana. ¿Cómo te llamas?"
        },
        {
          "prompt": "Preséntate y dile a tu pareja tu nombre.",
          "options": [
            "Hola Ana! Mi nombre es Ahmad.",
            "¡Buen día! Mi nombre es Ahmad."
          ]
        },
        {
          "text": "¡Encantado de conocerte, Ahmad! ¿De dónde es?"
        },
        {
          "prompt": "Dile al socio tu país de origen",
          "options": [
            "Vengo de Siria.",
            "Yo vengo de Egipto."
          ]
        },
        {
          "text": "¡Ah, qué bueno! ¿Y dónde vives ahora?"
        },
        {
          "prompt": "Dile al socio tu ciudad actual",
          "options": [
            "Vivo en Berlín ahora.",
            "Vivo en Munich ahora."
          ]
        },
        {
          "text": "¡Berlín es genial! ¿Qué idiomas hablas?"
        },
        {
          "prompt": "Menciona los idiomas que hablas.",
          "options": [
            "Hablo árabe y un poco de alemán.",
            "Mi lengua materna es el árabe. Estoy aprendiendo alemán ahora."
          ]
        },
        {
          "text": "¡Muy bien! ¡Adiós, Ahmad!"
        },
        {
          "prompt": "Despedirse de la pareja de forma adecuada",
          "options": [
            "¡Adiós, Ana! ¡Adiós!",
            "¡Adiós! ¡Nos vemos pronto!"
          ]
        }
      ]
    },
    "2": {
      "title": "Reunión en un café",
      "turns": [
        {
          "text": "¡Hola! ¿Cómo está hoy?"
        },
        {
          "prompt": "Responde que te va bien y pregunta cómo le va a tu pareja.",
          "options": [
            "¡Hola! Estoy muy bien, gracias. ¿Y tú?",
            "Gracias, bien! ¿Y tú cómo estás?"
          ]
        },
        {
          "text": "A mi también me va bien, gracias. ¿Quieres tomar café o té?"
        },
        {
          "prompt": "Pide una taza de café con leche, por favor.",
          "options": [
            "Quisiera un café con leche, por favor.",
            "Un café con leche para mí, por favor."
          ]
        },
        {
          "text": "¡Seguro! Tomaré un té. ¿Cuál es tu número de móvil para más tarde?"
        },
        {
          "prompt": "Da tu número de teléfono al socio (0176...)",
          "options": [
            "Mi número es cero-uno-siete-seis-dos-tres-cuatro.",
            "Aquí está mi número: cero-uno-siete-seis-cinco-seis-siete."
          ]
        },
        {
          "text": "¡Gracias, lo he anotado! ¡Hasta la próxima!"
        },
        {
          "prompt": "Despídete de tu amigo y deséale un buen día.",
          "options": [
            "¡Adiós! ¡Que tenga un lindo día!",
            "¡Adiós! ¡Nos vemos pronto!"
          ]
        }
      ]
    },
    "3": {
      "title": "En el mercado de pulgas",
      "turns": [
        {
          "text": "¡Buen día! ¿Estás buscando algo específico?"
        },
        {
          "prompt": "Di que estás buscando una cámara o un libro y pregunta por el precio.",
          "options": [
            "¡Buen día! Estoy buscando un libro. ¿Cuánto cuesta este libro?",
            "¡Hola! ¿Cuánto cuesta esta cámara aquí?"
          ]
        },
        {
          "text": "El libro cuesta 5 euros. La cámara cuesta 45 euros. ¡Eso es barato!"
        },
        {
          "prompt": "Decir que el precio es demasiado alto (caro) e intentar negociar un precio más bajo.",
          "options": [
            "El libro es barato. Tomaré el libro.",
            "¡Oh, 45 euros es demasiado caro! ¿Están bien 35 euros?"
          ]
        },
        {
          "text": "Bueno, vale, 35 euros por la cámara está bien. ¿Lo aceptarás?"
        },
        {
          "prompt": "Acepta, di que lo aceptarás y pregunta dónde pagar.",
          "options": [
            "Sí, lo aceptaré. ¡Muchas gracias!",
            "Genial, me quedo con la cámara por 35 euros."
          ]
        },
        {
          "text": "Aquí tienes. Eso son 35 euros."
        },
        {
          "prompt": "Paga al vendedor y agradécele.",
          "options": [
            "Aquí tienes 35 euros. ¡Muchas gracias!",
            "Aquí tienes, 35 euros. ¡Que tenga un lindo día!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mañanas y citas",
      "turns": [
        {
          "text": "¡Hola! ¿A qué hora te levantas normalmente?"
        },
        {
          "prompt": "Dígales que normalmente se levanta a las 7 a. m. y desayuna a las 7:30",
          "options": [
            "Me levanto a las siete y desayuno a las siete y media.",
            "Normalmente me levanto a las 7 y luego desayuno."
          ]
        },
        {
          "text": "¿Y cuándo empieza tu curso de alemán?"
        },
        {
          "prompt": "Dígales que la lección comienza a las nueve y termina a la una y media.",
          "options": [
            "El curso comienza a las nueve y finaliza a la una y media.",
            "Comienza a las 9 en punto y dura hasta las 13:30."
          ]
        },
        {
          "text": "¡Oh, ese es un curso largo! ¿Tienes tiempo el viernes por la noche? ¿Vamos al cine?"
        },
        {
          "prompt": "Disculpa que no tienes tiempo por otra cita y pregunta por el sábado.",
          "options": [
            "Lo siento, no tengo tiempo el viernes. ¿Funciona el sábado?",
            "Lamentablemente tengo una cita el viernes. ¿Qué tal el sábado?"
          ]
        },
        {
          "text": "¡Sí, el sábado a las 6 de la tarde encaja bien! ¡Nos vemos el sábado!"
        },
        {
          "prompt": "Aceptar la cita y despedirse.",
          "options": [
            "¡Excelente! Nos vemos el sábado a las 18:00. ¡Adiós!",
            "¡Trato! ¡Nos vemos el sábado!"
          ]
        }
      ]
    },
    "5": {
      "title": "Compras de comestibles",
      "turns": [
        {
          "text": "¡Buen día! ¿Qué puedo hacer por ti?"
        },
        {
          "prompt": "Di que quieres comprar tomates y queso y pregunta si están frescos.",
          "options": [
            "¡Buen día! Necesito tomates y queso. ¿Están frescos?",
            "¡Hola! Me gustaría comprar tomates y queso."
          ]
        },
        {
          "text": "¡Sí, todo está muy fresco! ¿Cuántos tomates quieres?"
        },
        {
          "prompt": "Solicitar un kilo de tomates",
          "options": [
            "Quisiera un kilo de tomates, por favor.",
            "Un kilo de tomates, por favor."
          ]
        },
        {
          "text": "Seguro. ¿Y cuánto queso quieres?"
        },
        {
          "prompt": "Solicita 300 gramos de queso suizo",
          "options": [
            "Por favor dame 300 gramos de queso.",
            "Necesito trescientos gramos de queso, por favor."
          ]
        },
        {
          "text": "Aquí tienes. ¿Algo más?"
        },
        {
          "prompt": "Responde negativamente y pregunta por el coste total.",
          "options": [
            "No, gracias. Eso es todo. ¿Cuánto cuesta eso?",
            "Eso es todo, gracias. ¿Cuánto gana?"
          ]
        },
        {
          "text": "Son 9 euros 40 en total, por favor."
        },
        {
          "prompt": "Dales un billete de 10 euros y diles que se queden con el cambio.",
          "options": [
            "Aquí tienes 10 euros. ¡Quédese con el cambio!",
            "Aquí tienes. Diez euros. Quédese con el cambio."
          ]
        }
      ]
    },
    "6": {
      "title": "Hablando de familia",
      "turns": [
        {
          "text": "¡Hola! ¿Vives solo o con tu familia?"
        },
        {
          "prompt": "Digamos que está casado y vive con su familia e hijos.",
          "options": [
            "Estoy casado y vivo con mi familia.",
            "Vivo junto con mi esposa y mis dos hijos."
          ]
        },
        {
          "text": "¡Ay qué lindo! ¿Qué edad tienen sus hijos?"
        },
        {
          "prompt": "Diles que tu hija tiene 8 años y tu hijo 5 años.",
          "options": [
            "Mi hija tiene ocho años y mi hijo cinco años.",
            "La hija tiene 8 años y el hijo 5."
          ]
        },
        {
          "text": "¿Y tus padres? ¿Viven también aquí en Alemania?"
        },
        {
          "prompt": "Dígales que viven en su país de origen, pero usted habla por teléfono con ellos a menudo.",
          "options": [
            "No, mis padres viven en mi país de origen. Pero hablamos por teléfono a menudo.",
            "Viven en Egipto/Siria. Hablo por teléfono con ellos todos los días."
          ]
        },
        {
          "text": "¡Eso es bueno! Mañana es el cumpleaños de mi hermana. ¡Estamos de celebración!"
        },
        {
          "prompt": "Felicitar a su hermana y desearle un feliz cumpleaños.",
          "options": [
            "¡Feliz cumpleaños a tu hermana!",
            "¡Todo lo mejor en su cumpleaños!"
          ]
        }
      ]
    },
    "7": {
      "title": "Alquilar un apartamento",
      "turns": [
        {
          "text": "¡Buen día! ¿Llamas por el apartamento de 3 habitaciones?"
        },
        {
          "prompt": "Confirma la llamada y pregunta por los metros cuadrados totales del apartamento.",
          "options": [
            "Sí, exactamente. ¿Qué tamaño tiene realmente el apartamento?",
            "¡Buen día! Sí, estoy interesado en el apartamento. ¿Cuantos metros cuadrados son?"
          ]
        },
        {
          "text": "El apartamento tiene 85 metros cuadrados y también tiene un balcón."
        },
        {
          "prompt": "Pregunte por el alquiler frío y el costo de los servicios públicos y la electricidad.",
          "options": [
            "¿Qué tan alto es el alquiler frío? ¿Y a cuánto ascienden los servicios públicos?",
            "¿A cuánto asciende el alquiler cálido?"
          ]
        },
        {
          "text": "El alquiler en frío es de 750 euros. Los servicios públicos son 180 euros."
        },
        {
          "prompt": "Preguntar en qué planta está el apartamento y si el edificio tiene ascensor.",
          "options": [
            "¿En qué piso está el departamento? ¿Hay ascensor?",
            "¿El apartamento está en la planta baja o en el primer piso?"
          ]
        },
        {
          "text": "El departamento está en el tercer piso. Pero lamentablemente no hay ascensor."
        },
        {
          "prompt": "Dígale que el apartamento le parece adecuado y pregunte si puede verlo pronto.",
          "options": [
            "Eso está bien para mí. ¿Puedo ver el apartamento?",
            "¿Cuándo es posible una visita? Me gustaría verlo."
          ]
        }
      ]
    },
    "8": {
      "title": "en el medico",
      "turns": [
        {
          "text": "¡Buen día! ¿Qué te pasa?"
        },
        {
          "prompt": "Explíquele al médico que se siente mal, tiene dolor de cabeza intenso y fiebre.",
          "options": [
            "Buenos días doctor. Me siento muy mal. Tengo dolor de cabeza y fiebre.",
            "Estoy enfermo. Me duele la cabeza y tengo fiebre."
          ]
        },
        {
          "text": "Veo. ¿También tienes dolor de garganta o tos?"
        },
        {
          "prompt": "Responde que sí, también te duele la garganta y no puedes dormir bien.",
          "options": [
            "Sí, también me duele la garganta y no puedo dormir.",
            "Sí, tengo dolor de garganta desde ayer."
          ]
        },
        {
          "text": "Tienes un fuerte resfriado. Te recetaré medicamentos."
        },
        {
          "prompt": "Pregúntele al médico cuántas veces al día necesita tomar este medicamento.",
          "options": [
            "¿Cuántas veces al día necesito tomar el medicamento?",
            "¿Cuándo debo tomar el medicamento?"
          ]
        },
        {
          "text": "Dos veces al día, por la mañana y por la noche después de comer. ¡Que te mejores pronto!"
        },
        {
          "prompt": "Agradécele y despídete cortésmente.",
          "options": [
            "Muchas gracias doctora. ¡Adiós!",
            "Muchas gracias por tu ayuda. ¡Adiós!"
          ]
        }
      ]
    },
    "9": {
      "title": "Pedir direcciones",
      "turns": [
        {
          "text": "¡Disculpe! ¿Cómo llego a la estación de tren?"
        },
        {
          "prompt": "Dígale al viajero que siga recto y luego gire a la izquierda.",
          "options": [
            "Siga recto y luego tome la siguiente calle a la izquierda.",
            "Primero siga recto y luego gire a la izquierda."
          ]
        },
        {
          "text": "¿La estación de tren está lejos de aquí?"
        },
        {
          "prompt": "Dile que no está lejos, sólo una caminata de cinco minutos.",
          "options": [
            "No, está muy cerca. Sólo cinco minutos a pie.",
            "No está lejos, unos 500 metros."
          ]
        },
        {
          "text": "¿Puedo tomar también el autobús?"
        },
        {
          "prompt": "Dile que sí, que el autobús número 100 va directo allí.",
          "options": [
            "Sí, la línea de autobús 100 va directamente hasta allí.",
            "Sí, toma el autobús número 100."
          ]
        },
        {
          "text": "¡Excelente! ¡Muchas gracias por tu ayuda!"
        },
        {
          "prompt": "Responde con 'De nada' y deséale un buen viaje.",
          "options": [
            "¡De nada! ¡Que tengas un buen viaje!",
            "¡De nada! ¡Que tenga un lindo día!"
          ]
        }
      ]
    },
    "10": {
      "title": "Hacer planes de tiempo libre",
      "turns": [
        {
          "text": "¡Hola! ¿Qué es lo que más te gusta hacer en tu tiempo libre?"
        },
        {
          "prompt": "Dile que te gusta jugar al fútbol y escuchar música.",
          "options": [
            "Me gusta mucho jugar al fútbol y escuchar música.",
            "En mi tiempo libre juego al fútbol o leo un libro."
          ]
        },
        {
          "text": "¡El fútbol es genial! Jugamos el sábado. ¿Quieres venir?"
        },
        {
          "prompt": "Expresa tu interés y pregunta a qué hora empezarás a jugar.",
          "options": [
            "¡Sí, con mucho gusto! ¿A qué hora os reunís?",
            "¡Eso suena divertido! ¿Cuándo juegas el sábado?"
          ]
        },
        {
          "text": "Jugaremos el sábado a las 3 p.m. en el parque. Sólo trae calzado deportivo."
        },
        {
          "prompt": "Confirma tu asistencia a la hora prevista y di que definitivamente vendrás.",
          "options": [
            "¡Está bien! Vendré el sábado a las 15:00. ¡Hasta luego!",
            "Genial, estaré allí el sábado a las tres."
          ]
        }
      ]
    },
    "11": {
      "title": "Hablando de empleos",
      "turns": [
        {
          "text": "¡Hola! ¿Cuál es tu profesión?"
        },
        {
          "prompt": "Dígale su profesión (por ejemplo, ingeniero informático) y la empresa para la que trabaja.",
          "options": [
            "Soy ingeniero de profesión y trabajo en una empresa de informática.",
            "Trabajo como vendedor en un supermercado."
          ]
        },
        {
          "text": "¡Es interesante! ¿Cuántas horas trabajas por semana?"
        },
        {
          "prompt": "Digamos que trabajas 40 horas a la semana y tu trabajo es divertido pero agotador.",
          "options": [
            "Trabajo 40 horas por semana. El trabajo es divertido, pero estresante.",
            "Trabajo cuarenta horas. Me gusta mucho mi trabajo."
          ]
        },
        {
          "text": "Veo. ¿Y cuál es el trabajo de tus sueños?"
        },
        {
          "prompt": "Supongamos que el trabajo de sus sueños es trabajar como gerente o desarrollador de software y ganar mucho dinero.",
          "options": [
            "El trabajo de mis sueños es desarrollador de software. Me gustaría trabajar de forma flexible.",
            "Me gustaría ser una cocinera exitosa y tener mi propio restaurante."
          ]
        }
      ]
    },
    "12": {
      "title": "en el restaurante",
      "turns": [
        {
          "text": "¡Buenas noches! ¿Has reservado una mesa?"
        },
        {
          "prompt": "Responde que sí, has reservado una mesa para dos con el nombre 'Ahmad'",
          "options": [
            "¡Buenas noches! Sí, hemos reservado una mesa para dos personas con el nombre de Ahmad.",
            "Sí, una mesa para dos. El nombre es Ahmad."
          ]
        },
        {
          "text": "Por supuesto, señor Ahmad. Aquí está tu mesa. ¿Qué le gustaría beber?"
        },
        {
          "prompt": "Pide una botella de agua mineral y un zumo de manzana.",
          "options": [
            "Quisiera una botella de agua mineral y un zumo de manzana, por favor.",
            "Por favor tráeme agua y un jugo."
          ]
        },
        {
          "text": "Con mucho gusto. ¿Y a ti qué te gustaría comer?"
        },
        {
          "prompt": "Pida sopa de tomate como entrante y escalope como plato principal.",
          "options": [
            "De entrada la sopa de tomate y de segundo el escalope.",
            "Tomaré una sopa y un escalope, por favor."
          ]
        },
        {
          "text": "Próximamente. (Más tarde...) ¿La comida estuvo deliciosa? ¿Quieres pagar?"
        },
        {
          "prompt": "Elogia la comida y pide la cuenta.",
          "options": [
            "Sí, ¡la comida estuvo fantástica! ¡La cuenta, por favor!",
            "Estaba muy delicioso. La cuenta, por favor."
          ]
        },
        {
          "text": "Esto hace un total de 27 euros y 80 céntimos."
        },
        {
          "prompt": "Dale 30 euros y dile que se quede con el cambio (propina)",
          "options": [
            "Aquí tienes 30 euros. ¡Quédese con el cambio!",
            "Quédese con el cambio. Que sean 30 euros."
          ]
        }
      ]
    }
  },
  "bg": {
    "1": {
      "title": "Самостоятелно представяне",
      "turns": [
        {
          "text": "здравей Аз съм Анна. как се казваш"
        },
        {
          "prompt": "Представете се и кажете името си на партньора",
          "options": [
            "Здравей Анна! Казвам се Ахмад.",
            "Добър ден! Казвам се Ахмад."
          ]
        },
        {
          "text": "Радвам се да се запознаем, Ахмад! от къде идваш"
        },
        {
          "prompt": "Кажете на партньора вашата страна на произход",
          "options": [
            "Идвам от Сирия.",
            "Идвам от Египет."
          ]
        },
        {
          "text": "Ах, хубаво! И къде живееш сега?"
        },
        {
          "prompt": "Кажете на партньора си текущия град",
          "options": [
            "Сега живея в Берлин.",
            "Сега живея в Мюнхен."
          ]
        },
        {
          "text": "Берлин е страхотен! кои езици говориш"
        },
        {
          "prompt": "Споменете езиците, които говорите",
          "options": [
            "Говоря арабски и малко немски.",
            "Майчиният ми език е арабски. Сега уча немски."
          ]
        },
        {
          "text": "Много добре! Сбогом, Ахмад!"
        },
        {
          "prompt": "Сбогувайте се с партньора по подходящ начин",
          "options": [
            "Довиждане, Анна! чао",
            "чао До скоро!"
          ]
        }
      ]
    },
    "2": {
      "title": "Среща в кафене",
      "turns": [
        {
          "text": "здравей как си днес"
        },
        {
          "prompt": "Отговорете, че се справяте добре и попитайте как се справя партньорът",
          "options": [
            "здравей Справям се много добре, благодаря. а ти",
            "Благодаря, добре! а вие как сте"
          ]
        },
        {
          "text": "И аз се справям добре, благодаря. Бихте ли пили кафе или чай?"
        },
        {
          "prompt": "Поръчайте чаша кафе с мляко, моля",
          "options": [
            "Искам кафе с мляко, моля.",
            "Едно кафе с мляко за мен, моля."
          ]
        },
        {
          "text": "Разбира се! Ще взема един чай. Какъв е мобилният ви номер за по-късно?"
        },
        {
          "prompt": "Дайте своя телефонен номер на партньора (0176...)",
          "options": [
            "Моето число е нула-едно-седем-шест-две-три-четири.",
            "Ето моето число: нула-едно-седем-шест-пет-шест-седем."
          ]
        },
        {
          "text": "Благодаря, записах си го! Ще се видим следващия път!"
        },
        {
          "prompt": "Кажете сбогом на приятеля си и му пожелайте добър ден",
          "options": [
            "чао приятен ден!",
            "Довиждане! До скоро!"
          ]
        }
      ]
    },
    "3": {
      "title": "На Битпазара",
      "turns": [
        {
          "text": "Добър ден! Търсите нещо конкретно?"
        },
        {
          "prompt": "Кажете, че търсите фотоапарат или книга и попитайте за цената",
          "options": [
            "Добър ден! Търся книга. Колко струва тази книга?",
            "здравей Колко струва тази камера тук?"
          ]
        },
        {
          "text": "Книгата струва 5 евро. Фотоапаратът струва 45 евро. Това е евтино!"
        },
        {
          "prompt": "Кажете, че цената е твърде висока (скъпа) и се опитайте да договорите по-ниска цена",
          "options": [
            "Книгата е евтина. Ще взема книгата.",
            "О, 45 евро са твърде скъпи! 35 евро добре ли са?"
          ]
        },
        {
          "text": "Е, добре, 35 евро за камерата е добре. ще го вземеш ли"
        },
        {
          "prompt": "Съгласете се, кажете, че ще го вземете и попитайте къде да платите",
          "options": [
            "Да, ще го взема. Благодаря много!",
            "Супер, ще взема камерата за 35 евро."
          ]
        },
        {
          "text": "Ето го. Това прави 35 евро."
        },
        {
          "prompt": "Платете на продавача и му благодарете",
          "options": [
            "Ето 35 евро. Благодаря много!",
            "Ето, 35 евро. приятен ден!"
          ]
        }
      ]
    },
    "4": {
      "title": "Сутрин и срещи",
      "turns": [
        {
          "text": "здравей Кога обикновено ставаш?"
        },
        {
          "prompt": "Кажете им, че обикновено се събуждате в 7 сутринта и закусвате в 7:30",
          "options": [
            "Ставам в седем часа и закусвам в седем и половина.",
            "Обикновено ставам в 7 часа, след което закусвам."
          ]
        },
        {
          "text": "И кога започва вашият курс по немски?"
        },
        {
          "prompt": "Кажете им, че урокът започва в девет часа и свършва в един и половина",
          "options": [
            "Курсът започва в девет часа и завършва в един и половина.",
            "Започва в 9 часа и продължава до 13:30 часа."
          ]
        },
        {
          "text": "О, това е дълъг курс! Имате ли време петък вечер? Ще отидем ли на кино?"
        },
        {
          "prompt": "Извини се, че нямаш време заради друг ангажимент и попитай за събота",
          "options": [
            "Съжалявам, нямам време в петък. Събота работи ли?",
            "За съжаление имам час в петък. Какво ще кажете за събота?"
          ]
        },
        {
          "text": "Да, събота от 18 часа пасва! Ще се видим в събота!"
        },
        {
          "prompt": "Съгласете се с уговорката и се сбогувайте",
          "options": [
            "Страхотно! Ще се видим в събота от 18:00ч. чао",
            "сделка! Ще се видим в събота!"
          ]
        }
      ]
    },
    "5": {
      "title": "Пазаруване на хранителни стоки",
      "turns": [
        {
          "text": "Добър ден! Какво мога да направя за вас?"
        },
        {
          "prompt": "Кажете, че искате да купите домати и сирене и попитайте дали са пресни",
          "options": [
            "Добър ден! Имам нужда от домати и сирене. Пресни ли са?",
            "здравей Бих искал да купя домати и сирене."
          ]
        },
        {
          "text": "Да всичко е много свежо! Колко домата искате?"
        },
        {
          "prompt": "Поискайте един килограм домати",
          "options": [
            "Бих искал един килограм домати, моля.",
            "Един килограм домати, моля."
          ]
        },
        {
          "text": "Разбира се. И колко сирене искате?"
        },
        {
          "prompt": "Поискайте 300 грама швейцарско сирене",
          "options": [
            "Моля, дайте ми 300 грама сирене.",
            "Имам нужда от триста грама сирене, моля."
          ]
        },
        {
          "text": "Ето го. Нещо друго?"
        },
        {
          "prompt": "Отговорете отрицателно и поискайте общата цена",
          "options": [
            "Не, благодаря. Това е всичко Колко струва това?",
            "Това е всичко, благодаря ви. Колко прави?"
          ]
        },
        {
          "text": "Това прави общо 9 евро 40, моля."
        },
        {
          "prompt": "Дайте им банкнота от 10 евро и им кажете да запазят рестото",
          "options": [
            "Ето 10 евро. Запазете рестото!",
            "Ето го. Десет евро. Запазете рестото."
          ]
        }
      ]
    },
    "6": {
      "title": "Говорейки за семейството",
      "turns": [
        {
          "text": "здравей Сам ли живееш или със семейството си?"
        },
        {
          "prompt": "Кажете, че сте женен и живеете със семейството и децата си",
          "options": [
            "Омъжена съм и живея със семейството си.",
            "Живея заедно с жена ми и двете ми деца."
          ]
        },
        {
          "text": "Ах, колко хубаво! На колко години са вашите деца?"
        },
        {
          "prompt": "Кажете им, че дъщеря ви е на 8 години, а синът ви е на 5 години",
          "options": [
            "Дъщеря ми е на осем, а синът ми е на пет години.",
            "Дъщерята е на 8 години, а синът е на 5."
          ]
        },
        {
          "text": "А вашите родители? Те също ли живеят тук в Германия?"
        },
        {
          "prompt": "Кажете им, че живеят във вашата страна, но често говорите по телефона с тях",
          "options": [
            "Не, родителите ми живеят в родната ми страна. Но често говорим по телефона.",
            "Те живеят в Египет/Сирия. Говоря по телефона с тях всеки ден."
          ]
        },
        {
          "text": "Това е добре! Утре сестра ми има рожден ден. Ние празнуваме!"
        },
        {
          "prompt": "Поздравете сестра му и й пожелайте честит рожден ден",
          "options": [
            "Честит рожден ден на сестра ти!",
            "Всичко най-хубаво на рождения й ден!"
          ]
        }
      ]
    },
    "7": {
      "title": "Отдаване под наем на апартамент",
      "turns": [
        {
          "text": "Добър ден! За 3-стаен апартамент ли се обаждате?"
        },
        {
          "prompt": "Потвърдете обаждането и попитайте за общите квадратни метри на апартамента",
          "options": [
            "Да точно така. Колко голям е всъщност апартаментът?",
            "Добър ден! Да, интересувам се от апартамента. Колко квадратни метра е?"
          ]
        },
        {
          "text": "Апартаментът е 85 кв.м. и разполага с тераса."
        },
        {
          "prompt": "Попитайте за студения наем и разходите за комунални услуги и ток",
          "options": [
            "Колко висок е студеният наем? И колко са комуналните?",
            "Колко е топлият наем?"
          ]
        },
        {
          "text": "Студеният наем е 750 евро. Комуналните разходи са 180 евро."
        },
        {
          "prompt": "Попитайте на кой етаж е апартамента и дали сградата има асансьор",
          "options": [
            "На кой етаж е апартамента? има ли асансьор",
            "Апартаментът на партер ли е или на първи етаж?"
          ]
        },
        {
          "text": "Апартаментът се намира на трети етаж. Но за съжаление няма асансьор."
        },
        {
          "prompt": "Кажете, че намирате апартамента за подходящ и попитайте за оглед скоро",
          "options": [
            "Това е добре за мен. Мога ли да огледам апартамента?",
            "Кога е възможен оглед? Бих искал да го видя."
          ]
        }
      ]
    },
    "8": {
      "title": "При доктора",
      "turns": [
        {
          "text": "Добър ден! какво ти става"
        },
        {
          "prompt": "Обяснете на лекаря, че се чувствате зле, имате силно главоболие и температура",
          "options": [
            "Добър ден, докторе. Чувствам се много зле. Имам главоболие и температура.",
            "болен съм Главата ме боли и имам температура."
          ]
        },
        {
          "text": "разбирам Имате ли и възпалено гърло или кашлица?"
        },
        {
          "prompt": "Отговорете да, боли ви и гърлото и не можете да спите добре",
          "options": [
            "Да, и мен ме боли гърлото и не мога да спя.",
            "Да, от вчера ме боли гърлото."
          ]
        },
        {
          "text": "Имате силна настинка. Ще ти предпиша лекарства."
        },
        {
          "prompt": "Попитайте лекаря колко пъти на ден трябва да приемате това лекарство",
          "options": [
            "Колко пъти на ден трябва да приемам лекарството?",
            "Кога трябва да приемам лекарството?"
          ]
        },
        {
          "text": "Два пъти дневно, сутрин и вечер след хранене. Оздравявай бързо!"
        },
        {
          "prompt": "Благодарете му и се сбогувайте учтиво",
          "options": [
            "Благодаря ви много, докторе. Довиждане!",
            "Благодаря ви много за помощта. чао"
          ]
        }
      ]
    },
    "9": {
      "title": "Питане за упътване",
      "turns": [
        {
          "text": "извинете! Как да стигна до гарата?"
        },
        {
          "prompt": "Кажете на пътника да върви направо и след това да завие наляво",
          "options": [
            "Продължете направо и след това поемете по следващата улица наляво.",
            "Първо вървете направо, след това завийте наляво."
          ]
        },
        {
          "text": "Далеч ли е гарата?"
        },
        {
          "prompt": "Кажете му, че не е далеч, само на пет минути пеша",
          "options": [
            "Не, много е близо. Само пет минути пеша.",
            "Не е далеч, около 500 метра."
          ]
        },
        {
          "text": "Може ли и аз да взема автобуса?"
        },
        {
          "prompt": "Кажете му да, автобус номер 100 отива директно там",
          "options": [
            "Да, автобусна линия 100 отива директно там.",
            "Да, вземете автобус номер 100."
          ]
        },
        {
          "text": "Страхотно! Благодаря ви много за помощта!"
        },
        {
          "prompt": "Отговорете с „Заповядайте“ и му пожелайте приятен път",
          "options": [
            "няма за какво! Приятно пътуване!",
            "няма за какво! приятен ден!"
          ]
        }
      ]
    },
    "10": {
      "title": "Изготвяне на планове за свободното време",
      "turns": [
        {
          "text": "здравей Какво най-много обичаш да правиш в свободното си време?"
        },
        {
          "prompt": "Кажете му, че обичате да играете футбол и да слушате музика",
          "options": [
            "Много обичам да играя футбол и да слушам музика.",
            "В свободното си време играя футбол или чета книга."
          ]
        },
        {
          "text": "Футболът е страхотен! Играем в събота. искаш ли да дойдеш"
        },
        {
          "prompt": "Изразете интереса си и попитайте в колко часа ще започнете да играете",
          "options": [
            "Да, с радост! В колко часа се срещате?",
            "Това звучи забавно! Кога ще играеш в събота?"
          ]
        },
        {
          "text": "Играем в събота от 15 часа в парка. Просто носете спортни обувки."
        },
        {
          "prompt": "Потвърдете присъствието си в уречения час и кажете, че определено ще дойдете",
          "options": [
            "добре! Ще дойда в събота в 15:00ч. Ще се видим тогава!",
            "Чудесно, ще бъда там в събота в три часа."
          ]
        }
      ]
    },
    "11": {
      "title": "Говорейки за работа",
      "turns": [
        {
          "text": "здравей каква си професия"
        },
        {
          "prompt": "Кажете му вашата професия (напр. компютърен инженер) и компанията, в която работите",
          "options": [
            "По професия съм инженер и работя в компютърна фирма.",
            "Работя като продавач в супермаркет."
          ]
        },
        {
          "text": "Това е интересно! How many hours do you work per week?"
        },
        {
          "prompt": "Да кажем, че работите 40 часа седмично и работата ви е забавна, но уморителна",
          "options": [
            "Работя 40 часа на седмица. Работата е забавна, но е стресираща.",
            "Работя четиридесет часа. Много харесвам работата си."
          ]
        },
        {
          "text": "разбирам А коя е вашата мечтана работа?"
        },
        {
          "prompt": "Кажете, че вашата мечтана работа е да работите като мениджър или разработчик на софтуер и да печелите много пари",
          "options": [
            "Мечтаната ми работа е софтуерен разработчик. Бих искал да работя гъвкаво.",
            "Бих искал да бъда успешен готвач и да имам собствен ресторант."
          ]
        }
      ]
    },
    "12": {
      "title": "В ресторанта",
      "turns": [
        {
          "text": "Добър вечер! Резервирахте ли маса?"
        },
        {
          "prompt": "Отговорете с да, запазихте маса за двама на името „Ахмад“",
          "options": [
            "Добър вечер! Да, резервирали сме маса за двама на името Ахмад.",
            "Да, маса за двама. Името е Ахмад."
          ]
        },
        {
          "text": "Разбира се, г-н Ахмад. Ето ви масата. Какво бихте искали да пиете?"
        },
        {
          "prompt": "Поръчайте бутилка минерална вода и ябълков сок",
          "options": [
            "Бих искал бутилка минерална вода и ябълков сок, моля.",
            "Моля, донесете ми вода и сок."
          ]
        },
        {
          "text": "С удоволствие. И какво бихте искали да ядете?"
        },
        {
          "prompt": "Поръчайте доматена супа като предястие и шницел като основно ястие",
          "options": [
            "Като предястие доматената супа, а като основно ястие шницелът.",
            "Ще взема супа и шницел, моля."
          ]
        },
        {
          "text": "Идва веднага. (По-късно...) Вкусна ли беше храната? Искате ли да платите?"
        },
        {
          "prompt": "Похвалете храната и поискайте сметката",
          "options": [
            "Да, храната беше фантастична! Сметката, моля!",
            "Беше много вкусно. Сметката, моля."
          ]
        },
        {
          "text": "Това прави общо 27 евро 80 ​​цента."
        },
        {
          "prompt": "Дайте му 30 евро и му кажете да задържи рестото (бакшиш)",
          "options": [
            "Ето 30 евро. Запазете рестото!",
            "Запазете рестото. Направи го 30 евро."
          ]
        }
      ]
    }
  },
  "el": {
    "1": {
      "title": "Αυτο Εισαγωγή",
      "turns": [
        {
          "text": "Γειά σου! Είμαι η Άννα. Πώς σε λένε;"
        },
        {
          "prompt": "Συστηθείτε και πείτε στον συνεργάτη το όνομά σας",
          "options": [
            "Γεια σου Άννα! Το όνομά μου είναι Ahmad.",
            "Καλημέρα! Το όνομά μου είναι Ahmad."
          ]
        },
        {
          "text": "Χαίρομαι που σε γνωρίζω, Ahmad! Από πού κατάγεσαι;"
        },
        {
          "prompt": "Πείτε στον συνεργάτη τη χώρα καταγωγής σας",
          "options": [
            "Κατάγομαι από τη Συρία.",
            "Κατάγομαι από την Αίγυπτο."
          ]
        },
        {
          "text": "Α, ωραία! Και που μένεις τώρα;"
        },
        {
          "prompt": "Πείτε στον συνεργάτη την τρέχουσα πόλη σας",
          "options": [
            "Τώρα ζω στο Βερολίνο.",
            "Τώρα ζω στο Μόναχο."
          ]
        },
        {
          "text": "Το Βερολίνο είναι υπέροχο! Ποιες γλώσσες μιλάτε;"
        },
        {
          "prompt": "Αναφέρετε τις γλώσσες που μιλάτε",
          "options": [
            "Μιλάω αραβικά και λίγα γερμανικά.",
            "Η μητρική μου γλώσσα είναι η αραβική. Τώρα μαθαίνω γερμανικά."
          ]
        },
        {
          "text": "Πολύ καλό! Αντίο, Ahmad!"
        },
        {
          "prompt": "Πείτε αντίο στον σύντροφο με τον κατάλληλο τρόπο",
          "options": [
            "Αντίο Άννα! Αντίο!",
            "Αντίο! Τα λέμε σύντομα!"
          ]
        }
      ]
    },
    "2": {
      "title": "Συνάντηση σε ένα καφέ",
      "turns": [
        {
          "text": "Γειά σου! Πώς τα πάτε σήμερα;"
        },
        {
          "prompt": "Απαντήστε ότι τα πάτε καλά και ρωτήστε πώς είναι ο σύντροφος",
          "options": [
            "Γειά σου! Τα πάω πολύ καλά, ευχαριστώ. Και εσύ;",
            "Ευχαριστώ, καλά! Και πώς είσαι;"
          ]
        },
        {
          "text": "Και εγώ καλά πάω, ευχαριστώ. Θα θέλατε να πιείτε καφέ ή τσάι;"
        },
        {
          "prompt": "Παραγγείλετε ένα φλιτζάνι καφέ με γάλα, παρακαλώ",
          "options": [
            "Θα ήθελα έναν καφέ με γάλα, παρακαλώ.",
            "Ένας καφές με γάλα για μένα, παρακαλώ."
          ]
        },
        {
          "text": "Σίγουρος! Θα πάρω ένα τσάι. Ποιος είναι ο αριθμός του κινητού σας για αργότερα;"
        },
        {
          "prompt": "Δώστε τον αριθμό τηλεφώνου σας στον συνεργάτη (0176...)",
          "options": [
            "Ο αριθμός μου είναι μηδέν-ένα-επτά-έξι-δύο-τρία-τέσσερα.",
            "Εδώ είναι ο αριθμός μου: μηδέν-ένα-επτά-έξι-πέντε-έξι-επτά."
          ]
        },
        {
          "text": "Ευχαριστώ, το έχω σημειώσει! Τα λέμε την επόμενη φορά!"
        },
        {
          "prompt": "Πείτε αντίο στον φίλο σας και ευχηθείτε καλή μέρα",
          "options": [
            "Αντίο! Καλή σας μέρα!",
            "Αντίο! Τα λέμε σύντομα!"
          ]
        }
      ]
    },
    "3": {
      "title": "Στο Flea Market",
      "turns": [
        {
          "text": "Καλημέρα! Ψάχνετε για κάτι συγκεκριμένο;"
        },
        {
          "prompt": "Πείτε ότι ψάχνετε για μια φωτογραφική μηχανή ή ένα βιβλίο και ρωτήστε για την τιμή",
          "options": [
            "Καλημέρα! Ψάχνω για ένα βιβλίο. Πόσο κοστίζει αυτό το βιβλίο;",
            "Γειά σου! Πόσο κοστίζει αυτή η κάμερα εδώ;"
          ]
        },
        {
          "text": "Το βιβλίο κοστίζει 5 ευρώ. Η κάμερα κοστίζει 45 ευρώ. Αυτό είναι φτηνό!"
        },
        {
          "prompt": "Πείτε ότι η τιμή είναι πολύ υψηλή (ακριβή) και προσπαθήστε να διαπραγματευτείτε μια χαμηλότερη τιμή",
          "options": [
            "Το βιβλίο είναι φτηνό. Θα πάρω το βιβλίο.",
            "Ω, 45 ευρώ είναι πολύ ακριβά! 35 ευρώ είναι εντάξει;"
          ]
        },
        {
          "text": "Λοιπόν, εντάξει, 35 ευρώ για την κάμερα είναι μια χαρά. Θα το πάρεις;"
        },
        {
          "prompt": "Συμφωνώ, πείτε ότι θα το πάρετε και ρωτήστε πού να πληρώσετε",
          "options": [
            "Ναι, θα το πάρω. Σας ευχαριστώ πολύ!",
            "Τέλεια, θα πάρω την κάμερα 35 ευρώ."
          ]
        },
        {
          "text": "Ορίστε. Δηλαδή 35 ευρώ."
        },
        {
          "prompt": "Πληρώστε τον πωλητή και ευχαριστήστε τον",
          "options": [
            "Εδώ είναι 35 ευρώ. Σας ευχαριστώ πολύ!",
            "Ορίστε, 35 ευρώ. Καλή σας μέρα!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens και ραντεβού",
      "turns": [
        {
          "text": "Γειά σου! Πότε σηκώνεσαι συνήθως;"
        },
        {
          "prompt": "Πείτε τους ότι συνήθως ξυπνάτε στις 7 το πρωί και τρώτε πρωινό στις 7:30",
          "options": [
            "Σηκώνομαι στις επτά και τρώω πρωινό στις επτά και μισή.",
            "Κανονικά σηκώνομαι στις 7 και μετά παίρνω πρωινό."
          ]
        },
        {
          "text": "Και πότε ξεκινά το μάθημα των Γερμανικών;"
        },
        {
          "prompt": "Πες τους ότι το μάθημα ξεκινά στις εννιά και τελειώνει στη μιάμιση",
          "options": [
            "Το μάθημα ξεκινά στις εννιά και τελειώνει στη μία και μισή.",
            "Ξεκινά στις 9 και πάει μέχρι τις 13:30."
          ]
        },
        {
          "text": "Ω, αυτή είναι μια μακρά πορεία! Έχετε χρόνο την Παρασκευή το απόγευμα; Πάμε σινεμά;"
        },
        {
          "prompt": "Ζητήστε συγγνώμη που δεν έχετε χρόνο λόγω άλλου ραντεβού και ρωτήστε για το Σάββατο",
          "options": [
            "Συγγνώμη, δεν έχω χρόνο την Παρασκευή. Λειτουργεί το Σάββατο;",
            "Δυστυχώς έχω ραντεβού την Παρασκευή. Τι θα λέγατε για το Σάββατο;"
          ]
        },
        {
          "text": "Ναι, το Σάββατο στις 18:00 χωράει καλά! Τα λέμε το Σάββατο!"
        },
        {
          "prompt": "Συμφωνήστε στο ραντεβού και πείτε αντίο",
          "options": [
            "Μεγάλος! Ραντεβού το Σάββατο στις 18:00. Αντίο!",
            "Συμφωνία! Τα λέμε το Σάββατο!"
          ]
        }
      ]
    },
    "5": {
      "title": "Αγορές παντοπωλείου",
      "turns": [
        {
          "text": "Καλημέρα! Τι μπορώ να κάνω για σένα;"
        },
        {
          "prompt": "Πείτε ότι θέλετε να αγοράσετε ντομάτες και τυρί και ρωτήστε αν είναι φρέσκα",
          "options": [
            "Καλημέρα! Χρειάζομαι ντομάτες και τυρί. Είναι φρέσκα;",
            "Γειά σου! Θα ήθελα να αγοράσω ντομάτες και τυρί."
          ]
        },
        {
          "text": "Ναι, όλα είναι πολύ φρέσκα! Πόσες ντομάτες θα θέλατε;"
        },
        {
          "prompt": "Ζητήστε ένα κιλό ντομάτες",
          "options": [
            "Θα ήθελα ένα κιλό ντομάτες, παρακαλώ.",
            "Ένα κιλό ντομάτες, παρακαλώ."
          ]
        },
        {
          "text": "Σίγουρος. Και πόσο τυρί θα θέλατε;"
        },
        {
          "prompt": "Ζητήστε 300 γραμμάρια ελβετικό τυρί",
          "options": [
            "Δώστε μου 300 γραμμάρια τυρί.",
            "Χρειάζομαι τριακόσια γραμμάρια τυρί, παρακαλώ."
          ]
        },
        {
          "text": "Ορίστε. Κάτι άλλο;"
        },
        {
          "prompt": "Απαντήστε αρνητικά και ζητήστε το συνολικό κόστος",
          "options": [
            "Όχι, ευχαριστώ. Αυτό είναι όλο. Πόσο κοστίζει αυτό;",
            "Αυτό είναι όλο, ευχαριστώ. Πόσο κάνει;"
          ]
        },
        {
          "text": "Αυτό κάνει 9 ευρώ 40 συνολικά, παρακαλώ."
        },
        {
          "prompt": "Δώστε τους ένα λογαριασμό των 10 ευρώ και πείτε τους να κρατήσουν τα ρέστα",
          "options": [
            "Εδώ είναι 10 ευρώ. Κρατήστε τα ρέστα!",
            "Ορίστε. Δέκα ευρώ. Κρατήστε τα ρέστα."
          ]
        }
      ]
    },
    "6": {
      "title": "Μιλώντας για την οικογένεια",
      "turns": [
        {
          "text": "Γειά σου! Μένεις μόνος ή με την οικογένειά σου;"
        },
        {
          "prompt": "Πες ότι είσαι παντρεμένος και ζεις με την οικογένεια και τα παιδιά σου",
          "options": [
            "Είμαι παντρεμένος και ζω με την οικογένειά μου.",
            "Μένω μαζί με τη γυναίκα μου και τα δύο μου παιδιά."
          ]
        },
        {
          "text": "Αχ, τι ωραία! Πόσο χρονών είναι τα παιδιά σας;"
        },
        {
          "prompt": "Πες τους ότι η κόρη σου είναι 8 ετών και ο γιος σου 5 ετών",
          "options": [
            "Η κόρη μου είναι οκτώ και ο γιος μου πέντε ετών.",
            "Η κόρη είναι 8 ετών και ο γιος 5."
          ]
        },
        {
          "text": "Και οι γονείς σου; Ζουν και αυτοί εδώ στη Γερμανία;"
        },
        {
          "prompt": "Πείτε τους ότι ζουν στη χώρα σας, αλλά μιλάτε συχνά μαζί τους στο τηλέφωνο",
          "options": [
            "Όχι, οι γονείς μου ζουν στην πατρίδα μου. Αλλά μιλάμε συχνά στο τηλέφωνο.",
            "Ζουν στην Αίγυπτο/Συρία. Μιλάω στο τηλέφωνο μαζί τους κάθε μέρα."
          ]
        },
        {
          "text": "Αυτό είναι καλό! Αύριο είναι τα γενέθλια της αδερφής μου. Γιορτάζουμε!"
        },
        {
          "prompt": "Συγχαρητήρια στην αδερφή του και ευχόμαστε χρόνια πολλά",
          "options": [
            "Χρόνια πολλά στην αδερφή σου!",
            "Ό,τι καλύτερο για τα γενέθλιά της!"
          ]
        }
      ]
    },
    "7": {
      "title": "Ενοικίαση Διαμερίσματος",
      "turns": [
        {
          "text": "Καλημέρα! Καλείτε για το διαμέρισμα 3 δωματίων;"
        },
        {
          "prompt": "Επιβεβαιώστε την κλήση και ρωτήστε για τα συνολικά τετραγωνικά μέτρα του διαμερίσματος",
          "options": [
            "Ναι, ακριβώς. Πόσο μεγάλο είναι πραγματικά το διαμέρισμα;",
            "Καλημέρα! Ναι, ενδιαφέρομαι για το διαμέρισμα. Πόσα τετραγωνικά είναι;"
          ]
        },
        {
          "text": "Το διαμέρισμα είναι 85 τετραγωνικά μέτρα και διαθέτει επίσης μπαλκόνι."
        },
        {
          "prompt": "Ρωτήστε για το κρύο ενοίκιο και το κόστος των κοινόχρηστων και του ρεύματος",
          "options": [
            "Πόσο υψηλό είναι το κρύο ενοίκιο; Και πόσα είναι τα κοινόχρηστα;",
            "Πόσο είναι το ζεστό ενοίκιο;"
          ]
        },
        {
          "text": "Το κρύο ενοίκιο είναι 750 Ευρώ. Τα κοινόχρηστα είναι 180 ευρώ."
        },
        {
          "prompt": "Ρωτήστε σε ποιον όροφο βρίσκεται το διαμέρισμα και αν το κτίριο διαθέτει ανελκυστήρα",
          "options": [
            "Σε ποιον όροφο βρίσκεται το διαμέρισμα; Υπάρχει ασανσέρ;",
            "Το διαμέρισμα βρίσκεται στο ισόγειο ή στον πρώτο όροφο;"
          ]
        },
        {
          "text": "Το διαμέρισμα βρίσκεται στον τρίτο όροφο. Αλλά δυστυχώς, δεν υπάρχει ανελκυστήρας."
        },
        {
          "prompt": "Πείτε ότι βρίσκετε το διαμέρισμα κατάλληλο και ρωτήστε να το δείτε σύντομα",
          "options": [
            "Αυτό είναι εντάξει για μένα. Μπορώ να δω το διαμέρισμα;",
            "Πότε είναι δυνατή η προβολή; Θα ήθελα να το δω."
          ]
        }
      ]
    },
    "8": {
      "title": "Στο Γιατρό",
      "turns": [
        {
          "text": "Καλημέρα! Τι σου συμβαίνει;"
        },
        {
          "prompt": "Εξηγήστε στον γιατρό ότι αισθάνεστε άρρωστος, έχετε έντονο πονοκέφαλο και πυρετό",
          "options": [
            "Καλημερα γιατρε. Νιώθω πολύ άσχημα. Έχω πονοκέφαλο και πυρετό.",
            "Είμαι άρρωστος. Πονάει το κεφάλι μου και έχω πυρετό."
          ]
        },
        {
          "text": "βλέπω. Έχετε επίσης πονόλαιμο ή βήχα;"
        },
        {
          "prompt": "Απάντησε ναι, πονάει και ο λαιμός σου και δεν μπορείς να κοιμηθείς καλά",
          "options": [
            "Ναι, πονάει και ο λαιμός μου και δεν μπορώ να κοιμηθώ.",
            "Ναι, έχω πονόλαιμο από χθες."
          ]
        },
        {
          "text": "Έχεις κρυολόγημα. Θα σου συνταγογραφήσω φάρμακα."
        },
        {
          "prompt": "Ρωτήστε τον γιατρό πόσες φορές την ημέρα πρέπει να παίρνετε αυτό το φάρμακο",
          "options": [
            "Πόσες φορές την ημέρα πρέπει να παίρνω το φάρμακο;",
            "Πότε πρέπει να πάρω το φάρμακο;"
          ]
        },
        {
          "text": "Δύο φορές την ημέρα, πρωί και βράδυ μετά το φαγητό. Γίνε καλά σύντομα!"
        },
        {
          "prompt": "Ευχαριστήστε τον και αποχαιρετήστε τον ευγενικά",
          "options": [
            "Ευχαριστώ πολύ γιατρέ. Αντίο!",
            "Σας ευχαριστώ πολύ για τη βοήθειά σας. Αντίο!"
          ]
        }
      ]
    },
    "9": {
      "title": "Ζητώντας οδηγίες",
      "turns": [
        {
          "text": "Με συγχωρείτε! Πώς θα πάω στο σιδηροδρομικό σταθμό;"
        },
        {
          "prompt": "Πείτε στον ταξιδιώτη να πάει ευθεία και μετά στρίψτε αριστερά",
          "options": [
            "Προχωρήστε ευθεία και στη συνέχεια πάρτε τον επόμενο δρόμο αριστερά.",
            "Πρώτα πηγαίνετε ευθεία, μετά στρίψτε αριστερά."
          ]
        },
        {
          "text": "Είναι ο σιδηροδρομικός σταθμός μακριά από εδώ;"
        },
        {
          "prompt": "Πες του ότι δεν είναι μακριά, μόνο πέντε λεπτά με τα πόδια",
          "options": [
            "Όχι, είναι πολύ κοντά. Μόνο πέντε λεπτά με τα πόδια.",
            "Δεν είναι μακριά, περίπου 500 μέτρα."
          ]
        },
        {
          "text": "Μπορώ να πάρω και το λεωφορείο;"
        },
        {
          "prompt": "Πες του ναι, το λεωφορείο 100 πηγαίνει κατευθείαν εκεί",
          "options": [
            "Ναι, η γραμμή λεωφορείου 100 πηγαίνει απευθείας εκεί.",
            "Ναι, πάρτε το λεωφορείο 100."
          ]
        },
        {
          "text": "Μεγάλος! Σας ευχαριστώ πολύ για τη βοήθειά σας!"
        },
        {
          "prompt": "Απαντήστε με «Καλώς ήρθατε» και ευχηθείτε του καλό ταξίδι",
          "options": [
            "Καλώς ήρθες! Καλό ταξίδι!",
            "Καλώς ήρθες! Καλή σας μέρα!"
          ]
        }
      ]
    },
    "10": {
      "title": "Κάνοντας σχέδια ελεύθερου χρόνου",
      "turns": [
        {
          "text": "Γειά σου! Τι σου αρέσει να κάνεις περισσότερο στον ελεύθερο χρόνο σου;"
        },
        {
          "prompt": "Πες του ότι σου αρέσει να παίζεις ποδόσφαιρο και να ακούς μουσική",
          "options": [
            "Μου αρέσει πολύ να παίζω ποδόσφαιρο και να ακούω μουσική.",
            "Στον ελεύθερο χρόνο μου παίζω ποδόσφαιρο ή διαβάζω ένα βιβλίο."
          ]
        },
        {
          "text": "Το ποδόσφαιρο είναι υπέροχο! Παίζουμε το Σάββατο. Θέλεις να έρθεις μαζί;"
        },
        {
          "prompt": "Εκφράστε το ενδιαφέρον σας και ρωτήστε τι ώρα θα ξεκινήσετε να παίζετε",
          "options": [
            "Ναι, ευχαρίστως! Τι ώρα συναντιέστε;",
            "Αυτό ακούγεται διασκεδαστικό! Πότε παίζεις το Σάββατο;"
          ]
        },
        {
          "text": "Παίζουμε το Σάββατο στις 3 το μεσημέρι στο πάρκο. Απλά φέρτε αθλητικά παπούτσια."
        },
        {
          "prompt": "Επιβεβαιώστε την παρουσία σας την προγραμματισμένη ώρα και πείτε ότι θα έρθετε σίγουρα",
          "options": [
            "Καλώς! Θα έρθω το Σάββατο στις 15:00. Τα λέμε τότε!",
            "Ωραία, θα είμαι εκεί το Σάββατο στις τρεις η ώρα."
          ]
        }
      ]
    },
    "11": {
      "title": "Μιλώντας για τις δουλειές",
      "turns": [
        {
          "text": "Γειά σου! Ποιο είναι το επάγγελμά σας;"
        },
        {
          "prompt": "Πείτε του το επάγγελμά σας (π.χ. μηχανικός υπολογιστών) και την εταιρεία στην οποία εργάζεστε",
          "options": [
            "Είμαι μηχανικός στο επάγγελμα και εργάζομαι σε εταιρεία υπολογιστών.",
            "Εργάζομαι ως πωλητής σε σούπερ μάρκετ."
          ]
        },
        {
          "text": "Αυτό είναι ενδιαφέρον! Πόσες ώρες εργάζεστε την εβδομάδα;"
        },
        {
          "prompt": "Ας πούμε ότι εργάζεστε 40 ώρες την εβδομάδα και η δουλειά σας είναι διασκεδαστική αλλά κουραστική",
          "options": [
            "Δουλεύω 40 ώρες την εβδομάδα. Η δουλειά είναι διασκεδαστική, αλλά είναι αγχωτική.",
            "Δουλεύω σαράντα ώρες. Μου αρέσει πολύ η δουλειά μου."
          ]
        },
        {
          "text": "βλέπω. Και ποια είναι η δουλειά των ονείρων σου;"
        },
        {
          "prompt": "Ας πούμε ότι η δουλειά των ονείρων σας είναι να εργαστείτε ως διευθυντής ή προγραμματιστής λογισμικού και να κερδίσετε πολλά χρήματα",
          "options": [
            "Η δουλειά των ονείρων μου είναι προγραμματιστής λογισμικού. Θα ήθελα να εργαστώ με ευελιξία.",
            "Θα ήθελα να γίνω επιτυχημένος μάγειρας και να έχω το δικό μου εστιατόριο."
          ]
        }
      ]
    },
    "12": {
      "title": "Στο Εστιατόριο",
      "turns": [
        {
          "text": "Καλησπέρα! Έχετε κλείσει τραπέζι;"
        },
        {
          "prompt": "Απαντήστε ναι, έχετε κάνει κράτηση για ένα τραπέζι για δύο με το όνομα 'Ahmad'",
          "options": [
            "Καλησπέρα! Ναι, έχουμε κρατήσει ένα τραπέζι για δύο με το όνομα Ahmad.",
            "Ναι, ένα τραπέζι για δύο. Το όνομα είναι Ahmad."
          ]
        },
        {
          "text": "Βεβαίως, κύριε Ahmad. Εδώ είναι το τραπέζι σας. Τι θα θέλατε να πιείτε;"
        },
        {
          "prompt": "Παραγγείλετε ένα μπουκάλι μεταλλικό νερό και έναν χυμό μήλου",
          "options": [
            "Θα ήθελα ένα μπουκάλι μεταλλικό νερό και ένα χυμό μήλου, παρακαλώ.",
            "Σε παρακαλώ, φέρε μου ένα νερό και ένα χυμό."
          ]
        },
        {
          "text": "Ευχαρίστως. Και τι θα θέλατε να φάτε;"
        },
        {
          "prompt": "Παραγγείλετε ντοματόσουπα ως ορεκτικό και σνίτσελ ως κύριο πιάτο",
          "options": [
            "Ως ορεκτικό η ντοματόσουπα και ως κυρίως πιάτο το σνίτσελ.",
            "Θα πάρω μια σούπα και ένα σνίτσελ, παρακαλώ."
          ]
        },
        {
          "text": "Έρχεται αμέσως επάνω. (Αργότερα...) Ήταν το φαγητό νόστιμο; Θα θέλατε να πληρώσετε;"
        },
        {
          "prompt": "Επαινέστε το φαγητό και ζητήστε το λογαριασμό",
          "options": [
            "Ναι, το φαγητό ήταν φανταστικό! Ο λογαριασμός, παρακαλώ!",
            "Ήταν πολύ νόστιμο. Ο λογαριασμός, παρακαλώ."
          ]
        },
        {
          "text": "Αυτό κάνει 27 Ευρώ 80 Σεντ συνολικά."
        },
        {
          "prompt": "Δώσε του 30 ευρώ και πες του να κρατήσει τα ρέστα (φιλοδώρημα)",
          "options": [
            "Εδώ είναι 30 ευρώ. Κρατήστε τα ρέστα!",
            "Κρατήστε τα ρέστα. Κάντε το 30 ευρώ."
          ]
        }
      ]
    }
  }
};
