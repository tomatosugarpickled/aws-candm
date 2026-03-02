drop table tbl_member;
DELETE FROM tbl_member where id=6;
create table tbl_member
(
    id bigint unsigned auto_increment primary key,
    member_email varchar(255) unique not null,
    member_password varchar(255),
    member_name varchar(255) not null,
    member_phone_number varchar(255) unique not null,
    member_status enum ('active','inactive') default 'active',
    created_datetime datetime default current_timestamp(),
    updated_datetime datetime default current_timestamp()
);

select * from tbl_member;


insert into tbl_member (id, member_email, member_password, member_name, member_phone_number, member_status)
values ('2', '12451@gmail.com', '24414', '박하민', '010-21321-3123', 'inactive');
select *
from tbl_member join tbl_member_career
on tbl_member.id = tbl_member_career.member_id;

INSERT INTO tbl_member (member_email, member_password, member_name, member_phone_number, member_status)
VALUES
    ('hong_gd@naver.com', 'pwd1234!', '홍길동', '01012341234', 'active'),
    ('kim_chulsoo@gmail.com', 'chulsoo77', '김철수', '01023452345', 'active'),
    ('lee_younghee@daum.net', 'yh09087', '이영희', '01034563456', 'active'),
    ('park_miso@outlook.com', 'miso111', '박미소', '01045674567', 'active'),
    ('choi_gang@yahoo.com', 'gangpass', '최강', '01056785678', 'inactive'),
    ('jung_hye@naver.com', 'hye0000', '정혜', '01067896789', 'active'),
    ('kang_min@gmail.com', 'min999', '강민', '01078907890', 'active'),
    ('yoon_seo@daum.net', 'seo1234', '윤서', '01089018901', 'active'),
    ('lim_jae@naver.com', 'jae555', '임재', '01090129012', 'active'),
    ('han_sol@gmail.com', 'solstar', '한솔', '01001230123', 'active');