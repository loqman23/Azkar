export const CONFIG = {
  MESSAGE_INTERVAL: 1000,
  
  THEME: {
    gradients: [
      {
        colors: ['#1e3c72', '#2a5298'],
        type: 'linear'
      },
      {
        colors: ['#000428', '#004e92'],
        type: 'linear'
      },
      {
        colors: ['#0f0c29', '#302b63', '#24243e'],
        type: 'linear'
      },
      {
        colors: ['#23074d', '#cc5333'],
        type: 'radial'
      },
      {
        colors: ['#0f2027', '#203a43', '#2c5364'],
        type: 'linear'
      }
    ],
    fonts: {
      primary: 'Amiri',
      secondary: 'Quest'
    },
    patterns: {
      opacity: 0.2,
      size: 40,
      lineWidth: 2
    }
  },
  
  SETTINGS: {
    maxServicesPerUser: 1,
    minInterval: 5, // الحد الأدنى للفاصل الزمني (بالدقائق)
    maxInterval: 120, // الحد الأقصى للفاصل الزمني (بالدقائق)
    imageQuality: 0.95,
    maxRetries: 3, // عدد محاولات إعادة الإرسال عند الفشل
    retryDelay: 5000, // التأخير بين المحاولات (بالميلي ثانية)
  },
  
  // إعدادات التصميم المتقدمة
  ADVANCED_DESIGN: {
    shadows: {
      text: {
        color: 'rgba(0, 0, 0, 0.5)',
        blur: 15,
        offsetX: 2,
        offsetY: 2
      },
      pattern: {
        color: 'rgba(0, 0, 0, 0.3)',
        blur: 10
      }
    },
    borders: {
      width: 3,
      style: 'double',
      color: 'rgba(255, 255, 255, 0.2)'
    },
    overlay: {
      color: 'rgba(0, 0, 0, 0.4)',
      gradient: {
        start: 'rgba(0, 0, 0, 0.6)',
        end: 'rgba(0, 0, 0, 0.2)'
      }
    }
  }
};