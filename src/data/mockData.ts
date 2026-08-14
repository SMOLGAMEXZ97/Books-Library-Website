import { Book, Collection, UserProfile, ReadingHistoryItem } from '../types';

export const INITIAL_USER: UserProfile = {
  name: "Aura Member",
  email: "member@auraeditorial.com",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM5beAmRbH-VqdHB2K1_pl-b0BEKkHN5Y910Dqfia1pvB4OJ3GwMqrAb8PsPgPb_qysaPNTGjSFaCwuGnt7OjlaL7zmpac6XBzAlAGDm6WuCZ4vLLBgUXtxWevB52yrpnUQVW2iboeW1hwvJLYZM4Rf1qeluzw_oOJzQO26oXlP3LhNh6baUSKOuQDFE7SJ5iI0Z7PS1W9uJQ2TNd-YVPgiLfllVDgeZNbxWeMHm5ct965xyM5t965",
  isPro: true,
  monthlyTarget: 4,
  monthlyCompleted: 3,
  yearlyTarget: 24,
  yearlyCompleted: 12,
  storageUsedGB: 2.4,
  storageTotalGB: 5.0,
  downloadedBooksCount: 14,
  emailUpdates: true,
  newReleases: false,
  readingReminders: true,
  publicProfile: false,
  dataSharing: true,
};

export const INITIAL_BOOKS: Book[] = [
  {
    id: "arch-silence",
    title: "The Architecture of Silence",
    author: "Eleanor Vance",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8dfvAJrOkmdTPKAR6kD1sJ5MirhbwlZGGrLQr2OV4155BaYeYiskdFykZS_8MJ4-E4JC13DMAViYrZ3lhwAMvKax7vUviZCIES39IOkSJC2woJuh0p6CQpAlUAKx7NK7hqihF2Eo5_yH_mYiiKr4N0sLAwcpPJaUdLnsqlT8CHtycg1pil4FrtAzunZxR9DWru8VH9fVO6S3-zFZSvtckx1WIk4sPRVRxi8G4MSQAv2vCrPUb0_1F",
    rating: 4.6,
    reviewsCount: 1245,
    description: "In a world increasingly defined by noise, Eleanor Vance's masterful new essay collection explores the profound necessity of quiet. From the cloistered gardens of Kyoto to the soundproof chambers of modern recording studios, The Architecture of Silence weaves together history, philosophy, and personal narrative to construct a compelling argument for the restorative power of absence.",
    category: "Essays",
    pages: 320,
    published: "Oct 2023",
    language: "English",
    progress: 32,
    minsLeft: 42,
    isTrending: true,
    isWishlist: true,
    inBookshelf: true,
    authorBio: {
      name: "Eleanor Vance",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO3KkLcwKzGicVYfMM9iaAvY1kyWoq6T-dqIVtOpZKziJDijEbL6ZwXcjlGcSyBE65JKPvSi2vFPS0H29JoMNcg5MiBL_XelVxxGxBmNknde76QWbLI2isscaOnxqXiHgeCwg7B01TVX8MwZ2jOYG9q_xLZS1jbJnX4bDT1XZfKXtzLOPCLvul6D2oADhkf5LvL3warZegckqXCEwP4pbRSyIq0prKx1BPMgn5ibjm5CULul3zwOei",
      bio: "Eleanor Vance is an acclaimed essayist and cultural critic. Her previous book, The Geometry of Solitude, won the National Book Critics Circle Award. She lives in upstate New York."
    },
    reviews: [
      {
        id: "r1",
        author: "Marcus T.",
        initial: "M",
        rating: 5,
        text: "A profoundly moving exploration of quiet spaces. Vance's prose is as measured and deliberate as the silence she studies. I found myself reading slower, savoring every sentence."
      },
      {
        id: "r2",
        author: "Sarah J.",
        initial: "S",
        rating: 4,
        text: "Intellectually rigorous but highly accessible. The chapter on the acoustics of cathedrals was particularly fascinating. Highly recommend for anyone feeling overwhelmed by modern noise."
      }
    ],
    chapters: [
      {
        id: "c1",
        number: 1,
        title: "The Threshold of Solitude",
        content: [
          "Before noise became ambient and incessant, silence was a natural condition rather than a deliberate refuge.",
          "To enter a space stripped of manufactured sound is to invite a sudden expansion of awareness. The heartbeat slows; the inner dialogue transforms from a rapid sprint into a measured stride.",
          "In the ancient monasteries of Mount Athos, monks built stone corridors designed specifically to attenuate echo while preserving the low resonance of human breathing."
        ]
      },
      {
        id: "c2",
        number: 2,
        title: "Acoustics of Cathedrals",
        content: [
          "Gothic architecture did not merely aim for height; it sculpted sound. Stone arches acted as natural delay lines, lingering each organ note for seven seconds.",
          "In this sustained reverberation, individual notes dissolved into unified harmonies, lifting the listener into a timeless acoustic cathedral."
        ]
      },
      {
        id: "c3",
        number: 3,
        title: "The Cloistered Garden",
        content: [
          "Kyoto's Ryoan-ji dry landscape garden communicates through fifteen stones laid upon raked white gravel. From any angle, at least one stone remains hidden.",
          "The garden teaches us that completeness is an illusion. What is withheld gives room for imagination to dwell."
        ]
      },
      {
        id: "c4",
        number: 4,
        title: "The Quiet Mind",
        content: [
          "In an age of constant connectivity, silence has become the ultimate luxury. We are bombarded with notifications, news feeds, and the incessant hum of digital existence. Yet, it is only within the spaces between the noise that profound thought can truly gestate. The concept of the quiet mind is not about emptying one's head of all thoughts, but rather, cultivating a sanctuary where thoughts can organize themselves without the interference of external urgency.",
          "Consider the architecture of a grand library. The physical space dictates a reverence for the written word. High ceilings absorb the ambient sound, creating a muffled stillness that paradoxically amplifies concentration. In this environment, the turning of a page becomes an event, a tactile confirmation of intellectual progress. We must learn to architect our internal spaces with similar intention.",
          "Seneca wrote extensively on the idea of tranquility, noting that true peace is not found in the absence of conflict, but in the ability to maintain equilibrium amidst it. This equilibrium is the foundation of deep reading. When we engage with a text, we are essentially entering into a dialogue with the author's consciousness. If our own mind is fractured by distraction, the dialogue becomes a monologue, and comprehension remains superficial.",
          "The practice begins with simple observation. Notice the impulse to check a device when encountering a difficult passage. This friction—the resistance to prolonged cognitive effort—is exactly where growth occurs. By choosing to stay with the difficulty, to dwell in the discomfort of complex ideas, we strengthen the muscles of attention. Over time, the need for immediate stimulation fades, replaced by a sustained, steady focus that is the hallmark of the literary mind."
        ]
      }
    ]
  },
  {
    id: "arch-stillness",
    title: "The Architecture of Stillness",
    author: "Julian P. Barnes",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFtc-HMjna47IIyd0i2DEBmtOHqXTmXMYEfbHQ2fqtrVqYGWGJZzMc0uyoBnNivCaE8UtytrZlCMmdvTOUIOpB08oqEDFB8Y43hmoX04OBSAXkkADz4gOw2ZrvvVfpCcElB3Q59eCGhiHstt1QY3ovt7LU2G407l6nACCnhXA9Tkq24KCMGIotdq4zTjRfUuItVttSADBnUfBzK2562AHXIzd9AtVQAE6lhSb2y7YxjtuFJJqAwPV_",
    rating: 4.8,
    reviewsCount: 890,
    description: "An exploration into how physical space, form, and ontology shape our internal stillness and psychological tranquility in modern urban landscapes.",
    category: "Philosophy",
    pages: 280,
    published: "Jan 2024",
    language: "English",
    progress: 68,
    minsLeft: 42,
    isTrending: false,
    isWishlist: false,
    inBookshelf: true,
    chapters: [
      {
        id: "as-c1",
        number: 1,
        title: "Ontology of Modern Form",
        content: [
          "Stillness is not passive immobility; it is the active suspension of friction. When a building aligns with the horizon, it grounds the observer's gaze.",
          "The human mind naturally seeks equilibrium in proportion. Balance in layout translates directly into psychological calm."
        ]
      }
    ]
  },
  {
    id: "silent-arch",
    title: "The Silent Architecture",
    author: "Elena Rostova",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvWDTACtHmQFpmUjRO_2Ex5BWuHltqhn-3m0sG4JDt8DPR4iYsyaaMM_8jTjBxP7odBgr5yKl2zBSrTA5_ndHOvOBq7ad587_I_oRV07UNCBW8z3fJyUJAoSEWdNdj1oF9CP6P-KTkXKvZ_3cUlQrlLGbCeEiYvDAQ6qFzTKgazl_x3nzX8ymCiUwB_affjITL3gv37icxggxVLYrVa5CzzPp0JT2q12NlIE6QUy5vX3-y3NtSnBuN",
    rating: 4.7,
    reviewsCount: 940,
    description: "A thought-provoking debut novel tracing the delicate intersections between memory, architectural heritage, and personal redemption.",
    category: "Fiction",
    pages: 340,
    published: "May 2023",
    language: "English",
    progress: 0,
    minsLeft: 210,
    isTrending: true,
    isWishlist: true,
    inBookshelf: false
  },
  {
    id: "echoes-valley",
    title: "Echoes of the Valley",
    author: "Marcus Vance",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPdalrMIzIe22HvCcCbg7tb8mkyhv2vt7jznfcVsaRLiPS0yO53pWgRV_LgPkkxHA9RxB2ndg54qAQX1L1tIbizRcq1f909_v8LP05SLCbLMkYsNwmWujzrzJDpVmp0cbokIZTU-MYz8ILXFAQPrkvh4ZjN4kILLhhSLZg-empTCwJl7tO_--O_62DNP2crXe5RQrQBIFBO73HfUm9vg6T9stfK6pW-iKSClMSPOK5seTEPUweNmGM",
    rating: 4.5,
    reviewsCount: 620,
    description: "A poetic novel of nature, memory, and quiet rural life set amidst the sweeping hills and whispering pine forests.",
    category: "Fiction",
    pages: 290,
    published: "Sep 2023",
    language: "English",
    progress: 0,
    minsLeft: 180,
    isTrending: true,
    isWishlist: false,
    inBookshelf: false
  },
  {
    id: "minimalist-theory",
    title: "Minimalist Theory",
    author: "Dr. Sarah Jenkins",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2OFx_jENzVi3YS1fzeeBclynt9B9K0UabrzDwKs1Q64-rzECjZgReC3zndEdUd9kFqxCJmgg12v-CzWVDqe5KYlkHVmCSDGpYsxWvoSI_lexDjOKvv4Gxhg1pguqAD0yrD7PJ7TJ9oYZs2UKXyz4ei8AJSG9cEdsKVd0wo0j47ua1RJT3wtu6vvJT6oo9yciSmZP4Xkk46tZOAX4aDp_zmdtQ_C0i5gDagL7kUgVlq9jAMy2kcD02",
    rating: 4.9,
    reviewsCount: 1510,
    description: "A rigorous treatise on reducing complexity in art, living environments, and cognitive workflows for heightened creative clarity.",
    category: "Non-Fiction",
    pages: 260,
    published: "Nov 2023",
    language: "English",
    progress: 89,
    minsLeft: 15,
    isTrending: true,
    isWishlist: false,
    inBookshelf: true
  },
  {
    id: "whispers-code",
    title: "Whispers in Code",
    author: "Julian Bates",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDSgFbeNsi_1PBfAqqoccAmN9YDLjNHoil-Iq14en42UFg7X4ZTs-8tFshkVhnafqMlHqZ5o8hoOQ-erbApf3tALfmcDvuv0irZiGyBClIekROAv6W3J1fD61xhr4J7CK6tTwbsq1IjU-PivtPMCk988ry6pUeGWqJqDN8txcXzkar_Ret7uTwI4oWtr5QfFF9eiYZ7qWTyZroL-y57LdPFQknA2Ii68fZlZi4Df1mXO55o2rtk1QI",
    rating: 4.4,
    reviewsCount: 430,
    description: "A profound exploration of finding clarity and meaning in a chaotic digital landscape, available in hardcover and e-book.",
    category: "Non-Fiction",
    pages: 310,
    published: "Dec 2023",
    language: "English",
    progress: 0,
    minsLeft: 190,
    isTrending: true,
    isWishlist: true,
    inBookshelf: false
  },
  {
    id: "silent-spaces",
    title: "Silent Spaces",
    author: "E.R. Thompson",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT3R3faURfFUpDcKhPyGnWBxYLahfDdZ8nY7OaCu7gJewu6ew2LL8mjiNQM9wBIhToHrG0kzuwlwNTBNz6otBMqg7MOPG_XCo116mznkCZq6QGKGsa28xjCCESuMieMdTz3jDbsaSisoUALexoAoCsOX5AHNubdHu8iXCmgIxpRK5cSXEasimBVyqHFNHb1LjPg6cKaXvnryzM3AJywWOgSNx-RgVSul1JEXEsdfLPvS_85fsY4SeQ",
    rating: 4.6,
    reviewsCount: 780,
    description: "A meditation on stillness, solitude, and the quiet sanctuaries we build within our busy everyday routines.",
    category: "Essays",
    pages: 210,
    published: "Aug 2023",
    language: "English",
    progress: 12,
    minsLeft: 95,
    isTrending: false,
    isWishlist: false,
    inBookshelf: true
  },
  {
    id: "memory-tree",
    title: "The Memory Tree",
    author: "Sarah Jenkins",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzZ6ifIeGuvhtpYcf2RPr1EFi3M11VxeNDp6keqxuWDZJyhvIAFl43CBAUJ0uUXNZYqY4qxLxiB9MKo1AlAR3qpMCGNNTWnTW9qabQQGhMTujIzKscRRzvXYuVf4X0sKxoXLy2fnCShINRvVQwKMjgR-TCwwu8rCGc8kQhQgRPrYU4ecGIJDxUrTqYBiNu219FMPgeKiKK-kAP_DIdwjNR4OTvF0rnCiYcau39HLAmc9LlLz55D-E1",
    rating: 4.8,
    reviewsCount: 1120,
    description: "A poignant literary narrative connecting generational roots, family secrets, and the enduring strength of memory.",
    category: "Fiction",
    pages: 360,
    published: "Feb 2024",
    language: "English",
    progress: 89,
    minsLeft: 22,
    isTrending: false,
    isWishlist: true,
    inBookshelf: true
  },
  {
    id: "principles-design",
    title: "Principles of Design",
    author: "Dieter Rams",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviewsCount: 2300,
    description: "Ten classic principles for good design: less, but better. Essential reading for designers, architects, and minimalist thinkers.",
    category: "Design",
    pages: 240,
    published: "Jul 2022",
    language: "English",
    progress: 45,
    minsLeft: 60,
    isTrending: false,
    isWishlist: false,
    inBookshelf: true
  },
  {
    id: "tangled-threads",
    title: "Tangled Threads",
    author: "A.N. Other",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqxR77WAA5oTBtWugNw3pRpf0SJbuZ4EtJfqbKqsIszUyoUFvyxBhrAGUKTtTPGZP_dSOC0UnqAVMjBS74xwliK5F8oLIE8ogv1Ut2ypCnJKcWD61qA29mjc-5kBox2kGVLE-YbwCB90KnW7IOrL9ofKSA-9E4zyNZhyrj0uWTV7kR9waSSXxE3j0z3rrt1T5jQ6Kc1jCzVWQEsP32M6oXwjOamlTHldBDLBb5LZW2h2ofGIGvQ34H",
    rating: 4.3,
    reviewsCount: 310,
    description: "An intricate modern drama following intertwined human destinies across four global capitals.",
    category: "Fiction",
    pages: 328,
    published: "Nov 2023",
    language: "English",
    progress: 3,
    minsLeft: 195,
    isTrending: false,
    isWishlist: false,
    inBookshelf: true
  }
];

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: "modern-classics",
    title: "Modern Classics",
    tagline: "Timeless works redefined.",
    category: "Fiction Focus",
    description: "Essential narratives that defined the late 20th century, exploring existentialism, identity, and the human condition in a rapidly changing world.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmAS4K5L6UHUcGrHjYs8cIz0OUmPcn0DQcjmh7LxmqKogzXgikcj9NLutOBZdwcpFylx1FLqNhrKBMyjy_uYAPvBN0rekbkXIOieYNmSTd508EH6NQvZZ4n_fWPjNl93ywAI6UFik5Bcv67MVc2Do2haSscrKm-GypQVEYcNi_RNcvnNIU3FGvDrPe8C76P2bFnlg6vM0B8L3Y7d1esLQ-lmx_0feL3G5qfOWPRh62F93-OV5m_NW",
    bookIds: ["arch-silence", "silent-arch", "memory-tree"]
  },
  {
    id: "contemporary-fiction",
    title: "Contemporary Fiction",
    tagline: "Voices of today.",
    category: "Fiction Focus",
    description: "Vibrant, bold contemporary fiction offering fresh perspectives on love, technology, and modern human connections.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBil6MaMH5wa6y-YkCosXWlDhhu64SpUQ1c8aN6_Xqeg1tEhQ8t9198qC2BsykhM2yvWIUHQ7Gf3crvO8XhMDwODcp8e3MDuDn2JG4degDhu7oWZmtlJNKsFwDPk0_Ifnj_EtcqF23lKiT8VGbyEz0B5txfg7MCcEiMvT2PY1MIprdHDwlbd-idreyFKANNsgntZhrXOOG7R2R5yp1l2sYtb3xniTrJJ38fsWW-ybwC2eG8ygEtj2ji",
    bookIds: ["echoes-valley", "tangled-threads"]
  },
  {
    id: "scientific-journals",
    title: "Scientific Journals",
    tagline: "Expand your knowledge.",
    category: "Non-Fiction",
    description: "Rigorous analytical thought and research dissecting society, technology, philosophy, and environmental ethics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL0KVxdPG3AVsWIhMq8MwFK_NBp6WLzpLhpgu3n4sTV0uCwixtveESDcTmVuVjfFAHR0Bv9jBizFuiYZdE25sIa1nT4U1VDy5_O6W26eDD2W9q4NdNmn6PkR4Wer2AmdUBGzc044ePXlekenSGVV3EUKVTgZ5F-5Q0hCeUTic2UPNgwgw4iQIMUCKVDmqwlZZcDVSkAzy-LfjDcUQqtSxrHvAGYfOIblyUyBTPacTl2ishdv7VrLJo",
    bookIds: ["minimalist-theory", "whispers-code"]
  },
  {
    id: "award-winning-essays",
    title: "Award-Winning Essays",
    tagline: "A rigorous collection of analytical thought.",
    category: "Non-Fiction",
    description: "A rigorous collection of analytical thought. Award-winning journalists and essayists dissect society, politics, and culture.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxGgcyl3T1yyWFvvpF_2nCVy4KJOdNKy_aZ5GGrjGmCfrghoLnsKGb7UAN_olPYrhyaasIWZxehw2-rinU1dxYli62sLw1hC7PsQ7WAQAg2_3iYqq1u8b2F9fZwsfFx4AEW1xsViVNV-UxkDti0_DRDENgs-PHhoBuVO2eKnpY-lV5uh85gEh_9yXk7sdL1dzIYKXTfW8_OAR_MwqFvT8-1v8PXWnk5ZG446gvWsJgikDLYn21SqeH",
    bookIds: ["arch-silence", "silent-spaces"]
  }
];

export const INITIAL_HISTORY: ReadingHistoryItem[] = [
  {
    id: "h1",
    bookId: "arch-stillness",
    bookTitle: "The Architecture of Stillness",
    author: "Julian P. Barnes",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFtc-HMjna47IIyd0i2DEBmtOHqXTmXMYEfbHQ2fqtrVqYGWGJZzMc0uyoBnNivCaE8UtytrZlCMmdvTOUIOpB08oqEDFB8Y43hmoX04OBSAXkkADz4gOw2ZrvvVfpCcElB3Q59eCGhiHstt1QY3ovt7LU2G407l6nACCnhXA9Tkq24KCMGIotdq4zTjRfUuItVttSADBnUfBzK2562AHXIzd9AtVQAE6lhSb2y7YxjtuFJJqAwPV_",
    lastReadDate: "Today at 9:15 AM",
    progressPercent: 68,
    timeSpentMins: 45
  },
  {
    id: "h2",
    bookId: "arch-silence",
    bookTitle: "The Architecture of Silence",
    author: "Eleanor Vance",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8dfvAJrOkmdTPKAR6kD1sJ5MirhbwlZGGrLQr2OV4155BaYeYiskdFykZS_8MJ4-E4JC13DMAViYrZ3lhwAMvKax7vUviZCIES39IOkSJC2woJuh0p6CQpAlUAKx7NK7hqihF2Eo5_yH_mYiiKr4N0sLAwcpPJaUdLnsqlT8CHtycg1pil4FrtAzunZxR9DWru8VH9fVO6S3-zFZSvtckx1WIk4sPRVRxi8G4MSQAv2vCrPUb0_1F",
    lastReadDate: "Yesterday at 10:30 PM",
    progressPercent: 32,
    timeSpentMins: 38
  },
  {
    id: "h3",
    bookId: "minimalist-theory",
    bookTitle: "Minimalist Theory",
    author: "Dr. Sarah Jenkins",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2OFx_jENzVi3YS1fzeeBclynt9B9K0UabrzDwKs1Q64-rzECjZgReC3zndEdUd9kFqxCJmgg12v-CzWVDqe5KYlkHVmCSDGpYsxWvoSI_lexDjOKvv4Gxhg1pguqAD0yrD7PJ7TJ9oYZs2UKXyz4ei8AJSG9cEdsKVd0wo0j47ua1RJT3wtu6vvJT6oo9yciSmZP4Xkk46tZOAX4aDp_zmdtQ_C0i5gDagL7kUgVlq9jAMy2kcD02",
    lastReadDate: "3 days ago",
    progressPercent: 89,
    timeSpentMins: 120
  }
];
