export const AD_CONFIG = {
  CLIENT_ID: 'ca-pub-9301049765534210',
  
  AD_SLOTS: {
    HOME_BANNER: '1234567890',        // 홈페이지 배너 광고
    RESULT_DESCRIPTION: '2345678901', // 결과 페이지 설명 후 광고
    RESULT_BOTTOM: '3456789012',      // 결과 페이지 하단 광고
    LOADING_SCREEN: '4567890123',     // 로딩 화면 광고
  }
};

export type AdSlotType = keyof typeof AD_CONFIG.AD_SLOTS;