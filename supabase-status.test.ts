import { expect, test } from "bun:test";
import type {
	SupabaseComponentStatus,
	SupabaseIncident,
	SupabaseStatus,
} from "./index";
import {
	BlendedStatus,
	ComponentStatus,
	IncidentStatus,
	Indicator,
} from "./index";

test("Status API returns correct types", async () => {
	const response = await fetch(
		"https://status.supabase.com/api/v2/status.json"
	);

	const data: SupabaseStatus = await response.json();
	console.log(data);

	expect(typeof data.page).toBe("object");
	expect(typeof data.status).toBe("object");
	expect(typeof data.status.description).toBe("string");
	expect(typeof data.status.indicator).toBe("string");
	expect(typeof data.page.updated_at).toBe("string");

	expect(data.page.id).toBe("q7pxfmcf2sbx");

	expect(Object.values(Indicator)).toContain(data.status.indicator);
	expect(Object.values(BlendedStatus)).toContain(data.status.description);

	expect(data.page.name).toBe("Supabase");
	expect(data.page.url).toBe("https://status.supabase.com");
});

test("Components API returns correct types", async () => {
	const response = await fetch(
		"https://status.supabase.com/api/v2/components.json"
	);

	const data: SupabaseComponentStatus = await response.json();
	console.log(data);

	expect(typeof data.page).toBe("object");
	expect(Array.isArray(data.components)).toBe(true);

	data.components.forEach((component) => {
		expect(typeof component.name).toBe("string");
		expect(typeof component.status).toBe("string");
		expect(Object.values(ComponentStatus)).toContain(component.status);
		expect(typeof component.updated_at).toBe("string");
		expect(component.page_id).toBe("q7pxfmcf2sbx");
	});

	expect(data.page.name).toBe("Supabase");
	expect(data.page.url).toBe("https://status.supabase.com");
});

test("Incidents API returns correct types", async () => {
	const response = await fetch(
		"https://status.supabase.com/api/v2/incidents.json"
	);

	const data: SupabaseIncident = await response.json();
	console.log(data);

	expect(typeof data.page).toBe("object");
	expect(Array.isArray(data.incidents)).toBe(true);

	data.incidents.forEach((incident) => {
		expect(typeof incident.name).toBe("string");
		expect(Object.values(IncidentStatus)).toContain(incident.status);
		expect(typeof incident.updated_at).toBe("string");
		expect(incident.page_id).toBe("q7pxfmcf2sbx");

		incident.incident_updates.forEach((update) => {
			expect(typeof update.body).toBe("string");
			expect(Object.values(IncidentStatus)).toContain(update.status);
			expect(typeof update.updated_at).toBe("string");
		});
	});

	expect(data.page.name).toBe("Supabase");
	expect(data.page.url).toBe("https://status.supabase.com");
});
