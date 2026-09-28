// Synonym groups: any term in a group automatically expands bidirectionally to all other terms in that group
export const SYNONYM_GROUPS = [
  ['fee', 'fees', 'cost', 'costs', 'price', 'prices', 'pricing', 'charge', 'charges', 'rate', 'rates', 'payment', 'payments', 'pay', 'session fee', 'money', 'affordable', 'how much'],
  ['insurance', 'bupa', 'axa', 'aviva', 'vitality', 'private medical insurance', 'health insurance', 'health cover', 'insurance cover'],
  ['session', 'sessions', 'appointment', 'appointments', 'consultation', 'consultations', 'booking', 'book appointment', 'schedule'],
  ['cancel', 'cancellation', 'cancellations', 'rearrange', 'reschedule', 'cancel appointment', 'rearrange appointment', 'cancellation fee', 'missed appointment'],
  ['online', 'remote', 'zoom', 'teams', 'virtual', 'video', 'video call', 'telehealth', 'online therapy'],
  ['inperson', 'in-person', 'face-to-face', 'face to face', 'physical location', 'physical clinic', 'clinic', 'office', 'room', 'in-person therapy'],
  ['gp', 'doctor', "doctor's", 'doctors', 'general practitioner', 'gp surgery', 'local surgery', 'surgery', 'doctor surgery', 'medical practice', 'health centre', 'gp contact'],
  ['privacy', 'confidential', 'confidentiality', 'gdpr', 'records', 'notes', 'private', 'data protection'],
  ['crisis', 'emergency', 'urgent', 'danger', 'harm', '999', '111', 'suicide', 'a&e', 'hospital', 'crisis support'],
  ['eating disorder', 'eating disorders', 'anorexia', 'bulimia', 'binge eating', 'arfid', 'cbt-e', 'food', 'body image', 'diet'],
  ['nervous', 'anxious', 'anxiety', 'worried', 'worry', 'scared', 'fear', 'panic', 'phobia', 'phobias', 'social anxiety', 'health anxiety', 'ocd', 'obsessive compulsive'],
  ['cbt', 'cognitive behavioural therapy', 'cognitive behavioral', 'cbt-e', 'cbt-t', 'cbt-20-an'],
  ['duration', 'length', 'how long', 'number of sessions', 'how many sessions', 'frequency', 'how often', 'weekly', 'fortnightly'],
  ['diagnosis', 'diagnose', 'diagnosed', 'formal diagnosis', 'referral', 'doctor referral', 'gp referral'],
];

// Automatically build bidirectional lookup dictionary
export const SYNONYM_MAP = {};
SYNONYM_GROUPS.forEach((group) => {
  group.forEach((item) => {
    const key = item.toLowerCase();
    if (!SYNONYM_MAP[key]) {
      SYNONYM_MAP[key] = [];
    }
    group.forEach((other) => {
      const otherLower = other.toLowerCase();
      if (otherLower !== key && !SYNONYM_MAP[key].includes(otherLower)) {
        SYNONYM_MAP[key].push(otherLower);
      }
    });
  });
});
