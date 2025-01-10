package com.aitool.SpringAiTool;

import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.ai.openai.api.OpenAiImageApi;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final OpenAiImageModel openAiImageModel;

    public ImageService(OpenAiImageModel openAiImageModel) {
        this.openAiImageModel = openAiImageModel;
    }

    public ImageResponse generateImage(String prompt,String quality,String n,String width,String height) {
//        ImageResponse imageResponse = openAiImageModel.call(
//                new ImagePrompt(prompt));

        ImageResponse imageResponse = openAiImageModel.call(
                new ImagePrompt(prompt,
                        OpenAiImageOptions.builder()
                                .withModel("dall-e-2")
                                .withQuality(quality)
                                .withN(Integer.valueOf(n))
                                .withHeight(Integer.valueOf(width))
                                .withWidth(Integer.valueOf(height)).build())
        );

        return imageResponse;
    }
}
