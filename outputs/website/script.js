/**
 * Andaman Golf Cup 2026
 * script.js — Main JavaScript for the trilingual static website
 *
 * Modules:
 *   1. Translations Object (EN / TH / RU)
 *   2. setLanguage() — i18n rendering
 *   3. Navigation behaviour (scroll, smooth anchor, hamburger)
 *   4. Registration Form Handler
 *   5. Scroll Animations (IntersectionObserver)
 *   6. DOMContentLoaded Init
 */

'use strict';

/* =============================================================================
   MODULE 1 — TRANSLATIONS
   All keys present for en, th, ru.
   Thai: formal high-society / government register.
   Russian: polished, warm business language for high-net-worth speakers.
============================================================================= */

const translations = {

  /* ---------- ENGLISH ---------- */
  en: {
    'meta.title':        'Andaman Natural Resources Conservation Charity Golf Tournament 2026',
    'meta.description':  'Join Thailand\'s most prestigious charity golf event. 25 May 2026, Royal Thai Army Sports Center Ramindra, Bangkok. Register your team and connect with Thailand\'s most influential leaders. Net proceeds fund youth conservation.',

    'nav.logo':          'Andaman Golf Cup',
    'nav.about':         'About',
    'nav.agenda':        'Agenda',
    'nav.tickets':       'Tickets',
    'nav.sponsorship':   'Sponsorship',
    'nav.register':      'Register',
    'nav.cta':           'Reserve Your Place',

    'hero.eyebrow':      'ANRCF Charity Event · Bangkok, Thailand',
    'hero.headline':     'Andaman Charity Golf',
    'hero.subheadline':  'Where Thailand\'s most influential voices gather for golf, purpose, and connection.',
    'hero.date':         '25 May 2026 · Bangkok, Thailand',
    'hero.proof.label':  '35 Teams — Limited Places',
    'hero.proof.sub':    'Exclusive Charity Golf',
    'hero.cta.register': 'Reserve Your Place ↗',
    'hero.cta.sponsor':  'Become a Sponsor',
    'hero.cta.download': 'Download Proposal ↓',

    'about.heading':     'Where Excellence Meets Purpose',
    'about.body':        'This is not just golf — it is an exclusive gathering of Thailand\'s most influential voices in business, government, and tourism, united by a shared commitment to conservation. Your participation places you among the nation\'s most powerful network while directly funding ANRCF\'s Youth Conservation Fund, supporting environmental camps, scholarships, and nature education programmes.',
    'about.stat1.value': '35',
    'about.stat1.label': 'Teams Only',
    'about.stat2.value': '฿670K',
    'about.stat2.label': 'To Youth Fund',
    'about.stat3.value': '3',
    'about.stat3.label': 'Languages',
    'about.stat4.value': '1',
    'about.stat4.label': 'Unforgettable Day',

    'agenda.heading':      'The Day\'s Programme',
    'agenda.item1.time':   '9:30 AM',
    'agenda.item1.title':  'Registration & Welcome Lunch',
    'agenda.item1.desc':   'Collect your Score Card, enjoy a welcome lunch, and meet your fellow participants before the tournament begins.',
    'agenda.item2.time':   '12:00 PM',
    'agenda.item2.title':  'Golf Tournament Begins',
    'agenda.item2.desc':   'The Andaman Charity Golf tournament commences. Teams compete in a team format across the championship course.',
    'agenda.item3.time':   '6:00 PM',
    'agenda.item3.title':  'Gala Dinner — Phu Chomphon Hall',
    'agenda.item3.desc':   'An exclusive gala dinner at Phu Chomphon Hall, bringing all participants together for an evening of celebration and elite networking.',
    'agenda.item4.time':   '7:00 PM',
    'agenda.item4.title':  'Prize Announcement & Awards Ceremony',
    'agenda.item4.desc':   'Results are announced and prizes awarded across all categories — Flights A, B, C, Lady, Overall Low Gross, and special prizes.',

    'competition.heading':           'Competition Format',
    'competition.format.label':      'Tournament Type',
    'competition.format.value':      'Team Format',
    'competition.prizes.heading':    'Prizes & Awards',
    'competition.prize.individual':  '1st & 2nd Place — Individual',
    'competition.prize.low_gross':   'Overall Low Gross Champion',
    'competition.prize.flightA':     '1st & 2nd Place — Flight A',
    'competition.prize.flightB':     '1st & 2nd Place — Flight B',
    'competition.prize.flightC':     '1st & 2nd Place — Flight C',
    'competition.prize.lady':        '1st & 2nd Place — Flight Lady',
    'competition.special.heading':   'Special Prizes',
    'competition.special.booby':     'Booby Prize',
    'competition.special.pin':       'Nearest to Pin',
    'competition.eligibility.heading': 'Eligibility',
    'competition.eligibility.body':  'Open to all amateur golfers. No age or gender restrictions.',

    'tickets.heading':            'Reserve Your Place',
    'tickets.subheading':         'Limited to 35 teams — secure your place now',
    'tickets.team.badge':         'VVIP',
    'tickets.team.name':          'VVIP Team',
    'tickets.team.price':         '฿50,000',
    'tickets.team.per':           'per team of 4 persons',
    'tickets.team.benefit1':      'Full 18-hole championship course access',
    'tickets.team.benefit2':      'Green fee, caddy & cart included',
    'tickets.team.benefit3':      'Premium gift set for all 4 members',
    'tickets.team.benefit4':      'Gala banquet dinner included',
    'tickets.team.benefit5':      'Complimentary refreshments all day',
    'tickets.team.benefit6':      'Lucky draw & competition prizes',
    'tickets.team.availability':  '35 Teams — Limited Places',
    'tickets.vip.badge':          'VIP',
    'tickets.vip.name':           'VIP Team',
    'tickets.vip.price':          '฿35,000',
    'tickets.vip.per':            'per team of 4 persons',
    'tickets.vip.benefit1':       'Full 18-hole championship course access',
    'tickets.vip.benefit2':       'Green fee, caddy & cart included',
    'tickets.vip.benefit3':       'Gift set for all 4 members',
    'tickets.vip.benefit4':       'Gala banquet dinner included',
    'tickets.vip.benefit5':       'Complimentary refreshments all day',
    'tickets.vip.benefit6':       'Lucky draw & competition prizes',
    'tickets.vip.availability':   '35 Teams — Limited Places',
    'tickets.pdf.badge':          'PROPOSAL',
    'tickets.pdf.name':           'Project Document',
    'tickets.pdf.sub':            'Official event brief & budget',
    'tickets.pdf.desc':           'Download the full official project proposal including event objectives, programme, and financial overview.',
    'tickets.pdf.cta':            'Download PDF ↓',
    'tickets.cta':                'Register Your Team',

    'sponsor.heading':    'Become a Sponsor',
    'sponsor.subheading': 'Align your brand with Thailand\'s most prestigious charity golf event.',
    'sponsor.body':       'Sponsoring the tournament places your organisation in front of Thailand\'s most influential decision-makers while directly funding youth conservation education. Choose the tier that suits your level of support.',
    'sponsor.benefit1':   'Premier Brand Exposure',
    'sponsor.benefit2':   'Elite Networking Access',
    'sponsor.benefit3':      'VIP Gala Presence',
    'sponsor.benefit1.desc': 'Prominent logo placement across all event materials, banners, and digital assets.',
    'sponsor.benefit2.desc': 'Direct access to high-net-worth individuals, government officials, and business leaders.',
    'sponsor.benefit3.desc': 'Reserved seating at the exclusive gala dinner and recognition during the ceremony.',
    'sponsor.tier1.badge':  'Tournament Sponsor',
    'sponsor.tier1.price':  '฿200,000',
    'sponsor.tier1.slots':  '10 sponsors available',
    'sponsor.tier1.b1':     'Premier logo on all event materials',
    'sponsor.tier1.b2':     'VIP table at gala dinner',
    'sponsor.tier1.b3':     'Souvenir presented at ceremony',
    'sponsor.cta':        'Enquire About Sponsorship',

    'charity.heading':       'About ANRCF',
    'charity.body':          'The Andaman Natural Resources Conservation Foundation works to restore, protect, and sustain the natural ecosystems of Thailand\'s Andaman coast. This tournament\'s net proceeds — an estimated ฿670,000 — go directly to our Youth Conservation Fund, supporting environmental camps, nature education, learning materials, and youth scholar networks.',
    'charity.stat1.value':   '10,000+',
    'charity.stat1.label':   'Mangrove Trees Planted',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'Sea Turtles Released',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'Youth Scholarships',
    'charity.link':          'Learn More at anrcf.com →',

    'past.heading':    'Our Work in Action',
    'past.subheading': 'A legacy of conservation and community engagement across the Andaman coast.',
    'past.card1':      'Jazz for the King — ANRCF Charity Gala Concert in Partnership with the Tourism Authority of Thailand',
    'past.card2':      'Unite Hearts, Protect the Forest — National Reforestation Campaign Honouring His Majesty the King',
    'past.card3':      'Return Sea Turtles to the Andaman Sea — Big Cleaning Day, Sirinath National Park, Phuket',
    'past.card4':      'Maya Bay Mooring Project — 10-Agency Coalition to Protect Phi Phi Islands\' Coral Reefs from Anchor Damage',
    'past.card5':      'International Sea Turtle Release Ceremony — Ambassadors from 10 Countries Join ANRCF on the Andaman Coast',

    'register.heading':       'Register Your Interest',
    'register.subheading':    'Complete the form below and our team will be in touch within 48 hours.',
    'register.name':          'Full Name',
    'register.org':           'Organisation / Company',
    'register.email':         'Email Address',
    'register.phone':         'Phone / WhatsApp',
    'register.teamtype':         'Category',
    'register.teamtype.team':    'VVIP Team — ฿50,000',
    'register.teamtype.vip':     'VIP Team — ฿35,000',
    'register.teamtype.sponsor': 'Sponsor — ฿200,000',
    'register.teamcount':     'Number of Teams',
    'register.notes':         'Additional Notes',
    'register.submit':        'Submit Registration',
    'register.required':  '* Required fields',
    'register.err.name':  'Please enter your full name.',
    'register.err.email': 'Please enter a valid email address.',
    'register.err.phone': 'Please enter your phone number.',
    'register.err.type':  'Please select a team category.',

    'confirm.heading':       'Thank You',
    'confirm.body':          'Your registration has been received. Our team will contact you within 48 hours to confirm your place and provide further details regarding payment and logistics.',
    'confirm.bank.heading':  'Payment Details',
    'confirm.bank.details':  'Account Name: Andaman Natural Resources Conservation Foundation\nBank: [BANK NAME — TO BE CONFIRMED]\nAccount Number: [XXXX-XXXX-XXXX — TO BE CONFIRMED]\nAmount: As per selected team category',
    'confirm.bank.note':     'Please use your full name as the transfer reference and send proof of payment to [EMAIL — TO BE CONFIRMED].',

    'footer.tagline':          'A premier charity golf event uniting Thailand\'s most influential voices for conservation.',
    'footer.links.heading':    'Quick Links',
    'footer.contact.heading':  'Contact',
    'footer.contact.email':    '[EMAIL — TO BE CONFIRMED]',
    'footer.contact.phone':    '[PHONE — TO BE CONFIRMED]',
    'footer.copyright':        '© 2026 Andaman Natural Resources Conservation Foundation. All rights reserved.'
  },

  /* ---------- THAI ---------- */
  th: {
    'meta.title':        'โครงการแข่งขันกอล์ฟการกุศลอนุรักษ์ทรัพยากรธรรมชาติอันดามัน 2026',
    'meta.description':  'ร่วมงานกอล์ฟการกุศลเพื่ออนุรักษ์ทรัพยากรธรรมชาติอันดามัน วันที่ 25 พฤษภาคม 2569 ณ สนามกอล์ฟ ศูนย์พัฒนากีฬากองทัพบก รามอินทรา (Royal Thai Army Sports Center Ramindra) กรุงเทพมหานคร รายได้สมทบทุนกองทุนเยาวชนรักษ์สิ่งแวดล้อม',

    'nav.logo':          'อันดามัน กอล์ฟ คัพ',
    'nav.about':         'เกี่ยวกับงาน',
    'nav.agenda':        'กำหนดการ',
    'nav.tickets':       'บัตรเข้าร่วม',
    'nav.sponsorship':   'การสนับสนุน',
    'nav.register':      'ลงทะเบียน',
    'nav.cta':           'สมัคร',

    'hero.eyebrow':      'อีเว้นท์การกุศล ANRCF · กรุงเทพมหานคร ประเทศไทย',
    'hero.headline':     'อันดามันกอล์ฟการกุศล',
    'hero.subheadline':  'สถานที่ที่บุคคลผู้ทรงอิทธิพลที่สุดของประเทศไทยมาพบปะกัน เพื่อกอล์ฟ เพื่อเจตนารมณ์ และเพื่อสายสัมพันธ์อันยิ่งใหญ่',
    'hero.date':         '25 พฤษภาคม 2569 · กรุงเทพมหานคร ประเทศไทย',
    'hero.proof.label':  '35 ทีมเท่านั้น',
    'hero.proof.sub':    'กอล์ฟการกุศลสุดเอ็กซ์คลูซีฟ',
    'hero.cta.register': 'ลงทะเบียนทีมของคุณ',
    'hero.cta.sponsor':  'เป็นผู้สนับสนุนหลัก',
    'hero.cta.download': 'ดาวน์โหลดโครงการ ↓',

    'about.heading':     'ที่ซึ่งความเป็นเลิศพบกับเจตนารมณ์อันสูงส่ง',
    'about.body':        'นี่ไม่ใช่แค่การแข่งขันกอล์ฟ — แต่คือการรวมตัวอันพิเศษของบุคคลผู้ทรงอิทธิพลที่สุดในแวดวงธุรกิจ ภาครัฐ และการท่องเที่ยวของประเทศไทย ที่ยึดโยงกันด้วยพันธกิจร่วมในการอนุรักษ์สิ่งแวดล้อม รายได้สุทธิประมาณ 670,000 บาทจากงานนี้จะมอบให้กองทุนเยาวชนรักษ์ธรรมชาติ เพื่อสนับสนุนค่ายเยาวชน การอบรม สื่อการเรียนรู้ และเครือข่ายเยาวชนอนุรักษ์สิ่งแวดล้อม',
    'about.stat1.value': '35',
    'about.stat1.label': 'ทีมเท่านั้น',
    'about.stat2.value': '฿670K',
    'about.stat2.label': 'สู่กองทุนเยาวชน',
    'about.stat3.value': '3',
    'about.stat3.label': 'ภาษา',
    'about.stat4.value': '1',
    'about.stat4.label': 'วันที่ไม่อาจลืมเลือน',

    'agenda.heading':      'กำหนดการของงาน',
    'agenda.item1.time':   '09:30 น.',
    'agenda.item1.title':  'ลงทะเบียนและรับประทานอาหารกลางวัน',
    'agenda.item1.desc':   'ลงทะเบียนรับ Score Card พร้อมรับประทานอาหารกลางวันต้อนรับก่อนเริ่มการแข่งขัน',
    'agenda.item2.time':   '12:00 น.',
    'agenda.item2.title':  'เริ่มการแข่งขันกอล์ฟ',
    'agenda.item2.desc':   'อันดามันกอล์ฟการกุศลเริ่มต้นอย่างเป็นทางการ ทีมต่าง ๆ แข่งขันในรูปแบบทีมบนสนามแชมเปี้ยนชิพ',
    'agenda.item3.time':   '18:00 น.',
    'agenda.item3.title':  'งานเลี้ยงสังสรรค์ ณ ห้องพู่จอมพล',
    'agenda.item3.desc':   'งานเลี้ยงสังสรรค์อันทรงเกียรติ ณ ห้องพู่จอมพล รวมผู้เข้าร่วมทุกท่านสู่ค่ำคืนแห่งการเฉลิมฉลองและสร้างเครือข่าย',
    'agenda.item4.time':   '19:00 น.',
    'agenda.item4.title':  'ประกาศผลรางวัลและมอบรางวัล',
    'agenda.item4.desc':   'ประกาศผลและมอบรางวัลในทุกประเภท — Flight A, B, C, Lady, Overall Low Gross และรางวัลพิเศษ',

    'competition.heading':           'รูปแบบการแข่งขัน',
    'competition.format.label':      'ประเภทการแข่งขัน',
    'competition.format.value':      'ประเภททีม',
    'competition.prizes.heading':    'รางวัลและเกียรติยศ',
    'competition.prize.individual':  'รางวัลชนะเลิศและรองชนะเลิศประเภทบุคคล',
    'competition.prize.low_gross':   'รางวัลชนะเลิศ Overall Low Gross',
    'competition.prize.flightA':     'รางวัลชนะเลิศและรองชนะเลิศ Flight A',
    'competition.prize.flightB':     'รางวัลชนะเลิศและรองชนะเลิศ Flight B',
    'competition.prize.flightC':     'รางวัลชนะเลิศและรองชนะเลิศ Flight C',
    'competition.prize.lady':        'รางวัลชนะเลิศและรองชนะเลิศ Flight Lady',
    'competition.special.heading':   'รางวัลพิเศษ',
    'competition.special.booby':     'รางวัลบู้ปี้',
    'competition.special.pin':       'รางวัลตีใกล้ธง',
    'competition.eligibility.heading': 'คุณสมบัติผู้เข้าแข่งขัน',
    'competition.eligibility.body':  'เปิดรับนักกอล์ฟสมัครเล่นทั่วไป ไม่จำกัดเพศและวัย',

    'tickets.heading':            'จองที่นั่งของคุณ',
    'tickets.subheading':         'จำกัด 35 ทีมเท่านั้น — จองที่นั่งก่อนเต็ม',
    'tickets.team.badge':         'VVIP',
    'tickets.team.name':          'ทีม VVIP',
    'tickets.team.price':         '฿50,000',
    'tickets.team.per':           'ต่อทีม 4 ท่าน',
    'tickets.team.benefit1':      'สิทธิ์แข่งขัน 18 หลุม สนามแชมป์',
    'tickets.team.benefit2':      'รวม Green Fee, Caddy และ Cart',
    'tickets.team.benefit3':      'ของที่ระลึกพรีเมียมสำหรับทุกท่าน',
    'tickets.team.benefit4':      'รวมงานเลี้ยงกาล่าดินเนอร์',
    'tickets.team.benefit5':      'อาหารว่างและเครื่องดื่มตลอดทั้งวัน',
    'tickets.team.benefit6':      'รางวัล Lucky Draw และรางวัลการแข่งขัน',
    'tickets.team.availability':  '35 ทีม — จำนวนจำกัด',
    'tickets.vip.badge':          'VIP',
    'tickets.vip.name':           'ทีม VIP',
    'tickets.vip.price':          '฿35,000',
    'tickets.vip.per':            'ต่อทีม 4 ท่าน',
    'tickets.vip.benefit1':       'สิทธิ์แข่งขัน 18 หลุม สนามแชมป์',
    'tickets.vip.benefit2':       'รวม Green Fee, Caddy และ Cart',
    'tickets.vip.benefit3':       'ของที่ระลึกสำหรับทุกท่าน',
    'tickets.vip.benefit4':       'รวมงานเลี้ยงกาล่าดินเนอร์',
    'tickets.vip.benefit5':       'อาหารว่างและเครื่องดื่มตลอดทั้งวัน',
    'tickets.vip.benefit6':       'รางวัล Lucky Draw และรางวัลการแข่งขัน',
    'tickets.vip.availability':   '35 ทีม — จำนวนจำกัด',
    'tickets.pdf.badge':          'เอกสาร',
    'tickets.pdf.name':           'เอกสารโครงการ',
    'tickets.pdf.sub':            'ข้อเสนอและงบประมาณอย่างเป็นทางการ',
    'tickets.pdf.desc':           'ดาวน์โหลดโครงการฉบับเต็ม รวมวัตถุประสงค์ กำหนดการ และภาพรวมงบประมาณ',
    'tickets.pdf.cta':            'ดาวน์โหลด PDF ↓',
    'tickets.cta':                'ลงทะเบียนทีมของคุณ',

    'sponsor.heading':    'เป็นผู้สนับสนุนโครงการ',
    'sponsor.subheading': 'เชื่อมโยงแบรนด์ของคุณกับงานกอล์ฟการกุศลอันทรงเกียรติที่สุดของประเทศไทย',
    'sponsor.body':       'การสนับสนุนโครงการนี้จะนำองค์กรของท่านไปสู่สายตาของผู้มีอำนาจตัดสินใจที่ทรงอิทธิพลที่สุดของประเทศไทย พร้อมสนับสนุนกองทุนเยาวชนอนุรักษ์ทรัพยากรธรรมชาติโดยตรง เลือกระดับที่เหมาะกับองค์กรของท่าน',
    'sponsor.benefit1':   'การเปิดรับแบรนด์ในระดับพรีเมียม',
    'sponsor.benefit2':   'สิทธิ์เข้าถึงเครือข่ายชนชั้นนำ',
    'sponsor.benefit3':      'การปรากฏตัวในงานเลี้ยง VIP',
    'sponsor.benefit1.desc': 'การวางโลโก้ที่โดดเด่นในสื่อกิจกรรมทั้งหมด ป้ายโฆษณา และสื่อดิจิทัล',
    'sponsor.benefit2.desc': 'การเข้าถึงโดยตรงกับบุคคลที่มีมูลค่าสุทธิสูง ข้าราชการ และผู้นำธุรกิจ',
    'sponsor.benefit3.desc': 'ที่นั่งสำรองในงานเลี้ยงกาล่าอันทรงเกียรติ พร้อมการยกย่องในพิธี',
    'sponsor.tier1.badge':  'ผู้สนับสนุนหลัก',
    'sponsor.tier1.price':  '฿200,000',
    'sponsor.tier1.slots':  'รับ 10 ราย',
    'sponsor.tier1.b1':     'โลโก้หลักบนสื่อทุกชิ้น',
    'sponsor.tier1.b2':     'โต๊ะ VIP ในงานเลี้ยงกาล่า',
    'sponsor.tier1.b3':     'ของที่ระลึกมอบในพิธี',
    'sponsor.cta':        'สอบถามเรื่องการสนับสนุน',

    'charity.heading':       'เกี่ยวกับ ANRCF',
    'charity.body':          'มูลนิธิอนุรักษ์ทรัพยากรธรรมชาติอันดามัน ทำงานเพื่อฟื้นฟู ปกป้อง และดำรงรักษาระบบนิเวศทางธรรมชาติของชายฝั่งอันดามัน รายได้สุทธิจากการแข่งขันครั้งนี้ประมาณ 670,000 บาท จะมอบให้กองทุนเยาวชนรักษ์ธรรมชาติโดยตรง เพื่อสนับสนุนค่ายเยาวชน การอบรม สื่อการเรียนรู้ และเครือข่ายเยาวชนอนุรักษ์สิ่งแวดล้อม',
    'charity.stat1.value':   '10,000+',
    'charity.stat1.label':   'ต้นโกงกางที่ปลูก',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'เต่าทะเลที่ปล่อยคืนสู่ธรรมชาติ',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'ทุนการศึกษาเยาวชน',
    'charity.link':          'เรียนรู้เพิ่มเติมที่ anrcf.com →',

    'past.heading':    'ผลงานของเราในการปฏิบัติจริง',
    'past.subheading': 'มรดกแห่งการอนุรักษ์และการมีส่วนร่วมกับชุมชนตลอดแนวชายฝั่งอันดามัน',
    'past.card1':      'แจ๊สเพื่อในหลวง — งานกาลาการกุศล ANRCF ร่วมกับการท่องเที่ยวแห่งประเทศไทย',
    'past.card2':      'รวมใจภักดิ์ รักษ์ป่า ถวายพ่อ — โครงการปลูกป่าแห่งชาติเพื่อถวายพระบาทสมเด็จพระเจ้าอยู่หัว',
    'past.card3':      'คืนเต่าคืนสู่ทะเลอันดามัน — Big Cleaning Day อุทยานแห่งชาติสิรินาถ ภูเก็ต',
    'past.card4':      'โครงการวางทุนผูกเรืออ่าวมาหยา — 10 หน่วยงานร่วมปกป้องปะการังหมู่เกาะพีพีจากการทอดสมอเรือ',
    'past.card5':      'พิธีปล่อยเต่าทะเลนานาชาติ — เอกอัครราชทูต 10 ประเทศร่วมกับมูลนิธิ ANRCF ณ ชายฝั่งอันดามัน',

    'register.heading':          'ลงทะเบียนความสนใจของคุณ',
    'register.subheading':       'กรอกแบบฟอร์มด้านล่างและทีมงานของเราจะติดต่อกลับภายใน 48 ชั่วโมง',
    'register.name':             'ชื่อ-นามสกุล',
    'register.org':              'องค์กร / บริษัท',
    'register.email':            'ที่อยู่อีเมล',
    'register.phone':            'โทรศัพท์ / WhatsApp',
    'register.teamtype':             'ประเภท',
    'register.teamtype.team':        'ทีม VVIP — ฿50,000',
    'register.teamtype.vip':         'ทีม VIP — ฿35,000',
    'register.teamtype.sponsor':     'ผู้สนับสนุนหลัก — ฿200,000',
    'register.teamcount':        'จำนวนทีม',
    'register.notes':            'หมายเหตุเพิ่มเติม',
    'register.submit':           'ส่งการลงทะเบียน',
    'register.required':  '* ช่องที่จำเป็นต้องกรอก',
    'register.err.name':  'กรุณากรอกชื่อ-นามสกุลของท่าน',
    'register.err.email': 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง',
    'register.err.phone': 'กรุณากรอกหมายเลขโทรศัพท์ของท่าน',
    'register.err.type':  'กรุณาเลือกประเภทของทีม',

    'confirm.heading':       'ขอบคุณท่าน',
    'confirm.body':          'ได้รับการลงทะเบียนของท่านเรียบร้อยแล้ว ทีมงานของเราจะติดต่อท่านภายใน 48 ชั่วโมง เพื่อยืนยันที่นั่งและให้ข้อมูลเพิ่มเติมเกี่ยวกับการชำระเงินและรายละเอียดการเข้าร่วมงาน',
    'confirm.bank.heading':  'รายละเอียดการชำระเงิน',
    'confirm.bank.details':  'ชื่อบัญชี: มูลนิธิอนุรักษ์ทรัพยากรธรรมชาติอันดามัน\nธนาคาร: [ชื่อธนาคาร — รอการยืนยัน]\nเลขที่บัญชี: [XXXX-XXXX-XXXX — รอการยืนยัน]\nจำนวนเงิน: ตามประเภทของทีมที่เลือก',
    'confirm.bank.note':     'กรุณาใช้ชื่อ-นามสกุลเต็มของท่านเป็นอ้างอิงการโอน และส่งหลักฐานการชำระเงินมาที่ [อีเมล — รอการยืนยัน]',

    'footer.tagline':         'งานกอล์ฟการกุศลระดับพรีเมียมที่รวบรวมผู้ทรงอิทธิพลที่สุดของประเทศไทยเพื่อการอนุรักษ์',
    'footer.links.heading':   'ลิงก์ด่วน',
    'footer.contact.heading': 'ติดต่อเรา',
    'footer.contact.email':   '[อีเมล — รอการยืนยัน]',
    'footer.contact.phone':   '[โทรศัพท์ — รอการยืนยัน]',
    'footer.copyright':       '© 2569 มูลนิธิอนุรักษ์ทรัพยากรธรรมชาติอันดามัน สงวนลิขสิทธิ์ทุกประการ'
  },

  /* ---------- RUSSIAN ---------- */
  ru: {
    'meta.title':        'Благотворительный гольф-турнир по охране природных ресурсов Андамана 2026',
    'meta.description':  'Присоединяйтесь к самому престижному благотворительному гольф-турниру Таиланда. 25 мая 2026 года, Королевский спортивный центр армии Таиланда «Раминтра», Бангкок. Чистые доходы направляются в Молодёжный фонд охраны природы.',

    'nav.logo':          'Andaman Golf Cup',
    'nav.about':         'О турнире',
    'nav.agenda':        'Программа',
    'nav.tickets':       'Билеты',
    'nav.sponsorship':   'Спонсорство',
    'nav.register':      'Регистрация',
    'nav.cta':           'Забронировать место',

    'hero.eyebrow':      'Благотворительное мероприятие ANRCF · Бангкок, Таиланд',
    'hero.headline':     'Благотворительный гольф Андаман',
    'hero.subheadline':  'Место встречи самых влиятельных людей Таиланда — в атмосфере гольфа, единой цели и подлинного партнёрства.',
    'hero.date':         '25 мая 2026 · Бангкок, Таиланд',
    'hero.proof.label':  'Только 35 команд',
    'hero.proof.sub':    'Эксклюзивный благотворительный гольф',
    'hero.cta.register': 'Зарегистрировать команду',
    'hero.cta.sponsor':  'Стать спонсором',
    'hero.cta.download': 'Скачать проект ↓',

    'about.heading':     'Там, где мастерство встречается с призванием',
    'about.body':        'Это не просто гольф — это эксклюзивный съезд самых влиятельных представителей бизнеса, государственного управления и туристической отрасли Таиланда, объединённых общей приверженностью охране природы. Чистые доходы турнира — около 670 000 бат — направляются в Молодёжный фонд охраны природы для поддержки экологических лагерей, образовательных программ и студенческих стипендий.',
    'about.stat1.value': '35',
    'about.stat1.label': 'Команд',
    'about.stat2.value': '฿670K',
    'about.stat2.label': 'В молодёжный фонд',
    'about.stat3.value': '3',
    'about.stat3.label': 'Языка',
    'about.stat4.value': '1',
    'about.stat4.label': 'Незабываемый день',

    'agenda.heading':      'Программа дня',
    'agenda.item1.time':   '9:30',
    'agenda.item1.title':  'Регистрация и обед',
    'agenda.item1.desc':   'Получите карточку счёта, насладитесь приветственным обедом и познакомьтесь с другими участниками перед началом турнира.',
    'agenda.item2.time':   '12:00',
    'agenda.item2.title':  'Старт гольф-турнира',
    'agenda.item2.desc':   'Благотворительный гольф Андаман официально стартует. Команды соревнуются в командном формате на чемпионском поле.',
    'agenda.item3.time':   '18:00',
    'agenda.item3.title':  'Торжественный ужин — зал Пху Чомпон',
    'agenda.item3.desc':   'Торжественный ужин в зале Пху Чомпон объединяет всех участников для вечера праздника и элитного нетворкинга.',
    'agenda.item4.time':   '19:00',
    'agenda.item4.title':  'Церемония награждения',
    'agenda.item4.desc':   'Объявление результатов и вручение призов во всех категориях — Флайты A, B, C, Ladies, Overall Low Gross и специальные призы.',

    'competition.heading':           'Формат соревнований',
    'competition.format.label':      'Тип турнира',
    'competition.format.value':      'Командный формат',
    'competition.prizes.heading':    'Призы и награды',
    'competition.prize.individual':  '1-е и 2-е место — Индивидуальный зачёт',
    'competition.prize.low_gross':   'Чемпион Overall Low Gross',
    'competition.prize.flightA':     '1-е и 2-е место — Флайт A',
    'competition.prize.flightB':     '1-е и 2-е место — Флайт B',
    'competition.prize.flightC':     '1-е и 2-е место — Флайт C',
    'competition.prize.lady':        '1-е и 2-е место — Флайт Lady',
    'competition.special.heading':   'Специальные призы',
    'competition.special.booby':     'Бubi-приз',
    'competition.special.pin':       'Ближайший к флагу',
    'competition.eligibility.heading': 'Требования к участникам',
    'competition.eligibility.body':  'Открыто для всех любителей гольфа. Ограничений по полу и возрасту нет.',

    'tickets.heading':            'Забронировать место',
    'tickets.subheading':         'Только 35 команд — успейте зарегистрироваться',
    'tickets.team.badge':         'VVIP',
    'tickets.team.name':          'Команда VVIP',
    'tickets.team.price':         '฿50 000',
    'tickets.team.per':           'за команду из 4 человек',
    'tickets.team.benefit1':      'Полный доступ к 18-луночному чемпионскому полю',
    'tickets.team.benefit2':      'Green fee, кэдди и гольф-карт включены',
    'tickets.team.benefit3':      'Премиум-подарочный набор для всех 4 участников',
    'tickets.team.benefit4':      'Торжественный гала-ужин включён',
    'tickets.team.benefit5':      'Бесплатные напитки и угощения весь день',
    'tickets.team.benefit6':      'Призы турнира и розыгрыш Lucky Draw',
    'tickets.team.availability':  '35 команд — места ограничены',
    'tickets.vip.badge':          'VIP',
    'tickets.vip.name':           'Команда VIP',
    'tickets.vip.price':          '฿35 000',
    'tickets.vip.per':            'за команду из 4 человек',
    'tickets.vip.benefit1':       'Полный доступ к 18-луночному чемпионскому полю',
    'tickets.vip.benefit2':       'Green fee, кэдди и гольф-карт включены',
    'tickets.vip.benefit3':       'Подарочный набор для всех 4 участников',
    'tickets.vip.benefit4':       'Торжественный гала-ужин включён',
    'tickets.vip.benefit5':       'Бесплатные напитки и угощения весь день',
    'tickets.vip.benefit6':       'Призы турнира и розыгрыш Lucky Draw',
    'tickets.vip.availability':   '35 команд — места ограничены',
    'tickets.pdf.badge':          'ПРОЕКТ',
    'tickets.pdf.name':           'Проектный документ',
    'tickets.pdf.sub':            'Официальный проект и бюджет',
    'tickets.pdf.desc':           'Скачайте полный официальный проект турнира, включая цели, программу и финансовый обзор.',
    'tickets.pdf.cta':            'Скачать PDF ↓',
    'tickets.cta':                'Зарегистрировать команду',

    'sponsor.heading':    'Стать спонсором',
    'sponsor.subheading': 'Ассоциируйте ваш бренд с самым престижным благотворительным гольф-турниром Таиланда.',
    'sponsor.body':       'Спонсорство выводит вашу организацию на первый план для самых влиятельных людей Таиланда и напрямую финансирует молодёжный фонд охраны природы. Выберите подходящий уровень поддержки.',
    'sponsor.benefit1':   'Премиальное присутствие бренда',
    'sponsor.benefit2':   'Доступ к элитному нетворкингу',
    'sponsor.benefit3':      'VIP-участие в гала-ужине',
    'sponsor.benefit1.desc': 'Заметное размещение логотипа на всех материалах мероприятия, баннерах и цифровых ресурсах.',
    'sponsor.benefit2.desc': 'Прямой доступ к состоятельным людям, государственным чиновникам и руководителям бизнеса.',
    'sponsor.benefit3.desc': 'Зарезервированное место на эксклюзивном гала-ужине и признание во время церемонии.',
    'sponsor.tier1.badge':  'Спонсор турнира',
    'sponsor.tier1.price':  '฿200 000',
    'sponsor.tier1.slots':  'Доступно 10 мест',
    'sponsor.tier1.b1':     'Основной логотип на всех материалах',
    'sponsor.tier1.b2':     'VIP-стол на гала-ужине',
    'sponsor.tier1.b3':     'Вручение сувенира на церемонии',
    'sponsor.cta':        'Узнать о спонсорстве',

    'charity.heading':       'О фонде ANRCF',
    'charity.body':          'Фонд охраны природных ресурсов Андаманского моря занимается восстановлением, защитой и сохранением природных экосистем тайского побережья Андамана. Чистые доходы турнира — около 670 000 бат — направляются в Молодёжный фонд охраны природы для поддержки экологических лагерей, образовательных программ, учебных материалов и молодёжных сетей.',
    'charity.stat1.value':   '10 000+',
    'charity.stat1.label':   'Посаженных мангровых деревьев',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'Выпущенных морских черепах',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'Молодёжных стипендий',
    'charity.link':          'Узнать больше на anrcf.com →',

    'past.heading':    'Наша работа в действии',
    'past.subheading': 'Наследие природоохранной деятельности и работы с сообществами на побережье Андамана.',
    'past.card1':      'Джаз для Короля — Благотворительный гала-концерт ANRCF совместно с Туристическим управлением Таиланда',
    'past.card2':      'Объединить сердца, защитить лес — Национальная кампания по лесовосстановлению в честь Его Величества Короля',
    'past.card3':      'Вернём морских черепах в Андаманское море — Большой день уборки, Национальный парк Сиринат, Пхукет',
    'past.card4':      'Проект установки мурингов в бухте Майя-Бэй — Коалиция 10 ведомств для защиты коралловых рифов островов Пхи-Пхи',
    'past.card5':      'Международная церемония выпуска морских черепах — Послы 10 стран присоединились к ANRCF на побережье Андамана',

    'register.heading':          'Зарегистрировать интерес',
    'register.subheading':       'Заполните форму ниже — наша команда свяжется с вами в течение 48 часов.',
    'register.name':             'Полное имя',
    'register.org':              'Организация / Компания',
    'register.email':            'Адрес электронной почты',
    'register.phone':            'Телефон / WhatsApp',
    'register.teamtype':             'Категория',
    'register.teamtype.team':        'Команда VVIP — ฿50 000',
    'register.teamtype.vip':         'Команда VIP — ฿35 000',
    'register.teamtype.sponsor':     'Спонсор — ฿200 000',
    'register.teamcount':        'Количество команд',
    'register.notes':            'Дополнительные примечания',
    'register.submit':           'Отправить заявку',
    'register.required':  '* Обязательные поля',
    'register.err.name':  'Пожалуйста, введите ваше полное имя.',
    'register.err.email': 'Пожалуйста, введите корректный адрес электронной почты.',
    'register.err.phone': 'Пожалуйста, введите ваш номер телефона.',
    'register.err.type':  'Пожалуйста, выберите категорию команды.',

    'confirm.heading':       'Благодарим вас',
    'confirm.body':          'Ваша регистрация получена. Наша команда свяжется с вами в течение 48 часов, чтобы подтвердить ваше место и предоставить дальнейшие сведения об оплате и организационных деталях.',
    'confirm.bank.heading':  'Реквизиты для оплаты',
    'confirm.bank.details':  'Наименование счёта: Andaman Natural Resources Conservation Foundation\nБанк: [НАЗВАНИЕ БАНКА — УТОЧНЯЕТСЯ]\nНомер счёта: [XXXX-XXXX-XXXX — УТОЧНЯЕТСЯ]\nСумма: согласно выбранной категории команды',
    'confirm.bank.note':     'Пожалуйста, укажите ваше полное имя в качестве назначения платежа и отправьте подтверждение перевода на [EMAIL — УТОЧНЯЕТСЯ].',

    'footer.tagline':         'Престижный благотворительный гольф-турнир, объединяющий самых влиятельных людей Таиланда ради сохранения природы.',
    'footer.links.heading':   'Быстрые ссылки',
    'footer.contact.heading': 'Контакты',
    'footer.contact.email':   '[EMAIL — УТОЧНЯЕТСЯ]',
    'footer.contact.phone':   '[ТЕЛЕФОН — УТОЧНЯЕТСЯ]',
    'footer.copyright':       '© 2026 Andaman Natural Resources Conservation Foundation. Все права защищены.'
  }
};

/* =============================================================================
   MODULE 2 — setLanguage
   Renders all [data-i18n] elements, meta description, and title.
============================================================================= */

/**
 * Apply a language to the entire page.
 * @param {string} lang  One of: 'en', 'th', 'ru'
 */
function setLanguage(lang) {
  // Guard: fall back to English if an unsupported lang is requested
  if (!translations[lang]) {
    lang = 'en';
  }

  // 1. Persist the user's choice
  localStorage.setItem('agc_lang', lang);

  // 2. Update the <html lang=""> attribute for accessibility & SEO
  document.documentElement.lang = lang;

  // 3. Update all elements carrying a data-i18n key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value === undefined) return;

    const tag = el.tagName.toLowerCase();

    // For form controls, set the value attribute / placeholder rather than innerHTML
    if (tag === 'input' || tag === 'textarea') {
      if (el.getAttribute('type') === 'submit' || el.getAttribute('type') === 'button') {
        el.value = value;
      } else {
        el.setAttribute('placeholder', value);
      }
    } else if (tag === 'select') {
      // Nothing to set on the <select> itself — options carry their own keys
    } else if (tag === 'option') {
      el.textContent = value;
    } else {
      // For all other elements, set innerHTML so that any inline HTML in
      // translations (e.g. arrows, entities) is rendered correctly.
      // Line breaks in multi-line strings are preserved via CSS white-space.
      el.innerHTML = value;
    }
  });

  // 4. Update <meta> tags that carry a data-i18n-attr="content" attribute
  document.querySelectorAll('[data-i18n-attr="content"]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('content', value);
    }
  });

  // 5. Update the browser tab title
  if (translations[lang]['meta.title']) {
    document.title = translations[lang]['meta.title'];
  }

  // 6. Reflect the active state on language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* =============================================================================
   MODULE 3 — NAVIGATION BEHAVIOUR
   Scroll class, smooth anchors, hamburger toggle.
============================================================================= */

/**
 * Add or remove the .scrolled class on the navbar based on scroll position.
 * CSS uses this class to apply a background / shadow to the initially
 * transparent navbar.
 */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    // Stay light while the hero section is still in view
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    navbar.classList.toggle('nav-light', heroBottom > 72);
  }
}, { passive: true });

/**
 * Smooth-scroll to anchor targets.
 * Native scroll-behavior: smooth in CSS handles most cases, but this
 * explicit handler closes the mobile menu and provides a fallback.
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetSelector = anchor.getAttribute('href');
    if (!targetSelector || targetSelector === '#') return;

    const target = document.querySelector(targetSelector);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile nav if it is open
      const navbar = document.getElementById('navbar');
      if (navbar) navbar.classList.remove('nav-open');
    }
  });
});

/**
 * Hamburger / mobile menu toggle.
 */
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('nav-open');
  });
}

/* =============================================================================
   MODULE 4 — REGISTRATION FORM HANDLER
   Client-side validation; shows confirmation block on success.
============================================================================= */

const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    // ---- Validate: Full Name ------------------------------------------------
    const name    = document.getElementById('reg-name');
    const errName = document.getElementById('err-name');
    if (name && !name.value.trim()) {
      name.classList.add('error');
      if (errName) errName.classList.add('visible');
      valid = false;
    } else if (name) {
      name.classList.remove('error');
      if (errName) errName.classList.remove('visible');
    }

    // ---- Validate: Email ----------------------------------------------------
    const email    = document.getElementById('reg-email');
    const errEmail = document.getElementById('err-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && (!email.value.trim() || !emailRegex.test(email.value.trim()))) {
      email.classList.add('error');
      if (errEmail) errEmail.classList.add('visible');
      valid = false;
    } else if (email) {
      email.classList.remove('error');
      if (errEmail) errEmail.classList.remove('visible');
    }

    // ---- Validate: Phone ----------------------------------------------------
    const phone    = document.getElementById('reg-phone');
    const errPhone = document.getElementById('err-phone');
    if (phone && !phone.value.trim()) {
      phone.classList.add('error');
      if (errPhone) errPhone.classList.add('visible');
      valid = false;
    } else if (phone) {
      phone.classList.remove('error');
      if (errPhone) errPhone.classList.remove('visible');
    }

    // ---- Validate: Team Type (select) ---------------------------------------
    const teamType = document.getElementById('reg-type');
    const errType  = document.getElementById('err-type');
    if (teamType && !teamType.value) {
      teamType.classList.add('error');
      if (errType) errType.classList.add('visible');
      valid = false;
    } else if (teamType) {
      teamType.classList.remove('error');
      if (errType) errType.classList.remove('visible');
    }

    // ---- Submit: show confirmation block ------------------------------------
    if (valid) {
      registrationForm.classList.add('hidden');

      const confirmation = document.getElementById('confirmation');
      if (confirmation) {
        confirmation.classList.remove('hidden');
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

/* =============================================================================
   MODULE 5 — SCROLL ANIMATIONS (IntersectionObserver)
   Elements with class .fade-in-up animate in once when they enter the viewport.
============================================================================= */

(function initScrollAnimations() {
  // IntersectionObserver is supported in all modern browsers.
  // For very old browsers (IE 11) the elements will simply remain visible
  // without the entrance animation.
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all animated elements visible immediately
    document.querySelectorAll('.fade-in-up').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // trigger only once
      }
    });
  }, {
    threshold: 0.15  // 15 % of element visible before triggering
  });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}());

/* =============================================================================
   MODULE 5b — AGENDA SCROLL COLOURS
   As each .agenda-row enters the viewport it receives a data-color attribute
   that drives a CSS colour transition on the time pill.
============================================================================= */

(function initAgendaColors() {
  const rows = document.querySelectorAll('.agenda-row');
  if (!rows.length) return;

  const TRIGGER = 0.6; // 60% down the viewport

  function updateColors() {
    const threshold = window.innerHeight * TRIGGER;
    rows.forEach(row => {
      const top = row.getBoundingClientRect().top;
      if (top < threshold) {
        row.dataset.color = row.dataset.agendaIndex || 0;
      } else {
        delete row.dataset.color;
      }
    });
  }

  window.addEventListener('scroll', updateColors, { passive: true });
  updateColors(); // run once on load
}());

/* =============================================================================
   MODULE 6 — DOMContentLoaded INIT
   Bootstraps the page: language, language-button handlers, nav scroll state.
============================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Restore saved language preference, defaulting to English
  const savedLang = localStorage.getItem('agc_lang') || 'th';
  setLanguage(savedLang);

  // 2. Wire up language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  // 3. Set the initial navbar scroll/light state in case the page loads mid-scroll
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    navbar.classList.toggle('nav-light', heroBottom > 72);
  }

});
