package com.app.candm.mybatis.handler;

import com.app.candm.common.enumeration.Provider;
import com.app.candm.common.enumeration.Status;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(Provider.class)
public class ProviderHandler implements TypeHandler<Provider> {

    @Override
    public void setParameter(PreparedStatement ps, int i, Provider parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public Provider getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "candm":
                return Provider.CANDM;
            case "kakao":
                return Provider.KAKAO;
        }
        return null;
    }

    @Override
    public Provider getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "candm":
                return Provider.CANDM;
            case "kakao":
                return Provider.KAKAO;
        }
        return null;
    }

    @Override
    public Provider getResult(CallableStatement cs, int columnIndex) throws SQLException {
        switch (cs.getString(columnIndex)) {
            case "candm":
                return Provider.CANDM;
            case "kakao":
                return Provider.KAKAO;
        }
        return null;
    }
}
