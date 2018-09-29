package com.Units;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * INI配置信息的轉換工具
 */
public class ReadIniInfo {

    /**
     * 將INI配置信息轉為Map存儲
     * @param ini
     * @return
     */
    public static Map<String,List<String>> getini(String ini){
        Map<String, List<String>> map = new HashMap<String, List<String>>();
        String currentSection = null;

        String[] strings = ini.split("\r\n");
        for (String str : strings) {
            str = str.trim();
            if (str.matches("^\\#.*$")) {
                return null;
            } else if (str.matches("^\\[\\S+\\]$")) {
                String section = str.replaceFirst("^\\[(\\S+)\\]$", "$1");
                if (!map.containsKey(section)) {
                    currentSection = section;
                    List<String> list = new ArrayList<String>();
                    map.put(section, list);
                }
            } else if (str.matches("^\\S+=.*$")) {
                int i = str.indexOf("=");
                String value = str.substring(i + 1).trim();
                if (!value.equals("")) {
                    List<String> values = map.get(currentSection);
                    String[] temps = value.split("//");
                    for (String temp : temps) {
                        values.add(temp);
                    }
                    map.put(currentSection, values);
                }else{
                    map.put(currentSection,null);
                }

            }
        }
        return map;
    }
}
