import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const SocialInfluencerService = () => {
  const platforms = [
  { id: 'plat_instagram', name: 'Instagram', icon: 'CameraIcon' },
  { id: 'plat_tiktok', name: 'TikTok', icon: 'VideoCameraIcon' },
  { id: 'plat_linkedin', name: 'LinkedIn', icon: 'BriefcaseIcon' },
  { id: 'plat_twitter', name: 'Twitter', icon: 'ChatBubbleLeftIcon' },
  { id: 'plat_youtube', name: 'YouTube', icon: 'PlayIcon' }];


  const contentExamples = [
  {
    id: 'content_1',
    type: 'Instagram Post',
    engagement: '12.5K likes',
    imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1a92d0441-1769699100108.png",
    alt: 'Instagram post showing product photography with lifestyle setting'
  },
  {
    id: 'content_2',
    type: 'TikTok Video',
    engagement: '250K views',
    imgSrc: "/assets/images/magic.jpeg",
    alt: 'TikTok video thumbnail with trending hashtag overlay'
  },
  {
    id: 'content_3',
    type: 'LinkedIn Article',
    engagement: '3.2K shares',
    imgSrc: "/assets/images/canvas.jpeg",
    alt: 'LinkedIn article header with business insights graph'
  },
  {
    id: 'content_4',
    type: 'Twitter Thread',
    engagement: '8.7K retweets',
    imgSrc: "/assets/images/club.jpeg",
    alt: 'Twitter thread card with key statistics highlighted'
  }];


  return (
    <section id="social-media" className="py-32 px-6 bg-card/30 reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4 text-foreground">
            Social Media & Influencer Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage 5+ platforms, 20 posts/month, 3x engagement growth average. Connect with 500+ micro-influencers for authentic brand partnerships.
          </p>
        </div>

        {/* Platforms */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 text-center">
            Platforms We Manage
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) =>
            <div key={platform.id} className="flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:scale-110 transition-transform cursor-pointer">
                <Icon name={platform.icon as any} size={20} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{platform.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contentExamples.map((content) =>
          <div key={content.id} className="group relative aspect-square rounded-2xl overflow-hidden glass-card">
              <AppImage
              src={content.imgSrc}
              alt={content.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm mb-1">{content.type}</p>
                <p className="text-white/80 text-xs">{content.engagement}</p>
              </div>
            </div>
          )}
        </div>

        {/* Services Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media Management */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Social Media Management</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>20 posts/month across 5+ platforms</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Stories, reels, and graphics</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Community management & responses</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Monthly analytics reports</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Price : </p>
              <p className="text-3xl font-bold text-foreground mb-4">Get Personalised<span className="text-base text-muted-foreground"></span></p>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          </div>

          {/* Influencer Marketing */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <Icon name="UserGroupIcon" size={24} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Influencer Marketing</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>500+ vetted micro-influencers (10K-100K followers)</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Campaign brief creation</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Outreach & negotiation</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>ROI tracking & reporting</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Price</p>
              <p className="text-3xl font-bold text-foreground mb-4">Varies on your needs<span className="text-base text-muted-foreground"></span></p>
              <button className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
                Launch Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialInfluencerService;