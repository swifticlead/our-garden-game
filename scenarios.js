// scenarios.js — Pool of sharing dilemmas for "הגינה שלנו"
// Each scenario: { emoji, text, choices: [{ label, generous, flowers }] }
// generous: true = grows garden, false = gentle lesson
// flowers: how many flowers this choice earns (0 for selfish)

const SCENARIOS = [
  // ── Resource Sharing ─────────────────────────────────
  {
    emoji: '🍪',
    text: 'יש לך 4 עוגיות. לאחותך אין.',
    choices: [
      { label: '💚 אני נותנת לה 2!', generous: true,  flowers: 2 },
      { label: '❤️ אני נותנת לה אחת', generous: true,  flowers: 1 },
      { label: '😶 אלה שלי...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍰',
    text: 'יש חתיכת עוגה גדולה ואחת קטנה. אחותך לא בחרה עדיין.',
    choices: [
      { label: '💚 את תיקחי את הגדולה!', generous: true,  flowers: 2 },
      { label: '😶 אני רוצה את הגדולה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍬',
    text: 'קיבלת 3 סוכריות. לאחותך יש רק אחת.',
    choices: [
      { label: '💚 קחי עוד אחת שלי!', generous: true,  flowers: 2 },
      { label: '💚 בואי נחלק שווה!', generous: true,  flowers: 3 },
      { label: '😶 מגיע לי יותר...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍕',
    text: 'נשארה פרוסת פיצה אחרונה. שתיכן רוצות אותה.',
    choices: [
      { label: '💚 קחי אותה!', generous: true,  flowers: 2 },
      { label: '💚 בואי נחצה אותה!', generous: true,  flowers: 3 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎨',
    text: 'שתיכן רוצות את הצבע הורוד.',
    choices: [
      { label: '💚 בבקשה, קחי קודם!', generous: true,  flowers: 2 },
      { label: '💚 נצבע ביחד!', generous: true,  flowers: 3 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📚',
    text: 'יש ספר אחד מהספרייה שתיכן אוהבות.',
    choices: [
      { label: '💚 את תקראי ראשונה!', generous: true,  flowers: 2 },
      { label: '💚 נקרא ביחד בקול!', generous: true,  flowers: 3 },
      { label: '😶 אני רוצה אותו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🫧',
    text: 'יש בלון אחרון של סבון.',
    choices: [
      { label: '💚 את תשתמשי ראשונה!', generous: true,  flowers: 2 },
      { label: '💚 ניקח תורות!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Turn-Taking ───────────────────────────────────────
  {
    emoji: '🛝',
    text: 'שתיכן רוצות להיות ראשונות במגלשה.',
    choices: [
      { label: '💚 את קודם, אני אחריך!', generous: true,  flowers: 2 },
      { label: '💚 בואי יחד על המגלשה!', generous: true,  flowers: 3 },
      { label: '😶 אני ראשונה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎮',
    text: 'יש משחק אחד ושתיכן רוצות לשחק.',
    choices: [
      { label: '💚 שחקי קודם, אני אחכה!', generous: true,  flowers: 2 },
      { label: '💚 ניקח תורות!', generous: true,  flowers: 3 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🛁',
    text: 'שתיכן רוצות להתרחץ ראשונה.',
    choices: [
      { label: '💚 תרחצי קודם, זה בסדר!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎠',
    text: 'יש מקום אחד על הנדנדה.',
    choices: [
      { label: '💚 שבי, אני אמתין!', generous: true,  flowers: 2 },
      { label: '💚 עשרה שניות לי ועשרה לך?', generous: true,  flowers: 3 },
      { label: '😶 אני עכשיו!', generous: false, flowers: 0 }
    ]
  },

  // ── Emotional Generosity (tackles jealousy directly) ──
  {
    emoji: '👩‍👧',
    text: 'אמא מחבקת את אחותך. את עומדת ורואה.',
    choices: [
      { label: '💚 כיף! גם אני אלך לחבק אותן!', generous: true,  flowers: 3 },
      { label: '💚 אמא תחבק אותי אחר כך!', generous: true,  flowers: 2 },
      { label: '😶 למה רק אותה?!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎁',
    text: 'אחותך קיבלה מתנה. את לא קיבלת היום.',
    choices: [
      { label: '💚 איזה כיף לה! אני שמחה!', generous: true,  flowers: 3 },
      { label: '💚 יופי! גם לי יגיע יום שלי!', generous: true,  flowers: 2 },
      { label: '😶 זה לא פייר!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏆',
    text: 'אחותך ניצחה במשחק ואת הפסדת.',
    choices: [
      { label: '💚 כל הכבוד לך! שיחקת יפה!', generous: true,  flowers: 3 },
      { label: '💚 טוב, בפעם הבאה אני אנצח!', generous: true,  flowers: 2 },
      { label: '😶 זה לא הוגן!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🖍️',
    text: 'אחותך ציירה ציור יפה מאוד.',
    choices: [
      { label: '💚 וואו, זה מדהים! תלמדי אותי?', generous: true,  flowers: 3 },
      { label: '💚 יפה מאוד!', generous: true,  flowers: 2 },
      { label: '😶 שלי יותר יפה...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '⭐',
    text: 'אמא שיבחה את אחותך על צייתנות.',
    choices: [
      { label: '💚 כן, היא ממש טובה!', generous: true,  flowers: 3 },
      { label: '💚 אני גם אנסה להיות טובה!', generous: true,  flowers: 2 },
      { label: '😶 ולי? אני לא קיבלתי שבח!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎂',
    text: 'היום יום ההולדת של אחותך.',
    choices: [
      { label: '💚 יום הולדת שמח! אני אוהבת אותך!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק ביחד היום!', generous: true,  flowers: 3 },
      { label: '😶 מתי יום ההולדת שלי?', generous: false, flowers: 0 }
    ]
  },

  // ── Helping ────────────────────────────────────────────
  {
    emoji: '🧸',
    text: 'אחותך עצובה. הבובה האהובה שלך יכולה לעזור לה.',
    choices: [
      { label: '💚 קחי את הבובה שלי!', generous: true,  flowers: 3 },
      { label: '💚 בואי נצטחק ביחד!', generous: true,  flowers: 3 },
      { label: '😶 הבובה שלי, לא נוגעים!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '😢',
    text: 'אחותך בכתה ולא מצליחה לפתור תרגיל.',
    choices: [
      { label: '💚 אני אעזור לך!', generous: true,  flowers: 3 },
      { label: '💚 אל תבכי, בואי ננסה ביחד!', generous: true,  flowers: 3 },
      { label: '😶 זה לא הבעיה שלי...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏠',
    text: 'אמא ביקשה לסדר את הסלון. אחותך עייפה.',
    choices: [
      { label: '💚 אני אסדר לבד, תנוחי!', generous: true,  flowers: 3 },
      { label: '💚 בואי נסדר ביחד, יהיה יותר מהיר!', generous: true,  flowers: 3 },
      { label: '😶 למה רק אני?!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧩',
    text: 'אחותך מנסה להרכיב פאזל ואחד החלקים נפל.',
    choices: [
      { label: '💚 הנה החלק! אני אעזור לך!', generous: true,  flowers: 2 },
      { label: '😶 תמצאי לבד...', generous: false, flowers: 0 }
    ]
  },

  // ── Bonus / Special ────────────────────────────────────
  {
    emoji: '💌',
    text: 'אחותך עשתה משהו שגרם לך לכעוס קצת.',
    choices: [
      { label: '💚 אני סולחת לך! בואי נשחק!', generous: true,  flowers: 3 },
      { label: '💚 נדבר על זה ביחד...', generous: true,  flowers: 2 },
      { label: '😶 אני כועסת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '☀️',
    text: 'בוקר חדש! איך נתחיל את היום עם אחותך?',
    choices: [
      { label: '💚 בוקר טוב! אוהבת אותך!', generous: true,  flowers: 2 },
      { label: '💚 בואי נשחק משחק ביחד!', generous: true,  flowers: 3 },
      { label: '😶 תניחו לי, אני עייפה...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌧️',
    text: 'יום גשום בבית. שתיכן משועממות.',
    choices: [
      { label: '💚 בואי נמציא משחק ביחד!', generous: true,  flowers: 3 },
      { label: '💚 בואי נצייר ביחד!', generous: true,  flowers: 2 },
      { label: '😶 תעזבי אותי בשקט!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌙',
    text: 'לפני השינה, אחותך מפחדת מהחושך.',
    choices: [
      { label: '💚 אל תפחדי, אני כאן!', generous: true,  flowers: 3 },
      { label: '💚 בואי נספר סיפור ביחד!', generous: true,  flowers: 3 },
      { label: '😶 אני רוצה לישון...', generous: false, flowers: 0 }
    ]
  },
];

// Praise messages for generous choices
const GENEROUS_PRAISE = [
  '🌟 וואו, כל הכבוד!',
  '🎉 מדהים! הגינה גדלה!',
  '🌸 פרח חדש פרח!',
  '💚 איזו לב טוב יופי!',
  '✨ מעולה! ככה עושים!',
  '🌻 שיתוף = גינה יפה יותר!',
  '🦋 היפהפייה מגיעה!',
  '💛 הלב הכי יפה!',
  '🌈 מדהים ממש!',
  '🌺 האחיות הכי טובות!',
];

// Gentle messages for selfish choices
const SELFISH_GENTLE = [
  '💛 בפעם הבאה ננסה לחלק!',
  '🌱 הגינה מחכה שנחלק...',
  '💛 אפשר לנסות שוב!',
  '🌿 שיתוף מגדיל את הגינה!',
  '💛 בסדר! נמשיך לנסות יחד.',
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
