package com.Units;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    /**
     * 時間戳轉為指定格式的時間類型
     *默認格式為年-月-日 時：分：秒
     * @param timeStamp
     * @return
     */
    public static String timeStampToDate(Date timeStamp) {
        if (timeStamp == null) {
            return "";
        }

//        if (format == null || format.isEmpty()) {
//            format = "yyyy-MM-dd";
//        }
        String format="yyyy-MM-dd";
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(timeStamp);
    }

    /**
     * 時間轉為時間戳
     * @param time

     * @return
     */
//    public static String dateToTimeStamp(String date,String format){
//        try{
//            SimpleDateFormat sdf = new SimpleDateFormat(format);
//            return String.valueOf(sdf.parse(date).getTime());
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return "";
//    }
//
//    public static String getTimeStamp(){
//        long time = System.currentTimeMillis();
//        String t = String.valueOf(time);
//        return t;
//    }
    public static Date StringToDate(String time) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.parse(time);
    }
}
