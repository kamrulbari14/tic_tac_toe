package com.assignment.tictactoe.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class Response {
    @JsonInclude
    private Long timeStamp;
    @JsonInclude
    private int statusCode;
    @JsonInclude
    private String status;
    @JsonInclude
    private String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Object content;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private int numberOfElement;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long rowCount;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<ErrorResponseDto> errors;
}
