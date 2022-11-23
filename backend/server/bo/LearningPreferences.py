from .import NamedBusinessObject

class LearningPreferences (NamedBusinessObject):
    """
    Class LearningPreferences, which implements a LearningPreferences Profile with attributes for learning_type, time, days, frequency,
	group_size, place_of_learning, prior_knowledge, extroversion
    """

    def __init__(self, learning_type, time, days, frequency, group_size, place_of_learning, prior_knowledge, extroversion):
        self._learning_type = learning_type
        self._time = time
        self._days = days
        self._frequency = frequency
        self._group_size = group_size
        self._place_of_learning = place_of_learning
        self._prior_knowledge = prior_knowledge
        self._extroversion = extroversion

    def set_learning_type(self, learning_type: str):
        """
        Defines the learning type from a person.
        """
        self._learning_type = learning_type

    def get_learning_type(self) -> str:
        """
        Returns the learning type from a person.
        """
        return self._learning_type

    def set_time(self, time: int):
        """
        Defines the prefered time to learn from a person.
        """
        self._time = time

    def get_time(self) -> int:
        """
        Returns the prefered time to learn from a person.
        """
        return self._time

    def set_days(self, days: str):
        """
        Defines the prefered days to learn of a person.
        """
        self._days = days

    def get_days(self) -> str:
        """
        Returns the prefered days to learn of a person.
        """
        return self._days

    def set_frequency(self, frequency: str):
        """
        Defines the prefered frequency of learning from a person.
        """
        self._frequency = frequency

    def get_frequency(self) -> str:
        """
        Returns the prefered frequency of learning from a person.
        """
        return self._frequency

    def set_group_size(self, group_size: int):
        """
        Defines the group_size of a person.
        """
        self._group_size= group_size

    def get_group_size(self) -> int:
        """
        Returns the group_size of a person..
        """
        return self._group_size

    def set_place_of_learning(self, place_of_learning: str):
        """
        Defines the prefered larning place of a person.
        """
        self._place_of_learning = place_of_learning

    def get_place_of_learning(self) -> str:
        """
        Returns the prefered larning place of a person.
        """
        return self._place_of_learning

    def set_prior_knowledge(self, prior_knowledge: str):
        """
        Defines the prior knowledge a person.
        """
        self._prior_knowledge = prior_knowledge

    def get_prior_knowledge(self) -> str:
        """
        Returns the prior knowledge a person.
        """
        return self._prior_knowledge

    def set_extroversion(self, extroversion: str):
        """
        Defines the extroversion of a person.
        """
        self._extroversion = extroversion

    def get_extroversion(self) -> str:
        """
        Returns the extroversion of a person.
        """
        return self._extroversion

    def str(self):
        """Converting the object's attribute values a string"""
        return "LearningPreferences: {} ,{} ,{}, {}, {}, {}, {}, {}, {}, {}, {}".format(self.get_id(), self.get_creation_time(),
                                                                        self.get_name(), self.get_learning_type(),
                                                                        self.get_time(), self.get_days(),
                                                                        self.get_frequency(), self.get_group_size(),
                                                                        self.get_place_of_learning(), self.get_prior_knowledge(), self.get_extroversion())

    @staticmethod
    def from_dict(dictionary):
        """Converting a Python dict() to a LearningPreferences() object"""
        obj = LearningPreferences()
        obj.set_id(dictionary["id"])
        obj.set_creation_time(dictionary["creation_time"])
        obj.set.name(dictionary["name"])
        obj.set_learning_type(dictionary["learning_type"])
        obj.set_time(dictionary["time"])
        obj.set_days(dictionary["days"])
        obj.set_frequency(dictionary["frequency"])
        obj.set_group_size(dictionary["group_size"])
        obj.set_place_of_learning(dictionary["place_of_learning"])
        obj.set_prior_knowledge(dictionary["prior_knowledge"])
        obj.set_extroversion(dictionary["extroversion"])
        return obj