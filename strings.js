// strings.js — All Hebrew UI text and scenario data for "הגינה שלנו"
// Edit this file to fix spelling, phrasing, or scenario content.
// flowers: 3=sacrifice, 2=equal share, 1=partial give, 0=selfish

const STRINGS = {
  game_title:            '🌸 הגינה שלנו',
  game_subtitle:         'משחק שיתוף לאחיות',
  game_intro:            'כאן גדלה גינה קסומה של שיתוף 🌱\nכל פעם שתבחרו לחלוק ולעזור לאחרים —\nהגינה שלכם תפרח יותר! 🌸🌺🌻',
  btn_start:             '🌱 יאללה, בואו נגדל!',
  label_player1:         'שם האחות הראשונה 👧',
  label_player2:         'שם האחות השנייה 👧',
  placeholder_name:      'כתבי שם כאן...',
  btn_garden_peek:       '🌸 הגינה שלנו',
  btn_prizes:            '🏆 איך מרוויחים?',
  btn_reset:             '🗑️ איפוס משחק',
  confirm_reset:         'למחוק את הגינה כולה ולהתחיל מחדש? לא ניתן לשחזר.',
  round_badge:           'סיבוב %1 מתוך %2',
  turn_indicator:        '✨ תור של %1',
  flower_counter_label:  '🌸 %1',
  end_title_perfect:     '🎉 כל הכבוד!',
  end_lbl_flowers:       'פרחים 🌸',
  end_lbl_generous:      'נדיבות ✅',
  end_lbl_selfish:       'ננסה שוב 💛',
  btn_new_game:          '🌱 משחק חדש',
  btn_view_garden:       '🌸 לגינה שלנו',
  garden_title:          '🌸 הגינה שלנו',
  btn_back:              '← חזור',
  prizes_title:          '🏆 איך מרוויחים?',
  prizes_heading_flowers:'🌸 פרחים לפי בחירה',
  prize_selfish:         '😶 בחירה אנוכית',
  prize_partial:         '❤️ נתת קצת',
  prize_sharing:         '💚💚 חילקתם ביחד',
  prize_sacrifice:       '💚 ויתרת לאחותך!',
  prizes_heading_animals:'🐾 חיות שמגיעות לגינה',
};

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

const SELFISH_GENTLE = [
  '💛 בפעם הבאה ננסה לחלק!',
  '🌱 הגינה מחכה שנחלק...',
  '💛 אפשר לנסות שוב!',
  '🌿 שיתוף מגדיל את הגינה!',
  '💛 בסדר! נמשיך לנסות יחד.',
];

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
      { label: '💚 בואי נחלק שווה!', generous: true,  flowers: 2 },
      { label: '😶 מגיע לי יותר...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍕',
    text: 'נשארה פרוסת פיצה אחרונה. שתיכן רוצות אותה.',
    choices: [
      { label: '💚 קחי אותה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחצה אותה!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎨',
    text: 'שתיכן רוצות את הצבע הורוד.',
    choices: [
      { label: '💚 בבקשה, קחי קודם!', generous: true,  flowers: 3 },
      { label: '💚 נצבע ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📚',
    text: 'יש ספר אחד מהספרייה שתיכן אוהבות.',
    choices: [
      { label: '💚 את תקראי ראשונה!', generous: true,  flowers: 3 },
      { label: '💚 נקרא ביחד בקול!', generous: true,  flowers: 2 },
      { label: '😶 אני רוצה אותו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🫧',
    text: 'יש בועה אחרונה של סבון.',
    choices: [
      { label: '💚 את תפוצצי!', generous: true,  flowers: 3 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Turn-Taking ───────────────────────────────────────
  {
    emoji: '🛝',
    text: 'שתיכן רוצות להיות ראשונות במגלשה.',
    choices: [
      { label: '💚 את קודם, אני אחריך!', generous: true,  flowers: 3 },
      { label: '💚 בואי יחד על המגלשה!', generous: true,  flowers: 2 },
      { label: '😶 אני ראשונה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎮',
    text: 'יש משחק אחד ושתיכן רוצות לשחק.',
    choices: [
      { label: '💚 שחקי קודם, אני אחכה!', generous: true,  flowers: 3 },
      { label: '💚 ניקח תורות!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🛁',
    text: 'שתיכן רוצות להתרחץ ראשונה.',
    choices: [
      { label: '💚 תתרחצי קודם, זה בסדר!', generous: true,  flowers: 3 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎠',
    text: 'יש מקום אחד על הנדנדה.',
    choices: [
      { label: '💚 שבי, אני אמתין!', generous: true,  flowers: 3 },
      { label: '💚 עשר שניות לי ועשר לך?', generous: true,  flowers: 2 },
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
    text: 'אמא שיבחה את אחותך על עזרה.',
    choices: [
      { label: '💚 כן, היא ממש טובה!', generous: true,  flowers: 3 },
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
      { label: '💚 בואי נצחק ביחד!', generous: true,  flowers: 3 },
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
      { label: '💚 בואי נסדר ביחד, יהיה יותר מהיר!', generous: true,  flowers: 2 },
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

  // ── Food & Treats ─────────────────────────────────────
  {
    emoji: '🍦',
    text: 'יש גביע גלידה אחד גדול.',
    choices: [
      { label: '💚 בואי נאכל ביחד מאותו גביע!', generous: true,  flowers: 2 },
      { label: '💚 תיקחי חצי!', generous: true,  flowers: 2 },
      { label: '😶 שלי כולו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍫',
    text: 'קיבלת שוקולד. לאחותך אין.',
    choices: [
      { label: '💚 קחי חתיכה!', generous: true,  flowers: 2 },
      { label: '💚 בואי נחלק שווה בשווה!', generous: true,  flowers: 2 },
      { label: '😶 לא, זה שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🥤',
    text: 'יש כוס מיץ אחת גדולה ושתיכן צמאות.',
    choices: [
      { label: '💚 שתי קצת, ואני אחריך!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם, אני יותר צמאה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍿',
    text: 'יש קערת פופקורן קטנה לסרט.',
    choices: [
      { label: '💚 בואי נחלוק!', generous: true,  flowers: 2 },
      { label: '💚 את תאחזי ושתינו ניקח!', generous: true,  flowers: 2 },
      { label: '😶 אני אשב עם הקערה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧁',
    text: 'נשאר קאפקייק אחד מהמסיבה.',
    choices: [
      { label: '💚 קחי אותו, הייתי שמחה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחצה!', generous: true,  flowers: 2 },
      { label: '😶 אני לקחתי ראשונה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🥕',
    text: 'יש גזר אחד לנשנוש. שתיכן רוצות.',
    choices: [
      { label: '💚 בואי נשבור לשניים!', generous: true,  flowers: 2 },
      { label: '💚 קחי, אני כבר לא רעבה!', generous: true,  flowers: 3 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍎',
    text: 'יש תפוח אחד גדול ויפה.',
    choices: [
      { label: '💚 אמא תחצה לנו!', generous: true,  flowers: 2 },
      { label: '💚 קחי, יש לי עוד פרי!', generous: true,  flowers: 3 },
      { label: '😶 ראיתי אותו קודם!', generous: false, flowers: 0 }
    ]
  },

  // ── Toys & Games ──────────────────────────────────────
  {
    emoji: '🪆',
    text: 'לאחותך אין עם מה לשחק ואת משחקת בבובה שלך.',
    choices: [
      { label: '💚 קחי, אני אשחק במשהו אחר!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק ביחד!', generous: true,  flowers: 3 },
      { label: '😶 זו הבובה שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎯',
    text: 'שתיכן רוצות לשחק עם המשחק החדש.',
    choices: [
      { label: '💚 שחקי קודם, אני אחכה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק יחד, שתינו!', generous: true,  flowers: 2 },
      { label: '😶 שלי, אני קיבלתי אותו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎪',
    text: 'אחותך מנסה לבנות מגדל וקשה לה.',
    choices: [
      { label: '💚 אני אעזור לך לבנות!', generous: true,  flowers: 3 },
      { label: '💚 בואי נבנה ביחד מגדל ענק!', generous: true,  flowers: 3 },
      { label: '😶 שלי ייצא יותר גבוה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧸',
    text: 'אחותך רוצה לשחק עם הרכבת שלך.',
    choices: [
      { label: '💚 בטח, תיהני!', generous: true,  flowers: 3 },
      { label: '💚 יאללה, ונשחק ביחד!', generous: true,  flowers: 2 },
      { label: '😶 לא, זה המשחק שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🪃',
    text: 'יש בומרנג אחד בחוץ ושתיכן רוצות לזרוק.',
    choices: [
      { label: '💚 ניקח תורות!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎨',
    text: 'יש גיר אחד כחול ושתיכן צריכות אותו.',
    choices: [
      { label: '💚 תסיימי קודם, ואני אחריך!', generous: true,  flowers: 3 },
      { label: '💚 בואי נצייר ביחד עם אותו גיר!', generous: true,  flowers: 2 },
      { label: '😶 אני צריכה אותו עכשיו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧩',
    text: 'שתיכן רוצות לעשות את הפאזל הגדול.',
    choices: [
      { label: '💚 בואי נעשה ביחד, יהיה יותר כיף!', generous: true,  flowers: 2 },
      { label: '💚 את תתחילי, אני אצטרף בעוד רגע!', generous: true,  flowers: 2 },
      { label: '😶 שלי לעשות לבד!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎭',
    text: 'משחק מחזות — שתיכן רוצות להיות הנסיכה.',
    choices: [
      { label: '💚 את תהיי הנסיכה, אני הפיה!', generous: true,  flowers: 3 },
      { label: '💚 יש שתי נסיכות בסיפור שלנו!', generous: true,  flowers: 2 },
      { label: '😶 אני הנסיכה!', generous: false, flowers: 0 }
    ]
  },

  // ── Outdoor & Physical Play ───────────────────────────
  {
    emoji: '🚲',
    text: 'יש אופניים אחד ושתיכן רוצות לרכוב.',
    choices: [
      { label: '💚 רכבי עשר דקות, אחר כך אני!', generous: true,  flowers: 2 },
      { label: '💚 לכי קודם, בסדר גמור!', generous: true,  flowers: 3 },
      { label: '😶 אני קודם, תמיד אני!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '⚽',
    text: 'כדור אחד בחצר. שתיכן רוצות לשחק.',
    choices: [
      { label: '💚 בואי נשחק כדורגל ביחד!', generous: true,  flowers: 2 },
      { label: '💚 בואי נתחרה — את נגדי!', generous: true,  flowers: 2 },
      { label: '😶 הכדור שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏊',
    text: 'יש מצוף אחד בבריכה ושתיכן רוצות.',
    choices: [
      { label: '💚 תקחי קודם, אני אחכה!', generous: true,  flowers: 3 },
      { label: '💚 ניקח תורות!', generous: true,  flowers: 2 },
      { label: '😶 לקחתי ראשונה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🛴',
    text: 'קורקינט אחד ושתי רוכבות מחכות.',
    choices: [
      { label: '💚 שתי דקות לך, שתיים לי!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🪁',
    text: 'יש חבל קפיצה אחד.',
    choices: [
      { label: '💚 בואי נקפוץ ביחד!', generous: true,  flowers: 2 },
      { label: '💚 קפצי קודם!', generous: true,  flowers: 3 },
      { label: '😶 אני משתמשת בו עכשיו!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏖️',
    text: 'יש דלי וכף אחת בחול.',
    choices: [
      { label: '💚 תיקחי את הכף, אני אשתמש בידיים!', generous: true,  flowers: 3 },
      { label: '💚 בואי נבנה ביחד טירת חול!', generous: true,  flowers: 2 },
      { label: '😶 שלי הכול!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌳',
    text: 'יש ענף אחד לטפס עליו.',
    choices: [
      { label: '💚 עלי קודם, אני אעלה אחר כך!', generous: true,  flowers: 3 },
      { label: '💚 תעלי, אני אעזור לך!', generous: true,  flowers: 3 },
      { label: '😶 אני ראשונה תמיד!', generous: false, flowers: 0 }
    ]
  },

  // ── Helping & Chores ──────────────────────────────────
  {
    emoji: '🧹',
    text: 'אמא ביקשה לטאטא. אחותך עייפה מאוד.',
    choices: [
      { label: '💚 אני אטאטא הפעם!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחלק — אני חצי חדר, את חצי!', generous: true,  flowers: 2 },
      { label: '😶 תמיד אני?!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🍽️',
    text: 'צריך לסדר את השולחן. אחותך לא מרגישה טוב.',
    choices: [
      { label: '💚 אני אסדר לבד, שבי!', generous: true,  flowers: 3 },
      { label: '💚 תביאי רק את הכוסות, אני את השאר!', generous: true,  flowers: 2 },
      { label: '😶 זה לא הוגן שתמיד אני!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌿',
    text: 'צריך להשקות את הצמחים. אחותך שכחה.',
    choices: [
      { label: '💚 אני אשקה בשבילה!', generous: true,  flowers: 3 },
      { label: '💚 אזכיר לה בנחת!', generous: true,  flowers: 2 },
      { label: '😶 שתשקה לבד, זה התפקיד שלה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🛏️',
    text: 'אמא ביקשה לסדר את החדר ביחד.',
    choices: [
      { label: '💚 יאללה, ביחד יהיה מהיר!', generous: true,  flowers: 2 },
      { label: '💚 אני אסדר יותר !', generous: true,  flowers: 3 },
      { label: '😶 שתסדר היא, אני לא.', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🐕',
    text: 'הכלב צריך לצאת לטיול. שתיכן עייפות.',
    choices: [
      { label: '💚 אני איקח אותו!', generous: true,  flowers: 3 },
      { label: '💚 בואי נצא ביחד, יהיה כיף!', generous: true,  flowers: 2 },
      { label: '😶 תלכי את, אני לא רוצה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧺',
    text: 'צריך להכניס כביסה. אחותך מתאמצת עם הסל הכבד.',
    choices: [
      { label: '💚 אני אעזור לך לשאת!', generous: true,  flowers: 3 },
      { label: '💚 תני לי חצי מהבגדים!', generous: true,  flowers: 2 },
      { label: '😶 אני עסוקה...', generous: false, flowers: 0 }
    ]
  },

  // ── Emotional Support ─────────────────────────────────
  {
    emoji: '🤕',
    text: 'אחותך נפלה ונפצעה קצת.',
    choices: [
      { label: '💚 אני אביא לך פלסטר!', generous: true,  flowers: 3 },
      { label: '💚 בואי אחזיק לך יד!', generous: true,  flowers: 3 },
      { label: '😶 זה לא כלום, תפסיקי לבכות!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '😔',
    text: 'לאחותך היה יום קשה בגן.',
    choices: [
      { label: '💚 ספרי לי מה קרה, אני מקשיבה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק משהו מהנה יחד!', generous: true,  flowers: 3 },
      { label: '😶 לא מעניין אותי...', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '😡',
    text: 'אחותך כועסת וצועקת עליך.',
    choices: [
      { label: '💚 נשמי קצת, אחר כך נדבר!', generous: true,  flowers: 3 },
      { label: '💚 אני מבינה שקשה לך!', generous: true,  flowers: 2 },
      { label: '😶 אני אצעק חזק יותר!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🤒',
    text: 'אחותך חולה ושוכבת במיטה.',
    choices: [
      { label: '💚 אני אביא לה כוס תה!', generous: true,  flowers: 3 },
      { label: '💚 בואי אספר לה סיפור!', generous: true,  flowers: 3 },
      { label: '😶 שתשן, אני אשחק לבד!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '😭',
    text: 'אחותך בוכה כי הצעצוע שלה נשבר.',
    choices: [
      { label: '💚 אולי אני אוכל לתקן?', generous: true,  flowers: 3 },
      { label: '💚 בואי נשאל את אבא יחד!', generous: true,  flowers: 3 },
      { label: '😶 היא שברה שתבכה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '😰',
    text: 'לאחותך יש מחר מבחן והיא מפחדת.',
    choices: [
      { label: '💚 בואי אעזור לך להתכונן!', generous: true,  flowers: 3 },
      { label: '💚 אני אשאל אותך שאלות!', generous: true,  flowers: 3 },
      { label: '😶 זה הבעיה שלה, לא שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Special Occasions ─────────────────────────────────
  {
    emoji: '🎪',
    text: 'הולכים לקרקס! שתיכן רוצות לשבת ליד החלון באוטו.',
    choices: [
      { label: '💚 שבי, אני אשב בפעם הבאה!', generous: true,  flowers: 2 },
      { label: '💚 נסיעה ראשונה לי, בחזרה את!', generous: true,  flowers: 2 },
      { label: '😶 אני רוצה ליד החלון!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎠',
    text: 'בפארק יש רכבת קטנה — מקום ל-1.',
    choices: [
      { label: '💚 שבי קודם!', generous: true,  flowers: 3 },
      { label: '💚 ניקח תורות!', generous: true,  flowers: 2 },
      { label: '😶 אני!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🛍️',
    text: 'אמא קנתה מתנה קטנה רק לאחת מכן.',
    choices: [
      { label: '💚 קחי! יגיע גם לי יום!', generous: true,  flowers: 3 },
      { label: '💚 מגיע לך, את ממש טובה!', generous: true,  flowers: 3 },
      { label: '😶 לא פייר! אני גם רוצה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📸',
    text: 'צלם צילם תמונה — היה מקום לאחת.',
    choices: [
      { label: '💚 תצטלמי, אני בפעם הבאה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נתקרב ונצטלם ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני רוצה בתמונה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎟️',
    text: 'נשאר כרטיס אחד לאטרקציה.',
    choices: [
      { label: '💚 קחי אותו!', generous: true,  flowers: 3 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Learning & School ─────────────────────────────────
  {
    emoji: '✏️',
    text: 'עיפרון אחד חד ואחד שבור.',
    choices: [
      { label: '💚 קחי את החד, לי יהיה בסדר!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחדד את השבור ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני לוקחת את החד!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📐',
    text: 'יש סרגל אחד ושתיכן צריכות לצייר קו.',
    choices: [
      { label: '💚 משתמשי קודם!', generous: true,  flowers: 3 },
      { label: '💚 ציירי קו ותני לי!', generous: true,  flowers: 2 },
      { label: '😶 אני לא גומרת עד שלא אצייר הכול!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📖',
    text: 'שיעורי בית — אחותך לא מבינה משהו.',
    choices: [
      { label: '💚 אני אסביר לה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחשוב ביחד!', generous: true,  flowers: 3 },
      { label: '😶 שתשאל את המורה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🖊️',
    text: 'יש עט אחד אדום ושתיכן צריכות לסמן.',
    choices: [
      { label: '💚 סמני ותני לי!', generous: true,  flowers: 2 },
      { label: '💚 קחי, לי יש עט אחר!', generous: true,  flowers: 2 },
      { label: '😶 אני משתמשת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎒',
    text: 'לאחותך נשפך מיץ על הילקוט שלה.',
    choices: [
      { label: '💚 אני אעזור לה לנקות!', generous: true,  flowers: 3 },
      { label: '💚 אביא מגבת!', generous: true,  flowers: 2 },
      { label: '😶 היא תטפל בזה לבד!', generous: false, flowers: 0 }
    ]
  },

  // ── Screen & Technology ───────────────────────────────
  {
    emoji: '📱',
    text: 'אמא נתנה זמן מסך — 20 דקות לטאבלט.',
    choices: [
      { label: '💚 10 דקות לך, 10 לי!', generous: true,  flowers: 2 },
      { label: '💚 שחקי קודם, אני אחריך!', generous: true,  flowers: 3 },
      { label: '😶 אני כל ה-20 דקות!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📺',
    text: 'שתיכן רוצות לראות תוכנית שונה בטלוויזיה.',
    choices: [
      { label: '💚 בסדר, נראה את שלך היום!', generous: true,  flowers: 3 },
      { label: '💚 ניקח תורות — היום שלך, מחר שלי!', generous: true,  flowers: 2 },
      { label: '😶 אני בוחרת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎧',
    text: 'יש אוזניות אחת ושתיכן רוצות לשמוע מוזיקה.',
    choices: [
      { label: '💚 שמעי קצת ואני אחריך!', generous: true,  flowers: 3 },
      { label: '💚 נשים אוזניה אחת לך ואחת לי!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Jealousy (direct) ─────────────────────────────────
  {
    emoji: '🤗',
    text: 'אבא הרים את אחותך הקטנה.',
    choices: [
      { label: '💚 כיף לה! גם אני אבוא לחיבוק!', generous: true,  flowers: 3 },
      { label: '💚 היא קטנה, היא צריכה יותר!', generous: true,  flowers: 3 },
      { label: '😶 למה אותה ולא אותי?!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌟',
    text: 'המורה שיבחה את אחותך בפני כולם.',
    choices: [
      { label: '💚 כן! היא ממש חכמה!', generous: true,  flowers: 3 },
      { label: '💚 מגיע לה, היא עובדת קשה!', generous: true,  flowers: 3 },
      { label: '😶 ולי? אף אחד לא רואה אותי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '💝',
    text: 'סבתא הכינה עוגה מיוחדת בשביל אחותך.',
    choices: [
      { label: '💚 איזה מתוקה סבתא!', generous: true,  flowers: 3 },
      { label: '💚 גם לי יגיע היום שלי!', generous: true,  flowers: 3 },
      { label: '😶 לא הוגן, אני גם רוצה עוגה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '👗',
    text: 'אמא קנתה שמלה חדשה לאחותך.',
    choices: [
      { label: '💚 וואו, זה יפה עליה!', generous: true,  flowers: 3 },
      { label: '💚 יפה! גם לי יש שמלה יפה!', generous: true,  flowers: 2 },
      { label: '😶 אני רוצה שמלה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🥇',
    text: 'אחותך קיבלה מדליה בתחרות.',
    choices: [
      { label: '💚 כל הכבוד! אני כל כך גאה בך!', generous: true,  flowers: 3 },
      { label: '💚 זה לא קל, את עובדת קשה!', generous: true,  flowers: 2 },
      { label: '😶 גם אני יכולתי לנצח!', generous: false, flowers: 0 }
    ]
  },

  // ── Daily Life ────────────────────────────────────────
  {
    emoji: '🚿',
    text: 'המים החמים עוד לא חזרו. מי מתרחצת בצוננים?',
    choices: [
      { label: '💚 אני אתרחץ בצוננים, היא קטנה יותר!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחכה ביחד שיתחממו!', generous: true,  flowers: 2 },
      { label: '😶 היא תיכנס קודם לצוננים!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '💺',
    text: 'כיסא נוח אחד מול השולחן.',
    choices: [
      { label: '💚 שבי, אני לוקחת את האחר!', generous: true,  flowers: 3 },
      { label: '💚 ניקח תורות בכיסא הנוח!', generous: true,  flowers: 2 },
      { label: '😶 אני ישבתי כאן!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🕯️',
    text: 'חשכה, יש פנס אחד.',
    choices: [
      { label: '💚 נחזיק ביחד!', generous: true,  flowers: 3 },
      { label: '💚 תקחי, אני לא מפחדת מחושך!', generous: true,  flowers: 3 },
      { label: '😶 שלי הפנס!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧴',
    text: 'נשאר מעט קרם ידיים.',
    choices: [
      { label: '💚 קחי, לי לא ממש מגרד!', generous: true,  flowers: 3 },
      { label: '💚 נחלק את מה שנשאר!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎀',
    text: 'יש סרט שיער יפה אחד.',
    choices: [
      { label: '💚 קחי, זה יותר מתאים לך!', generous: true,  flowers: 3 },
      { label: '💚 היום את, מחר אני!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },

  // ── Creative ──────────────────────────────────────────
  {
    emoji: '🖼️',
    text: 'שתיכן רוצות לצייר על אותו דף גדול.',
    choices: [
      { label: '💚 בואי נצייר ביחד תמונה אחת!', generous: true,  flowers: 3 },
      { label: '💚 את בצד שלך, אני בצד שלי!', generous: true,  flowers: 2 },
      { label: '😶 הדף שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎵',
    text: 'שתיכן רוצות לשיר שיר — אבל שונה.',
    choices: [
      { label: '💚 בואי נשיר שיר שלך ואחר כך שלי!', generous: true,  flowers: 2 },
      { label: '💚 שירי קודם!', generous: true,  flowers: 3 },
      { label: '😶 השיר שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏺',
    text: 'חומר פיסול אחד — שתיכן רוצות ליצור.',
    choices: [
      { label: '💚 בואי ניצור פסל ביחד!', generous: true,  flowers: 2 },
      { label: '💚 חלקי לי קצת!', generous: true,  flowers: 2 },
      { label: '😶 שלי כל החומר!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '📷',
    text: 'מצלמה אחת בטיול.',
    choices: [
      { label: '💚 אני אצלם אותך!', generous: true,  flowers: 2 },
      { label: '💚 נצלם בתורות !', generous: true,  flowers: 3 },
      { label: '😶 אני הצלמת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎙️',
    text: 'שתיכן רוצות לספר סיפור — מי מתחילה?',
    choices: [
      { label: '💚 ספרי את ההתחלה, אני אמשיך!', generous: true,  flowers: 2 },
      { label: '😶 אני מספרת לבד!', generous: false, flowers: 0 }
    ]
  },

  // ── Nature & Animals ──────────────────────────────────
  {
    emoji: '🐱',
    text: 'חתול רחוב בא אליכן — מי מלטפת קודם?',
    choices: [
      { label: '💚 לטפי קודם, הוא בא אלייך!', generous: true,  flowers: 3 },
      { label: '💚 בואי נלטף ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🦜',
    text: 'תוכי בחנות חוזר על מה שאומרים — מי מדברת קודם?',
    choices: [
      { label: '💚 דברי את, אני אחריך!', generous: true,  flowers: 3 },
      { label: '💚 בואי שתינו נגיד ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני קודם!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌻',
    text: 'צמח אחד בעציץ שצריך השקיה.',
    choices: [
      { label: '💚 אני אשקה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשקה ביחד!', generous: true,  flowers: 2 },
      { label: '😶 תשקי את!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🐛',
    text: 'מצאתן זחל יפה — מי מחזיקה?',
    choices: [
      { label: '💚 תחזיקי קודם, אני מפחדת קצת!', generous: true,  flowers: 2 },
      { label: '💚 שמי על ידך, נחזיק ביחד!', generous: true,  flowers: 2 },
      { label: '😶 אני אחזיק לבד!', generous: false, flowers: 0 }
    ]
  },

  // ── Fairness & Sharing ────────────────────────────────
  {
    emoji: '⚖️',
    text: 'חילקו לכן ממתקים — לך יצא יותר.',
    choices: [
      { label: '💚 קחי כמה משלי!', generous: true,  flowers: 2 },
      { label: '💚 בואי נספור ונשווה!', generous: true,  flowers: 2 },
      { label: '😶 אני שומרת על שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎲',
    text: 'במשחק קיבלת הרבה כסף. לאחותך כמעט לא נשאר.',
    choices: [
      { label: '💚 קחי קצת מהשלי!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק מחדש, לא הוגן!', generous: true,  flowers: 2 },
      { label: '😶 ניצחתי, שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🃏',
    text: 'בחלוקת קלפים קיבלת קלפים טובים יותר.',
    choices: [
      { label: '💚 בואי נחלק מחדש!', generous: true,  flowers: 2 },
      { label: '💚 קחי אחד מהטובים שלי!', generous: true,  flowers: 3 },
      { label: '😶 המזל שלי, טוב!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🪑',
    text: 'אחותך עמדה הרבה זמן, יש כיסא אחד.',
    choices: [
      { label: '💚 שבי, עמדת כבר הרבה!', generous: true,  flowers: 3 },
      { label: '💚 תשבי קצת ואחר כך אני!', generous: true,  flowers: 2 },
      { label: '😶 אני שמרתי על הכיסא!', generous: false, flowers: 0 }
    ]
  },

  // ── Bedtime & Quiet Time ──────────────────────────────
  {
    emoji: '📚',
    text: 'ספר אחד לפני שינה — שתיכן רוצות אותו.',
    choices: [
      { label: '💚 בואי נקרא ביחד!', generous: true,  flowers: 2 },
      { label: '💚 קראי, ואני אקשיב!', generous: true,  flowers: 3 },
      { label: '😶 אני קוראת לבד!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌛',
    text: 'יש כרית רכה אחת מיוחדת.',
    choices: [
      { label: '💚 קחי אותה, שתישני טוב!', generous: true,  flowers: 3 },
      { label: '💚 חצי לילה אצלי, חצי אצלך!', generous: true,  flowers: 2 },
      { label: '😶 שלי!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧸',
    text: 'דובי נפל מהמיטה של אחותך בלילה.',
    choices: [
      { label: '💚 אני אקום ואתן לה!', generous: true,  flowers: 3 },
      { label: '💚 בואי נלך ביחד להרים אותו!', generous: true,  flowers: 2 },
      { label: '😶 שקום מי שרוצה...', generous: false, flowers: 0 }
    ]
  },

  // ── Compliments & Recognition ─────────────────────────
  {
    emoji: '💄',
    text: 'כולם אמרו שאחותך נראית יפה היום.',
    choices: [
      { label: '💚 נכון! את ממש יפה!', generous: true,  flowers: 3 },
      { label: '💚 כן, השמלה הזו מאוד יפה עלייך!', generous: true,  flowers: 3 },
      { label: '😶 אני יותר יפה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🏅',
    text: 'אחותך קיבלה ציון מצוין.',
    choices: [
      { label: '💚 כל הכבוד! עבדת קשה!', generous: true,  flowers: 3 },
      { label: '💚 מגיע לך לגמרי!', generous: true,  flowers: 3 },
      { label: '😶 גם אני יכולה לקבל טוב!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🌺',
    text: 'מישהו שיבח את ציור אחותך.',
    choices: [
      { label: '💚 כן, הציור שלה ממש יפה!', generous: true,  flowers: 3 },
      { label: '💚 היא אמנית!', generous: true,  flowers: 3 },
      { label: '😶 שלי יותר יפה...', generous: false, flowers: 0 }
    ]
  },

  // ── Problem Solving Together ──────────────────────────
  {
    emoji: '🗺️',
    text: 'הלכתן לאיבוד בפארק.',
    choices: [
      { label: '💚 אל תפחדי, ניצא ביחד!', generous: true,  flowers: 3 },
      { label: '💚 בואי נחשוב ביחד לאן ללכת!', generous: true,  flowers: 3 },
      { label: '😶  בגללך הלכנו לאיבוד!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🔦',
    text: 'הפנס כבה — אחותך מפחדת.',
    choices: [
      { label: '💚 קחי את ידי!', generous: true,  flowers: 3 },
      { label: '💚 אל תפחדי, אני כאן!', generous: true,  flowers: 3 },
      { label: '😶 אני גם מפחדת, אין לי כוח!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🧪',
    text: 'ניסוי מדע — צריך לערבב יחד.',
    choices: [
      { label: '💚 את תשפכי ואני אערבב!', generous: true,  flowers: 3 },
      { label: '💚 בואי נעשה את זה ביחד!', generous: true,  flowers: 3 },
      { label: '😶 אני עושה הכול לבד!', generous: false, flowers: 0 }
    ]
  },

  // ── Waiting & Patience ────────────────────────────────
  {
    emoji: '⏳',
    text: 'מחכות בתור ארוך. אחותך מתעייפת.',
    choices: [
      { label: '💚 בואי נספר סיפור כדי שהזמן יעבור!', generous: true,  flowers: 3 },
      { label: '💚 בואי נשחק משחק עם הידיים!', generous: true,  flowers: 3 },
      { label: '😶 שתפסיק להתלונן!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🚌',
    text: 'מחכות לאוטובוס. יש מקום אחד לשבת.',
    choices: [
      { label: '💚 שבי, אני אעמוד!', generous: true,  flowers: 3 },
      { label: '💚 חצי דקה את, חצי דקה אני!', generous: true,  flowers: 2 },
      { label: '😶 אני יושבת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🎡',
    text: 'תור ארוך לגלגל הענק. אחותך עייפה.',
    choices: [
      { label: '💚 תשבי אני אעמוד!', generous: true,  flowers: 3 },
      { label: '😶 לא אכפת לי שתלך, אני ממשיכה!', generous: false, flowers: 0 }
    ]
  },

  // ── Apology & Forgiveness ─────────────────────────────
  {
    emoji: '🙏',
    text: 'אחותך שברה בטעות משהו שלך.',
    choices: [
      { label: '💚 בסדר, היה בטעות!', generous: true,  flowers: 3 },
      { label: '💚 זה בסדר, אפשר לתקן!', generous: true,  flowers: 3 },
      { label: '😶 לא סולחת!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '💬',
    text: 'אחותך אמרה משהו שפגע בך, ועכשיו היא מתנצלת.',
    choices: [
      { label: '💚 סולחת לך!', generous: true,  flowers: 3 },
      { label: '💚 תודה שהתנצלת, אני מעריכה!', generous: true,  flowers: 3 },
      { label: '😶 לא סולחת לה!', generous: false, flowers: 0 }
    ]
  },
  {
    emoji: '🤝',
    text: 'אחרי ריב — מי יושיט יד ראשונה?',
    choices: [
      { label: '💚 אני! בואי נעשה שלום!', generous: true,  flowers: 3 },
      { label: '💚 שלום? שלום!', generous: true,  flowers: 3 },
      { label: '😶 שהיא תגיע אלי!', generous: false, flowers: 0 }
    ]
  },
];