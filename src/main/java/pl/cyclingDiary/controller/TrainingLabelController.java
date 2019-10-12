package pl.cyclingDiary.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.cyclingDiary.entity.Training;
import pl.cyclingDiary.repository.TrainingRepository;

import java.util.List;

@Controller
@RequestMapping("/")
public class TrainingLabelController {

    @Autowired
    TrainingRepository trainingRepository;

    @GetMapping
    public String getTrenings(Model model){
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        List<Training> trainingList = trainingRepository.findAllByUserId(login);
        model.addAttribute("trainingList",trainingList);
        return "index";
    }

}
