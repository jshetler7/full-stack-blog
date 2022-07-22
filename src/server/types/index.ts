export interface BaseAuthor {
    id: string;
    password: string;
    email: string;
    name: string;
    username: string;
};

export interface NewAuthor extends BaseAuthor {}
export interface Author extends BaseAuthor{
    roles: string[];
}

export interface Payload {
    id: string;
    roles: string[];
}

export interface Blogs {
    id: number;
    title: string;
    content: string;
    authorid: string;
    _created: Date | string;
    _updated: Date | string;
};

export interface CreatableUpdatableBlog {
    content: string;
    authorid: string;
}

export interface Hashtags {
    id: number;
    tagname: string;
    _created: Date | string;
    _updated: Date | string;
}

export interface BlogTags {
    blogid: number;
    tagid: number
}

export interface BlogsWithAuthor extends Blogs {
    name: string;
    email: string;
}

export interface BlogWithEverything extends Blogs {
    name: string;
    tagid: number;
    tagname: string;
}