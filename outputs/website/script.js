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
    'meta.title':        'Andaman Golf Cup 2026',
    'meta.description':  'Join Thailand\'s most exclusive charity golf event. 25 May 2026, Bangkok. Register your VVIP or VIP team and connect with Thailand\'s most influential leaders.',

    'nav.logo':          'Andaman Golf Cup',
    'nav.about':         'About',
    'nav.agenda':        'Agenda',
    'nav.tickets':       'Tickets',
    'nav.sponsorship':   'Sponsorship',
    'nav.register':      'Register',
    'nav.cta':           'Reserve Your Place',

    'hero.eyebrow':      'ANRCF Charity Event · Bangkok, Thailand',
    'hero.headline':     'Andaman Golf Cup 2026',
    'hero.subheadline':  'Where Thailand\'s most influential voices gather for golf, purpose, and connection.',
    'hero.date':         '25 May 2026 · Bangkok, Thailand',
    'hero.proof.label':  'Limited Teams Available',
    'hero.proof.sub':    'Exclusive Charity Golf',
    'hero.cta.register': 'Reserve Your Place ↗',
    'hero.cta.sponsor':  'Become a Sponsor',

    'about.heading':     'Where Excellence Meets Purpose',
    'about.body':        'This is not just golf — it is an exclusive gathering of Thailand\'s most influential voices in business, government, and tourism, united by a shared commitment to environmental conservation. Your participation places you among the nation\'s most powerful network while directly funding ANRCF\'s vital conservation work across the Andaman coast.',
    'about.stat1.value': '50+',
    'about.stat1.label': 'Teams Competing',
    'about.stat2.value': '10',
    'about.stat2.label': 'Sponsors Only',
    'about.stat3.value': '3',
    'about.stat3.label': 'Languages',
    'about.stat4.value': '1',
    'about.stat4.label': 'Unforgettable Day',

    'agenda.heading':      'The Day\'s Programme',
    'agenda.item1.time':   '1:00 PM',
    'agenda.item1.title':  'Welcome & Opening Ceremony',
    'agenda.item1.desc':   'An elegant opening gathering to welcome all participants and distinguished guests to the Andaman Golf Cup.',
    'agenda.item2.time':   '1:30 PM',
    'agenda.item2.title':  'Press Conference',
    'agenda.item2.desc':   'A formal press conference with distinguished speakers, event announcements, and media engagement.',
    'agenda.item3.time':   '2:00 PM',
    'agenda.item3.title':  'Golf Tournament Begins',
    'agenda.item3.desc':   'The Andaman Golf Cup tournament commences. Teams compete across the championship course in Bangkok.',
    'agenda.item4.time':   'All Day',
    'agenda.item4.title':  'Complimentary Refreshments',
    'agenda.item4.desc':   'Premium spirits and soft beverages served throughout the course and event grounds all day.',
    'agenda.item5.time':   '6:00 PM',
    'agenda.item5.title':  'Gala Dinner',
    'agenda.item5.desc':   'An exclusive gala dinner bringing all participants together for an evening of celebration, recognition, and elite networking.',

    'tickets.heading':           'Reserve Your Place',
    'tickets.subheading':        'Choose your level of participation',
    'tickets.vvip.badge':        'VVIP',
    'tickets.vvip.name':         'VVIP Team',
    'tickets.vvip.price':        '฿50,000',
    'tickets.vvip.per':          'per team of 4 persons',
    'tickets.vvip.benefit1':     'Priority course placement & tee times',
    'tickets.vvip.benefit2':     'Exclusive VVIP lounge access',
    'tickets.vvip.benefit3':     'Premium gala dinner seating',
    'tickets.vvip.benefit4':     'Dedicated event host & concierge',
    'tickets.vvip.availability': 'Limited Availability',
    'tickets.vip.badge':         'VIP',
    'tickets.vip.name':          'VIP Team',
    'tickets.vip.price':         '฿30,000',
    'tickets.vip.per':           'per team of 4 persons',
    'tickets.vip.benefit1':      'Full tournament access',
    'tickets.vip.benefit2':      'Networking with Thailand\'s elite',
    'tickets.vip.benefit3':      'Gala dinner included',
    'tickets.vip.benefit4':      'Complimentary beverages all day',
    'tickets.vip.availability':  'Open Enrollment',
    'tickets.cta':               'Register Your Team',

    'sponsor.heading':    'Become a Sponsor',
    'sponsor.subheading': 'Align your brand with Thailand\'s most exclusive charity golf event.',
    'sponsor.body':       'Sponsoring the Andaman Golf Cup places your organisation in front of Thailand\'s most influential decision-makers while directly funding critical environmental conservation work across the Andaman region. With only 10 sponsorship slots available, this is a rare and exclusive opportunity.',
    'sponsor.benefit1':   'Premier Brand Exposure',
    'sponsor.benefit2':   'Elite Networking Access',
    'sponsor.benefit3':      'VIP Gala Presence',
    'sponsor.benefit1.desc': 'Prominent logo placement across all event materials, banners, and digital assets.',
    'sponsor.benefit2.desc': 'Direct access to 200+ high-net-worth individuals, government officials, and business leaders.',
    'sponsor.benefit3.desc': 'Reserved VIP table at the exclusive gala dinner and recognition during the ceremony.',
    'sponsor.min':        '฿200,000 minimum contribution',
    'sponsor.slots':      'Only 10 Sponsorship Slots Available',
    'sponsor.cta':        'Enquire About Sponsorship',

    'charity.heading':       'About ANRCF',
    'charity.body':          'The Andaman Natural Resources Conservation Foundation works to restore, protect, and sustain the natural ecosystems of Thailand\'s Andaman coast through mangrove reforestation, marine conservation, and community education. Every baht raised through the Andaman Golf Cup goes directly to our conservation programmes.',
    'charity.stat1.value':   '10,000+',
    'charity.stat1.label':   'Mangrove Trees Planted',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'Sea Turtles Released',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'Youth Scholarships',
    'charity.link':          'Learn More at anrcf.com →',

    'past.heading':    'Our Work in Action',
    'past.subheading': 'A legacy of conservation and community engagement across the Andaman coast.',
    'past.card1':      'Mangrove reforestation initiative, Phang Nga Bay',
    'past.card2':      'Sea turtle release programme, Phuket coastline',
    'past.card3':      'Youth scholarship awards ceremony, Krabi',

    'register.heading':       'Register Your Interest',
    'register.subheading':    'Complete the form below and our team will be in touch within 48 hours.',
    'register.name':          'Full Name',
    'register.org':           'Organisation / Company',
    'register.email':         'Email Address',
    'register.phone':         'Phone / WhatsApp',
    'register.teamtype':      'Team Category',
    'register.teamtype.vvip': 'VVIP Team — ฿50,000',
    'register.teamtype.vip':  'VIP Team — ฿30,000',
    'register.teamtype.sponsor': 'Sponsorship Enquiry',
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
    'meta.title':        'อันดามัน กอล์ฟ คัพ 2026',
    'meta.description':  'ร่วมงานกอล์ฟการกุศลสุดพิเศษที่ยิ่งใหญ่ที่สุดของประเทศไทย วันที่ 25 พฤษภาคม 2569 ณ กรุงเทพมหานคร ลงทะเบียนทีม VVIP หรือ VIP ของคุณ และเชื่อมต่อกับผู้นำที่ทรงอิทธิพลที่สุดของประเทศไทย',

    'nav.logo':          'อันดามัน กอล์ฟ คัพ',
    'nav.about':         'เกี่ยวกับงาน',
    'nav.agenda':        'กำหนดการ',
    'nav.tickets':       'บัตรเข้าร่วม',
    'nav.sponsorship':   'การสนับสนุน',
    'nav.register':      'ลงทะเบียน',
    'nav.cta':           'จองที่นั่งของคุณ',

    'hero.eyebrow':      'อีเว้นท์การกุศล ANRCF · กรุงเทพมหานคร ประเทศไทย',
    'hero.headline':     'อันดามัน กอล์ฟ คัพ 2026',
    'hero.subheadline':  'สถานที่ที่บุคคลผู้ทรงอิทธิพลที่สุดของประเทศไทยมาพบปะกัน เพื่อกอล์ฟ เพื่อเจตนารมณ์ และเพื่อสายสัมพันธ์อันยิ่งใหญ่',
    'hero.date':         '25 พฤษภาคม 2569 · กรุงเทพมหานคร ประเทศไทย',
    'hero.proof.label':  'ทีมจำนวนจำกัด',
    'hero.proof.sub':    'กอล์ฟการกุศลสุดเอ็กซ์คลูซีฟ',
    'hero.cta.register': 'ลงทะเบียนทีมของคุณ',
    'hero.cta.sponsor':  'เป็นผู้สนับสนุนหลัก',

    'about.heading':     'ที่ซึ่งความเป็นเลิศพบกับเจตนารมณ์อันสูงส่ง',
    'about.body':        'นี่ไม่ใช่แค่การแข่งขันกอล์ฟ — แต่คือการรวมตัวอันพิเศษของบุคคลผู้ทรงอิทธิพลที่สุดในแวดวงธุรกิจ ภาครัฐ และการท่องเที่ยวของประเทศไทย ที่ยึดโยงกันด้วยพันธกิจร่วมในการอนุรักษ์สิ่งแวดล้อม การมีส่วนร่วมของท่านจะช่วยยกระดับตำแหน่งของท่านในเครือข่ายที่ทรงพลังที่สุดของประเทศ พร้อมทั้งสนับสนุนงานอนุรักษ์อันสำคัญยิ่งของมูลนิธิ ANRCF ตลอดแนวชายฝั่งทะเลอันดามันโดยตรง',
    'about.stat1.value': '50+',
    'about.stat1.label': 'ทีมที่เข้าร่วมแข่งขัน',
    'about.stat2.value': '10',
    'about.stat2.label': 'ผู้สนับสนุนเท่านั้น',
    'about.stat3.value': '3',
    'about.stat3.label': 'ภาษา',
    'about.stat4.value': '1',
    'about.stat4.label': 'วันที่ไม่อาจลืมเลือน',

    'agenda.heading':      'กำหนดการของงาน',
    'agenda.item1.time':   '13:00 น.',
    'agenda.item1.title':  'พิธีต้อนรับและพิธีเปิดงาน',
    'agenda.item1.desc':   'พิธีเปิดงานอย่างสง่างาม เพื่อต้อนรับผู้เข้าร่วมทุกท่านและแขกผู้มีเกียรติสู่งาน อันดามัน กอล์ฟ คัพ',
    'agenda.item2.time':   '13:30 น.',
    'agenda.item2.title':  'การแถลงข่าว',
    'agenda.item2.desc':   'การแถลงข่าวอย่างเป็นทางการโดยวิทยากรผู้ทรงเกียรติ พร้อมประกาศข้อมูลสำคัญของงานและการมีส่วนร่วมของสื่อมวลชน',
    'agenda.item3.time':   '14:00 น.',
    'agenda.item3.title':  'เริ่มการแข่งขันกอล์ฟ',
    'agenda.item3.desc':   'การแข่งขัน อันดามัน กอล์ฟ คัพ เริ่มต้นอย่างเป็นทางการ ทีมต่าง ๆ แข่งขันบนสนามแชมเปี้ยนชิพในกรุงเทพมหานคร',
    'agenda.item4.time':   'ตลอดทั้งวัน',
    'agenda.item4.title':  'เครื่องดื่มและอาหารว่างบริการฟรี',
    'agenda.item4.desc':   'สุราพรีเมียมและเครื่องดื่มนานาชนิดบริการตลอดทั้งวันในสนามและบริเวณงาน',
    'agenda.item5.time':   '18:00 น.',
    'agenda.item5.title':  'งานเลี้ยงรับรองสุดอลังการ',
    'agenda.item5.desc':   'งานเลี้ยงกาล่าดินเนอร์สุดพิเศษ รวบรวมผู้เข้าร่วมทุกท่านมาร่วมค่ำคืนแห่งการเฉลิมฉลอง การยกย่องเชิดชู และการสร้างเครือข่ายระดับแนวหน้า',

    'tickets.heading':           'จองที่นั่งของคุณ',
    'tickets.subheading':        'เลือกระดับการมีส่วนร่วมของคุณ',
    'tickets.vvip.badge':        'VVIP',
    'tickets.vvip.name':         'ทีม VVIP',
    'tickets.vvip.price':        '฿50,000',
    'tickets.vvip.per':          'ต่อทีม 4 ท่าน',
    'tickets.vvip.benefit1':     'สิทธิ์เลือกตำแหน่งสนามและเวลาออกสตาร์ทก่อนใคร',
    'tickets.vvip.benefit2':     'สิทธิ์เข้าใช้ห้องรับรอง VVIP เฉพาะกลุ่ม',
    'tickets.vvip.benefit3':     'ที่นั่งพิเศษในงานเลี้ยงกาล่าดินเนอร์',
    'tickets.vvip.benefit4':     'เจ้าหน้าที่ดูแลและคอนเซียร์จส่วนตัวตลอดงาน',
    'tickets.vvip.availability': 'จำนวนจำกัด',
    'tickets.vip.badge':         'VIP',
    'tickets.vip.name':          'ทีม VIP',
    'tickets.vip.price':         '฿30,000',
    'tickets.vip.per':           'ต่อทีม 4 ท่าน',
    'tickets.vip.benefit1':      'สิทธิ์เข้าร่วมการแข่งขันเต็มรูปแบบ',
    'tickets.vip.benefit2':      'โอกาสสร้างเครือข่ายกับชนชั้นนำของประเทศไทย',
    'tickets.vip.benefit3':      'รวมสิทธิ์งานเลี้ยงกาล่าดินเนอร์',
    'tickets.vip.benefit4':      'เครื่องดื่มบริการฟรีตลอดทั้งวัน',
    'tickets.vip.availability':  'เปิดรับสมัครทั่วไป',
    'tickets.cta':               'ลงทะเบียนทีมของคุณ',

    'sponsor.heading':    'เป็นผู้สนับสนุนหลัก',
    'sponsor.subheading': 'เชื่อมโยงแบรนด์ของคุณกับงานกอล์ฟการกุศลอันทรงเกียรติที่สุดของประเทศไทย',
    'sponsor.body':       'การสนับสนุน อันดามัน กอล์ฟ คัพ จะนำองค์กรของท่านไปสู่สายตาของผู้มีอำนาจตัดสินใจที่ทรงอิทธิพลที่สุดของประเทศไทย พร้อมสนับสนุนงานอนุรักษ์สิ่งแวดล้อมอันสำคัญในภูมิภาคอันดามันโดยตรง ด้วยโควต้าผู้สนับสนุนเพียง 10 รายเท่านั้น นี่คือโอกาสพิเศษที่หาได้ยากยิ่ง',
    'sponsor.benefit1':   'การเปิดรับแบรนด์ในระดับพรีเมียม',
    'sponsor.benefit2':   'สิทธิ์เข้าถึงเครือข่ายชนชั้นนำ',
    'sponsor.benefit3':      'การปรากฏตัวในงานเลี้ยง VIP',
    'sponsor.benefit1.desc': 'การวางโลโก้ที่โดดเด่นในสื่อกิจกรรมทั้งหมด ป้ายโฆษณา และสื่อดิจิทัล',
    'sponsor.benefit2.desc': 'การเข้าถึงโดยตรงกับบุคคลที่มีมูลค่าสุทธิสูง ข้าราชการ และผู้นำธุรกิจกว่า 200 คน',
    'sponsor.benefit3.desc': 'โต๊ะ VIP สำรองในงานเลี้ยงกาล่าอันทรงเกียรติ พร้อมการยกย่องในพิธี',
    'sponsor.min':        'ยอดสนับสนุนขั้นต่ำ ฿200,000',
    'sponsor.slots':      'เหลือเพียง 10 ที่สำหรับผู้สนับสนุน',
    'sponsor.cta':        'สอบถามเรื่องการสนับสนุน',

    'charity.heading':       'เกี่ยวกับ ANRCF',
    'charity.body':          'มูลนิธิอนุรักษ์ทรัพยากรธรรมชาติอันดามัน ทำงานเพื่อฟื้นฟู ปกป้อง และดำรงรักษาระบบนิเวศทางธรรมชาติของชายฝั่งอันดามันของประเทศไทย ผ่านการปลูกป่าชายเลน การอนุรักษ์ทางทะเล และการศึกษาชุมชน ทุกบาทที่ได้รับจาก อันดามัน กอล์ฟ คัพ จะนำไปสู่โครงการอนุรักษ์ของเราโดยตรง',
    'charity.stat1.value':   '10,000+',
    'charity.stat1.label':   'ต้นโกงกางที่ปลูก',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'เต่าทะเลที่ปล่อยคืนสู่ธรรมชาติ',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'ทุนการศึกษาเยาวชน',
    'charity.link':          'เรียนรู้เพิ่มเติมที่ anrcf.com →',

    'past.heading':    'ผลงานของเราในการปฏิบัติจริง',
    'past.subheading': 'มรดกแห่งการอนุรักษ์และการมีส่วนร่วมกับชุมชนตลอดแนวชายฝั่งอันดามัน',
    'past.card1':      'โครงการปลูกป่าชายเลน อ่าวพังงา',
    'past.card2':      'โครงการปล่อยเต่าทะเลคืนสู่ธรรมชาติ ชายฝั่งภูเก็ต',
    'past.card3':      'พิธีมอบทุนการศึกษาเยาวชน กระบี่',

    'register.heading':          'ลงทะเบียนความสนใจของคุณ',
    'register.subheading':       'กรอกแบบฟอร์มด้านล่างและทีมงานของเราจะติดต่อกลับภายใน 48 ชั่วโมง',
    'register.name':             'ชื่อ-นามสกุล',
    'register.org':              'องค์กร / บริษัท',
    'register.email':            'ที่อยู่อีเมล',
    'register.phone':            'โทรศัพท์ / WhatsApp',
    'register.teamtype':         'ประเภทของทีม',
    'register.teamtype.vvip':    'ทีม VVIP — ฿50,000',
    'register.teamtype.vip':     'ทีม VIP — ฿30,000',
    'register.teamtype.sponsor': 'สอบถามการสนับสนุน',
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
    'meta.title':        'Andaman Golf Cup 2026',
    'meta.description':  'Присоединяйтесь к самому престижному благотворительному гольф-турниру Таиланда. 25 мая 2026 года, Бангкок. Зарегистрируйте вашу команду VVIP или VIP и встретьтесь с самыми влиятельными лидерами Таиланда.',

    'nav.logo':          'Andaman Golf Cup',
    'nav.about':         'О турнире',
    'nav.agenda':        'Программа',
    'nav.tickets':       'Билеты',
    'nav.sponsorship':   'Спонсорство',
    'nav.register':      'Регистрация',
    'nav.cta':           'Забронировать место',

    'hero.eyebrow':      'Благотворительное мероприятие ANRCF · Бангкок, Таиланд',
    'hero.headline':     'Andaman Golf Cup 2026',
    'hero.subheadline':  'Место встречи самых влиятельных людей Таиланда — в атмосфере гольфа, единой цели и подлинного партнёрства.',
    'hero.date':         '25 мая 2026 · Бангкок, Таиланд',
    'hero.proof.label':  'Ограниченное число команд',
    'hero.proof.sub':    'Эксклюзивный благотворительный гольф',
    'hero.cta.register': 'Зарегистрировать команду',
    'hero.cta.sponsor':  'Стать спонсором',

    'about.heading':     'Там, где мастерство встречается с призванием',
    'about.body':        'Это не просто гольф — это эксклюзивный съезд самых влиятельных представителей бизнеса, государственного управления и туристической отрасли Таиланда, объединённых общей приверженностью делу охраны окружающей среды. Ваше участие вводит вас в круг наиболее влиятельных людей страны и одновременно напрямую финансирует важнейшую природоохранную деятельность ANRCF на побережье Андаманского моря.',
    'about.stat1.value': '50+',
    'about.stat1.label': 'Команд-участников',
    'about.stat2.value': '10',
    'about.stat2.label': 'Мест для спонсоров',
    'about.stat3.value': '3',
    'about.stat3.label': 'Языка',
    'about.stat4.value': '1',
    'about.stat4.label': 'Незабываемый день',

    'agenda.heading':      'Программа дня',
    'agenda.item1.time':   '13:00',
    'agenda.item1.title':  'Приветствие и церемония открытия',
    'agenda.item1.desc':   'Торжественная встреча всех участников и почётных гостей на открытии Andaman Golf Cup.',
    'agenda.item2.time':   '13:30',
    'agenda.item2.title':  'Пресс-конференция',
    'agenda.item2.desc':   'Официальная пресс-конференция с выступлениями почётных гостей, анонсами мероприятия и общением с представителями прессы.',
    'agenda.item3.time':   '14:00',
    'agenda.item3.title':  'Старт гольф-турнира',
    'agenda.item3.desc':   'Начало соревнований Andaman Golf Cup. Команды выходят на чемпионское поле Бангкока.',
    'agenda.item4.time':   'Весь день',
    'agenda.item4.title':  'Бесплатные напитки и угощения',
    'agenda.item4.desc':   'Премиальные крепкие и безалкогольные напитки подаются на протяжении всего дня на поле и в зонах мероприятия.',
    'agenda.item5.time':   '18:00',
    'agenda.item5.title':  'Торжественный ужин',
    'agenda.item5.desc':   'Эксклюзивный гала-ужин, на котором все участники соберутся вместе для вечера чествования, признания заслуг и элитного нетворкинга.',

    'tickets.heading':           'Забронировать место',
    'tickets.subheading':        'Выберите уровень участия',
    'tickets.vvip.badge':        'VVIP',
    'tickets.vvip.name':         'Команда VVIP',
    'tickets.vvip.price':        '฿50 000',
    'tickets.vvip.per':          'за команду из 4 человек',
    'tickets.vvip.benefit1':     'Приоритетное размещение на поле и выбор времени старта',
    'tickets.vvip.benefit2':     'Доступ в эксклюзивный лаунж VVIP',
    'tickets.vvip.benefit3':     'Место за лучшими столами гала-ужина',
    'tickets.vvip.benefit4':     'Персональный куратор и консьерж на весь день',
    'tickets.vvip.availability': 'Ограниченное количество мест',
    'tickets.vip.badge':         'VIP',
    'tickets.vip.name':          'Команда VIP',
    'tickets.vip.price':         '฿30 000',
    'tickets.vip.per':           'за команду из 4 человек',
    'tickets.vip.benefit1':      'Полный доступ к турниру',
    'tickets.vip.benefit2':      'Нетворкинг с элитой Таиланда',
    'tickets.vip.benefit3':      'Гала-ужин включён',
    'tickets.vip.benefit4':      'Бесплатные напитки весь день',
    'tickets.vip.availability':  'Открытая регистрация',
    'tickets.cta':               'Зарегистрировать команду',

    'sponsor.heading':    'Стать спонсором',
    'sponsor.subheading': 'Ассоциируйте ваш бренд с самым престижным благотворительным гольф-турниром Таиланда.',
    'sponsor.body':       'Спонсорство Andaman Golf Cup выводит вашу организацию на первый план для самых влиятельных людей Таиланда, принимающих ключевые решения, и одновременно напрямую финансирует критически важную природоохранную работу в регионе Андаманского моря. При наличии всего 10 спонсорских мест это редкая и исключительная возможность.',
    'sponsor.benefit1':   'Премиальное присутствие бренда',
    'sponsor.benefit2':   'Доступ к элитному нетворкингу',
    'sponsor.benefit3':      'VIP-участие в гала-ужине',
    'sponsor.benefit1.desc': 'Заметное размещение логотипа на всех материалах мероприятия, баннерах и цифровых ресурсах.',
    'sponsor.benefit2.desc': 'Прямой доступ к 200+ состоятельным людям, государственным чиновникам и руководителям бизнеса.',
    'sponsor.benefit3.desc': 'Зарезервированный VIP-стол на эксклюзивном гала-ужине и признание во время церемонии.',
    'sponsor.min':        'Минимальный взнос — ฿200 000',
    'sponsor.slots':      'Доступно только 10 спонсорских мест',
    'sponsor.cta':        'Узнать о спонсорстве',

    'charity.heading':       'О фонде ANRCF',
    'charity.body':          'Фонд охраны природных ресурсов Андаманского моря занимается восстановлением, защитой и сохранением природных экосистем тайского побережья Андамана — через посадку мангровых лесов, охрану морской среды и просвещение местных сообществ. Каждый бат, собранный на Andaman Golf Cup, направляется непосредственно в наши природоохранные программы.',
    'charity.stat1.value':   '10 000+',
    'charity.stat1.label':   'Посаженных мангровых деревьев',
    'charity.stat2.value':   '50+',
    'charity.stat2.label':   'Выпущенных морских черепах',
    'charity.stat3.value':   '100+',
    'charity.stat3.label':   'Молодёжных стипендий',
    'charity.link':          'Узнать больше на anrcf.com →',

    'past.heading':    'Наша работа в действии',
    'past.subheading': 'Наследие природоохранной деятельности и работы с сообществами на побережье Андамана.',
    'past.card1':      'Проект посадки мангровых лесов, залив Пханг-Нга',
    'past.card2':      'Программа выпуска морских черепах, побережье Пхукета',
    'past.card3':      'Церемония вручения молодёжных стипендий, Краби',

    'register.heading':          'Зарегистрировать интерес',
    'register.subheading':       'Заполните форму ниже — наша команда свяжется с вами в течение 48 часов.',
    'register.name':             'Полное имя',
    'register.org':              'Организация / Компания',
    'register.email':            'Адрес электронной почты',
    'register.phone':            'Телефон / WhatsApp',
    'register.teamtype':         'Категория команды',
    'register.teamtype.vvip':    'Команда VVIP — ฿50 000',
    'register.teamtype.vip':     'Команда VIP — ฿30 000',
    'register.teamtype.sponsor': 'Запрос о спонсорстве',
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
