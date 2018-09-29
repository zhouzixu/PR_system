package com.test;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

import org.apache.poi.POIXMLDocument;
import org.apache.poi.POIXMLTextExtractor;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.extractor.WordExtractor;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

public class ReadWordUtils {

    /**
     * 读取word文档
     * <请替换成功能描述> <br>
     * <请替换成详细描述>
     * @param fileName 带有完整路径的文件名
     * @author caizh
     * @since [1.0.0]
     * @version [1.0.0,2017年2月10日]
     */
    public static String readWord(String fileName){

        File file = new File(fileName);
        if(file.getName().endsWith(".doc")){
            return readWord_2003(file);
        }else if(file.getName().endsWith(".docx")){
            return readWord_2007(fileName);
        }else{
            System.out.println("该文件不是word文档，请重新选择！");
            return "";
        }
    }

    /**
     * 读取2003版本的word文档 .doc
     * <请替换成功能描述> <br>
     * <请替换成详细描述>
     * @param file 带有完整路径的文件名
     * @author caizh
     * @since [1.0.0]
     * @version [1.0.0,2017年2月10日]
     */
    @SuppressWarnings("resource")
    public static String readWord_2003(File file){
        String text = "";
        try{
            InputStream stream = new FileInputStream(file);
            HWPFDocument document = new HWPFDocument(stream);
            WordExtractor word = new WordExtractor(document);
            text = word.getText();
            //去掉word文档中的多个换行
            text = text.replaceAll("(\\r\\n){2,}", "\r\n");
            text = text.replaceAll("(\\n){2,}", "\n");
            System.out.println("读取Word文档成功！");
            stream.close();
            return text;
        }catch(Exception e){
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 读取2007版本的word文档 .docx
     * <请替换成功能描述> <br>
     * <请替换成详细描述>
     * @param fileName 带有完整路径的文件名
     * @author caizh
     * @since [1.0.0]
     * @version [1.0.0,2017年2月10日]
     */
    @SuppressWarnings("resource")
    public static String readWord_2007(String fileName){
        String text = "";
        try{
            OPCPackage oPCPackage =POIXMLDocument.openPackage(fileName);
            XWPFDocument xwpf = new XWPFDocument(oPCPackage);
            POIXMLTextExtractor ex = new XWPFWordExtractor(xwpf);
            text = ex.getText();
            //去掉word文档中的多个换行
            text = text.replaceAll("(\\r\\n){2,}", "\r\n");
            text = text.replaceAll("(\\n){2,}", "\n");
            System.out.println("读取Word文档成功！");
            return text;
        }catch(Exception e){
            e.printStackTrace();
        }
        return "";
    }

    public static String readword(InputStream in){
        String text = "";
        try{
            InputStream stream =in;
            HWPFDocument document = new HWPFDocument(stream);
            WordExtractor word = new WordExtractor(document);
            text = word.getText();
            //去掉word文档中的多个换行
            text = text.replaceAll("(\\r\\n){2,}", "\r\n");
            text = text.replaceAll("(\\n){2,}", "\n");
            System.out.println("读取Word文档成功！");
            stream.close();
            return text;
        }catch(Exception e){
            e.printStackTrace();
        }
        return "";
    }

    public static void main(String[] args){
        String text=ReadWordUtils.readWord("C:\\Users\\Administrator\\Desktop\\日记.docx");
        System.out.println(text);
    }
}