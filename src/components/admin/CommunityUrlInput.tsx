import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, MessageCircle } from 'lucide-react';
import { COMMUNITY_PLATFORMS, detectPlatform, getPlatform } from '@/utils/communityPlatforms';
import { AdminInput } from './AdminFormElements';

function DiscordSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

function TelegramSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
    );
}

function RedditSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-.004.003A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.92 13.89c.04.248.06.5.06.756 0 3.269-3.79 5.914-8.48 5.914-4.69 0-8.48-2.645-8.48-5.914 0-.276.02-.547.07-.81a1.68 1.68 0 0 1-.67-1.336c0-.93.76-1.69 1.69-1.69.45 0 .86.18 1.16.47 1.44-1.01 3.39-1.62 5.56-1.68l1.2-5.47a.38.38 0 0 1 .45-.29l3.87.85c.27-.54.82-.92 1.46-.92.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63-.87 0-1.58-.69-1.63-1.54l-3.47-.76-1.06 4.87c2.09.09 3.96.7 5.37 1.68.3-.3.72-.48 1.17-.48.93 0 1.69.76 1.69 1.69 0 .55-.27 1.04-.69 1.35zM8.5 12.8c-.93 0-1.69.76-1.69 1.69s.76 1.69 1.69 1.69 1.69-.76 1.69-1.69-.76-1.69-1.69-1.69zm7 0c-.93 0-1.69.76-1.69 1.69s.76 1.69 1.69 1.69 1.69-.76 1.69-1.69-.76-1.69-1.69-1.69zm-6.68 5.22a.38.38 0 0 1 .53-.04c.7.57 1.72.88 2.87.88 1.15 0 2.18-.3 2.88-.88a.38.38 0 1 1 .49.57c-.84.68-2.04 1.06-3.37 1.06s-2.53-.38-3.36-1.06a.38.38 0 0 1-.04-.53z" />
        </svg>
    );
}

function TwitterSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function SlackSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z" />
        </svg>
    );
}

function WhatsAppSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
    );
}

function FacebookSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function MatrixSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.27.245.485.55.645.92.16.363.24.813.24 1.344v5.564h-2.17v-4.633c0-.272-.017-.55-.05-.82a1.69 1.69 0 0 0-.218-.707.98.98 0 0 0-.478-.467c-.2-.112-.476-.167-.826-.167-.346 0-.623.058-.831.167a1.24 1.24 0 0 0-.488.467 1.87 1.87 0 0 0-.218.707c-.033.270-.05.548-.05.82v4.633h-2.17V12.64c0-.253-.014-.507-.042-.762a1.84 1.84 0 0 0-.183-.686.93.93 0 0 0-.442-.488c-.19-.12-.459-.18-.808-.18-.09 0-.232.02-.426.06a1.4 1.4 0 0 0-.564.248 1.56 1.56 0 0 0-.478.54c-.13.229-.197.537-.197.925v4.942h-2.17V7.81h2.073zm15.042 15.64V.55H21.72V0H24v24h-2.28v-.55z" />
        </svg>
    );
}

function MastodonSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.547c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054 19.648 19.648 0 0 0 4.581.536c.342 0 .684 0 1.025-.01 1.74-.05 3.576-.186 5.263-.58.042-.01.083-.023.127-.033 2.393-.494 4.67-2.04 4.902-5.99.009-.113.037-1.166.037-1.282 0-.39.129-2.78-.053-4.249zM19.903 12.2h-2.526V7.88c0-1.185-.477-1.787-1.431-1.787-1.055 0-1.584.714-1.584 2.127V10.6h-2.51V8.22c0-1.413-.529-2.127-1.584-2.127-.954 0-1.431.602-1.431 1.787v4.32H6.311V7.628c0-1.186.303-2.128.909-2.825.625-.696 1.445-1.053 2.461-1.053 1.177 0 2.067.452 2.654 1.356l.572.958.572-.958c.587-.904 1.477-1.356 2.654-1.356 1.016 0 1.836.357 2.461 1.053.606.697.909 1.639.909 2.825z" />
        </svg>
    );
}

function BlueskySvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.513 6.182 3.265-3.597.5-6.77 1.716-2.636 6.007C8.857 24.262 10.323 18.2 12 18.2c1.677 0 3.143 6.062 7.83 1.32 4.134-4.291.961-5.507-2.636-6.008 2.583.248 5.397-.638 6.182-3.265C23.623 9.418 24 4.458 24 3.768c0-.69-.139-1.86-.902-2.203-.66-.299-1.664-.621-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
        </svg>
    );
}

function YouTubeSvg({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

// Map platform ID to its icon component
export function PlatformIcon({ platformId, className }: { platformId: string; className?: string }) {
    switch (platformId) {
        case 'discord': return <DiscordSvg className={className} />;
        case 'telegram': return <TelegramSvg className={className} />;
        case 'reddit': return <RedditSvg className={className} />;
        case 'twitter': return <TwitterSvg className={className} />;
        case 'slack': return <SlackSvg className={className} />;
        case 'whatsapp': return <WhatsAppSvg className={className} />;
        case 'facebook': return <FacebookSvg className={className} />;
        case 'matrix': return <MatrixSvg className={className} />;
        case 'mastodon': return <MastodonSvg className={className} />;
        case 'bluesky': return <BlueskySvg className={className} />;
        case 'youtube': return <YouTubeSvg className={className} />;
        case 'github': return <MessageCircle className={className} />;
        default: return <Globe className={className} />;
    }
}

interface CommunityUrlInputProps {
    value: string;
    onChange: (url: string) => void;
    placeholder?: string;
    className?: string;
}

export function CommunityUrlInput({ value, onChange, placeholder, className }: CommunityUrlInputProps) {
    const [detectedPlatform, setDetectedPlatform] = useState(() => detectPlatform(value));
    const [manualPlatform, setManualPlatform] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!manualPlatform) {
            setDetectedPlatform(detectPlatform(value));
        }
    }, [value, manualPlatform]);

    useEffect(() => {
        if (manualPlatform && value) {
            const autoDetected = detectPlatform(value);
            if (autoDetected !== 'other' && autoDetected !== manualPlatform) {
                setManualPlatform(null);
                setDetectedPlatform(autoDetected);
            }
        }
    }, [value]);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const activePlatformId = manualPlatform || detectedPlatform;
    const activePlatform = getPlatform(activePlatformId);

    function selectPlatform(id: string) {
        setManualPlatform(id);
        setDetectedPlatform(id);
        setDropdownOpen(false);
    }

    return (
        <div ref={containerRef} className={`relative flex gap-0 ${className || ''}`}>
            {/* Platform selector button */}
            <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 rounded-l-lg border border-r-0 border-[var(--divider)] bg-[var(--bg-elev-1)] text-[var(--text-secondary)] hover:bg-[var(--chip-bg)] transition-colors shrink-0"
                title={activePlatform.label}
            >
                <PlatformIcon platformId={activePlatformId} className="w-4 h-4" />
                <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {/* URL input */}
            <AdminInput
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || `https://...`}
                className="!rounded-l-none flex-1"
            />

            {/* Dropdown menu */}
            {dropdownOpen && (
                <div className="absolute left-0 top-full mt-1 z-50 w-56 max-h-72 overflow-y-auto rounded-xl border border-[var(--divider)] bg-[var(--bg-surface)] shadow-xl py-1">
                    {COMMUNITY_PLATFORMS.map((p) => (
                        <button
                            key={p.id}
                            type="button"
                            onClick={() => selectPlatform(p.id)}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--chip-bg)] ${activePlatformId === p.id ? 'bg-[var(--chip-bg)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                                }`}
                        >
                            <span
                                className="flex w-6 h-6 items-center justify-center rounded-md shrink-0"
                                style={{ backgroundColor: `${p.color}18` }}
                            >
                                <PlatformIcon platformId={p.id} className="w-3.5 h-3.5" />
                            </span>
                            <span className="font-medium">{p.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
