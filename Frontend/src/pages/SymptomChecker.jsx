import { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';

const SymptomChecker = () => {
    const allSymptoms = [
        "Blood in urine पिसाबमा रगत",
        "Painful urination पिसाब गर्दा दुख्ने",
        "Frequent urination बारम्बार पिसाब लाग्ने",
        "Urinary incontinence पिसाब नरोकिने",
        "Kidney stones मृगौलाको पत्थरी",
        "Erectile dysfunction लिंग उठ्ने समस्या",
        "Testicular pain अण्डकोष दुख्ने",
        "Bladder pain मूत्राशय दुख्ने",
        "Difficulty starting urination पिसाब सुरु गर्न गाह्रो",
        "Urinary retention पिसाब नझर्ने",
        "Cloudy urine पिसाब पहेलो वा फोहोर देखिने",
        "Strong persistent urine odor पिसाबको बिरामी गन्ध",
        "Pelvic pain पेल्भिस दुख्ने",
        "Nocturia (frequent night urination) राति बारम्बार पिसाब लाग्ने",
        "Lower abdominal pain तल्लो पेट दुख्ने",
        "Burning sensation during urination पिसाब गर्दा जलन हुने",
        "Chest pain छाती दुख्ने",
        "Shortness of breath सास फुल्ने",
        "Palpitations हृदयको धड्कन बढी महसुस हुने",
        "Irregular heartbeat अनियमित हृदय धड्कन",
        "Swelling in legs/ankles खुट्टा सुन्निने वा सुज्ने",
        "Dizziness चक्कर आउने",
        "Fainting spells बेहोस हुने",
        "High blood pressure उच्च रक्तचाप",
        "Fatigue with exertion सानै काम गर्दा थकान हुने",
        "Pain radiating to left arm बाँया हतमा दुखाइ फैलिने",
        "Rapid weight gain तौल अचानक बढ्ने",
        "Cold sweats चिसो पसिना आउने",
        "Heartburn-like chest discomfort छातीमा जलन हुने",
        "Blue-tinged lips/fingers ओठ वा औंला निलो पर्ने",
        "Racing heartbeat हृदयको धड्कन छिटो हुने",
        "Chest tightness छाती कसेको महसुस हुने",
        "Headaches टाउको दुख्ने",
        "Numbness/tingling सुन्निएको वा चिटिक्क महसुस हुने",
        "Muscle weakness मांसपेशी कमजोर हुने",
        "Seizures दौरा पर्ने",
        "Memory problems स्मरण शक्ति कम हुने",
        "Vision changes दृष्टि समस्या",
        "Tremors हातखुट्टा काँड्ने",
        "Difficulty walking हिँड्न गाह्रो हुने",
        "Speech difficulties बोल्न गाह्रो हुने",
        "Loss of consciousness बेहोस हुने",
        "Chronic pain दीर्घकालीन दुखाइ",
        "Sleep disturbances निद्रामा समस्या",
        "Coordination problems समन्वयमा समस्या",
        "Migraines अर्धाशिशी (आधा टाउको दुख्ने)",
        "Balance problems सन्तुलन खोज्ने",
        "Joint pain जोर्नी दुख्ने",
        "Back pain पछाडि दुख्ने",
        "Swollen joints जोर्नी सुन्निने",
        "Limited range of motion जोर्नी चलाउन गाह्रो",
        "Bone fractures हड्डी भाँच्ने",
        "Muscle pain मांसपेशी दुख्ने",
        "Joint stiffness जोर्नी कडा हुने",
        "Sprains मोचिने",
        "Sports injuries खेलकुद चोट",
        "Neck pain घाँटी दुख्ने",
        "Knee/hip pain घुँडा वा नितम्ब दुख्ने",
        "Bone deformities हड्डी विकृति",
        "Difficulty moving limbs हातखुट्टा चलाउन गाह्रो",
        "Popping/clicking joints जोर्नीबाट आवाज आउने",
        "Shoulder pain काँध दुख्ने",
        "Arm/wrist pain बाहुली वा नारी दुख्ने",
        "Childhood fevers बच्चामा ज्वरो",
        "Developmental delays विकासमा ढिलाई",
        "Poor weight gain तौल नबढ्ने",
        "Behavioral issues व्यवहार समस्या",
        "Childhood vaccinations बच्चाको खोप",
        "Cough/cold in children बच्चामा खोकी/रूखो",
        "Ear infections बच्चामा कान संक्रमण",
        "Childhood asthma बच्चामा दम",
        "Rashes in children बच्चामा ददुरा",
        "Digestive issues in kids बच्चामा पाचन समस्या",
        "Growth concerns बच्चाको वृद्धि समस्या",
        "Learning difficulties सिक्ने समस्या",
        "Sleep problems in children बच्चामा निद्रा समस्या",
        "Adolescent health issues किशोरावस्था स्वास्थ्य समस्या",
        "Bedwetting बच्चाले बिहान भिजाउने",
        "Teething problems दाँत निस्कने समस्या",
        "Rashes ददुरा",
        "Acne एक्ने",
        "Eczema एक्जिमा",
        "Psoriasis सोरायसिस",
        "Skin discoloration छालाको रंग परिवर्तन",
        "Moles/changes तिलमा परिवर्तन",
        "Hair loss कपाल झर्ने",
        "Nail problems नङ समस्या",
        "Dry skin रुखो छाला",
        "Excessive sweating धेरै पसिना आउने",
        "Skin infections छाला संक्रमण",
        "Hives पित्ती उठ्ने",
        "Skin growths छालामा गाँठो",
        "Itchy skin खटलाग्दो छाला",
        "Sunburn घामले पोल्ने",
        "Warts मसिना",
        "Abdominal pain पेट दुख्ने",
        "Diarrhea पखाला",
        "Constipation दिसा नझर्ने",
        "Heartburn अम्लपित्त",
        "Bloating पेट फुल्ने",
        "Nausea मच्काउने",
        "Vomiting वान्ता हुने",
        "Rectal bleeding गुदाबाट रगत आउने",
        "Difficulty swallowing निल्न गाह्रो",
        "Weight loss तौल घट्ने",
        "Food intolerances खानेकुरा नबढ्ने",
        "Liver problems लिबर समस्या",
        "Gallbladder pain पित्ताशय दुख्ने",
        "Hemorrhoids बवासीर",
        "Changes in bowel habits दिसाको बानीमा परिवर्तन",
        "Acid reflux अम्ल फर्कने",
        "Cough खोकी",
        "Wheezing घरघराउने",
        "Chronic bronchitis दीर्घकालीन ब्रोंकाइटिस",
        "Asthma symptoms दमका लक्षणहरू",
        "COPD symptoms फोक्सोको दीर्घकालीन रोगका लक्षण",
        "Lung infections फोक्सो संक्रमण",
        "Coughing up blood खोकीमा रगत आउने",
        "Sleep apnea निद्रामा सास रोकिने",
        "Pulmonary fibrosis फोक्सो कडा हुने",
        "Allergic respiratory symptoms एलर्जीको सास फेर्ने समस्या",
        "Pneumonia न्युमोनिया",
        "Smoking-related lung issues धूम्रपानबाट फोक्सो समस्या",
        "Chronic cough दीर्घकालीन खोकी",
        "Chest congestion छाती भरिएको महसुस हुने",
        "Fatigue थकान",
        "Weight changes तौलमा परिवर्तन",
        "Diabetes symptoms मधुमेहका लक्षण",
        "Thyroid problems थाइराइड समस्याहरू",
        "Hormonal imbalances हर्मोन असन्तुलन",
        "Excessive thirst/urination धेरै पिसाब लाग्ने/धेरै तिर्खा लाग्ने",
        "Metabolic disorders मेटाबोलिक समस्या",
        "Osteoporosis हड्डी कमजोर हुने",
        "Adrenal problems एड्रिनल ग्रन्थिको समस्या",
        "Pituitary disorders पिट्यूटरी ग्रन्थिको विकार",
        "Growth disorders बढ्दो वा कम वृद्धि",
        "Menstrual irregularities महिनावारी अनियमितता",
        "Low testosterone टेस्टोस्टेरोन कम हुनु",
        "Cholesterol issues कोलेस्टेरोलको समस्या",
        "Heat/cold intolerance गर्मी/चिसो सहन नसक्ने",
        "Increased hunger बढी भोक लाग्ने",
        "Slow healing wounds घाउ ढिलो निको हुने",
        "Darkened skin patches छालामा कालो दागहरू",
        "Blurred vision धुमिलो दृष्टि",
        "Eye pain आँखामा दुखाइ",
        "Red eyes रातो आँखा",
        "Dry eyes सुक्खा आँखा",
        "Floaters/flashes आँखामा फ्लोटर/झिल्काहरू",
        "Double vision दोहोरो देखिने",
        "Vision loss दृष्टि हराउनु",
        "Cataract symptoms मोतीबिन्दुका लक्षण",
        "Glaucoma symptoms कालो मोतीबिन्दुका लक्षण",
        "Eye infections आँखा संक्रमण",
        "Light sensitivity प्रकाशप्रति संवेदनशीलता",
        "Difficulty seeing at night रातमा देख्न गाह्रो हुने",
        "Watery eyes आँखाबाट पानी आउने",
        "Eyelid problems पल्कामा समस्या",
        "Eye discharge आँखाबाट डिस्चार्ज",
        "Itchy eyes आँखा चिलाउने",
        "Swollen eyelids पल्का सुन्निने",
        "Eye fatigue आँखामा थकान",
        "Ear pain कान दुख्ने",
        "Hearing loss सुन्न नसक्ने",
        "Tinnitus कानमा आवाज गुँज्ने",
        "Sinus problems साइनसको समस्या",
        "Sore throat घाँटी दुख्ने",
        "Nasal congestion नाक बन्द हुने",
        "Vertigo घुमाउने महसुस हुने",
        "Tonsillitis टन्सिलको समस्या",
        "Voice changes आवाज परिवर्तन",
        "Swallowing difficulties निल्न गाह्रो हुने",
        "Nosebleeds नाकबाट रगत आउने",
        "Facial pain अनुहारमा दुखाइ",
        "Snoring/sleep apnea सुत्दाखेरि घुर्ने/सास रोकिने",
        "Head/neck masses टाउको/घाँटीमा गाँठो",
        "Ear drainage कानबाट पस वा पानी आउने",
        "Loss of smell गन्ध नआउने",
        "Hoarseness स्वर कर्कश हुने",
        "Ear fullness कान भरिएको महसुस",
        "Unexplained weight loss कारणबिना वजन घट्ने",
        "Persistent fatigue लगातार थकान",
        "Lumps/masses गाँठो वा मासु उम्रनु",
        "Unusual bleeding असामान्य रक्तश्राव",
        "Skin changes छालामा परिवर्तन",
        "Persistent pain लगातार दुखाइ",
        "Changes in bowel/bladder पिसाब/पाखाना सम्बन्धी परिवर्तन",
        "Nagging cough पुरानो खोकी",
        "White spots in mouth मुखमा सेता धब्बाहरू",
        "Unusual night sweats रातको समयमा अत्यधिक पसिना",
        "Fever of unknown origin अज्ञात ज्वरो",
        "Changes in moles तिल वा मोलमा परिवर्तन",
        "Persistent indigestion लगातार अपच",
        "Unhealing sores ननिको हुने घाउहरू",
        "Chronic headaches पुरानो टाउको दुखाइ",
        "Bone pain हड्डी दुख्ने",
        "Appetite loss भोक नलाग्ने",
        "Depression डिप्रेशन",
        "Anxiety चिन्ता",
        "Mood swings मूडमा उतार-चढाव",
        "Suicidal thoughts आत्महत्या सोच",
        "Panic attacks प्यानिक अट्याक",
        "Sleep disorders निन्द्रा समस्याहरू",
        "Eating disorders खानपानको समस्या",
        "Addiction issues लत लाग्ने समस्या",
        "Personality disorders व्यक्तित्वको विकार",
        "Psychotic symptoms मनोवैज्ञानिक लक्षणहरू",
        "OCD symptoms ओसीडी लक्षणहरू",
        "PTSD symptoms पीटीएसडी लक्षण",
        "ADHD symptoms एडीएचडी लक्षण",
        "Dementia symptoms डिमेन्सिया लक्षणहरू",
        "Irritability चिडचिडाहट",
        "Social withdrawal समाजिक रूपमा अलग हुने",
        "Hallucinations भ्रम देख्ने",
        "Impulsive behavior आकस्मिक व्यवहार",
        "Pelvic pain पेल्भिक दुखाइ",
        "Irregular periods अनियमित महिनावारी",
        "Painful periods महिनावारीको बेलामा दुखाइ",
        "Vaginal discharge योनिमा डिस्चार्ज",
        "Menopausal symptoms रजोनिवृत्तिका लक्षण",
        "Fertility issues बाँझोपन",
        "Pain during intercourse सम्भोगको बेला दुखाइ",
        "Breast concerns स्तन सम्बन्धी चिन्ता",
        "Pap smear needs प्याप स्मियरको आवश्यकता",
        "Vaginal bleeding योनिबाट रक्तश्राव",
        "Endometriosis symptoms एन्डोमेट्रियोसिसका लक्षणहरू",
        "PCOS symptoms पोलिसिस्टिक ओभरी सिन्ड्रोम",
        "STD concerns यौन संक्रामक रोगको शंका",
        "Missed periods महिनावारी रोकिने",
        "Heavy menstrual bleeding अत्यधिक महिनावारी",
        "Vaginal itching योनिमा चिलाउने",
        "Breast tenderness स्तन दुख्ने",
        "Appendicitis symptoms अपेन्डिसाइटिसका लक्षण",
        "Hernia symptoms हर्नियाका लक्षण",
        "Gallbladder symptoms पित्तथैलीको समस्या",
        "Acute abdominal pain तीव्र पेट दुखाइ",
        "Bowel obstruction आन्द्रा अवरुद्ध हुने",
        "Skin lesions needing removal छालाका गाठा हटाउन",
        "Breast lumps स्तनमा गाँठो",
        "Varicose veins शिरा फुल्ने समस्या",
        "Pilonidal cysts पाइलोनिडल सिस्ट",
        "Lipomas लिपोमा (चिल्लो गाठा)",
        "Surgical wound care शल्यक्रिया पछिको घाउको हेरचाह",
        "Trauma injuries आघात/चोटपटक",
        "Post-operative complications शल्यक्रिया पछिको जटिलता",
        "Non-healing wounds ननिको हुने घाउहरू",
        "Gangrene ग्याङ्ग्रिन (मांस मर्ने रोग)",
        "Abscesses घाउमा पस हुने",
        "Severe burns गम्भीर जलन"
    ];


    const departments = [

        {
            "name": "मूत्रविज्ञान (Urology)",
            "symptoms": [
                "Blood in urine पिसाबमा रगत",
                "Painful urination पिसाब गर्दा दुख्ने",
                "Frequent urination बारम्बार पिसाब लाग्ने",
                "Urinary incontinence पिसाब नरोकिने",
                "Kidney stones मृगौलाको पत्थरी",
                "Erectile dysfunction लिंग उठ्ने समस्या",
                "Testicular pain अण्डकोष दुख्ने",
                "Bladder pain मूत्राशय दुख्ने",
                "Difficulty starting urination पिसाब सुरु गर्न गाह्रो",
                "Urinary retention पिसाब नझर्ने",
                "Cloudy urine पिसाब पहेलो वा फोहोर देखिने",
                "Strong persistent urine odor पिसाबको बिरामी गन्ध",
                "Pelvic pain पेल्भिस दुख्ने",
                "Nocturia (frequent night urination) राति बारम्बार पिसाब लाग्ने",
                "Lower abdominal pain तल्लो पेट दुख्ने",
                "Burning sensation during urination पिसाब गर्दा जलन हुने"
            ],
            "icon": "🩺"
        },
        {
            "name": "हृदयरोग विज्ञान (Cardiology)",
            "symptoms": [
                "Chest pain छाती दुख्ने",
                "Shortness of breath सास फुल्ने",
                "Palpitations हृदयको धड्कन बढी महसुस हुने",
                "Irregular heartbeat अनियमित हृदय धड्कन",
                "Swelling in legs/ankles खुट्टा सुन्निने वा सुज्ने",
                "Dizziness चक्कर आउने",
                "Fainting spells बेहोस हुने",
                "High blood pressure उच्च रक्तचाप",
                "Fatigue with exertion सानै काम गर्दा थकान हुने",
                "Pain radiating to left arm बाँया हतमा दुखाइ फैलिने",
                "Rapid weight gain तौल अचानक बढ्ने",
                "Cold sweats चिसो पसिना आउने",
                "Heartburn-like chest discomfort छातीमा जलन हुने",
                "Blue-tinged lips/fingers ओठ वा औंला निलो पर्ने",
                "Racing heartbeat हृदयको धड्कन छिटो हुने",
                "Chest tightness छाती कसेको महसुस हुने"
            ],
            "icon": "❤️"
        },
        {
            "name": "स्नायु विज्ञान (Neurology)",
            "symptoms": [
                "Headaches टाउको दुख्ने",
                "Dizziness चक्कर आउने",
                "Numbness/tingling सुन्निएको वा चिटिक्क महसुस हुने",
                "Muscle weakness मांसपेशी कमजोर हुने",
                "Seizures दौरा पर्ने",
                "Memory problems स्मरण शक्ति कम हुने",
                "Vision changes दृष्टि समस्या",
                "Tremors हातखुट्टा काँड्ने",
                "Difficulty walking हिँड्न गाह्रो हुने",
                "Speech difficulties बोल्न गाह्रो हुने",
                "Loss of consciousness बेहोस हुने",
                "Chronic pain दीर्घकालीन दुखाइ",
                "Sleep disturbances निद्रामा समस्या",
                "Coordination problems समन्वयमा समस्या",
                "Migraines अर्धाशिशी (आधा टाउको दुख्ने)",
                "Balance problems सन्तुलन खोज्ने"
            ],
            "icon": "🧠"
        },
        {
            "name": "अस्थि र जोर्नी विज्ञान (Orthopedics)",
            "symptoms": [
                "Joint pain जोर्नी दुख्ने",
                "Back pain पछाडि दुख्ने",
                "Swollen joints जोर्नी सुन्निने",
                "Limited range of motion जोर्नी चलाउन गाह्रो",
                "Bone fractures हड्डी भाँच्ने",
                "Muscle pain मांसपेशी दुख्ने",
                "Joint stiffness जोर्नी कडा हुने",
                "Sprains मोचिने",
                "Sports injuries खेलकुद चोट",
                "Neck pain घाँटी दुख्ने",
                "Knee/hip pain घुँडा वा नितम्ब दुख्ने",
                "Bone deformities हड्डी विकृति",
                "Difficulty moving limbs हातखुट्टा चलाउन गाह्रो",
                "Popping/clicking joints जोर्नीबाट आवाज आउने",
                "Shoulder pain काँध दुख्ने",
                "Arm/wrist pain बाहुली वा नारी दुख्ने"
            ],
            "icon": "🦴"
        },
        {
            "name": "बालरोग विज्ञान (Pediatrics)",
            "symptoms": [
                "Childhood fevers बच्चामा ज्वरो",
                "Developmental delays विकासमा ढिलाई",
                "Poor weight gain तौल नबढ्ने",
                "Behavioral issues व्यवहार समस्या",
                "Childhood vaccinations बच्चाको खोप",
                "Cough/cold in children बच्चामा खोकी/रूखो",
                "Ear infections बच्चामा कान संक्रमण",
                "Childhood asthma बच्चामा दम",
                "Rashes in children बच्चामा ददुरा",
                "Digestive issues in kids बच्चामा पाचन समस्या",
                "Growth concerns बच्चाको वृद्धि समस्या",
                "Learning difficulties सिक्ने समस्या",
                "Sleep problems in children बच्चामा निद्रा समस्या",
                "Adolescent health issues किशोरावस्था स्वास्थ्य समस्या",
                "Bedwetting बच्चाले बिहान भिजाउने",
                "Teething problems दाँत निस्कने समस्या"
            ],
            "icon": "👶"
        },
        {
            "name": "छाला विज्ञान (Dermatology)",
            "symptoms": [
                "Rashes ददुरा",
                "Acne एक्ने",
                "Eczema एक्जिमा",
                "Psoriasis सोरायसिस",
                "Skin discoloration छालाको रंग परिवर्तन",
                "Moles/changes तिलमा परिवर्तन",
                "Hair loss कपाल झर्ने",
                "Nail problems नङ समस्या",
                "Dry skin रुखो छाला",
                "Excessive sweating धेरै पसिना आउने",
                "Skin infections छाला संक्रमण",
                "Hives पित्ती उठ्ने",
                "Skin growths छालामा गाँठो",
                "Itchy skin खटलाग्दो छाला",
                "Sunburn घामले पोल्ने",
                "Warts मसिना"
            ],
            "icon": "🔬"
        },
        {
            "name": "पाचन तंत्र विज्ञान (Gastroenterology)",
            "symptoms": [
                "Abdominal pain पेट दुख्ने",
                "Diarrhea पखाला",
                "Constipation दिसा नझर्ने",
                "Heartburn अम्लपित्त",
                "Bloating पेट फुल्ने",
                "Nausea मच्काउने",
                "Vomiting वान्ता हुने",
                "Rectal bleeding गुदाबाट रगत आउने",
                "Difficulty swallowing निल्न गाह्रो",
                "Weight loss तौल घट्ने",
                "Food intolerances खानेकुरा नबढ्ने",
                "Liver problems लिबर समस्या",
                "Gallbladder pain पित्ताशय दुख्ने",
                "Hemorrhoids बवासीर",
                "Changes in bowel habits दिसाको बानीमा परिवर्तन",
                "Acid reflux अम्ल फर्कने"
            ],
            "icon": "🧫"
        },
        {
            "name": "फोक्सो विज्ञान (Pulmonology)",
            "symptoms": [
                "Cough खोकी",
                "Shortness of breath सास फुल्ने",
                "Wheezing घरघराउने",
                "Chest tightness छाती कसेको महसुस हुने",
                "Chronic bronchitis दीर्घकालीन ब्रोंकाइटिस",
                "Asthma symptoms दमका लक्षणहरू",
                "COPD symptoms फोक्सोको दीर्घकालीन रोगका लक्षण",
                "Lung infections फोक्सो संक्रमण",
                "Coughing up blood खोकीमा रगत आउने",
                "Sleep apnea निद्रामा सास रोकिने",
                "Pulmonary fibrosis फोक्सो कडा हुने",
                "Allergic respiratory symptoms एलर्जीको सास फेर्ने समस्या",
                "Pneumonia न्युमोनिया",
                "Smoking-related lung issues धूम्रपानबाट फोक्सो समस्या",
                "Chronic cough दीर्घकालीन खोकी",
                "Chest congestion छाती भरिएको महसुस हुने"
            ],
            "icon": "🌬️"
        },


        {
            "name": "अन्तःस्रावी विज्ञान (Endocrinology)",
            "symptoms": [
                "Fatigue थकान",
                "Weight changes तौलमा परिवर्तन",
                "Diabetes symptoms मधुमेहका लक्षण",
                "Thyroid problems थाइराइड समस्याहरू",
                "Hormonal imbalances हर्मोन असन्तुलन",
                "Excessive thirst/urination धेरै पिसाब लाग्ने/धेरै तिर्खा लाग्ने",
                "Metabolic disorders मेटाबोलिक समस्या",
                "Osteoporosis हड्डी कमजोर हुने",
                "Adrenal problems एड्रिनल ग्रन्थिको समस्या",
                "Pituitary disorders पिट्यूटरी ग्रन्थिको विकार",
                "Growth disorders बढ्दो वा कम वृद्धि",
                "Menstrual irregularities महिनावारी अनियमितता",
                "Low testosterone टेस्टोस्टेरोन कम हुनु",
                "Cholesterol issues कोलेस्टेरोलको समस्या",
                "Heat/cold intolerance गर्मी/चिसो सहन नसक्ने",
                "Increased hunger बढी भोक लाग्ने",
                "Slow healing wounds घाउ ढिलो निको हुने",
                "Darkened skin patches छालामा कालो दागहरू"
            ],
            "icon": "⚖️"
        },
        {
            "name": "नेत्र विज्ञान (Ophthalmology)",
            "symptoms": [
                "Blurred vision धुमिलो दृष्टि",
                "Eye pain आँखामा दुखाइ",
                "Red eyes रातो आँखा",
                "Dry eyes सुक्खा आँखा",
                "Floaters/flashes आँखामा फ्लोटर/झिल्काहरू",
                "Double vision दोहोरो देखिने",
                "Vision loss दृष्टि हराउनु",
                "Cataract symptoms मोतीबिन्दुका लक्षण",
                "Glaucoma symptoms कालो मोतीबिन्दुका लक्षण",
                "Eye infections आँखा संक्रमण",
                "Light sensitivity प्रकाशप्रति संवेदनशीलता",
                "Difficulty seeing at night रातमा देख्न गाह्रो हुने",
                "Watery eyes आँखाबाट पानी आउने",
                "Eyelid problems पल्कामा समस्या",
                "Eye discharge आँखाबाट डिस्चार्ज",
                "Itchy eyes आँखा चिलाउने",
                "Swollen eyelids पल्का सुन्निने",
                "Eye fatigue आँखामा थकान"
            ],
            "icon": "👁️"
        },
        {
            "name": "नाक, कान, घाँटी (ENT - Otolaryngology)",
            "symptoms": [
                "Ear pain कान दुख्ने",
                "Hearing loss सुन्न नसक्ने",
                "Tinnitus कानमा आवाज गुँज्ने",
                "Sinus problems साइनसको समस्या",
                "Sore throat घाँटी दुख्ने",
                "Nasal congestion नाक बन्द हुने",
                "Vertigo घुमाउने महसुस हुने",
                "Tonsillitis टन्सिलको समस्या",
                "Voice changes आवाज परिवर्तन",
                "Swallowing difficulties निल्न गाह्रो हुने",
                "Nosebleeds नाकबाट रगत आउने",
                "Facial pain अनुहारमा दुखाइ",
                "Snoring/sleep apnea सुत्दाखेरि घुर्ने/सास रोकिने",
                "Head/neck masses टाउको/घाँटीमा गाँठो",
                "Ear drainage कानबाट पस वा पानी आउने",
                "Loss of smell गन्ध नआउने",
                "Hoarseness स्वर कर्कश हुने",
                "Ear fullness कान भरिएको महसुस"
            ],
            "icon": "👂"
        },
        {
            "name": "क्यान्सर विज्ञान (Oncology)",
            "symptoms": [
                "Unexplained weight loss कारणबिना वजन घट्ने",
                "Persistent fatigue लगातार थकान",
                "Lumps/masses गाँठो वा मासु उम्रनु",
                "Unusual bleeding असामान्य रक्तश्राव",
                "Skin changes छालामा परिवर्तन",
                "Persistent pain लगातार दुखाइ",
                "Changes in bowel/bladder पिसाब/पाखाना सम्बन्धी परिवर्तन",
                "Difficulty swallowing निल्न गाह्रो हुने",
                "Nagging cough पुरानो खोकी",
                "White spots in mouth मुखमा सेता धब्बाहरू",
                "Unusual night sweats रातको समयमा अत्यधिक पसिना",
                "Fever of unknown origin अज्ञात ज्वरो",
                "Changes in moles तिल वा मोलमा परिवर्तन",
                "Persistent indigestion लगातार अपच",
                "Unhealing sores ननिको हुने घाउहरू",
                "Chronic headaches पुरानो टाउको दुखाइ",
                "Bone pain हड्डी दुख्ने",
                "Appetite loss भोक नलाग्ने"
            ],
            "icon": "🦠"
        },
        {
            "name": "मनोविज्ञान (Psychiatry)",
            "symptoms": [
                "Depression डिप्रेशन",
                "Anxiety चिन्ता",
                "Mood swings मूडमा उतार-चढाव",
                "Suicidal thoughts आत्महत्या सोच",
                "Panic attacks प्यानिक अट्याक",
                "Sleep disorders निन्द्रा समस्याहरू",
                "Eating disorders खानपानको समस्या",
                "Addiction issues लत लाग्ने समस्या",
                "Personality disorders व्यक्तित्वको विकार",
                "Psychotic symptoms मनोवैज्ञानिक लक्षणहरू",
                "OCD symptoms ओसीडी लक्षणहरू",
                "PTSD symptoms पीटीएसडी लक्षण",
                "ADHD symptoms एडीएचडी लक्षण",
                "Dementia symptoms डिमेन्सिया लक्षणहरू",
                "Irritability चिडचिडाहट",
                "Social withdrawal समाजिक रूपमा अलग हुने",
                "Hallucinations भ्रम देख्ने",
                "Impulsive behavior आकस्मिक व्यवहार"
            ],
            "icon": "🧠💊"
        },
        {
            "name": "स्त्री रोग (Gynecology)",
            "symptoms": [
                "Pelvic pain पेल्भिक दुखाइ",
                "Irregular periods अनियमित महिनावारी",
                "Painful periods महिनावारीको बेलामा दुखाइ",
                "Vaginal discharge योनिमा डिस्चार्ज",
                "Menopausal symptoms रजोनिवृत्तिका लक्षण",
                "Fertility issues बाँझोपन",
                "Pain during intercourse सम्भोगको बेला दुखाइ",
                "Urinary incontinence पिसाब रोक्न नसक्ने",
                "Breast concerns स्तन सम्बन्धी चिन्ता",
                "Pap smear needs प्याप स्मियरको आवश्यकता",
                "Vaginal bleeding योनिबाट रक्तश्राव",
                "Endometriosis symptoms एन्डोमेट्रियोसिसका लक्षणहरू",
                "PCOS symptoms पोलिसिस्टिक ओभरी सिन्ड्रोम",
                "STD concerns यौन संक्रामक रोगको शंका",
                "Missed periods महिनावारी रोकिने",
                "Heavy menstrual bleeding अत्यधिक महिनावारी",
                "Vaginal itching योनिमा चिलाउने",
                "Breast tenderness स्तन दुख्ने"
            ],
            "icon": "🌸"
        },
        {
            "name": "सामान्य शल्य चिकित्सा (General Surgery)",
            "symptoms": [
                "Appendicitis symptoms अपेन्डिसाइटिसका लक्षण",
                "Hernia symptoms हर्नियाका लक्षण",
                "Gallbladder symptoms पित्तथैलीको समस्या",
                "Acute abdominal pain तीव्र पेट दुखाइ",
                "Bowel obstruction आन्द्रा अवरुद्ध हुने",
                "Hemorrhoid problems बवासीर",
                "Skin lesions needing removal छालाका गाठा हटाउन",
                "Breast lumps स्तनमा गाँठो",
                "Varicose veins शिरा फुल्ने समस्या",
                "Pilonidal cysts पाइलोनिडल सिस्ट",
                "Lipomas लिपोमा (चिल्लो गाठा)",
                "Surgical wound care शल्यक्रिया पछिको घाउको हेरचाह",
                "Trauma injuries आघात/चोटपटक",
                "Post-operative complications शल्यक्रिया पछिको जटिलता",
                "Non-healing wounds ननिको हुने घाउहरू",
                "Gangrene ग्याङ्ग्रिन (मांस मर्ने रोग)",
                "Abscesses घाउमा पस हुने",
                "Severe burns गम्भीर जलन"
            ],
            "icon": "🔪"
        }



    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSymptoms, setFilteredSymptoms] = useState(allSymptoms);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [matchedDepartments, setMatchedDepartments] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSymptomToggle = (symptom) => {
        setSelectedSymptoms((prev) =>
            prev.includes(symptom)
                ? prev.filter((s) => s !== symptom)
                : [...prev, symptom]
        );
    };

    const handleSearch = () => {
        const filtered = allSymptoms.filter((symptom) =>
            symptom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSymptoms(filtered);
    };

    const handleAnalyze = () => {
        const matched = departments.filter((dept) =>
            dept.symptoms.some((symptom) => selectedSymptoms.includes(symptom))
        );
        setMatchedDepartments(matched);
        setShowResults(true);
    };

    return (
        <section>
            <div className="container py-10 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="लक्षणहरू खाेजनुहोस्..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007e69]"
                        />
                        <button
                            onClick={handleSearch}
                            className="px-6 py-3 bg-[#007e69] text-white rounded-lg hover:bg-[#005f4e] transition-colors"
                        >
                            Search
                        </button>
                    </div>
                    
                    {/* Notification Box */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-blue-700">
                                    <span className="font-semibold">नोट:</span> हामी सल्लाह दिन्छौं कि तपाईंले पहिले MBBS डाक्टर (मेडिकल अफिसर) संग परामर्श गर्नुहोस् र रेफरल लिएर विशेषज्ञ डाक्टरको सेवा लिनुहोस्। तर यदि तपाईंलाई आफ्ना लक्षणहरूमा पक्का हुनुहुन्छ भने, तपाईं सिधै विशेषज्ञ डाक्टरको सेवा लिन सक्नुहुन्छ।
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left: Symptom Selector */}
                        <div className="border p-6 rounded-2xl shadow-md bg-zinc-700">
                            <h3 className="text-2xl font-semibold mb-4 text-headingColor">Select Symptoms</h3>
                            <div className="max-h-64 overflow-y-auto pr-2">
                                {filteredSymptoms.map((symptom, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedSymptoms.includes(symptom)}
                                            onChange={() => handleSymptomToggle(symptom)}
                                            className="mr-3 w-4 h-4"
                                        />
                                        <label className="text-headingColor">{symptom}</label>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleAnalyze}
                                className="mt-6 w-full py-3 bg-[#007e69] text-white rounded-lg hover:bg-[#005f4e] transition-colors"
                            >
                                कुन डाक्टरसँग भेट्न आवश्यक छ ?
                                <BsArrowRight className="inline-block ml-2 text-red-500 font-extrabold text-3xl" />
                            </button>
                        </div>

                        {/* Right: Results */}
                        <div className="border p-6 rounded-2xl shadow-md min-h-[120px]">
                            <h3 className="text-2xl font-semibold mb-4 text-headingColor">विशेषज्ञ डाक्टर</h3>
                            
                            {showResults && (
                                <div className="overflow-hidden">
                                    {matchedDepartments.length === 0 ? (
                                        <p className="text-black">
                                            No departments matched. Please select symptoms and click the button.
                                        </p>
                                    ) : (
                                        <div className="grid gap-4 mt-4">
                                            {matchedDepartments.map((dept, index) => (
                                                <div
                                                    key={index}
                                                    className="p-5 bg-[#f9f9f9] border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#007e69] transition duration-300"
                                                >
                                                    <div className="text-4xl mb-3">{dept.icon}</div>
                                                    <h4 className="text-xl font-semibold text-[#007e69]"> {dept.name}मा जानुहोस् । </h4>
                                                    <ul className="text-sm text-gray-700 mt-2 list-disc pl-5">
                                                        {dept.symptoms.map((symptom, i) => (
                                                            <li key={i}>{symptom}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SymptomChecker;