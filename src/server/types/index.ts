export interface Authors {
    id: number;
    name: string;
    username: string;
    email: string;
    _created: Date | string;
    _updated: Date | string;
};

export interface Blogs {
    id: number;
    title: string;
    content: string;
    authorid: number;
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