import { AlertCircle } from 'lucide-react';

export const categories = [
  'All',
  'Starting Therapy',
  'CBT & Approaches',
  'Online & Practical',
  'Fees & Privacy',
  'Crisis Support'
];

export const getFaqs = (navigate) => [
  {
    id: 'first-contact',
    category: 'Starting Therapy',
    q: 'What happens when I first contact you?',
    keywords: ['contact form', 'enquiry', 'email', 'get in touch', 'reach out', 'response time', 'two working days', 'first step'],
    plainText: 'You’re welcome to get in touch using the contact form on my website. You can tell me a little about what you’re experiencing and what you would like support with, but you only need to share what feels comfortable at this stage. I’ll respond within two working days and, if appropriate, we can arrange an Initial Consultation to talk about what you’re looking for and whether therapy with me feels like the right fit.',
    a: (
      <div className="space-y-3">
        <p>
          You’re welcome to get in touch using the{' '}
          <button
            onClick={() => navigate && navigate('Contact')}
            className="text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-2 cursor-pointer"
          >
            contact form on my website
          </button>
          . You can tell me a little about what you’re experiencing and what you would like support with, but you only need to share what feels comfortable at this stage.
        </p>
        <p>
          I’ll respond within two working days and, if appropriate, we can arrange an Initial Consultation to talk about what you’re looking for and whether therapy with me feels like the right fit.
        </p>
      </div>
    )
  },
  {
    id: 'initial-consultation',
    category: 'Starting Therapy',
    q: 'What is an Initial Consultation?',
    keywords: ['initial consultation', 'first session', 'first appointment', 'assessment', 'chat', 'fit', 'meeting', 'expectations'],
    plainText: 'An Initial Consultation is an opportunity for us to talk about what has brought you to therapy, what you would like help with and what you hope to achieve. It also gives you the chance to ask questions and get a sense of what working together might be like. There is no expectation that you need to make a decision immediately. It is important that you feel comfortable with your therapist and the approach being offered.',
    a: (
      <div className="space-y-3">
        <p>
          An Initial Consultation is an opportunity for us to talk about what has brought you to therapy, what you would like help with and what you hope to achieve. It also gives you the chance to ask questions and get a sense of what working together might be like.
        </p>
        <p>
          There is no expectation that you need to make a decision immediately. It is important that you feel comfortable with your therapist and the approach being offered.
        </p>
      </div>
    )
  },
  {
    id: 'what-to-expect',
    category: 'CBT & Approaches',
    q: 'What can I expect from therapy?',
    keywords: ['expectations', 'collaborative', 'process', 'how therapy works', 'unhelpful patterns', 'practical changes'],
    plainText: 'Therapy is a collaborative process. We’ll work together to understand what you’re experiencing, how your difficulties may have developed and what might be keeping them going. I’ll help you identify patterns that may be unhelpful and, where appropriate, gently challenge some of the thoughts, behaviours and ways of coping that may be maintaining your difficulties. We’ll then work towards practical changes that are meaningful to you.',
    a: (
      <div className="space-y-3">
        <p>
          Therapy is a collaborative process. We’ll work together to understand what you’re experiencing, how your difficulties may have developed and what might be keeping them going.
        </p>
        <p>
          I’ll help you identify patterns that may be unhelpful and, where appropriate, gently challenge some of the thoughts, behaviours and ways of coping that may be maintaining your difficulties. We’ll then work towards practical changes that are meaningful to you.
        </p>
      </div>
    )
  },
  {
    id: 'what-is-cbt',
    category: 'CBT & Approaches',
    q: 'What is CBT?',
    keywords: ['cognitive behavioural therapy', 'evidence based', 'thoughts feelings behaviours', 'structured', 'practical', 'approach'],
    plainText: 'Cognitive Behavioural Therapy (CBT) is an evidence-based psychological therapy that explores the connections between our thoughts, feelings, physical responses and behaviours. CBT can help you understand patterns that may be contributing to your difficulties and develop different ways of responding. It is a structured and practical approach, but your therapy will always be tailored to your individual needs.',
    a: (
      <div className="space-y-3">
        <p>
          Cognitive Behavioural Therapy (CBT) is an evidence-based psychological therapy that explores the connections between our thoughts, feelings, physical responses and behaviours.
        </p>
        <p>
          CBT can help you understand patterns that may be contributing to your difficulties and develop different ways of responding. It is a structured and practical approach, but your therapy will always be tailored to your individual needs.
        </p>
      </div>
    )
  },
  {
    id: 'difficulties-worked-with',
    category: 'CBT & Approaches',
    q: 'What difficulties do you work with?',
    keywords: ['eating disorders', 'anxiety', 'social anxiety', 'health anxiety', 'phobias', 'ocd', 'obsessive compulsive', 'trauma', 'depression', 'low mood', 'problems', 'issues'],
    plainText: 'I work with adults experiencing a range of difficulties, including: Eating disorders, Anxiety, Social anxiety, Health anxiety, Phobias, Obsessive Compulsive Disorder (OCD), Trauma and trauma-related difficulties, Depression and low mood. I have a particular specialism in eating disorders and difficulties relating to food, eating and body image.',
    a: (
      <div className="space-y-3">
        <p>I work with adults experiencing a range of difficulties, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 text-stone-700">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Eating disorders</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Anxiety</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Social anxiety</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Health anxiety</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Phobias</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Obsessive Compulsive Disorder (OCD)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Trauma and trauma-related difficulties</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
            <span>Depression and low mood</span>
          </li>
        </ul>
        <p className="pt-2 text-stone-700 font-medium">
          I have a particular specialism in eating disorders and difficulties relating to food, eating and body image.
        </p>
      </div>
    )
  },
  {
    id: 'eating-disorders',
    category: 'CBT & Approaches',
    q: 'What eating disorders do you work with?',
    keywords: ['anorexia nervosa', 'bulimia nervosa', 'binge eating', 'arfid', 'avoidant restrictive', 'cbt-e', 'cbt-t', 'cbt-20-an', 'food', 'body image'],
    plainText: 'I have specialist training and experience working with Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder and Avoidant Restrictive Food Intake Disorder (ARFID). My main treatment approach for eating disorders is Enhanced Cognitive Behavioural Therapy (CBT-E). Depending on your individual needs, I may also draw on other evidence-informed CBT approaches, including CBT-T and CBT-20-AN.',
    a: (
      <div className="space-y-3">
        <p>
          I have specialist training and experience working with <strong>Anorexia Nervosa</strong>, <strong>Bulimia Nervosa</strong>, <strong>Binge Eating Disorder</strong> and <strong>Avoidant Restrictive Food Intake Disorder (ARFID)</strong>.
        </p>
        <p>
          My main treatment approach for eating disorders is Enhanced Cognitive Behavioural Therapy (CBT-E). Depending on your individual needs, I may also draw on other evidence-informed CBT approaches, including CBT-T and CBT-20-AN.
        </p>
      </div>
    )
  },
  {
    id: 'diagnosis-needed',
    category: 'Starting Therapy',
    q: 'Do I need to have a diagnosis to have therapy?',
    keywords: ['formal diagnosis', 'diagnosed', 'doctor referral', 'gp referral', 'assessment', 'eligibility'],
    plainText: 'No. You do not necessarily need a formal diagnosis to seek therapy. We can talk about the difficulties you are experiencing during the Initial Consultation and consider whether the support I offer is appropriate for you.',
    a: (
      <div className="space-y-3">
        <p>
          No. You do not necessarily need a formal diagnosis to seek therapy.
        </p>
        <p>
          We can talk about the difficulties you are experiencing during the Initial Consultation and consider whether the support I offer is appropriate for you.
        </p>
      </div>
    )
  },
  {
    id: 'length-of-therapy',
    category: 'CBT & Approaches',
    q: 'How long does therapy take?',
    keywords: ['duration', 'number of sessions', 'how many sessions', 'weeks', 'months', 'review progress'],
    plainText: 'There is no fixed number of sessions that is right for everyone. The length of therapy depends on the nature and complexity of your difficulties, your goals and how you progress. We will regularly review how therapy is going and make sure we are working towards the goals that are important to you.',
    a: (
      <div className="space-y-3">
        <p>
          There is no fixed number of sessions that is right for everyone. The length of therapy depends on the nature and complexity of your difficulties, your goals and how you progress.
        </p>
        <p>
          We will regularly review how therapy is going and make sure we are working towards the goals that are important to you.
        </p>
      </div>
    )
  },
  {
    id: 'session-frequency',
    category: 'Online & Practical',
    q: 'How often will I have sessions?',
    keywords: ['frequency', 'weekly', 'fortnightly', 'how often', 'appointments', 'regular'],
    plainText: 'This will depend on your individual circumstances and the type of therapy we agree is appropriate. We will discuss the recommended frequency during your assessment and review this as therapy progresses.',
    a: (
      <div className="space-y-3">
        <p>
          This will depend on your individual circumstances and the type of therapy we agree is appropriate. We will discuss the recommended frequency during your assessment and review this as therapy progresses.
        </p>
      </div>
    )
  },
  {
    id: 'online-therapy',
    category: 'Online & Practical',
    q: 'Do you offer online therapy?',
    keywords: ['online sessions', 'video call', 'zoom', 'microsoft teams', 'remote', 'virtual', 'telehealth', 'home'],
    plainText: 'Yes. I offer online therapy to adults, providing flexibility and allowing you to attend sessions from a private and suitable space where you feel comfortable. Sessions will normally be conducted using secure video platforms (such as Zoom or Microsoft Teams). Before beginning online therapy, we will discuss how this works and the practical arrangements involved.',
    a: (
      <div className="space-y-3">
        <p>
          Yes. I offer online therapy to adults, providing flexibility and allowing you to attend sessions from a private and suitable space where you feel comfortable.
        </p>
        <p>
          Sessions will normally be conducted using secure video platforms (such as Zoom or Microsoft Teams).
        </p>
        <p>
          Before beginning online therapy, we will discuss how this works and the practical arrangements involved.
        </p>
      </div>
    )
  },
  {
    id: 'in-person-therapy',
    category: 'Online & Practical',
    q: 'Do you offer In person / Face to face therapy?',
    keywords: ['in person', 'face to face', 'face-to-face', 'physical office', 'clinic', 'kent', 'room'],
    plainText: 'At the moment, I offer online therapy only, which many people find provides a flexible, comfortable and private way to access support. Therapy can be just as effective online, and I aim to create the same warm, safe and collaborative space that you would experience in person. I understand that some people prefer face-to-face appointments, and this is something I may offer in the future. If in-person sessions become available, I will share further information on my website.',
    a: (
      <div className="space-y-3">
        <p>
          At the moment, I offer online therapy only, which many people find provides a flexible, comfortable and private way to access support. Therapy can be just as effective online, and I aim to create the same warm, safe and collaborative space that you would experience in person.
        </p>
        <p>
          I understand that some people prefer face-to-face appointments, and this is something I may offer in the future. If in-person sessions become available, I will share further information on my website.
        </p>
      </div>
    )
  },
  {
    id: 'confidentiality',
    category: 'Fees & Privacy',
    q: 'Is therapy confidential?',
    keywords: ['confidential', 'confidentiality', 'privacy', 'private', 'gdpr', 'safeguarding', 'harm', 'legal', 'sharing data'],
    plainText: 'Yes. Confidentiality is an important part of therapy, and what you share with me will normally remain private. There are a small number of circumstances where confidentiality may need to be limited, such as where there is a serious risk of harm, a significant safeguarding concern or a legal requirement to share information. Wherever possible, I will discuss this with you first. Further information is available in my Privacy & Confidentiality Policy, Privacy Notice, and Therapy Agreement.',
    a: (
      <div className="space-y-3">
        <p>
          Yes. Confidentiality is an important part of therapy, and what you share with me will normally remain private.
        </p>
        <p>
          There are a small number of circumstances where confidentiality may need to be limited, such as where there is a serious risk of harm, a significant safeguarding concern or a legal requirement to share information. Wherever possible, I will discuss this with you first.
        </p>
        <p>
          Further information is available in my{' '}
          <button
            onClick={() => navigate && navigate('Privacy')}
            className="text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-2 cursor-pointer"
          >
            Privacy &amp; Confidentiality Policy
          </button>
          , Privacy Notice, and Therapy Agreement.
        </p>
      </div>
    )
  },
  {
    id: 'gp-contact',
    category: 'Fees & Privacy',
    q: 'Will you tell my GP that I am having therapy?',
    keywords: ['gp', 'doctor', 'medical record', 'nhs', 'contact gp', 'sharing with doctor', 'surgery', 'local surgery', 'gp surgery', 'general practitioner', 'medical practice', 'health centre'],
    plainText: 'Not routinely. We will discuss whether it would be helpful to involve your GP or another healthcare professional and, where appropriate, seek your agreement before sharing information. There may be exceptional circumstances where information needs to be shared without consent, for example where there is a serious and immediate risk of harm or a legal requirement to do so.',
    a: (
      <div className="space-y-3">
        <p>
          Not routinely. We will discuss whether it would be helpful to involve your GP or another healthcare professional and, where appropriate, seek your agreement before sharing information.
        </p>
        <p>
          There may be exceptional circumstances where information needs to be shared without consent, for example where there is a serious and immediate risk of harm or a legal requirement to do so.
        </p>
      </div>
    )
  },
  {
    id: 'cancellation-policy',
    category: 'Fees & Privacy',
    q: 'What happens if I need to cancel or rearrange my appointment?',
    keywords: ['cancel', 'cancellation', 'rearrange', 'reschedule', 'change appointment', 'notice period', 'cancellation fee', 'missed appointment'],
    plainText: 'I understand that sometimes things happen and appointments may need to be changed. My cancellation policy is explained clearly in the Fees Page and my Therapy Agreement, including applicable cancellation fee and any notice period. I’ll always encourage you to contact me as soon as possible if you cannot attend an appointment.',
    a: (
      <div className="space-y-3">
        <p>
          I understand that sometimes things happen and appointments may need to be changed. My cancellation policy is explained clearly in the{' '}
          <button
            onClick={() => navigate && navigate('Fees')}
            className="text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-2 cursor-pointer"
          >
            Fees Page
          </button>{' '}
          and my Therapy Agreement, including applicable cancellation fee and any notice period.
        </p>
        <p>
          I’ll always encourage you to contact me as soon as possible if you cannot attend an appointment.
        </p>
      </div>
    )
  },
  {
    id: 'cost-of-therapy',
    category: 'Fees & Privacy',
    q: 'How much does therapy cost?',
    keywords: ['fee', 'fees', 'cost', 'costs', 'pricing', 'price', 'rates', 'pay', 'payment', 'stripe', 'bank transfer', 'session fee', 'prices', 'how much'],
    plainText: 'My current fees and payment arrangements are provided in the Fees Page and are also outlined in the Therapy Agreement. Payment can be made securely online using Stripe or by bank transfer.',
    a: (
      <div className="space-y-3">
        <p>
          My current fees and payment arrangements are provided in the{' '}
          <button
            onClick={() => navigate && navigate('Fees')}
            className="text-emerald-700 hover:text-emerald-800 font-medium underline underline-offset-2 cursor-pointer"
          >
            Fees Page
          </button>{' '}
          and are also outlined in the Therapy Agreement.
        </p>
        <p>
          Payment can be made securely online using Stripe or by bank transfer.
        </p>
      </div>
    )
  },
  {
    id: 'is-therapy-right-for-me',
    category: 'Starting Therapy',
    q: 'How do I know whether therapy with you is right for me?',
    keywords: ['right fit', 'suitable', 'good match', 'choosing a therapist', 'decision'],
    plainText: 'Choosing a therapist is a personal decision, and it is important that you feel comfortable with the person you work with. The Initial Consultation gives us an opportunity to explore what you need and whether my experience and approach are suitable for you. You are also welcome to ask any questions before deciding whether to proceed.',
    a: (
      <div className="space-y-3">
        <p>
          Choosing a therapist is a personal decision, and it is important that you feel comfortable with the person you work with.
        </p>
        <p>
          The Initial Consultation gives us an opportunity to explore what you need and whether my experience and approach are suitable for you. You are also welcome to ask any questions before deciding whether to proceed.
        </p>
      </div>
    )
  },
  {
    id: 'not-right-therapist',
    category: 'Starting Therapy',
    q: "What if you don't think you are the right therapist for me?",
    keywords: ['not suitable', 'alternative support', 'referral', 'other services', 'not right fit'],
    plainText: 'Your wellbeing is the priority. If I feel that another service, therapist or type of support would be more appropriate for your needs, I will discuss this with you and, where possible, help you consider suitable alternatives.',
    a: (
      <div className="space-y-3">
        <p>
          Your wellbeing is the priority. If I feel that another service, therapist or type of support would be more appropriate for your needs, I will discuss this with you and, where possible, help you consider suitable alternatives.
        </p>
      </div>
    )
  },
  {
    id: 'in-crisis',
    category: 'Crisis Support',
    isCrisis: true,
    q: 'What if I am currently in crisis?',
    keywords: ['crisis', 'emergency', 'urgent', '999', '111', 'nhs', 'suicide', 'immediate danger', 'a&e', 'hospital', 'harm'],
    plainText: 'Private therapy is not an emergency or crisis service. If you are in immediate danger or need urgent medical assistance, please contact 999 or attend your nearest Emergency Department. If you need urgent mental health support, you can contact NHS 111 and select the mental health option. If you are already receiving support from another healthcare professional, you should also contact them if you are concerned about your immediate wellbeing.',
    a: (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-red-900 text-sm">
          <p className="font-semibold flex items-center gap-2 mb-1 text-red-800">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            Private therapy is not an emergency or crisis service.
          </p>
          <p>
            If you are in immediate danger or need urgent medical assistance, please contact <strong>999</strong> or attend your nearest Emergency Department.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm">
          <p className="font-semibold mb-1 text-amber-800">
            NHS Urgent Mental Health Support
          </p>
          <p>
            If you need urgent mental health support, you can contact <strong>NHS 111</strong> and select the mental health option.
          </p>
        </div>
        <p className="text-stone-700">
          If you are already receiving support from another healthcare professional, you should also contact them if you are concerned about your immediate wellbeing.
        </p>
      </div>
    )
  },
  {
    id: 'preparation-first-session',
    category: 'Starting Therapy',
    q: 'Do I need to prepare anything before my first appointment?',
    keywords: ['preparation', 'prepare', 'forms', 'therapy agreement', 'privacy notice', 'paperwork'],
    plainText: 'No special preparation is required. Before therapy begins, I will provide the relevant information and forms, including your Therapy Agreement and Privacy Notice. You can simply come as you are. During the Initial Consultation, we’ll take time to understand what has brought you to therapy and what you would like support with.',
    a: (
      <div className="space-y-3">
        <p>
          No special preparation is required. Before therapy begins, I will provide the relevant information and forms, including your Therapy Agreement and Privacy Notice.
        </p>
        <p>
          You can simply come as you are. During the Initial Consultation, we’ll take time to understand what has brought you to therapy and what you would like support with.
        </p>
      </div>
    )
  },
  {
    id: 'nervous-starting-therapy',
    category: 'Starting Therapy',
    q: 'What if I’m nervous about starting therapy?',
    keywords: ['nervous', 'anxious', 'fear', 'scared', 'worried', 'hesitant', 'first time', 'what to say'],
    plainText: 'It is completely understandable to feel nervous about contacting a therapist or talking about personal things for the first time. You don’t need to know exactly what to say or have everything worked out before you contact me. We can take things step by step and begin with a conversation about what is happening for you.',
    a: (
      <div className="space-y-3">
        <p>
          It is completely understandable to feel nervous about contacting a therapist or talking about personal things for the first time.
        </p>
        <p>
          You don’t need to know exactly what to say or have everything worked out before you contact me. We can take things step by step and begin with a conversation about what is happening for you.
        </p>
      </div>
    )
  }
];
