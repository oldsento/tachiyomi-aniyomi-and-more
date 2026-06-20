export interface CommunityPlatform {
    id: string;
    label: string;
    color: string;
    pattern: RegExp;
}

export const COMMUNITY_PLATFORMS: CommunityPlatform[] = [
    { id: 'discord', label: 'Discord', color: '#5865F2', pattern: /discord\.(gg|com|io)/i },
    { id: 'telegram', label: 'Telegram', color: '#26A5E4', pattern: /t(elegram)?\.me\//i },
    { id: 'slack', label: 'Slack', color: '#4A154B', pattern: /slack\.(com|io)/i },
    { id: 'reddit', label: 'Reddit', color: '#FF4500', pattern: /reddit\.com/i },
    { id: 'twitter', label: 'X (Twitter)', color: '#000000', pattern: /(twitter\.com|x\.com)/i },
    { id: 'whatsapp', label: 'WhatsApp', color: '#25D366', pattern: /(whatsapp\.com|wa\.me)/i },
    { id: 'facebook', label: 'Facebook', color: '#1877F2', pattern: /(facebook\.com|fb\.(com|me|gg))/i },
    { id: 'matrix', label: 'Matrix', color: '#0DBD8B', pattern: /matrix\.(org|to)/i },
    { id: 'mastodon', label: 'Mastodon', color: '#6364FF', pattern: /mastodon\./i },
    { id: 'bluesky', label: 'Bluesky', color: '#0085FF', pattern: /bsky\.(app|social)/i },
    { id: 'github', label: 'GitHub Discussions', color: '#333333', pattern: /github\.com\/.*\/(discussions|issues)/i },
    { id: 'youtube', label: 'YouTube', color: '#FF0000', pattern: /(youtube\.com|youtu\.be)/i },
    { id: 'other', label: 'Other', color: '#6B7280', pattern: /.*/ },
];

/**
 * Auto-detect community platform from a URL string.
 * Returns the platform id, or 'other' if no match.
 */
export function detectPlatform(url: string): string {
    if (!url) return 'other';
    const trimmed = url.trim();
    for (const platform of COMMUNITY_PLATFORMS) {
        if (platform.id === 'other') continue;
        if (platform.pattern.test(trimmed)) return platform.id;
    }
    return 'other';
}

/**
 * Find a platform definition by id.
 */
export function getPlatform(id: string): CommunityPlatform {
    return COMMUNITY_PLATFORMS.find(p => p.id === id) || COMMUNITY_PLATFORMS[COMMUNITY_PLATFORMS.length - 1];
}
