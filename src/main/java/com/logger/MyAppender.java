package com.logger;

import org.apache.log4j.DailyRollingFileAppender;
import org.apache.log4j.Priority;

/**
 * 该类主要功能是日志输出到日志文件时，只输出指定级别的日志信息
 */
public class MyAppender extends DailyRollingFileAppender {

    public boolean isAsSevereAsThreshold(Priority priority){
        //只判断是否相等，而不判断优先级
        return this.getThreshold().equals(priority);
    }
}
