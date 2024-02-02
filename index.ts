//https://support.atlassian.com/statuspage/docs/enable-webhook-notifications/

export enum ComponentName {
	GCP_GCE = "Google Cloud Platform Google Compute Engine",
	NetlifyContentDistributionNetwork = "Netlify Content Distribution Network",
	NetlifyOriginServers = "Netlify Origin Servers",
	SupabaseDashboard = "Supabase Dashboard",
	SupabaseFrontend = "Supabase Frontend",
	SupabaseFrontendApi = "Supabase Frontend API",
	SupabaseCloud = "Supabase Cloud",
	SupabaseWebsite = "Supabase Website",
	SupabaseAnalytics = "Supabase Analytics",
	EdgeFunctions = "Edge Functions",
	StorageCDN = "Storage CDN",
	Logflare = "Logflare",
	SupabaseAuth = "Supabase Auth",
	DIGITALOCEAN_SF01 = "DigitalOcean SF01",
	DIGITALOCEAN_SGP1 = "DigitalOcean SGP1",
	DIGITALOCEAN_LON1 = "DigitalOcean LON1",
	DIGITALOCEAN_FRA1 = "DigitalOcean FRA1",
	CLOUDFLARE_API = "Cloudflare Cloudflare API",
	CLOUDFLARE_DNS = "Cloudflare Cloudflare Authoritative DNS",
	CLOUDFLARE_CDN = "Cloudflare CDN/Cache",
	AWS_EC2_AP_SOUTHEAST_1 = "AWS ec2-ap-southeast-1",
	AWS_EC2_US_WEST_1 = "AWS ec2-us-west-1",
	AWS_EC2_EU_WEST_1 = "AWS ec2-eu-west-1",
	AWS_EC2_US_EAST_1 = "AWS ec2-us-east-1",
	AWS_EC2_EU_CENTRAL_1 = "AWS ec2-eu-central-1",
	AWS_EC2_CA_CENTRAL_1 = "AWS ec2-ca-central-1",
	AWS_EC2_AP_SOUTH_1 = "AWS ec2-ap-south-1",
	AWS_EC2_AP_NORTHEAST_1 = "AWS ec2-ap-northeast-1",
	AWS_EC2_AF_SOUTH_1 = "AWS ec2-af-south-1",
	AWS_EC2_SA_EAST_1 = "AWS ec2-sa-east-1",
	AWS_EC2_AP_SOUTHEAST_2 = "AWS ec2-ap-southeast-2",
	AWS_EC2_AP_NORTHEAST_2 = "AWS ec2-ap-northeast-2",
}

export enum Indicator {
	None = "none",
	Minor = "minor",
	Major = "major",
	Critical = "critical",
}

export enum BlendedStatus {
	AllSystemsOperational = "All Systems Operational",
	PartialSystemOutage = "Partial System Outage",
	MajorServiceOutage = "Major Service Outage",
	MinorServiceOutage = "Minor Service Outage",
	PartiallyDegradedService = "Partially Degraded Service",
}

export interface SupabaseStatus {
	page: Page;
	status: {
		description: BlendedStatus;
		indicator: Indicator;
	};
}

// Impact: None (black), Minor (yellow), Major (orange), or Critical (red)
export enum Impact {
	None = "None",
	Minor = "Minor",
	Major = "Major",
	Critical = "Critical",
}
//  Status: Scheduled, In Progress, Verifying, or Completed
export enum ScheduledMaintenenceStatus {
	Scheduled = "Scheduled",
	InProgress = "In Progress",
	Verifying = "Verifying",
	Completed = "Completed",
}

// Each component is listed along with its status - one of operational, degraded_performance, partial_outage, or major_outage.
export enum ComponentStatus {
	Operational = "operational",
	DegradedPerformance = "degraded_performance",
	PartialOutage = "partial_outage",
	MajorOutage = "major_outage",
}

interface Page {
	id: "q7pxfmcf2sbx";
	name: "Supabase";
	url: "https://status.supabase.com";
	updated_at: string;
	time_zone: "Etc/UTC";
}

interface Component {
	created_at: string;
	description: string | null;
	group: boolean;
	group_id: string | null;
	id: string;
	name: ComponentName;
	only_show_if_degraded: boolean;
	page_id: "q7pxfmcf2sbx";
	position: number;
	showcase: boolean;
	start_date: string | null;
	status: ComponentStatus;
	updated_at: string;
}

export interface SupabaseComponentStatus {
	page: Page;
	components: Component[];
}

interface IncidentUpdate {
	body: string;
	created_at: string;
	display_at: string;
	id: string;
	incident_id: string;
	status: string;
	updated_at: string;
}

export enum IncidentStatus {
	Investigating = "investigating",
	Identified = "identified",
	Monitoring = "monitoring",
	Resolved = "resolved",
	Postmortem = "postmortem",
}

interface Incident {
	created_at: string;
	id: string;
	impact: Impact;
	incident_updates: IncidentUpdate[];
	monitoring_at: string | null;
	name: string;
	page_id: "q7pxfmcf2sbx";
	resolved_at: string | null;
	shortlink: string;
	status: IncidentStatus;
	updated_at: string;
}

export interface SupabaseIncident {
	page: Page;
	incidents: Incident[];
}
