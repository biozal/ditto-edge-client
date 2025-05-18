export class AppRegistration {
    private appId: string;
    private token: string;
    private authUrl: string;
    private websocketUrl: string;
    private name: string;

    constructor(
        appId: string,
        token: string,
        authUrl: string,
        websocketUrl: string,
        name: string
    ) {
        this.appId = appId;
        this.token = token;
        this.authUrl = authUrl;
        this.websocketUrl = websocketUrl;
        this.name = name;
    }

    // Getters
    public getAppId(): string {
        return this.appId;
    }

    public getToken(): string {
        return this.token;
    }

    public getAuthUrl(): string {
        return this.authUrl;
    }

    public getWebsocketUrl(): string {
        return this.websocketUrl;
    }

    public getName(): string {
        return this.name;
    }

    // Setters
    public setAppId(appId: string): void {
        this.appId = appId;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public setAuthUrl(authUrl: string): void {
        this.authUrl = authUrl;
    }

    public setWebsocketUrl(websocketUrl: string): void {
        this.websocketUrl = websocketUrl;
    }

    public setName(name: string): void {
        this.name = name;
    }
} 