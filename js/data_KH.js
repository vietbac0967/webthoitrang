let kh1 = {
    makh: 1,
    ho: "Nguyễn",
    ten: "Long",
    email: "longnguyen@gmail.com",
    dienThoai: 0912345678,
    ngaySinh: "09/12/2000",
    sex: "Nam",
    diaChi: "TPHCM",
    pass: "123@321",
};

let kh2 = {
    makh: 2,
    ho: "Nguyễn Thị",
    ten: "Lương",
    email: "luongnguyen@gmail.com",
    dienThoai: 0987654321,
    ngaySinh: "09/2/2001",
    sex: "Nữ",
    diaChi: "HaNoi",
    pass: "987?789",
};

let kh3 = {
    makh: 3,
    ho: "Lê Thị",
    ten: "Nhàn",
    email: "lenhan@gmail.com",
    dienThoai: 0901234567,
    ngaySinh: "15/11/2001",
    sex: "Nữ",
    diaChi: "DongNai",
    pass: "123abc@",
};

let kh4 = {
    makh: 4,
    ho: "Trần",
    ten: "Dần",
    email: "dantran@gmail.com",
    dienThoai: 0902345678,
    ngaySinh: "1/11/1999",
    sex: "Nam",
    diaChi: "DaNang",
    pass: "123Abc!",
};

let kh5 = {
    makh: 5,
    ho: "Nguyễn",
    ten: "Hồng Trần",
    email: "hongtran@gmail.com",
    dienThoai: 0908765432,
    ngaySinh: "31/12/1999",
    sex: "Nữ",
    diaChi: "CaMau",
    pass: "123ABc!",
};

let dskh = [kh1, kh2, kh3, kh4, kh5]

localStorage.setItem("dskh", JSON.stringify(dskh))
