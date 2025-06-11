type Admin ={
    persmission: number[]
}

type AppUser = {
    userName: string;
}

type AppAdmin = Admin & AppUser;