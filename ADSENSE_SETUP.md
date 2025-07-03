# Google AdSense Integration Guide

This personality test website is now equipped with strategic Google AdSense ad placements to maximize revenue while maintaining excellent user experience.

## Ad Placement Strategy

### 1. Homepage (Gender Selection)
- **Banner Ad** below gender selection buttons
- **Purpose**: First touchpoint, high visibility
- **Ad Format**: Responsive banner (728x90 / 320x50)

### 2. Quiz Flow
- **Midpoint Ad**: Banner ad at quiz halfway point (optional)
- **Purpose**: Single non-disruptive placement during quiz
- **Ad Format**: Responsive banner

### 3. Loading Screen
- **Banner Ad** during result analysis (3-second loading)
- **Purpose**: Monetize waiting time
- **Ad Format**: Responsive banner

### 4. Results Page
- **Square Ad** after personality description
- **Bottom Banner** after trait analysis graph
- **Purpose**: High-value placement after quiz completion
- **Ad Formats**: Medium rectangle (300x250) + banner

## Setup Instructions

### 1. Get AdSense Account
1. Apply for Google AdSense at https://www.google.com/adsense/
2. Wait for approval (1-14 days typically)
3. Create ad units in your AdSense dashboard

### 2. Current Configuration
Your AdSense client ID is already configured: `ca-pub-9301049765534210`

To create specific ad units, go to your AdSense dashboard and replace the placeholder ad slot IDs in `client/src/components/ads/ad-config.ts`:

```typescript
export const AD_CONFIG = {
  CLIENT_ID: 'ca-pub-9301049765534210', // ✅ Already configured
  
  AD_SLOTS: {
    HOME_BANNER: 'YOUR_AD_SLOT_ID_1',        // Replace with actual slot ID
    RESULT_DESCRIPTION: 'YOUR_AD_SLOT_ID_2', // Replace with actual slot ID  
    RESULT_BOTTOM: 'YOUR_AD_SLOT_ID_3',      // Replace with actual slot ID
    LOADING_SCREEN: 'YOUR_AD_SLOT_ID_4',     // Replace with actual slot ID
  }
};
```

### 3. AdSense Script Integration
✅ **Already configured** - The AdSense script is properly included in `client/index.html`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9301049765534210" crossorigin="anonymous"></script>
```

### 4. Auto Ads
✅ **Enabled** - Auto ads are configured to automatically place ads on your site for additional revenue.

## Ad Unit Recommendations

### Homepage Banner
- **Size**: Responsive (728x90 desktop, 320x50 mobile)
- **Type**: Display ads
- **Placement**: Below gender selection

### Quiz Midpoint Banner  
- **Size**: Responsive banner
- **Type**: Display ads
- **Frequency**: Only at quiz midpoint (optional)

### Results Page
- **Square Ad**: 300x250 medium rectangle
- **Bottom Banner**: Responsive banner
- **Type**: Display ads

## Performance Optimization

### Ad Loading
- Ads load asynchronously to avoid blocking UI
- Error handling prevents ad failures from breaking the site
- Responsive design ensures proper display on all devices

### User Experience
- Strategic placement avoids interrupting quiz flow
- Ads complement the natural reading pattern
- Dark mode compatible styling

### Mobile Optimization
- Responsive ad units adapt to screen size
- Touch-friendly placement
- Optimized loading for mobile connections

## Revenue Optimization Tips

1. **Ad Placement Testing**: Use AdSense experiments to test different placements
2. **Ad Sizes**: Mix banner and square ads for better fill rates
3. **Content Relevance**: Personality/psychology content attracts high-value ads
4. **Page Speed**: Monitor Core Web Vitals to maintain good AdSense standing
5. **Traffic Quality**: Focus on organic traffic for better ad performance

## Monitoring & Analytics

### AdSense Reports
- Monitor CTR, CPC, and RPM in AdSense dashboard
- Track performance by ad unit and placement
- Analyze mobile vs desktop performance

### Integration with Google Analytics
- Link AdSense with Google Analytics for detailed insights
- Track user behavior and ad interaction
- Optimize based on user flow data

## Compliance & Policies

### AdSense Policies
- Ensure content complies with AdSense content policies
- Avoid encouraging clicks or artificial traffic
- Maintain clear distinction between content and ads

### Privacy
- Update privacy policy to include AdSense data collection
- Implement proper cookie consent if required by region
- Consider GDPR compliance for EU users

## Troubleshooting

### Common Issues
1. **Ads not showing**: Check ad slot IDs and client ID
2. **Blank ad spaces**: Verify AdSense account status and policy compliance
3. **Mobile display issues**: Test responsive ad units on various devices
4. **Loading errors**: Check browser console for JavaScript errors

### Testing
- Use AdSense preview tool for testing
- Test on various devices and browsers
- Monitor for ad blocking software impact

## File Structure

```
client/src/components/ads/
├── adsense-ad.tsx       # Core AdSense component
├── ad-config.ts         # Configuration and settings
└── ad-utils.tsx         # Placement-specific components
```

The system is designed for easy maintenance and optimization. Update the configuration file to adjust ad behavior without code changes.