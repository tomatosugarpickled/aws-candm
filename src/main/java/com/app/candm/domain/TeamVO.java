package com.app.candm.domain;


import com.app.candm.audit.Period;
import com.app.candm.common.enumeration.Status;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@EqualsAndHashCode(of="id")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
public class TeamVO extends Period {
    private Long id;
    private String teamTitle;
    private String teamUrl;
    private String teamContactEmail;
    private Status teamStatus;
    private String teamIntro;
    private Long memberId; //    FK : member 테이블
}




