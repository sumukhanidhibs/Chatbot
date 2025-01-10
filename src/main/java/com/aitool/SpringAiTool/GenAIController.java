package com.aitool.SpringAiTool;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class GenAIController {

    private final ChatService chatService;
    private final ImageService imageService;

    public GenAIController(ChatService chatService, ImageService imageService) {
        this.chatService = chatService;
        this.imageService = imageService;
    }


    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt){
        return chatService.getResponse(prompt);
    }

    @GetMapping("ask-ai-options")
    public String getResponseOption(@RequestParam String prompt){
        return chatService.getResponseOption(prompt);
    }

//    @GetMapping("generate-image")
//    public void generateImage(HttpServletResponse response, @RequestParam String prompt) throws IOException {
//        ImageResponse imageResponse =  imageService.generateImage(prompt);
//        String imageurl = imageResponse.getResult().getOutput().getUrl();
//        try {
//            response.sendRedirect(imageurl);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//    }

    @GetMapping("generate-image")
    public  List<String> generateImage(HttpServletResponse response, @RequestParam String prompt,
                                       @RequestParam(defaultValue = "hd") String quality,
                                       @RequestParam(defaultValue = "1") int n,
                                       @RequestParam(defaultValue = "1024") int width,
                                       @RequestParam(defaultValue = "1024") int height) throws IOException {
        ImageResponse imageResponse =  imageService.generateImage(prompt,quality,n,width,height);

        List<String> imageUrls =imageResponse.getResults().stream()
                .map(result->result.getOutput().getUrl())
                .toList();

        return imageUrls;
    }
}
