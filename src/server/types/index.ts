export interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    _created: Date | string;
};

export interface Chirps {
    id: number;
    userid: number;
    content: string;
    location: string;
    _created: Date | string;
};

export interface CreatableUpdatableChirp {
    content: string;
    userid: string;
}

export interface Mentions {
    userid: number;
    chirpid: number;
};

export interface chirpsWithUser extends Chirps {
    name: string;
}