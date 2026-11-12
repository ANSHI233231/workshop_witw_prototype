import type * as React from 'react';

/** Lucide icons the app uses (stroke 2). */
export type IconName = 'search' | 'pencil' | 'key-round' | 'bell' | 'plus' | 'file-down' | 'rotate-ccw' | 'x' | 'menu' | 'chevron-down' | 'chevron-right' | 'chevron-left' | 'layout-dashboard' | 'users' | 'settings' | 'shield-check' | 'lock' | 'log-out' | 'eye' | 'triangle-alert' | 'check' | 'check-check' | 'save' | 'arrow-left' | 'clock' | 'mail' | 'circle-check' | 'circle-alert';
/** Forces a visual state in previews; real hover and focus come from the browser. */
export type PreviewState = 'hover' | 'focus';
export type FieldWidth = 'xs' | 'sm' | 'md' | 'lg';

export interface IconProps { name: IconName; size?: 'sm' | 'md' | 'lg'; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps { variant?: 'primary' | 'secondary' | 'text' | 'danger'; size?: 'sm'; block?: boolean; icon?: IconName; href?: string; disabled?: boolean; type?: 'button' | 'submit'; state?: PreviewState; onClick?: () => void; children?: React.ReactNode }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface IconButtonProps { icon: IconName; label: string; tooltip?: string | false; danger?: boolean; on?: boolean; disabled?: boolean; state?: PreviewState; onClick?: () => void; children?: React.ReactNode }
export declare function IconButton(props: IconButtonProps): React.ReactElement;

export interface SearchInputProps { placeholder?: string; value?: string; label?: string; width?: FieldWidth; invalid?: boolean; disabled?: boolean; state?: PreviewState; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }
export declare function SearchInput(props: SearchInputProps): React.ReactElement;

export interface SelectProps { options: Array<string | { value: string; label: string }>; value?: string; label?: string; width?: FieldWidth; invalid?: boolean; disabled?: boolean; state?: PreviewState; onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void }
export declare function Select(props: SelectProps): React.ReactElement;

export interface FormFieldProps { label: string; required?: boolean; helper?: string; error?: string; placeholder?: string; value?: string; type?: string; as?: 'input' | 'select'; options?: string[]; aside?: React.ReactNode; id?: string; autoComplete?: string; disabled?: boolean; state?: PreviewState; children?: React.ReactNode }
export declare function FormField(props: FormFieldProps): React.ReactElement;

export interface ToggleProps { checked?: boolean; label: string; tooltip?: string; disabled?: boolean; state?: PreviewState; onChange?: (next: boolean) => void }
export declare function Toggle(props: ToggleProps): React.ReactElement;

export interface StatusBadgeProps { tone?: 'success' | 'warning' | 'info' | 'danger' | 'neutral'; children: React.ReactNode }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;

export interface TableColumn<R> { key: string; title: string; align?: 'center'; render?: (row: R) => React.ReactNode }
export interface TableProps<R = Record<string, unknown>> { title?: string; columns: TableColumn<R>[]; rows: R[]; total?: number; start?: number; page?: number; pages?: number; tabs?: React.ReactNode; filters?: React.ReactNode; renderActions?: (row: R) => React.ReactNode }
export declare function Table<R>(props: TableProps<R>): React.ReactElement;

export interface CardProps { title?: string; action?: React.ReactNode; text?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;

export interface KpiCardProps { label: string; icon?: IconName; value: React.ReactNode; meta?: string }
export declare function KpiCard(props: KpiCardProps): React.ReactElement;

export interface DialogProps { title: string; error?: React.ReactNode; icon?: IconName; size?: 'sm' | 'md'; open?: boolean; onClose?: () => void; footer?: React.ReactNode; children?: React.ReactNode }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface TabsProps { items: Array<string | { label: string; icon?: IconName; count?: number; disabled?: boolean; state?: PreviewState }>; active?: number; variant?: 'pill' | 'underline'; onChange?: (index: number) => void }
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface PageHeaderProps { breadcrumb?: string[]; title: string; description?: string; actions?: React.ReactNode }
export declare function PageHeader(props: PageHeaderProps): React.ReactElement;

export interface AppHeaderProps { appName?: string; logo?: React.ReactNode; role?: string; languages?: string[]; count?: number; userName?: string; bellOpen?: boolean; bellCurrent?: boolean; menuOpen?: boolean; onBell?: () => void; onMenu?: () => void }
export declare function AppHeader(props: AppHeaderProps): React.ReactElement;

export interface NotificationItemProps { children?: React.ReactNode; text?: string; time?: string; kind?: 'test' | 'jobs' | 'account'; unread?: boolean; initial?: string; href?: string }
export declare function NotificationItem(props: NotificationItemProps): React.ReactElement;

export interface NotificationPopoverProps { items: NotificationItemProps[]; allHref?: string }
export declare function NotificationPopover(props: NotificationPopoverProps): React.ReactElement;

export interface SideLink { label: string; href?: string; open?: boolean; children?: SideLink[] }
export type SidebarItem = { section: string } | { label: string; icon?: IconName; href?: string; open?: boolean; children?: SideLink[] };
export interface SidebarProps { items: SidebarItem[]; active?: string; label?: string }
export declare function Sidebar(props: SidebarProps): React.ReactElement;

export interface MobileMenuProps extends SidebarProps { appName?: string; userName?: string; count?: number; open?: boolean; onClose?: () => void }
export declare function MobileMenu(props: MobileMenuProps): React.ReactElement;

export interface FooterProps { text?: string; children?: React.ReactNode }
export declare function Footer(props: FooterProps): React.ReactElement;

export interface SignInProps { appName?: string; headline?: string; lede?: string; points?: string[]; title?: string; subtitle?: string; submitLabel?: string; forgotHref?: string; idError?: string }
export declare function SignIn(props: SignInProps): React.ReactElement;

export interface NotFoundProps { code?: string; title?: string; message?: string; actions?: React.ReactNode; backHref?: string; contactHref?: string }
export declare function NotFound(props: NotFoundProps): React.ReactElement;

export interface ToastProps { tone?: 'success' | 'error'; children: React.ReactNode; onClose?: () => void; autoClose?: boolean; duration?: number }
export declare function Toast(props: ToastProps): React.ReactElement;

export interface ToastItem { id?: string | number; tone?: 'success' | 'error'; message: React.ReactNode }
export interface ToastStackProps { toasts: ToastItem[]; placement?: 'desktop' | 'mobile'; onClose?: (id: string | number) => void }
export declare function ToastStack(props: ToastStackProps): React.ReactElement;

export interface DialogErrorProps { children: React.ReactNode }
export declare function DialogError(props: DialogErrorProps): React.ReactElement;

export interface SearchSelectOption { value: string | number; label: string; detail?: string; badge?: string }
export interface SearchSelectProps { options: SearchSelectOption[]; value?: string | number | null; onChange?: (value: string | number | null, option: SearchSelectOption | null) => void; placeholder?: string; searchPlaceholder?: string; clearLabel?: string; emptyText?: string; width?: FieldWidth; label?: string; id?: string; disabled?: boolean; invalid?: boolean; defaultOpen?: boolean; defaultQuery?: string; defaultActive?: number; focusOnOpen?: boolean }
export declare function SearchSelect(props: SearchSelectProps): React.ReactElement;

export interface ServerSelectItem { value: string | number; label: string; context?: string; detail?: string }
export interface ServerSelectProps { load: (query: string, offset: number, limit: number) => Promise<{ items: ServerSelectItem[]; hasMore: boolean }>; value?: ServerSelectItem | null; onChange?: (item: ServerSelectItem | null) => void; allLabel?: string; placeholder?: string; searchPlaceholder?: string; emptyText?: string; pageSize?: number; debounce?: number; width?: FieldWidth; label?: string; id?: string; disabled?: boolean; invalid?: boolean; defaultOpen?: boolean; defaultQuery?: string; defaultActive?: number; focusOnOpen?: boolean }
export declare function ServerSelect(props: ServerSelectProps): React.ReactElement;

/* ---- WITW website shell and Shared Safari (from the Shared Safari boards) ---- */
export interface SiteNavItem { label: string; icon?: string; href?: string; current?: boolean }
export interface SiteHeaderProps { logo: string; logoHref?: string; nav: SiteNavItem[]; user?: { name: string; initial?: string; logo?: string | null } | null; count?: number; signInHref?: string; onBell?: () => void; onAccount?: () => void }
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;

export interface SiteHeroProps { title: string; text?: string }
export declare function SiteHero(props: SiteHeroProps): React.ReactElement;

export type SiteLink = string | { label: string; href: string };
export interface SiteFooterProps { grass?: string; wordmark?: string; about?: string[]; policy?: SiteLink[]; links?: SiteLink[]; address?: string; email?: string; instagram?: string; developer?: string; copyright?: string }
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;

export interface SiteDialogProps { title: string; open?: boolean; steps?: number; step?: number; cancelLabel?: string; nextLabel?: string; onClose?: () => void; onCancel?: () => void; onNext?: () => void; children?: React.ReactNode }
export declare function SiteDialog(props: SiteDialogProps): React.ReactElement | null;

export interface Face { initials: string; name?: string }
export interface SafariCardProps { image?: string; month?: string; day?: number | string; safaris: number | string; seats: string; full?: boolean; title: string; href?: string; host: string; hostInitials: string; park: string; faces?: Face[]; more?: number; joined?: number; action?: 'join' | 'view' | 'leave' | 'full'; actionLabel?: string; onAction?: (action: string) => void; onOpen?: () => void }
export declare function SafariCard(props: SafariCardProps): React.ReactElement;

export interface RangeSpec { min: number; max: number; step?: number; from?: number; to?: number }
export interface SafariFiltersProps { parks?: string[]; months?: string[]; price?: RangeSpec; safaris?: RangeSpec; themes?: string[]; stays?: string[]; checked?: string[]; organise?: boolean; organiseLabel?: string; onOrganise?: () => void }
export declare function SafariFilters(props: SafariFiltersProps): React.ReactElement;

export interface FilterChipProps { label: string; onRemove?: () => void }
export declare function FilterChip(props: FilterChipProps): React.ReactElement;

export interface SafariFact { icon: 'trip' | 'seats' | 'safaris' | 'stay' | 'theme' | 'cost'; label: string; value: React.ReactNode }
export interface SafariSummaryProps { image?: string; title: string; badge?: React.ReactNode; dates: string; park: string; organiser: string; facts?: SafariFact[]; share?: boolean; shareLabel?: string; actions?: React.ReactNode }
export declare function SafariSummary(props: SafariSummaryProps): React.ReactElement;

export interface SitePanelProps { title: string; icon?: 'users' | 'calendar' | 'flag'; onTitle?: () => void; text?: string; faces?: Face[]; note?: string; children?: React.ReactNode }
export declare function SitePanel(props: SitePanelProps): React.ReactElement;

export interface CommentProps { initials: string; name: string; host?: boolean; time: string; text: string; canFlag?: boolean; onFlag?: () => void; replies?: CommentProps[] }
export declare function Comment(props: CommentProps): React.ReactElement;

export interface RadioOption { value: string; label: string; hint?: string }
export interface RadioListProps { name: string; label: string; options: Array<string | RadioOption>; value?: string; tight?: boolean; onChange?: (value: string) => void }
export declare function RadioList(props: RadioListProps): React.ReactElement;

export interface WebNotificationItemProps { initials: string; text?: string; children?: React.ReactNode; tag?: { tone: 'success' | 'info' | 'warning' | 'danger' | 'neutral'; label: string }; time: string; unread?: boolean; href?: string }
export declare function WebNotificationItem(props: WebNotificationItemProps): React.ReactElement;

export interface DetailListProps { items: Array<[string, React.ReactNode]>; columns?: 1 | 2; title?: string }
export declare function DetailList(props: DetailListProps): React.ReactElement;

export interface PinButtonProps { pinned?: boolean; onToggle?: () => void }
export declare function PinButton(props: PinButtonProps): React.ReactElement;

export interface JoinedLeftProps { joined: number; left: number; onJoined?: () => void; onLeft?: () => void }
export declare function JoinedLeft(props: JoinedLeftProps): React.ReactElement;

/* ---- Packages: website, Partner portal and Console (P1–P6, PP1–PP10, PC1–PC9, the Responsive prototype) ---- */
export type StatusTone = 'success' | 'warning' | 'info' | 'danger' | 'neutral';
export interface PackageTagStyle { text: string; bg?: string; color?: string }
export type PackageFactIcon = 'duration' | 'safaris' | 'vehicle' | 'stay' | 'theme' | 'start' | 'end' | 'meals' | 'pickup';
export interface BannerProps { tone?: 'info' | 'success' | 'warning' | 'danger'; children: React.ReactNode }
export declare function Banner(props: BannerProps): React.ReactElement;
export interface PackageCardProps { image?: string; best?: boolean; tag?: PackageTagStyle; title: string; park: string; duration: string; activity?: string; before?: string; price: string; total?: string; message?: string; actionLabel?: string; onOpen?: () => void; onView?: () => void }
export declare function PackageCard(props: PackageCardProps): React.ReactElement;
export interface PackageFiltersProps { parks: string[]; park?: string; stays?: string[]; features?: string[]; inclusions?: string[] }
export declare function PackageFilters(props: PackageFiltersProps): React.ReactElement;
export interface PackageSummaryProps { image?: string; title: string; parks: string; tag?: PackageTagStyle; best?: boolean; facts: Array<{ icon: PackageFactIcon; label: string; value: string }> }
export declare function PackageSummary(props: PackageSummaryProps): React.ReactElement;
export interface PriceBarProps { left?: React.ReactNode; before?: string; price: string; total?: string; message?: string; action?: React.ReactNode; actionLabel?: string; onAction?: () => void }
export declare function PriceBar(props: PriceBarProps): React.ReactElement;
export interface SectionTabsProps { tabs: Array<string | { label: string; count?: number }>; active?: number; onChange?: (index: number) => void }
export declare function SectionTabs(props: SectionTabsProps): React.ReactElement;
export interface PackageSectionProps { title: string; aside?: React.ReactNode; className?: string; children?: React.ReactNode }
export declare function PackageSection(props: PackageSectionProps): React.ReactElement;
export interface GallerySliderProps { title?: string; photos: Array<{ src: string; title?: string; caption?: string }>; index?: number; autoplay?: boolean }
export declare function GallerySlider(props: GallerySliderProps): React.ReactElement;
export interface ItineraryDayProps { n: number; label?: string; title: string; text?: string; details?: Array<[string, string]>; image?: string; children?: React.ReactNode }
export declare function ItineraryDay(props: ItineraryDayProps): React.ReactElement;
export interface InclusionListProps { items: Array<{ label: string; included: boolean }>; more?: string; exclusions?: string }
export declare function InclusionList(props: InclusionListProps): React.ReactElement;
export interface FaqItemProps { question: string; answer: string; open?: boolean }
export declare function FaqItem(props: FaqItemProps): React.ReactElement;
export interface DisclaimerProps { children?: React.ReactNode }
export declare function Disclaimer(props: DisclaimerProps): React.ReactElement;
export interface QuoteFormProps { viewer?: 'guest' | 'partner'; loginHref?: string; portalHref?: string; onSend?: () => void }
export declare function QuoteForm(props: QuoteFormProps): React.ReactElement;
export interface NotInUseProps { title?: string; text?: string; href?: string; actionLabel?: string }
export declare function NotInUse(props: NotInUseProps): React.ReactElement;
export interface ParkCardProps { image?: string; name: string; region: string; price?: string; onOpen?: () => void }
export declare function ParkCard(props: ParkCardProps): React.ReactElement;
export interface ParkMapProps { name: string; lat: string | number; lng: string | number }
export declare function ParkMap(props: ParkMapProps): React.ReactElement;
export interface FormPanelProps { title: string; footer?: React.ReactNode; children?: React.ReactNode }
export declare function FormPanel(props: FormPanelProps): React.ReactElement;
export interface StepsPanelProps { title?: string; steps: string[] }
export declare function StepsPanel(props: StepsPanelProps): React.ReactElement;
export interface ParkPickerProps { parks: string[]; value?: string[]; onChange?: (value: string[]) => void; chips?: boolean }
export declare function ParkPicker(props: ParkPickerProps): React.ReactElement;
export interface LogoFieldProps { id?: string; label?: string; image?: string; initials?: string; accept?: string; helper?: string }
export declare function LogoField(props: LogoFieldProps): React.ReactElement;
export interface PortalSignInProps { logo?: string; title?: string; text?: string; forgotHref?: string; partnerHref?: string; hint?: React.ReactNode }
export declare function PortalSignIn(props: PortalSignInProps): React.ReactElement;
export interface AccessGuardProps { icon?: string; title: string; text?: string; action?: React.ReactNode }
export declare function AccessGuard(props: AccessGuardProps): React.ReactElement;
export interface KpiTileProps { label: string; value: React.ReactNode; href?: string }
export declare function KpiTile(props: KpiTileProps): React.ReactElement;
export interface PackageListItemProps { image?: string; title: string; meta: string; price: string; href?: string; actionLabel?: string }
export declare function PackageListItem(props: PackageListItemProps): React.ReactElement;
export interface PackageCellProps { image?: string; title: string; sub?: string }
export declare function PackageCell(props: PackageCellProps): React.ReactElement;
export interface VersionCellProps { live: string; working?: { tone: StatusTone; label: string } }
export declare function VersionCell(props: VersionCellProps): React.ReactElement;
export interface EditorCardProps { tabs: string[]; active?: number; onChange?: (index: number) => void; disabledFrom?: number; readOnly?: boolean; footer?: React.ReactNode; children?: React.ReactNode | ((active: number) => React.ReactNode) }
export declare function EditorCard(props: EditorCardProps): React.ReactElement;
export interface SidePanelProps { title: string; children?: React.ReactNode }
export declare function SidePanel(props: SidePanelProps): React.ReactElement;
export interface VersionRowProps { version: string; text: string; status: { tone: StatusTone; label: string } }
export declare function VersionRow(props: VersionRowProps): React.ReactElement;
export interface DayEditorProps { n: number; title?: string; children?: React.ReactNode }
export declare function DayEditor(props: DayEditorProps): React.ReactElement;
export interface FaqEditRowProps { question: string; answer: string; onEdit?: () => void; onDelete?: () => void }
export declare function FaqEditRow(props: FaqEditRowProps): React.ReactElement;
export interface ImageFieldProps { id: string; label: string; image?: string; helper?: string; accept?: string; onRemove?: () => void }
export declare function ImageField(props: ImageFieldProps): React.ReactElement;
export interface TagColorsProps { text: string; bg: string; color: string }
export declare function TagColors(props: TagColorsProps): React.ReactElement;
export interface PhotoTileProps { image: string; title: string; caption?: string; thumbnail?: boolean; first?: boolean; last?: boolean }
export declare function PhotoTile(props: PhotoTileProps): React.ReactElement;
export interface GalleryCardProps { image?: string; title: string; meta: string; note?: string; status: { tone: StatusTone; label: string }; action?: 'view' | 'edit'; onOpen?: () => void }
export declare function GalleryCard(props: GalleryCardProps): React.ReactElement;
export interface HotColdProps { value?: 'hot' | 'cold'; onChange?: (value: 'hot' | 'cold') => void }
export declare function HotCold(props: HotColdProps): React.ReactElement;
export interface BusinessProfileProps { logo?: string; initials?: string; items: Array<[string, string]> }
export declare function BusinessProfile(props: BusinessProfileProps): React.ReactElement;

declare global { interface Window { Starter: { Icon: typeof Icon; Button: typeof Button; IconButton: typeof IconButton; SearchInput: typeof SearchInput; Select: typeof Select; FormField: typeof FormField; Toggle: typeof Toggle; StatusBadge: typeof StatusBadge; Table: typeof Table; Card: typeof Card; KpiCard: typeof KpiCard; Dialog: typeof Dialog; Tabs: typeof Tabs; PageHeader: typeof PageHeader; AppHeader: typeof AppHeader; NotificationItem: typeof NotificationItem; NotificationPopover: typeof NotificationPopover; Sidebar: typeof Sidebar; MobileMenu: typeof MobileMenu; Footer: typeof Footer; SignIn: typeof SignIn; NotFound: typeof NotFound; Toast: typeof Toast; ToastStack: typeof ToastStack; DialogError: typeof DialogError; SearchSelect: typeof SearchSelect; ServerSelect: typeof ServerSelect; SiteHeader: typeof SiteHeader; SiteHero: typeof SiteHero; SiteFooter: typeof SiteFooter; SiteDialog: typeof SiteDialog; SafariCard: typeof SafariCard; SafariFilters: typeof SafariFilters; FilterChip: typeof FilterChip; SafariSummary: typeof SafariSummary; SitePanel: typeof SitePanel; Comment: typeof Comment; RadioList: typeof RadioList; WebNotificationItem: typeof WebNotificationItem; DetailList: typeof DetailList; PinButton: typeof PinButton; JoinedLeft: typeof JoinedLeft; Banner: typeof Banner; PackageCard: typeof PackageCard; PackageFilters: typeof PackageFilters; PackageSummary: typeof PackageSummary; PriceBar: typeof PriceBar; SectionTabs: typeof SectionTabs; PackageSection: typeof PackageSection; GallerySlider: typeof GallerySlider; ItineraryDay: typeof ItineraryDay; InclusionList: typeof InclusionList; FaqItem: typeof FaqItem; Disclaimer: typeof Disclaimer; QuoteForm: typeof QuoteForm; NotInUse: typeof NotInUse; ParkCard: typeof ParkCard; ParkMap: typeof ParkMap; FormPanel: typeof FormPanel; StepsPanel: typeof StepsPanel; ParkPicker: typeof ParkPicker; LogoField: typeof LogoField; PortalSignIn: typeof PortalSignIn; AccessGuard: typeof AccessGuard; KpiTile: typeof KpiTile; PackageListItem: typeof PackageListItem; PackageCell: typeof PackageCell; VersionCell: typeof VersionCell; EditorCard: typeof EditorCard; SidePanel: typeof SidePanel; VersionRow: typeof VersionRow; DayEditor: typeof DayEditor; FaqEditRow: typeof FaqEditRow; ImageField: typeof ImageField; TagColors: typeof TagColors; PhotoTile: typeof PhotoTile; GalleryCard: typeof GalleryCard; HotCold: typeof HotCold; BusinessProfile: typeof BusinessProfile } } }
