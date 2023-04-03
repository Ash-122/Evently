export class Event {
	_id: string;
	name: string;
	duration: number;
	duration_unit: string;
	start_time: string;
	end_time: string;
	description: string;
	participants: Member[];
	location: Location;
	host: Member;
}

export class Location {
	type: string;
	sub_type: string;
	details: string;
}

export class Member {
	name: string;
	email: string;
}