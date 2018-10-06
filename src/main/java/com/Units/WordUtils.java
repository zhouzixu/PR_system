package com.Units;

import freemarker.template.Configuration;
import freemarker.template.Template;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

public class WordUtils {
    private Configuration configuration = null;

    @SuppressWarnings("deprecation")
    public WordUtils(){
        configuration = new Configuration();
        configuration.setDefaultEncoding("UTF-8");
    }

    public void createWord(Map<String,Object> map, HttpServletRequest request, HttpServletResponse response)throws IOException{
        Map<String,Object> dataMap = map;
        configuration.setClassForTemplateLoading(this.getClass(),"/worker");
        Template t =null;
        File file = null;
        InputStream fin = null;
        ServletOutputStream out = null;
        try {
            t = configuration.getTemplate("test.ftl");
        }catch (IOException e){
            e.printStackTrace();
        }
        try{
            file = createDoc(dataMap,t,request);
            fin = new FileInputStream(file);
            response.setCharacterEncoding("utf-8");
            response.setContentType("application/msword");
            String fileName = "test.doc";
            response.setHeader("Content-Disposition","attachment;filename=".concat(String.valueOf(URLEncoder.encode(fileName,"UTF-8"))));
            out = response.getOutputStream();
            byte[] buffer = new byte[1024];
            int bytesToRead = -1;
            while((bytesToRead = fin.read(buffer))!=-1){
                out.write(buffer,0,bytesToRead);
            }
        }finally {
            if (fin!=null){
                fin.close();
            }
            if (out!=null){
                out.close();
            }

        }
    }

    private static File createDoc(Map<?,?>dataMap,Template template,HttpServletRequest request){
        String path = request.getSession().getServletContext().getRealPath("test.doc");
        System.out.println(path);
        String name = path;
        File f = new File(name);
        Template t = template;
        Writer w = null;
        try{
            w = new OutputStreamWriter(new FileOutputStream(f),"utf-8");
            t.process(dataMap,w);
        }catch(Exception ex){
            ex.printStackTrace();
        }finally {
            try {
                w.close();
            }catch(IOException e){
                e.printStackTrace();
            }
        }
        return f;
    }
}
